"""Blender integration for metric, coverage-validated atlas layouts."""
import json
import math
import os
from collections import defaultdict
import numpy as np
from lightmap_atlas import VERSION, PADDING, PagePacker, project_chart, raster_triangle, coverage_support, snap_triangle


def chart_mask(points, triangles):
    points = points - np.floor(points.min(axis=0)) + PADDING + .5
    width, height = np.ceil(points.max(axis=0)).astype(int) + PADDING + 1
    size = int(max(width, height))
    mask = np.zeros((height, width), dtype=bool)
    overlap = False
    interiors = np.zeros_like(mask)
    for tri in triangles:
        p = points[tri]
        # Interior overlap excludes the shared diagonal/edge of valid faces.
        inner = p + (p.mean(axis=0)-p)*1e-6
        y, x = raster_triangle(inner, size)
        inside = (x < width)&(y < height)
        x,y=x[inside],y[inside]
        overlap |= bool(interiors[y,x].any())
        interiors[y,x]=True
        # Cycles may exclude centres exactly on an outer edge. Prove support
        # using strict interiors so a long taper cannot rely on those centres.
        if len(triangles)>1:
            edges=np.roll(p,-1,axis=0)-p
            altitude=abs(np.cross(p[1]-p[0],p[2]-p[0]))/max(np.linalg.norm(edges,axis=1).max(),1e-12)
            if altitude < .03:continue
            conservative=p+(p.mean(axis=0)-p)*(.03/altitude)
        else:
            conservative=inner
        y,x=raster_triangle(conservative,size)
        inside=(x<width)&(y<height)
        mask[y[inside],x[inside]]=True
    raw = mask.copy()
    for _ in range(PADDING):
        padded=np.pad(mask,1)
        mask=np.logical_or.reduce([padded[y:y+height,x:x+width] for y in range(3) for x in range(3)])
    bad=0
    for tri in triangles:
        p=points[tri]
        samples=[p.mean(axis=0)[None,:]]
        for a,b in zip(p,np.roll(p,-1,axis=0)):
            n=max(1,math.ceil(float(np.linalg.norm(b-a))*4))
            samples.append(a[None,:]+np.linspace(0,1,n+1)[:,None]*(b-a))
        probes=np.concatenate(samples)
        # Reserve a small filtering margin for atlas float32 rounding and
        # Blender's asymmetric sampling offset, including rotated charts.
        if len(triangles)>1:
            support=np.minimum.reduce([coverage_support(probes+(dx,dy),mask)
                for dx,dy in ((-.01,-.01),(-.01,.01),(.01,-.01),(.01,.01))])
            bad+=int(np.count_nonzero(support < .999))
        else:
            bad+=int(np.count_nonzero(coverage_support(probes,mask)<.99))
    return points, raw, mask, bad, overlap


def expand_lattice_triangle(uv):
    # Keep lattice centres safely inside even after float32 atlas placement.
    # At <=4096 pixels this exceeds float32 rounding normal to a 2px
    # triangle, while moving even its longest corner by less than 2px.
    return uv+(uv-uv.mean(axis=0))*.0005


def geometry_groups(mesh, coords):
    """Join geometric edges across split vertices, bounded by a 45° cone.

    Imported normal/UV0 seams are corner attributes, not lightmap seams. Using
    smart-project connectivity here would preserve its per-triangle islands.
    """
    edges={};adj=defaultdict(list);normals=[]
    for face in mesh.polygons:
        ids=list(face.vertices)
        p=coords[ids]
        n=np.cross(p[1]-p[0],p[2]-p[0]);length=np.linalg.norm(n)
        normals.append(n/length if length>1e-12 else n)
        keys=[tuple(round(float(v),7) for v in coords[i]) for i in ids]
        for a,b in zip(keys,keys[1:]+keys[:1]):
            edge=tuple(sorted((a,b)))
            if edge in edges:
                other=edges[edge];adj[face.index].append(other);adj[other].append(face.index)
            else:edges[edge]=face.index
    normals=np.asarray(normals);seen=set();groups=[]
    for seed in range(len(mesh.polygons)):
        if seed in seen:continue
        stack=[seed];seen.add(seed);group=[]
        while stack:
            i=stack.pop();group.append(i)
            for j in adj[i]:
                if j not in seen and normals[seed]@normals[j]>=math.cos(math.pi/4):
                    seen.add(j);stack.append(j)
        groups.append(sorted(group))
    return groups


def prepare_layout(objects,size,density,limit,out,log):
    import bpy
    records=[]
    report={'version':VERSION,'size':size,'texelsPerMeter':density,'maxAtlases':limit,
            'objects':[],'charts':0,'degenerateFaces':0,'repairs':0,'failures':[]}
    for oi,obj in enumerate(objects):
        mesh=obj.data
        mesh.calc_loop_triangles()
        # One source triangle per glTF face. Refuse unsupported topology rather
        # than silently changing it or dropping authored corner attributes.
        if any(len(f.vertices)!=3 for f in mesh.polygons):raise ValueError(f'{obj.name}: expected triangulated glTF')
        coords=np.array([obj.matrix_world @ v.co for v in mesh.vertices],dtype=float)
        row={'node':obj.name,'material':[m.name for m in mesh.materials if m], 'charts':0,'pages':[], 'repairs':0}
        source_attr=mesh.attributes.get('_TK_SOURCE') or mesh.attributes.get('_tk_source')
        row['worldArea']=0.0
        row['lightmapPixelArea']=0.0
        row['instances']={}
        row['sources']=sorted(set(int(v.value) for v in source_attr.data)) if source_attr else []
        row['attributes']=[a.name for a in mesh.attributes]
        report['objects'].append(row)
        pending=geometry_groups(mesh,coords)
        while pending:
            faces=pending.pop()
            loops=np.array([j for i in faces for j in mesh.polygons[i].loop_indices],dtype=np.int32)
            verts=np.array([mesh.loops[int(j)].vertex_index for j in loops])
            points=coords[verts]
            tri=np.arange(len(points)).reshape(-1,3)
            cross=np.cross(points[tri[:,1]]-points[tri[:,0]],points[tri[:,2]]-points[tri[:,0]])
            area=np.linalg.norm(cross,axis=1)*.5
            good=area>1e-12
            if not good.all():
                # Zero area faces have no lighting surface. Keep them on a
                # deterministic reserved texel; retain the actual geometry.
                for i in np.flatnonzero(~good):
                    for j in mesh.polygons[faces[int(i)]].loop_indices:mesh.uv_layers['lightmap'].data[j].uv=(.5/size,.5/size)
                report['degenerateFaces']+=int((~good).sum())
                faces=[f for f,g in zip(faces,good) if g]
                if faces:pending.append(faces)
                continue
            try:
                uv=project_chart(points,tri,density)
                if len(faces)==1:
                    uv=snap_triangle(points,uv,density)
                    uv=expand_lattice_triangle(uv)
                if np.ptp(uv,axis=0).max()+2*PADDING+2>size:raise ValueError('oversized chart')
                uv,raw,padded,bad,overlap=chart_mask(uv,tri)
                if bad or overlap:raise ValueError(f'coverage={bad}, overlap={overlap}')
            except ValueError as exc:
                if len(faces)>1:
                    mid=len(faces)//2
                    pending.extend([faces[:mid],faces[mid:]])
                    row['repairs']+=1;report['repairs']+=1
                    continue
                # A single taper can miss texels even with a 2px bounding box.
                # Grow uniformly BEFORE packing until its complete border has
                # support; never borrow another chart's padding.
                try:
                    uv=snap_triangle(points,project_chart(points,tri,density),density)
                    uv=expand_lattice_triangle(uv)
                    for attempt in range(8):
                        uv,raw,padded,bad,overlap=chart_mask(uv,tri)
                        if not bad and not overlap:break
                        uv=(uv-uv.min(axis=0))*2
                    if bad or overlap or np.ptp(uv,axis=0).max()+2*PADDING+2>size:raise ValueError(str(exc))
                except ValueError:
                    report['failures'].append({'node':obj.name,'face':faces[0],'reason':str(exc)})
                    continue
            pixel_area=np.abs((uv[tri[:,1],0]-uv[tri[:,0],0])*(uv[tri[:,2],1]-uv[tri[:,0],1])-(uv[tri[:,1],1]-uv[tri[:,0],1])*(uv[tri[:,2],0]-uv[tri[:,0],0]))*.5
            row['worldArea']+=float(area.sum())
            row['lightmapPixelArea']+=float(pixel_area.sum())
            if source_attr:
                for ti,face in enumerate(faces):
                    source=int(source_attr.data[mesh.polygons[face].vertices[0]].value)
                    instance=row['instances'].setdefault(str(source),{'worldArea':0.0,'lightmapPixelArea':0.0})
                    instance['worldArea']+=float(area[ti]);instance['lightmapPixelArea']+=float(pixel_area[ti])
            records.append({'obj':obj,'faces':faces,'loops':loops,'uv':uv,'row':row,'area':float(area.sum())})
            row['charts']+=1
        if oi%50==0:log(f'validated metric charts: {oi+1}/{len(objects)} objects, {len(records)} charts')
    if report['failures']:
        with open(os.path.join(out,'coverage.json'),'w') as f:json.dump(report,f)
        raise ValueError(f"UV coverage failed for {len(report['failures'])} faces; see coverage.json")
    packer=PagePacker(size,limit)
    # Keep adjacent cells together, then pack largest charts first within a
    # cell. This avoids distributing every material over every page.
    def cell_key(record):
        name=record['obj'].name.split('.')[0]
        try:
            x,z=map(int,name.removeprefix('lm_').split('_'))
            return z,x
        except ValueError:return 0,0
    records.sort(key=lambda r:(cell_key(r),-float(np.ptp(r['uv'],axis=0).max()),r['obj'].name,r['faces'][0]))
    assignments=defaultdict(dict)
    chart_ids=defaultdict(dict)
    rectangles=[]
    preferred={}
    for r in records:
        span=np.ceil(r['uv'].max(axis=0))-np.floor(r['uv'].min(axis=0))
        cell=r['obj'].name.split('.')[0]
        try:page,x,y,rotate=packer.place(*span,preferred.get(cell,len(packer.pages)-1))
        except ValueError as exc:
            report['failures'].append({'reason':str(exc),'charts':len(records),'allocated':len(packer.pages)})
            with open(os.path.join(out,'coverage.json'),'w') as f:json.dump(report,f)
            raise
        preferred[cell]=page
        uv=r['uv']-np.floor(r['uv'].min(axis=0))
        if rotate:uv=uv[:,::-1]
        # Blender's zspan rasterizer samples at (.501, .502), not exactly
        # (.5, .5). Preserve lattice alignment after any chart rotation.
        uv+=(x+.001,y+.002)
        layer=r['obj'].data.uv_layers['lightmap'].data
        for loop,co in zip(r['loops'],uv):layer[int(loop)].uv=co/size
        chart_id=len(rectangles)
        width,height=span
        if rotate:width,height=height,width
        rectangles.append({'atlas':page,'source':r['obj'].name,'x':x-PADDING,'y':y-PADDING,
                           'width':math.ceil(width)+2*PADDING,'height':math.ceil(height)+2*PADDING})
        for face in r['faces']:
            assignments[r['obj'].name][face]=page
            chart_ids[r['obj'].name][face]=chart_id
        r['row']['pages'].append(page)
    for row in report['objects']:row['pages']=sorted(set(row['pages']))
    for row in report['objects']:
        row['areaDensity']=math.sqrt(row['lightmapPixelArea']/row['worldArea']) if row['worldArea'] else None
        for instance in row['instances'].values():instance['areaDensity']=math.sqrt(instance['lightmapPixelArea']/instance['worldArea']) if instance['worldArea'] else None
    report.update(charts=len(records),atlasCount=len(packer.pages),ok=True)
    # Split objects per atlas using copies with all corner attributes retained.
    # Exported names are the stable source key plus a page suffix.
    from mathutils import Vector
    result=[];mapping={}
    for obj in objects:
        per=defaultdict(list)
        face_pages=assignments[obj.name]
        for face in obj.data.polygons:per[face_pages.get(face.index,0)].append(face.index)
        source=obj.name
        attr=obj.data.attributes.get('tk_chart') or obj.data.attributes.new('tk_chart','INT','FACE')
        attr.data.foreach_set('value',[chart_ids[source].get(f.index,-1) for f in obj.data.polygons])
        if len(per)==1:
            page=next(iter(per))
            obj.name=f'{source}__atlas_{page}'
            result.append(obj);mapping[obj.name]={'source':source,'atlas':page}
            continue
        # Corner identity survives bmesh deletion; position + UV1 is not
        # unique across authored normal seams inside a continuous chart.
        corner_attr=obj.data.attributes.new('tk_source_corner','INT','CORNER')
        corner_attr.data.foreach_set('value',list(range(len(obj.data.loops))))
        source_normals=[tuple(n.vector) for n in obj.data.corner_normals]
        for page,faces in sorted(per.items()):
            keep=set(faces)
            clone=obj.copy();clone.data=obj.data.copy()
            obj.users_collection[0].objects.link(clone)
            clone.name=f'{source}__atlas_{page}'
            # Delete other polygons through bmesh, then restore loop normals
            # from the original triangle corners (bmesh does not retain them).
            import bmesh
            bm=bmesh.new();bm.from_mesh(clone.data);bm.faces.ensure_lookup_table()
            bmesh.ops.delete(bm,geom=[f for f in bm.faces if f.index not in keep],context='FACES')
            bm.to_mesh(clone.data);bm.free()
            clone.data.update()
            corner_ids=clone.data.attributes['tk_source_corner']
            normals=[source_normals[item.value] for item in corner_ids.data]
            clone.data.normals_split_custom_set(normals)
            clone.data.attributes.remove(corner_ids)
            result.append(clone);mapping[clone.name]={'source':source,'atlas':page}
        bpy.data.objects.remove(obj,do_unlink=True)
    with open(os.path.join(out,'atlas-layout.json'),'w') as f:json.dump({'version':VERSION,'size':size,'count':len(packer.pages),'objects':mapping,'rectangles':rectangles},f)
    with open(os.path.join(out,'coverage.json'),'w') as f:json.dump(report,f)
    log(f'UV coverage passed: {len(records)} charts, {len(packer.pages)} atlases at {density:g} texels/m')
    return result,mapping,report


def audit_baked_coverage(objects, raw, rectangles, atlas, size):
    """Verify Cycles' actual coverage, restricted to each chart's own rectangle.

    Returns chart-owned padding ownership, not a brightness-derived mask.
    """
    owner=np.full((size,size),-1,dtype=np.int32)
    failures=[]
    objects_by_chart=defaultdict(list)
    for obj in objects:
        ids=obj.data.attributes.get('tk_chart')
        if ids is None:raise ValueError(f'{obj.name}: lost chart identity')
        for face in obj.data.polygons:
            chart=ids.data[face.index].value
            if chart>=0:objects_by_chart[chart].append((obj,face))
    for chart,rect in enumerate(rectangles):
        if rect['atlas']!=atlas:continue
        x,y,w,h=(rect[k] for k in ('x','y','width','height'))
        mask=raw[y:y+h,x:x+w].copy()
        for _ in range(PADDING):
            p=np.pad(mask,1)
            mask=np.logical_or.reduce([p[dy:dy+h,dx:dx+w] for dy in range(3) for dx in range(3)])
        region=owner[y:y+h,x:x+w]
        if np.any((region>=0)&mask):raise ValueError('chart padding overlap')
        region[mask]=chart
        for obj,face in objects_by_chart[chart]:
            points=np.array([obj.data.uv_layers['lightmap'].data[j].uv for j in face.loop_indices])*size-(x,y)
            py,px=raster_triangle(points,max(w,h))
            inside=(px<w)&(py<h)
            if not np.all(mask[py[inside],px[inside]]):
                failures.append({'source':rect['source'],'chart':chart,'face':face.index,'reason':'interior coverage hole'})
            probes=[points.mean(axis=0)[None,:]]
            for a,b in zip(points,np.roll(points,-1,axis=0)):
                n=max(1,math.ceil(float(np.linalg.norm(b-a))*4))
                probes.append(a+np.linspace(0,1,n+1)[:,None]*(b-a))
            if np.any(coverage_support(np.concatenate(probes),mask)<.99):
                failures.append({'source':rect['source'],'chart':chart,'face':face.index})
    return owner,failures


def pad_owned(image, covered, rectangles, atlas):
    """No pixel can receive colour from a different chart, including gutters."""
    from lightmap_padding import dilate_lightmap
    for rect in rectangles:
        if rect['atlas']!=atlas:continue
        x,y,w,h=(rect[k] for k in ('x','y','width','height'))
        dilate_lightmap(image[y:y+h,x:x+w],covered[y:y+h,x:x+w],PADDING)

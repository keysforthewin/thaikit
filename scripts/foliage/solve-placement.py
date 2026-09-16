"""Geometry-based foliage placement audit/solver. Run with Blender's Python.

Reads live UE mesh triangles, so disabled collision cannot hide ground or walls.
Units stay in Unreal centimetres. Produces a reviewable plan before any UE edits.
"""
import json,math,os,time,sys
from pathlib import Path
import numpy as np
from mathutils import Vector,Quaternion
from mathutils.bvhtree import BVHTree
from mathutils.geometry import convex_hull_2d

ROOT=Path('/repo/scratch/foliage-placement-20260915')
inventory=json.loads((ROOT/('inventory-after.json' if '--verify' in sys.argv else 'inventory.json')).read_text())
binary=(ROOT/'geometry.bin').read_bytes()
start=time.time()
def log(s):print(s,flush=True)
def mesh_geometry(mesh):
 vertices=[];triangles=[];materials=[];offset=0
 for section in mesh['sections']:
  n=section['vertices'];ni=section['indices'];at=section['offset']
  v=np.frombuffer(binary,dtype='<f4',count=n*3,offset=at).reshape(-1,3).astype(np.float64)
  t=np.frombuffer(binary,dtype='<u4',count=ni,offset=at+n*12).reshape(-1,3)
  vertices.append(v);triangles.append(t+offset);materials.extend([section['material']]*n);offset+=n
 return np.concatenate(vertices),np.concatenate(triangles),np.array(materials)
meshes={k:mesh_geometry(m) for k,m in inventory['meshes'].items()}
def transformed(v,t):
 q=t['quaternion'];rot=np.array(Quaternion((q[3],q[0],q[1],q[2])).to_matrix())
 return (v*np.array(t['scale']))@rot.T+np.array(t['position'])
def hull(points):
 unique=np.unique(np.round(points[:,:2],4),axis=0)
 if len(unique)<3:return unique
 ids=convex_hull_2d([Vector(p) for p in unique]);return unique[ids]
def circle_hits(poly,x,y,r):
 if len(poly)<3:return False
 p=np.array([x,y]);a=poly;b=np.roll(poly,-1,axis=0);e=b-a;w=p-a
 cross=e[:,0]*w[:,1]-e[:,1]*w[:,0]
 if np.all(cross>=-.0001) or np.all(cross<=.0001):return True
 t=np.clip(np.sum(w*e,axis=1)/np.maximum(np.sum(e*e,axis=1),1e-12),0,1)
 return bool(np.any(np.sum((a+t[:,None]*e-p)**2,axis=1)<r*r))

ground=[];obstacles=[];foliage=[];ground_vertices=[];ground_triangles=[];ground_face_names=[]
for actor in inventory['actors']:
 for c in actor['components']:
  v,t,materials=meshes[c['mesh']]
  for transform in c.get('instances',[c['transform']]):
   world=transformed(v,transform);bounds=[world.min(axis=0),world.max(axis=0)]
   row={'actor':actor,'component':c,'vertices':world,'triangles':t,'materials':materials,'bounds':bounds}
   if 'TK_FOLIAGE_V1' in actor['tags']:
    foliage.append(row);continue
   if actor['hidden']:continue
   if actor['folder'].startswith('Ground/'):
    ground.append(row);offset=sum(len(a) for a in ground_vertices)
    ground_vertices.append(world);ground_triangles.append(t+offset)
    ground_face_names.extend([len(ground)-1]*len(t))
   elif actor['folder']!='Skyline' and not actor['folder'].startswith(('Sky','Lights/')):
    row['hull']=hull(world);obstacles.append(row)
log(f'live geometry: {len(foliage)} foliage, {len(ground)} ground, {len(obstacles)} obstacles')
gv=np.concatenate(ground_vertices);gt=np.concatenate(ground_triangles)
ground_bvh=BVHTree.FromPolygons(gv.tolist(),gt.tolist(),all_triangles=True)
del gv,gt,ground_vertices,ground_triangles
obmin=np.array([o['bounds'][0] for o in obstacles]);obmax=np.array([o['bounds'][1] for o in obstacles])
def support(x,y):
 hit=ground_bvh.ray_cast(Vector((x,y,1000)),Vector((0,0,-1)),5000)
 if hit[0] is None:return None
 index=ground_face_names[hit[2]];g=ground[index]
 return {'z':float(hit[0].z),'actor':g['actor']['label'],'folder':g['actor']['folder'],'mesh':inventory['meshes'][g['component']['mesh']]['name'],'normalZ':float(hit[1].z)}
def shape(row):
 actor=row['actor'];v=row['vertices']-np.array(actor['position']);height=np.ptp(v[:,2]);tree=actor['folder'].endswith('/Trees');billboard=actor['label'].startswith('bb_')
 if billboard:
  # The card's transparent margin is not a physical trunk.
  radius=30.;shaft=height*.7;bands=[(np.array([0.,0.]),radius,float(v[:,2].min()),float(v[:,2].min()+shaft))]
 elif tree:
  wood=np.char.find(row['materials'].astype(str),'bark')>=0;stem=v[wood]
  # The trunk/low branches need clear ground and headroom. Upper crown can overhang.
  shaft=min(height*.6,700.) if 'Palm' not in inventory['meshes'][row['component']['mesh']]['name'] else height*.92
  root=stem[stem[:,2]<=stem[:,2].min()+2.]
  root_center=(root[:,:2].min(0)+root[:,:2].max(0))/2
  root_radius=max(15.,float(np.linalg.norm(root[:,:2]-root_center,axis=1).max()))
  palm='Palm' in inventory['meshes'][row['component']['mesh']]['name']
  bands=[]
  for lo in np.arange(float(stem[:,2].min()),float(stem[:,2].min()+shaft),100.):
   hi=min(lo+100.,float(stem[:,2].min()+shaft));points=stem[(stem[:,2]>=lo-30)&(stem[:,2]<=hi+30)]
   if not palm and len(points):
    trunk=points[np.linalg.norm(points[:,:2]-root_center,axis=1)<=root_radius*1.7+(hi-stem[:,2].min())*.10]
    if len(trunk):points=trunk
   if not len(points):points=stem[np.argsort(abs(stem[:,2]-(lo+hi)/2))[:8]]
   center=(points[:,:2].min(0)+points[:,:2].max(0))/2
   radius=max(15.,float(np.linalg.norm(points[:,:2]-center,axis=1).max()))
   bands.append((center,radius,lo,hi))
 else:
  center=(v[:,:2].min(0)+v[:,:2].max(0))/2
  radius=float(np.linalg.norm(v[:,:2]-center,axis=1).max())
  bands=[(center,radius,float(v[:,2].min()),float(v[:,2].max()))]
 # Ground physical stems/pots, not the tips or transparent corners of leaf cards.
 names=row['materials'].astype(str)
 mask=np.char.find(names,'planter')>=0
 if not mask.any():mask=np.char.find(names,'bark')>=0
 solid=v[mask] if mask.any() else v
 if not mask.any() and not billboard:
  # Stem origins of leaf-only rosettes are in the central part of the plant.
  center=(v[:,:2].min(0)+v[:,:2].max(0))/2
  radial=np.linalg.norm(v[:,:2]-center,axis=1)
  solid=v[radial<=max(8.,np.ptp(v[:,:2],axis=0).max()*.14)]
 bottom=solid[:,2].min();base=solid[solid[:,2]<=bottom+2.]
 base_center=(base[:,:2].min(0)+base[:,:2].max(0))/2
 base_radius=max(8.,float(np.linalg.norm(base[:,:2]-base_center,axis=1).max()))
 if billboard:base_radius=20.;base_center=np.array([0.,0.])
 return {'bands':bands,'bottom':float(bottom),'baseCenter':base_center,'baseRadius':base_radius,'tree':tree,'billboard':billboard,'height':height}
def blockers(s,x,y,z,clearance=20.):
 result=set()
 for center,r,lo,hi in s['bands']:
  px=x+center[0];py=y+center[1];radius=r+clearance
  hits=np.flatnonzero((obmin[:,0]<=px+radius)&(obmax[:,0]>=px-radius)&(obmin[:,1]<=py+radius)&(obmax[:,1]>=py-radius)&(obmin[:,2]<z+hi)&(obmax[:,2]>z+max(lo,10.)))
  for i in hits:
   if circle_hits(obstacles[i]['hull'],px,py,radius):result.add(obstacles[i]['actor']['label'])
 return sorted(result)
audit=[]
for row in foliage:
 a=row['actor'];s=shape(row);x,y,z=a['position'];g=support(x+s['baseCenter'][0],y+s['baseCenter'][1])
 hits=blockers(s,x,y,z)
 audit.append({'label':a['label'],'folder':a['folder'],'position':a['position'],'support':g,'baseGapCm':None if g is None else z+s['bottom']-g['z'],'blockers':hits,'baseRadiusCm':s['baseRadius'],'trunkBands':[(c.tolist(),r,lo,hi) for c,r,lo,hi in s['bands']]})
(ROOT/('audit-after.json' if '--verify' in sys.argv else 'audit-before.json')).write_text(json.dumps(audit,indent=2))
log(json.dumps({'noGround':sum(a['support'] is None for a in audit),'floatingOver2cm':sum(a['baseGapCm'] is not None and a['baseGapCm']>2 for a in audit),'buriedOver10cm':sum(a['baseGapCm'] is not None and a['baseGapCm']< -10 for a in audit),'blocked':sum(bool(a['blockers']) for a in audit),'seconds':time.time()-start}))

profiles=[shape(row) for row in foliage]
def seat(s,x,y):
 cx,cy=np.array([x,y])+s['baseCenter'];r=s['baseRadius']*.95
 points=[support(cx,cy)]+[support(cx+math.cos(t)*r,cy+math.sin(t)*r) for t in np.linspace(0,2*math.pi,8,endpoint=False)]
 if any(p is None or abs(p['normalZ'])<.95 for p in points):return None
 zs=[p['z'] for p in points]
 if max(zs)-min(zs)>8:return None
 # Set the entire base onto the lowest supporting surface, with roots 1 cm in soil.
 return min(zs)-s['bottom']-1.,points[0]
def region(x,y):return not (-6400<x<8000 and -4800<y<9600)
positions=[list(r['actor']['position']) for r in foliage]
def root_conflict(i,x,y):
 s=profiles[i];c=np.array([x,y])+s['baseCenter']
 for j,t in enumerate(profiles):
  if j==i or s['billboard'] or t['billboard']:continue
  d=np.array(positions[j][:2])+t['baseCenter']
  if np.linalg.norm(c-d)<s['baseRadius']+t['baseRadius']+12:return True
 return False
def candidate(i,x,y,moving):
 s=profiles[i];a=foliage[i]['actor'];rest=seat(s,x,y)
 if rest is None:return None
 z,g=rest
 if blockers(s,x,y,z):return None
 if moving:
  if a['folder'].startswith('Border/') and not region(x+s['baseCenter'][0],y+s['baseCenter'][1]):return None
  if not a['folder'].startswith('Border/') and region(x,y):return None
  if g['folder']=='Ground/Road' or any(k in g['mesh'] for k in ('Road','SoiAlley')):return None
  if root_conflict(i,x,y):return None
 return [x,y,z]
if '--verify' in sys.argv:
 failed=[]
 for i,row in enumerate(foliage):
  a=row['actor'];x,y,z=a['position'];rest=seat(profiles[i],x,y)
  if rest is None or abs(z-rest[0])>.1 or blockers(profiles[i],x,y,z):failed.append(a['label'])
 log('VERIFICATION '+json.dumps({'failed':failed,'checked':len(foliage)}))
 if failed:raise RuntimeError('Placement verification failed')
else:
 plan=[]
 # Repair broad tree trunks before finding gaps for the smaller plants.
 order=sorted(range(len(foliage)),key=lambda i:(not profiles[i]['tree'],profiles[i]['billboard'],i))
 for i in order:
  a=foliage[i]['actor'];s=profiles[i];x,y,z=a['position'];p=candidate(i,x,y,False)
  reasons=[]
  if p is None or root_conflict(i,x,y):
   reasons.append('clearance / support');p=None
   for radius in range(25,3001,25):
    count=max(16,int(2*math.pi*radius/30))
    for angle in np.linspace(0,2*math.pi,count,endpoint=False):
     nx=x+radius*math.cos(angle);ny=y+radius*math.sin(angle)
     p=candidate(i,nx,ny,True)
     if p is not None:break
    if p is not None:break
   if p is None:raise RuntimeError('No safe placement for '+a['label'])
  if abs(p[2]-z)>.1:reasons.append('root / pot ground contact')
  positions[i]=p
  plan.append({'label':a['label'],'path':a['path'],'folder':a['folder'],'before':a['position'],'after':p,'reasons':reasons,'distanceXYCm':math.hypot(p[0]-x,p[1]-y),'physicalBaseOffsetCm':s['bottom'],'baseRadiusCm':s['baseRadius']})
  if math.hypot(p[0]-x,p[1]-y)>1:log(f"move {a['label']}: {math.hypot(p[0]-x,p[1]-y)/100:.2f}m")
 (ROOT/'placement-plan.json').write_text(json.dumps(plan,indent=2))
 log('PLAN '+json.dumps({'count':len(plan),'horizontal':sum(p['distanceXYCm']>1 for p in plan),'maxHorizontalMetres':max(p['distanceXYCm'] for p in plan)/100,'seconds':time.time()-start}))

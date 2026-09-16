"""Check live simple and complex traces: solids block; leaves and branches do not."""
import unreal,json,traceback,math
OUT='C:/tk/foliage-colliders-20260916'
try:
 records={r['asset']:r for r in json.load(open(OUT+'/variant-colliders.json'))}
 rows=[];cache={};solid_checks=0;clear_checks=0
 for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
  if 'TK_FOLIAGE_V1' not in [str(t) for t in a.tags]:continue
  c=a.static_mesh_component;m=c.static_mesh;record=records[m.get_name()];t=c.get_world_transform()
  def world(p):return unreal.MathLibrary.transform_location(t,unreal.Vector(*p))
  def trace(p,q,complex):return c.line_trace_component(world(p),world(q),complex,False,False)
  body=m.get_editor_property('body_setup');assert body.get_editor_property('collision_trace_flag')==unreal.CollisionTraceFlag.CTF_USE_SIMPLE_AS_COMPLEX
  assert unreal.GeometryScript_Collision.get_simple_collision_shape_count(unreal.GeometryScript_Collision.get_simple_collision_from_static_mesh(m))==len(record['parts'])
  local=[]
  for p in record['parts']:
   x,y,z=p['offset'];r,hy,_=p['scale'];x*=100;y*=100;z*=100;r*=100
   local.append((x,z,y,r,hy*100))
   for complex in [False,True]:
    assert trace((x-r-25,z,y),(x+r+25,z,y),complex) is not None,(a.get_actor_label(),p['name'],'missing solid hit',complex)
    solid_checks+=1
  if m.get_name() not in cache:
   candidates={'leaves':[],'wood':[]}
   for si in range(m.get_num_sections(0)):
    name=m.get_material(si).get_name();kind='leaves' if 'leaves' in name or 'billboard' in name else 'wood' if 'bark' in name else None
    if kind:
     vertices,*_=unreal.ProceduralMeshLibrary.get_section_from_static_mesh(m,0,si)
     candidates[kind]=[(v.x,v.y,v.z) for v in vertices]
   cache[m.get_name()]=candidates
  tested=[]
  for kind,vertices in cache[m.get_name()].items():
   # A vertical line at this visible leaf/branch point must miss every solid cylinder.
   clear=[v for v in vertices if all(math.hypot(v[0]-x,v[1]-y)>r+5 for x,y,z,r,hy in local)]
   if clear:
    v=max(clear,key=lambda v:v[0]*v[0]+v[1]*v[1]);box=m.get_bounding_box()
    for complex in [False,True]:
     assert trace((v[0],v[1],box.min.z-100),(v[0],v[1],box.max.z+100),complex) is None,(a.get_actor_label(),kind,'blocked',complex)
     clear_checks+=1
    tested.append(kind)
  if not record['parts']:assert c.get_collision_enabled()==unreal.CollisionEnabled.NO_COLLISION
  else:assert c.get_collision_enabled()==unreal.CollisionEnabled.QUERY_AND_PHYSICS
  rows.append({'label':a.get_actor_label(),'parts':len(record['parts']),'clearGeometry':tested})
 json.dump({'actors':len(rows),'solidTracesPassed':solid_checks,'clearTracesPassed':clear_checks,'rows':rows},open(OUT+'/verify.json','w'),indent=2)
except:open(OUT+'/verify.error','w').write(traceback.format_exc());raise

import { useLevel } from './store.js';
import { DEFAULT_GROUND } from './ground.js';
import { isGroupId, selectionRoots } from './groups.js';

/** The two things the gizmo does that nothing on screen can show. */
const GIZMO_MODS = '\nShift+drag a handle leaves a copy behind.\nHold Ctrl to click through the gizmo to the object behind it.';

const Btn = ({ on, onClick, title, children, disabled }) => (
  <button className={on ? 'primary' : ''} onClick={onClick} title={title} disabled={disabled}>{children}</button>
);

export function Toolbar({ onAdd, onAddLight, onAddSpawn, onJoin }) {
  const tool = useLevel((s) => s.tool);
  const space = useLevel((s) => s.space);
  const view = useLevel((s) => s.view);
  const doc = useLevel((s) => s.doc);
  const setTool = useLevel((s) => s.setTool);
  const setSpace = useLevel((s) => s.setSpace);
  const toggleView = useLevel((s) => s.toggleView);
  const setView = useLevel((s) => s.setView);
  const setSetting = useLevel((s) => s.setSetting);
  const selection = useLevel((s) => s.selection);
  const unjoinSelection = useLevel((s) => s.unjoinSelection);
  const joinable = doc ? selectionRoots(doc, selection).length >= 2 : false;
  const unjoinable = selection.some(isGroupId);
  const snap = doc?.settings?.snap ?? {};
  const ground = { ...DEFAULT_GROUND, ...(doc?.settings?.ground ?? {}) };
  // Read the height from the STORE, not from this render. Two clicks in quick
  // succession both run before React re-renders, so a closed-over `ground.y`
  // makes the second one repeat the first step instead of adding to it.
  const nudgeGround = (dy) => {
    const y = useLevel.getState().doc?.settings?.ground?.y ?? 0;
    setSetting('ground.y', +(y + dy).toFixed(3));
  };
  const hasMoon = doc?.lights.some((l) => l.role === 'moon');

  return (
    <div className="toolbar">
      <div className="group">
        <Btn on={tool === 'translate'} onClick={() => setTool('translate')} title={`move — 1${GIZMO_MODS}`}>move</Btn>
        <Btn on={tool === 'rotate'} onClick={() => setTool('rotate')} title={`rotate — 2 or E${GIZMO_MODS}`}>rotate</Btn>
        <Btn on={tool === 'scale'} onClick={() => setTool('scale')} title={`scale — 3 or R${GIZMO_MODS}`}>scale</Btn>
        <Btn onClick={() => setSpace(space === 'world' ? 'local' : 'world')} title="gizmo space — Q">{space}</Btn>
      </div>
      <div className="group">
        <Btn on={snap.enabled !== false} onClick={() => setSetting('snap.enabled', snap.enabled === false)} title="grid snap for move / rotate / scale">snap</Btn>
        <select value={snap.translate ?? 0.5} onChange={(e) => setSetting('snap.translate', Number(e.target.value))} title="move step (m)">
          {[0.05, 0.1, 0.25, 0.5, 1, 2, 4].map((v) => <option key={v} value={v}>{v} m</option>)}
        </select>
        <select value={snap.rotateDeg ?? 15} onChange={(e) => setSetting('snap.rotateDeg', Number(e.target.value))} title="rotate step">
          {[5, 15, 30, 45, 90].map((v) => <option key={v} value={v}>{v}°</option>)}
        </select>
        <Btn on={snap.surface?.enabled !== false} onClick={() => setSetting('snap.surface.enabled', snap.surface?.enabled === false)} title="while moving: rest on the surface beneath (objects or the ground; a vertical drag snaps onto it when within the gap threshold), and snap faces flush and edges aligned to neighbours — V">surface</Btn>
      </div>
      <div className="group">
        <Btn on={view.grid} onClick={() => toggleView('grid')} title="grid — G">grid</Btn>
        <Btn on={view.axes} onClick={() => toggleView('axes')} title="axes at the origin">axes</Btn>
        <Btn on={view.cells} onClick={() => toggleView('cells')} title="the bake's spatial cells and what each merges to — B">cells</Btn>
        <Btn on={view.colliders} onClick={() => toggleView('colliders')} title="physics compounds — X">colliders</Btn>
        <Btn on={view.sockets} onClick={() => toggleView('sockets')} title="named sockets">sockets</Btn>
        <Btn on={view.helpers} onClick={() => toggleView('helpers')} title="light helpers">helpers</Btn>
        <Btn on={view.wireframe} onClick={() => toggleView('wireframe')} title="wireframe">wire</Btn>
        <select
          value={view.fov ?? 90}
          onChange={(e) => setView('fov', Number(e.target.value))}
          title="horizontal field of view — the editor and play mode both use it. 90° is the game default; a 360 viewer shows about 100°."
        >
          {[60, 70, 80, 90, 100, 110, 120].map((v) => <option key={v} value={v}>{v}° fov</option>)}
        </select>
      </div>
      <div className="group">
        <Btn on={ground.enabled} onClick={() => setSetting('ground.enabled', !ground.enabled)} title="one flat walkable surface under the whole map">ground</Btn>
        {ground.enabled && (
          <>
            <button onClick={() => nudgeGround(-0.5)} title="lower the ground by 0.5 m">−</button>
            <input
              type="number" step="0.25" value={ground.y} style={{ width: 72 }} title="ground height (m)"
              onChange={(e) => { const n = Number(e.target.value); if (Number.isFinite(n)) setSetting('ground.y', n); }}
            />
            <button onClick={() => nudgeGround(0.5)} title="raise the ground by 0.5 m">+</button>
          </>
        )}
      </div>
      <div className="group">
        <Btn
          onClick={onJoin}
          disabled={!joinable}
          title="join the selection into one named group that moves, turns and scales as a unit — Ctrl+G. Nothing is merged."
        >
          join
        </Btn>
        <Btn onClick={unjoinSelection} disabled={!unjoinable} title="dissolve the selected group — Ctrl+Shift+G">unjoin</Btn>
      </div>
      <div className="group">
        <button className="primary" onClick={onAdd} title="add an object from any installed pack — N">+ object</button>
        <button onClick={() => onAddLight('directional')} disabled={hasMoon} title={hasMoon ? 'one moon per level' : 'add the moon'}>+ moon</button>
        <button onClick={() => onAddLight('point')}>+ point</button>
        <button onClick={() => onAddLight('spot')}>+ spot</button>
        <button onClick={onAddSpawn}>+ spawn</button>
      </div>
    </div>
  );
}

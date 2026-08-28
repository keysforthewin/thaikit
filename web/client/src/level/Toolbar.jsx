import { useLevel } from './store.js';

const Btn = ({ on, onClick, title, children, disabled }) => (
  <button className={on ? 'primary' : ''} onClick={onClick} title={title} disabled={disabled}>{children}</button>
);

export function Toolbar({ onAdd, onAddLight, onAddSpawn }) {
  const tool = useLevel((s) => s.tool);
  const space = useLevel((s) => s.space);
  const view = useLevel((s) => s.view);
  const doc = useLevel((s) => s.doc);
  const setTool = useLevel((s) => s.setTool);
  const setSpace = useLevel((s) => s.setSpace);
  const toggleView = useLevel((s) => s.toggleView);
  const setSetting = useLevel((s) => s.setSetting);
  const snap = doc?.settings?.snap ?? {};
  const hasMoon = doc?.lights.some((l) => l.role === 'moon');

  return (
    <div className="toolbar">
      <div className="group">
        <Btn on={tool === 'translate'} onClick={() => setTool('translate')} title="move — W">move</Btn>
        <Btn on={tool === 'rotate'} onClick={() => setTool('rotate')} title="rotate — E">rotate</Btn>
        <Btn on={tool === 'scale'} onClick={() => setTool('scale')} title="scale — R">scale</Btn>
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
        <Btn on={snap.surface?.enabled !== false} onClick={() => setSetting('snap.surface.enabled', snap.surface?.enabled === false)} title="snap faces flush and edges aligned to neighbours while moving — Shift+S">surface</Btn>
      </div>
      <div className="group">
        <Btn on={view.grid} onClick={() => toggleView('grid')} title="grid — G">grid</Btn>
        <Btn on={view.axes} onClick={() => toggleView('axes')} title="axes at the origin">axes</Btn>
        <Btn on={view.cells} onClick={() => toggleView('cells')} title="the bake's spatial cells and what each merges to — C">cells</Btn>
        <Btn on={view.colliders} onClick={() => toggleView('colliders')} title="physics compounds — X">colliders</Btn>
        <Btn on={view.sockets} onClick={() => toggleView('sockets')} title="named sockets">sockets</Btn>
        <Btn on={view.helpers} onClick={() => toggleView('helpers')} title="light helpers">helpers</Btn>
        <Btn on={view.wireframe} onClick={() => toggleView('wireframe')} title="wireframe">wire</Btn>
      </div>
      <div className="group">
        <button className="primary" onClick={onAdd} title="add an object from any installed pack — A">+ object</button>
        <button onClick={() => onAddLight('directional')} disabled={hasMoon} title={hasMoon ? 'one moon per level' : 'add the moon'}>+ moon</button>
        <button onClick={() => onAddLight('point')}>+ point</button>
        <button onClick={() => onAddLight('spot')}>+ spot</button>
        <button onClick={onAddSpawn}>+ spawn</button>
      </div>
    </div>
  );
}

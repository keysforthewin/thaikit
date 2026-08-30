import { useEffect, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';

/** Name the assembly being joined. Nothing about the objects changes -- this is a label on a set. */
export function JoinModal({ count, onClose, onJoin }) {
  const [name, setName] = useState('');
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); ref.current?.select(); }, []);
  const submit = () => { onJoin(name.trim() || 'group'); };
  return (
    <Modal
      title={`Join ${count} objects`}
      onClose={onClose}
      width="min(420px, 94vw)"
      footer={<><span className="grow" /><button onClick={onClose}>cancel</button><button className="primary" onClick={submit}>join</button></>}
    >
      <div className="field">
        <label>name</label>
        <input
          ref={ref}
          value={name}
          placeholder="group"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
        />
      </div>
      <p className="muted small">
        They move, turn and scale as one unit. Nothing is merged: each object keeps its own
        transform, and the bake sees exactly what it did before. Alt-click reaches a single piece
        inside the group, and Unjoin dissolves it.
      </p>
    </Modal>
  );
}

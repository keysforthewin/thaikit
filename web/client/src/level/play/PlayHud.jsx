import { useLevel } from '../store.js';

/**
 * The play-mode overlay: a crosshair and the keys.
 *
 * Outside the Canvas and `pointer-events: none`, so it never eats the click that
 * re-acquires pointer lock.
 */
export function PlayHud() {
  const playView = useLevel((s) => s.playView);
  return (
    <div className="play-hud">
      <div className="crosshair" />
      <div className="play-keys">
        <b>{playView === 'third' ? 'third person' : 'first person'}</b>
        {' · WASD move · mouse look · Shift sprint · Ctrl crouch · Space jump / climb'}
        {' · F fly · C camera · '}
        <b>Esc</b>
        {' back to editing'}
      </div>
    </div>
  );
}

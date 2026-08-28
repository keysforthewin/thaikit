let cursor = 0;
/** Round-robin over the spawns of a team (or all of them). */
export function pickSpawn(spawns, team = null) {
  const list = team ? spawns.filter((s) => s.team === team) : spawns;
  if (!list.length) return null;
  const s = list[cursor % list.length];
  cursor += 1;
  return s;
}

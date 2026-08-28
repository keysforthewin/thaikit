/** Snapshot undo over the doc. Level docs are small JSON; copying is cheap. */
export const HISTORY_CAP = 100;

export function pushHistory(state, label) {
  const past = [...state.past, { doc: state.doc, label }];
  if (past.length > HISTORY_CAP) past.shift();
  return { past, future: [] };
}

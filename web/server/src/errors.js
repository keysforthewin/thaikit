/** Turn thrown errors into consistent JSON, with zod issues spelled out. */
export function errorHandler(err, req, res, _next) {
  const status = err.status ?? 500;
  const body = { error: err.message || 'internal error' };
  if (err.issues) {
    body.issues = err.issues.map((i) => ({
      path: Array.isArray(i.path) ? i.path.join('.') : String(i.path ?? ''),
      message: i.message,
    }));
  }
  if (err.name === 'ConflictError' && err.current) {
    // Hand back the current state so the UI can show what changed underneath it.
    body.current = err.current;
  }
  if (status >= 500) console.error(err);
  res.status(status).json(body);
}

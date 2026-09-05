/**
 * The URL prefix the app is served under -- '' at the root, '/thaikit' when
 * THAIKIT_BASE_PATH mounts it beside other sites behind a reverse proxy. Vite
 * supplies it as import.meta.env.BASE_URL (always with a trailing slash), and
 * every absolute URL the client builds goes through `url()` so the same bundle
 * works at either place. Paths the SERVER hands out (thumbnails, bundles,
 * images) already carry the prefix; `url()` leaves those alone.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(appPath) {
  if (!appPath) return appPath;
  if (!BASE || !appPath.startsWith('/')) return appPath;
  if (appPath === BASE || appPath.startsWith(`${BASE}/`)) return appPath;
  return `${BASE}${appPath}`;
}

/** The app-relative pathname: window.location.pathname with the prefix removed. */
export function appPathname(pathname = window.location.pathname) {
  if (BASE && (pathname === BASE || pathname.startsWith(`${BASE}/`))) return pathname.slice(BASE.length) || '/';
  return pathname;
}

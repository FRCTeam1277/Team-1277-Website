export function assetPathFixer(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }

  const basePath = import.meta.env.BASE_URL || '/';

  const isCustomDomain = window.location.hostname !== 'frcteam1277.github.io' &&
                        !window.location.hostname.includes('localhost') &&
                        !window.location.hostname.includes('127.0.0.1');

  const effectiveBasePath = isCustomDomain ? '/' : basePath;

  if (path.startsWith(effectiveBasePath) && effectiveBasePath !== '/') {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  if (effectiveBasePath.endsWith('/') && cleanPath) {
    return `${effectiveBasePath}${cleanPath}`;
  }

  return `${effectiveBasePath}${effectiveBasePath.endsWith('/') ? '' : '/'}${cleanPath}`;
}

export function assetPathFixer(path: string): string {
  if (path.startsWith('http')) {
    return path;
  }
  
  const basePath = import.meta.env.BASE_URL || '/';
  
  if (path.startsWith(basePath) && basePath !== '/') {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  if (basePath.endsWith('/') && cleanPath) {
    return `${basePath}${cleanPath}`;
  }
  
  return `${basePath}${basePath.endsWith('/') ? '' : '/'}${cleanPath}`;
}

/**
 * Prefix a root-relative asset path with the deployed basePath (/b28-site on
 * GitHub Pages, empty in local dev). NEXT_PUBLIC_BASE_PATH is inlined at build
 * time, so this is safe in client components.
 */
export function assetPath(src: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!basePath || src.startsWith(basePath) || !src.startsWith('/')) return src;
  return `${basePath}${src}`;
}

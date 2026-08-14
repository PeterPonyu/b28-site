/**
 * Pages basePath helper.
 *
 * `next/link` prepends the configured basePath automatically, but plain
 * `<a href>` and `next/image` src do not — those must go through here.
 * NEXT_PUBLIC_BASE_PATH is inlined at build time (see pages.yml env).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(href: string): string {
  if (!href.startsWith('/')) return href;
  return `${BASE_PATH}${href}`;
}

/** Live b28-site Pages leaf only. Sibling result sites are out of this repo's CI. */

export const B28_PAGES_URL = 'https://peterponyu.github.io/b28-site/';
export const HOMEPAGE_URL = 'https://peterponyu.github.io/';
export const SCPORTAL_URL = 'https://peterponyu.github.io/scportal/';
export const B28_GITHUB_URL = 'https://github.com/PeterPonyu/b28-site';

/**
 * Alias routes that Pages still serves from `docs/` (same landing HTML, HTTP 200).
 * Must not become a restored results gallery.
 */
export const LANDING_ALIAS_ROUTES = [
  'https://peterponyu.github.io/b28-site/results/',
  'https://peterponyu.github.io/b28-site/methods/',
  'https://peterponyu.github.io/b28-site/evidence/',
  'https://peterponyu.github.io/b28-site/claims/',
];

/**
 * Unpublished-result tokens that must not appear on the public leaf.
 * Align with `.github/workflows/pages.yml` fail-closed grep.
 */
export const LEAK_TOKENS = [
  'unpublished results',
  'AUROC',
  '0.946',
  '1,191',
  '1191',
  'SOTA',
  'overconfident',
  '0.110',
  'r=−0.963',
  'r=-0.963',
];

export const ALLOWED_PUBLISHED_ARTICLE_DOIS = new Set([]);

export const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};

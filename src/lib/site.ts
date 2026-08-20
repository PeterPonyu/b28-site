/**
 * b28-site — public landing config. No unpublished figures or numeric claims.
 */
export const SITE = {
  slug: 'b28-site',
  shortName: 'Proteomic transfer',
  title: 'b28-site',
  kicker: 'Proteomic transfer evaluation',
  lead: 'Public GitHub Pages leaf for a proteomic tumor-versus-normal transfer evaluation under leave-one-cohort-out holdout.',
  physicalObject: 'Paired tumor and normal proteomes under leave-one-cohort-out holdout.',
  primaryClaim: '',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
} as const;

export type BadgeConfig = {
  label: string;
  href?: string;
  enabled: boolean;
  disabledReason?: string;
};

export const BADGES = {
  code: {
    label: 'Code',
    href: 'https://github.com/PeterPonyu/b28-site',
    enabled: true,
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: 'https://peterponyu.github.io/b28-site/',
    enabled: true,
  } satisfies BadgeConfig,
  archive: {
    label: 'Archive',
    href: 'https://doi.org/10.5281/zenodo.21870024',
    enabled: true,
  } satisfies BadgeConfig,
  articleDoi: {
    label: 'Article DOI',
    enabled: false,
    disabledReason: 'On acceptance',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [] as const;

export const STATS = [] as const;
export const RESULTS_FIGURES = [] as const;
export const EVIDENCE_TILES = [] as const;
export const METHODS_SUMMARY =
  'See the repository README. This site does not host a methods write-up.' as const;
export const CLAIMS = [] as const;

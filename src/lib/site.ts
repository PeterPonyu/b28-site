/**
 * b28-site — cohort-holdout leaf (not a shared science-gateway shell).
 * Public object is umich paired proteomes under leave-one-cohort-out.
 * Do not host one-feature screens or unpublished numeric tiles.
 */
export const SITE = {
  slug: 'b28-site',
  shortName: 'Proteomic transfer',
  mark: 'PX',
  title: 'b28-site',
  kicker: 'Cohort holdout · paired proteomes',
  lead: 'Public GitHub Pages leaf for a proteomic tumor-versus-normal transfer evaluation under leave-one-cohort-out holdout.',
  physicalObject: 'Paired tumor and normal proteomes under leave-one-cohort-out holdout.',
  primaryClaim: '',
  homepage: 'https://peterponyu.github.io/',
  scportal: 'https://peterponyu.github.io/scportal/',
  repo: 'https://github.com/PeterPonyu/b28-site',
  externalLeaves: [
    { href: 'https://peterponyu.github.io/', label: 'Lab home' },
    { href: 'https://peterponyu.github.io/scportal/', label: 'Proteome index' },
  ],
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
    disabledReason: 'No article DOI for this transfer leaf',
  } satisfies BadgeConfig,
} as const;

export const ROUTES = [
  {
    href: '/results',
    label: 'Cohorts',
    number: '01',
    blurb:
      'Paired tumor–normal proteomes under leave-one-cohort-out holdout. Figures are not hosted here.',
  },
  {
    href: '/methods',
    label: 'Protocol',
    number: '02',
    blurb: 'Six umich cohorts as the transfer object. Not a one-feature screen.',
  },
  {
    href: '/evidence',
    label: 'Holdout',
    number: '03',
    blurb: 'Calibration under cohort holdout — numeric tiles are not posted on this leaf.',
  },
  {
    href: '/claims',
    label: 'Limits',
    number: '04',
    blurb:
      'What would refute overconfidence at the worst transfer. This leaf does not host those statements.',
  },
] as const;

export type PageBinding = {
  pageId: string;
  runnerId: string;
  dataId: string;
  lawId: string;
  sharedRunner: 'chrome.cohort-holdout';
};

export const PAGE_BINDINGS = {
  home: {
    pageId: 'b28.page.home',
    runnerId: 'b28.runner.home-logo-vs-random',
    dataId: 'b28.data.home-object-card',
    lawId: 'b28.law.random-cv-hides-miscal',
    sharedRunner: 'chrome.cohort-holdout',
  },
  results: {
    pageId: 'b28.page.results',
    runnerId: 'b28.runner.results-withheld',
    dataId: 'b28.data.results-withheld',
    lawId: 'b28.law.holdout-moves-with-cohort',
    sharedRunner: 'chrome.cohort-holdout',
  },
  methods: {
    pageId: 'b28.page.methods',
    runnerId: 'b28.runner.methods-logo-umich',
    dataId: 'b28.data.six-cohort-logo',
    lawId: 'b28.law.abundance-vs-intensity',
    sharedRunner: 'chrome.cohort-holdout',
  },
  evidence: {
    pageId: 'b28.page.evidence',
    runnerId: 'b28.runner.evidence-withheld',
    dataId: 'b28.data.evidence-withheld',
    lawId: 'b28.law.transfer-worst-overconfident',
    sharedRunner: 'chrome.cohort-holdout',
  },
  claims: {
    pageId: 'b28.page.claims',
    runnerId: 'b28.runner.claims-withheld',
    dataId: 'b28.data.claims-withheld',
    lawId: 'b28.law.falsifiable-proteomic-transfer',
    sharedRunner: 'chrome.cohort-holdout',
  },
} as const satisfies Record<string, PageBinding>;

export const STATS = [] as const;
export const RESULTS_FIGURES = [] as const;
export const EVIDENCE_TILES = [] as const;
export const METHODS_SUMMARY =
  'See the repository README. This site does not host a methods write-up.' as const;
export const CLAIMS = [] as const;

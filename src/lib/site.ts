/**
 * b28-site — science gateway config (generated; edit in site-configs.mjs + re-scaffold).
 */
export const SITE = {
  slug: 'b28-site',
  shortName: "Proteomic transfer",
  title: "A proteomic tumor classifier is overconfident where it transfers worst, and random cross-validation hides it",
  kicker: "ZF Lab · proteomic transfer",
  lead: "The object is a held-out tumor proteome versus its paired normal. Six umich cohorts; the thing that moves is which cancer type is left out, and whether the classifier uses protein-specific abundance or global intensity and missingness.",
  physicalObject: "Paired tumor and normal proteomes under leave-one-cohort-out holdout.",
  primaryClaim: "Random cross-validation inflates AUROC and hides miscalibration where LOGO transfer is worst — abundance beats intensity only where signal is trivial.",
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
    enabled: false,
    disabledReason: 'No anonymous public HTTPS 200 yet',
  } satisfies BadgeConfig,
  site: {
    label: 'Site',
    href: "https://peterponyu.github.io/b28-site/",
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

export const ROUTES = [
  { href: '/results', label: 'Results', number: '01' },
  { href: '/methods', label: 'Methods', number: '02' },
  { href: '/evidence', label: 'Evidence', number: '03' },
  { href: '/claims', label: 'Claims', number: '04' },
] as const;

export const STATS = [
  {
    "value": "4",
    "label": "figures (complete gallery)"
  },
  {
    "value": "6",
    "label": "cohorts under LOGO"
  },
  {
    "value": "1,191",
    "label": "samples · 695 tumor / 496 normal"
  }
] as const;

export const RESULTS_FIGURES = [
  {
    "src": "/media/b28_F1_transfer.png",
    "alt": "Transfer performance across held-out cohorts",
    "caption": "Fig 1 — AUROC and ECE move with held-out cancer type.",
    "featured": true
  },
  {
    "src": "/media/b28_F2_signal_ladder.png",
    "alt": "Abundance versus intensity signal ladder",
    "caption": "Fig 2 — protein abundance versus global intensity/missingness.",
    "featured": true
  },
  {
    "src": "/media/b28_F3_calibration.png",
    "alt": "LOGO versus random CV calibration",
    "caption": "Fig 3 — random CV hides overconfidence under LOGO."
  },
  {
    "src": "/media/b28_F4_riskcoverage.png",
    "alt": "Risk-coverage and cohort composition",
    "caption": "Fig 4 — retained-set composition bias (LUAD/LSCC)."
  }
] as const;

export const EVIDENCE_TILES = [
  {
    "value": "0.946",
    "label": "pooled LOGO AUROC (abundance)"
  },
  {
    "value": "0.110",
    "label": "expected calibration error"
  },
  {
    "value": "r=−0.963",
    "label": "transfer worst ↔ overconfidence"
  }
] as const;

export const METHODS_SUMMARY = "Six umich proteomic cohorts (CCRCC, LUAD, UCEC, HNSCC, LSCC, PDAC) with leave-one-cohort-out tumor-versus-normal classification. Compare protein-specific abundance to global intensity and missingness features. No new mass-spec measurements — evaluation protocol only." as const;

export const CLAIMS = [
  {
    "claim": "Classifier is most overconfident where LOGO transfer is worst.",
    "scope": "Six cohorts · abundance model · ECE versus held-out type.",
    "refutation": "Show flat ECE across holdouts under the same LOGO splits."
  },
  {
    "claim": "Random k-fold CV reports higher AUROC and masks miscalibration.",
    "scope": "Same 1,191 samples · paired comparison in Fig 3.",
    "refutation": "Match LOGO calibration under random splits with batch-aware blocking."
  }
] as const;

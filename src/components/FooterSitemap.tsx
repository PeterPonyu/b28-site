import { withBasePath } from '@/lib/base-path';
import { BADGES, ROUTES, SITE } from '@/lib/site';

export default function FooterSitemap() {
  return (
    <footer className="hold-foot">
      <div className="hold-foot-row">
        <span>{SITE.title} cohort holdout</span>
        {ROUTES.map((route) => (
          <a key={route.href} href={withBasePath(route.href)}>
            {route.label}
          </a>
        ))}
        {SITE.externalLeaves.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={SITE.repo}>Repository</a>
        <a href={BADGES.code.href}>Code</a>
        <a href={BADGES.archive.href}>Archive</a>
      </div>
    </footer>
  );
}

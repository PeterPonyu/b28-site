'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BADGES, ROUTES, SITE } from '@/lib/site';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';

  return (
    <header className="hold-head" data-chrome="cohort-holdout">
      <div className="hold-head-row">
        <Link href="/" className="hold-mark">
          <span className="hold-mark-box" aria-hidden="true">
            {SITE.mark}
          </span>
          <span>{SITE.shortName}</span>
        </Link>
        <nav className="hold-nav" aria-label="Cohort holdout">
          {ROUTES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? 'is-on' : undefined}
            >
              {item.label}
            </Link>
          ))}
          {SITE.externalLeaves.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={SITE.repo}>Repository</a>
          <a href={BADGES.code.href}>Code</a>
          <a href={BADGES.archive.href}>Archive</a>
        </nav>
      </div>
    </header>
  );
}

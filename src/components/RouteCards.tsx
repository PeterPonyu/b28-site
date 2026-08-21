import Link from 'next/link';
import { ROUTES } from '@/lib/site';

export default function RouteCards() {
  return (
    <div className="hold-grid">
      {ROUTES.map((route) => (
        <Link key={route.href} href={route.href} className="hold-card">
          <span className="hold-num">{route.number}</span>
          <div>
            <h3>{route.label}</h3>
            <p>{route.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

import RouteCards from '@/components/RouteCards';
import { SITE } from '@/lib/site';

export default function B28HomePage() {
  return (
    <div className="hold-wrap">
      <p className="hold-kicker">{SITE.kicker}</p>
      <h1 className="hold-title">{SITE.title}</h1>
      <div className="hold-body">
        <p>{SITE.lead}</p>
        <p>{SITE.physicalObject}</p>
        <p>
          This is not a published article and has no article DOI. This page does not host results
          figures or numeric claims.
        </p>
        <ul className="hold-list">
          <li>
            <a href={SITE.repo}>github.com/PeterPonyu/b28-site</a>
          </li>
          <li>
            Archive: <a href="https://doi.org/10.5281/zenodo.21870024">doi.org/10.5281/zenodo.21870024</a>
          </li>
        </ul>
        <p>Build notes are in the repository README.</p>
        <h2>Explore this holdout</h2>
        <RouteCards />
      </div>
    </div>
  );
}

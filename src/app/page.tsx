import { SITE } from '@/lib/site';

export default function B28HomePage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{SITE.title}</h1>
      <p className="mt-4 text-slate-700">{SITE.lead}</p>
      <p className="mt-4 text-slate-700">
        This is not a published article and has no article DOI. This page does not host results
        figures or numeric claims.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          <a className="text-teal-800 underline" href="https://github.com/PeterPonyu/b28-site">
            github.com/PeterPonyu/b28-site
          </a>
        </li>
        <li>
          Archive:{' '}
          <a className="text-teal-800 underline" href="https://doi.org/10.5281/zenodo.21870024">
            doi.org/10.5281/zenodo.21870024
          </a>
        </li>
      </ul>
      <p className="mt-4 text-slate-700">Build notes are in the repository README.</p>
    </div>
  );
}

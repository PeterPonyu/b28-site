export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <nav
        className="mx-auto flex max-w-xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 sm:px-6"
        aria-label="Site"
      >
        <a className="text-slate-700 hover:underline" href="https://peterponyu.github.io/">
          Homepage
        </a>
        <a className="text-slate-700 hover:underline" href="https://peterponyu.github.io/scportal/">
          SCPortal
        </a>
        <a className="text-slate-700 hover:underline" href="https://github.com/PeterPonyu/b28-site">
          Repository
        </a>
        <a
          className="text-slate-700 hover:underline"
          href="https://doi.org/10.5281/zenodo.21870024"
        >
          Archive
        </a>
      </nav>
    </header>
  );
}

import FigurePanel from '@/components/FigurePanel';
import PageShell from '@/components/PageShell';
import { RESULTS_FIGURES } from '@/lib/site';

const featuredFigures = RESULTS_FIGURES.filter((fig) => 'featured' in fig && fig.featured);
const supportingFigures = RESULTS_FIGURES.filter((fig) => !('featured' in fig && fig.featured));

export default function ResultsPage() {
  return (
    <PageShell title="Results" kicker="Primary outcomes">
      <p>Primary outcomes and figure panels — labeled as results, not a generic figures dump.</p>

      <section className="mt-8" aria-label="Featured figures F1 and F2">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Featured — F1 · F2
        </h2>
        <div className="grid gap-8">
          {featuredFigures.map((fig) => (
            <FigurePanel key={fig.src} src={fig.src} alt={fig.alt} caption={fig.caption} />
          ))}
        </div>
      </section>

      <section className="mt-10" aria-label="Supporting figures F3 and F4">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Supporting — F3 · F4
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {supportingFigures.map((fig) => (
            <FigurePanel key={fig.src} src={fig.src} alt={fig.alt} caption={fig.caption} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

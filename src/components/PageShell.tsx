export default function PageShell({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
      <div className="mt-8 space-y-6 text-slate-700">{children}</div>
    </div>
  );
}

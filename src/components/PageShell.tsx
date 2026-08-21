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
    <div className="hold-wrap">
      {kicker ? <p className="hold-kicker">{kicker}</p> : null}
      <h1 className="hold-title">{title}</h1>
      <div className="hold-body">{children}</div>
    </div>
  );
}

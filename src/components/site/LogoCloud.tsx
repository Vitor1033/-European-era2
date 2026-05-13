export function LogoCloud() {
  const logos = ["Universities", "Companies", "Erasmus+", "Institutions", "Student Networks"];
  return (
    <div className="rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
        Trusted by partners across Europe
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((l) => (
          <div
            key={l}
            className="grid h-12 place-items-center rounded-2xl bg-slate-50 text-xs font-semibold text-slate-700"
            aria-label={l}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}


import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        {items.map((c, idx) => (
          <li key={`${c.label}-${idx}`} className="inline-flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-slate-900">
                {c.label}
              </Link>
            ) : (
              <span className="text-slate-900">{c.label}</span>
            )}
            {idx < items.length - 1 ? <span className="text-slate-300">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}


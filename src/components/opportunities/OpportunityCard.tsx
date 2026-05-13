import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Opportunity } from "@/content/opportunities";

const categoryLabel: Record<Opportunity["category"], string> = {
  marketing: "Marketing",
  business: "Business",
  "it-tech": "IT & Tech",
  design: "Design",
  "ai-innovation": "AI & Innovation",
  remote: "Remote"
};

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Link
      href={`/opportunities/${opportunity.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold text-slate-900">{opportunity.title}</p>
        <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
          {categoryLabel[opportunity.category]}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-600">{opportunity.shortDescription}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-600">
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-4 w-4 text-slate-400" /> {opportunity.location}
        </span>
        <span className="rounded-full bg-slate-50 px-2 py-1 ring-1 ring-inset ring-slate-200">{opportunity.duration}</span>
        <span className="rounded-full bg-slate-50 px-2 py-1 ring-1 ring-inset ring-slate-200">{opportunity.type}</span>
      </div>

      <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
        View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </p>
    </Link>
  );
}


"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Opportunity, OpportunityCategory } from "@/content/opportunities";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Input, Label, Select } from "@/components/ui/Field";

const categoryLabel: Record<OpportunityCategory | "all", string> = {
  all: "All categories",
  marketing: "Marketing",
  business: "Business",
  "it-tech": "IT & Tech",
  design: "Design",
  "ai-innovation": "AI & Innovation",
  remote: "Remote"
};

export function OpportunitiesExplorer({
  opportunities,
  initialCategory
}: {
  opportunities: Opportunity[];
  initialCategory?: OpportunityCategory;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<OpportunityCategory | "all">(initialCategory ?? "all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return opportunities.filter((o) => {
      const matchCategory = category === "all" ? true : o.category === category;
      const matchQuery = q
        ? [o.title, o.shortDescription, o.location, o.type].some((x) => x.toLowerCase().includes(q))
        : true;
      return matchCategory && matchQuery;
    });
  }, [opportunities, query, category]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_260px] md:items-end">
        <div>
          <Label htmlFor="oppSearch">Search</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="oppSearch"
              name="oppSearch"
              placeholder="Role, location, or keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-11"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="oppCategory">Category</Label>
          <Select
            id="oppCategory"
            name="oppCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value as OpportunityCategory | "all")}
          >
            {Object.entries(categoryLabel).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <p className="text-sm text-slate-600">
        Showing <span className="font-semibold text-slate-900">{filtered.length}</span> opportunities.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((o) => (
          <OpportunityCard key={o.slug} opportunity={o} />
        ))}
      </div>
    </div>
  );
}


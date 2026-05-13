"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  title: string;
  content: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {items.map((it, idx) => {
        const open = openIdx === idx;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={it.title} className={cn("border-t border-slate-200", idx === 0 && "border-t-0")}>
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={open}
              type="button"
              onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              <span className="text-sm font-semibold text-slate-900">{it.title}</span>
              <ChevronDown className={cn("h-5 w-5 text-slate-400 transition", open && "rotate-180")} />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid overflow-hidden px-6 transition-[grid-template-rows]", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="min-h-0 pb-5 text-sm leading-relaxed text-slate-600">{it.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


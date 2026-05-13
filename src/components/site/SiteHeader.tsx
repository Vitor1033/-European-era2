"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaNav, primaryNav, type NavGroup, type NavItem } from "@/content/navigation";

function isGroup(item: NavItem | NavGroup): item is NavGroup {
  return (item as NavGroup).items !== undefined;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const topLevel = useMemo(() => {
    return primaryNav.map((it) => {
      if (isGroup(it)) return it;
      return it;
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        scrolled && "border-slate-200 shadow-sm"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">EE</span>
          <span>European Era</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {topLevel.map((it) => {
            if (isGroup(it)) {
              return (
                <div key={it.label} className="group relative">
                  <button
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                    type="button"
                  >
                    {it.label}
                    <span className="text-slate-400">▾</span>
                  </button>
                  <div className="invisible absolute left-0 top-full mt-3 w-[320px] translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {it.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      >
                        <span className="font-medium">{sub.label}</span>
                        {sub.description ? (
                          <span className="mt-0.5 block text-xs text-slate-500">{sub.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link key={it.href} href={it.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" href="/contact">
            Contact
          </Button>
          <Button href={ctaNav.href}>{ctaNav.label}</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <div className="grid gap-2">
              <Link
                href="/opportunities"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Opportunities
              </Link>
              <Link
                href="/services"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/partners"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/testimonials"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button variant="secondary" href="/contact" className="w-full justify-center" onClick={() => setOpen(false)}>
                Contact
              </Button>
              <Button href={ctaNav.href} className="w-full justify-center" onClick={() => setOpen(false)}>
                {ctaNav.label}
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}


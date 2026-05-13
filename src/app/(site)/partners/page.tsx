import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Partners",
  description: "European Era partners with universities, companies, and the Erasmus+ ecosystem."
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        title="Partners"
        subtitle="A trusted network of universities, companies, and institutions — built for high-quality mobility outcomes."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/partners/become-partner">Become a partner</Button>
          <Button variant="secondary" href="/contact">
            Partnership requests
          </Button>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Universities", desc: "Structured journeys and clear coordination.", href: "/partners/universities" },
              { title: "Companies", desc: "Prepared candidates and smoother onboarding.", href: "/partners/companies" },
              { title: "Erasmus+", desc: "Aligned with mobility principles and ecosystem quality.", href: "/partners/erasmus-plus" }
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


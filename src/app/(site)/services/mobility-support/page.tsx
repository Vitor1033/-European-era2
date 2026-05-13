import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Mobility Support",
  description: "Mobility support for accommodation planning, logistics, and a smooth start abroad."
};

export default function MobilitySupportPage() {
  return (
    <>
      <PageHeader
        title="Mobility support"
        subtitle="Practical guidance for accommodation, logistics and settling in — so your move feels calm and structured."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Mobility support" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What’s included</h2>
              <div className="mt-5 grid gap-4">
                {[
                  {
                    t: "Accommodation guidance",
                    d: "How to search, evaluate options, and avoid common pitfalls."
                  },
                  {
                    t: "Logistics planning",
                    d: "Timeline planning for travel, documents, and key tasks before arrival."
                  },
                  {
                    t: "First-week playbook",
                    d: "A clear plan to settle in, build routines, and start strong."
                  }
                ].map((x) => (
                  <div key={x.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{x.t}</p>
                    <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <LeadForm kind="contact" title="Ask about mobility support" subtitle="Tell us your destination and timeline." />
          </div>
        </Container>
      </Section>
    </>
  );
}


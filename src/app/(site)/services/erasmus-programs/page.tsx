import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Erasmus Programs",
  description: "Guidance for Erasmus mobility with documentation, partner coordination, and preparation support."
};

export default function ErasmusProgramsPage() {
  return (
    <>
      <PageHeader
        title="Erasmus programs"
        subtitle="Structured guidance for mobility documentation, timelines, and partner coordination — designed to reduce stress and increase clarity."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Erasmus programs" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What we support</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Document checklists and timeline planning</li>
                <li>Partner coordination and expectation alignment</li>
                <li>Preparation calls and onboarding structure</li>
                <li>Mobility guidance (accommodation and settling in)</li>
              </ul>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Ideal for</p>
                <p className="mt-2 text-sm text-slate-600">
                  Students who want a clear roadmap and universities seeking a structured student experience.
                </p>
              </div>
            </div>
            <LeadForm
              kind="contact"
              title="Talk to us about Erasmus mobility"
              subtitle="Share your timeline and we’ll reply with next steps."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}


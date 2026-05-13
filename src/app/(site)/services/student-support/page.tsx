import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Student Support",
  description: "Student support with structured guidance, resources, and reliable communication."
};

export default function StudentSupportPage() {
  return (
    <>
      <PageHeader
        title="Student support"
        subtitle="Support that feels like a product: clear resources, reliable touchpoints, and practical guidance when it matters."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Student support" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What to expect</h2>
              <div className="mt-5 grid gap-4">
                {[
                  { t: "Clear checklists", d: "Docs, timelines, and onboarding steps in one place." },
                  { t: "Fast communication", d: "Direct answers and next steps — no unnecessary back-and-forth." },
                  { t: "Preparation support", d: "Interviews, expectations, and first-week readiness." }
                ].map((x) => (
                  <div key={x.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{x.t}</p>
                    <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <LeadForm kind="student" title="Apply for student support" subtitle="Apply and we’ll guide you to the best next step." />
          </div>
        </Container>
      </Section>
    </>
  );
}


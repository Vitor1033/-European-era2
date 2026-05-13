import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Internship Placement",
  description: "Internship placements across Europe with matching, preparation, and onboarding support."
};

export default function InternshipPlacementPage() {
  return (
    <>
      <PageHeader
        title="Internship placement"
        subtitle="Find internship opportunities across Europe with a matching process that prioritizes fit, learning, and clear expectations."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Internship placement" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">How we help</h2>
              <div className="mt-5 grid gap-4">
                {[
                  { t: "Profile intake", d: "Goals, skills, timeline, and constraints." },
                  { t: "Matching", d: "Shortlists aligned with your profile and partner needs." },
                  { t: "Preparation", d: "Interview readiness, onboarding expectations, and checklists." },
                  { t: "Start support", d: "A structured first-week plan and support touchpoints." }
                ].map((x) => (
                  <div key={x.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{x.t}</p>
                    <p className="mt-2 text-sm text-slate-600">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm kind="student" title="Start a student application" subtitle="Apply in minutes. We’ll follow up with next steps." />
          </div>
        </Container>
      </Section>
    </>
  );
}


import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Company Partners",
  description: "Partner with European Era to host internship talent and build mobility-friendly programs."
};

export default function CompanyPartnersPage() {
  return (
    <>
      <PageHeader
        title="Company partners"
        subtitle="Work with European Era to reach prepared candidates, streamline onboarding, and build reliable mobility-friendly placements."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Company partners" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Partner benefits</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Prepared candidates with clear timelines</li>
                <li>Structured matching and expectation alignment</li>
                <li>Fast communication and consistent process</li>
                <li>Support resources for a smoother start</li>
              </ul>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Best for</p>
                <p className="mt-2 text-sm text-slate-600">
                  Companies that value quality, clarity, and a reliable mobility partner across Europe.
                </p>
              </div>
            </div>

            <LeadForm
              kind="company"
              title="Become a company partner"
              subtitle="Share what roles you host and we’ll reply with next steps."
            />
          </div>
        </Container>
      </Section>
    </>
  );
}


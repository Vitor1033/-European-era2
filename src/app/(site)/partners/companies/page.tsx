import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Company partners",
  description: "Partner with European Era to host interns with prepared candidates and structured onboarding."
};

export default function CompanyPartnersHubPage() {
  return (
    <>
      <PageHeader
        title="Company partners"
        subtitle="Host interns with a structured matching process that improves clarity, speed, and onboarding outcomes."
      >
        <Breadcrumbs items={[{ label: "Partners", href: "/partners" }, { label: "Companies" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What companies get</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Prepared candidates with clear timelines</li>
                <li>Expectation alignment before onboarding</li>
                <li>Fast communication and consistent process</li>
                <li>Support resources for first-week success</li>
              </ul>
            </div>
            <LeadForm kind="company" title="Become a company partner" subtitle="Tell us what roles you host and we’ll follow up." />
          </div>
        </Container>
      </Section>
    </>
  );
}


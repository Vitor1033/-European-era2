import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Company application",
  description: "Apply to become a company partner and host interns with European Era."
};

export default function CompanyApplicationPage() {
  return (
    <>
      <PageHeader
        title="Company application"
        subtitle="Host interns with a structured matching process and prepared candidates."
      >
        <Breadcrumbs items={[{ label: "Apply", href: "/apply" }, { label: "Company" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What you’ll get</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Prepared candidates aligned with your needs.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Clear timelines and expectation alignment.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Support resources that improve onboarding.</li>
              </ul>
            </div>
            <LeadForm kind="company" title="Apply as a company" subtitle="Tell us about roles, location, and timelines." />
          </div>
        </Container>
      </Section>
    </>
  );
}


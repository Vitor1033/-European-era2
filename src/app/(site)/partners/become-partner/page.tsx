import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Become a partner",
  description: "Become a partner with European Era: universities, companies, and institutions."
};

export default function BecomePartnerPage() {
  return (
    <>
      <PageHeader
        title="Become a partner"
        subtitle="Join a European network built for quality mobility outcomes. We collaborate with universities, companies, and institutions."
      >
        <Breadcrumbs items={[{ label: "Partners", href: "/partners" }, { label: "Become partner" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Partnership principles</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Clear expectations and structured onboarding</li>
                <li>Reliable communication and transparency</li>
                <li>Student-first safety and support mindset</li>
                <li>Quality signals and measurable outcomes</li>
              </ul>
            </div>
            <LeadForm kind="partner" title="Partnership request" subtitle="Tell us what partnership you’re looking for." />
          </div>
        </Container>
      </Section>
    </>
  );
}


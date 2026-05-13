import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "University partners",
  description: "Partner with European Era to provide structured Erasmus and internship journeys for students."
};

export default function UniversityPartnersPage() {
  return (
    <>
      <PageHeader
        title="University partners"
        subtitle="Coordinate mobility journeys with clear steps, consistent communication, and scalable student resources."
      >
        <Breadcrumbs items={[{ label: "Partners", href: "/partners" }, { label: "Universities" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What universities get</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Structured process for application → matching → preparation</li>
                <li>Practical resources for students (checklists and guides)</li>
                <li>Clear communication and expectation alignment</li>
                <li>Quality-focused partner network</li>
              </ul>
            </div>
            <LeadForm kind="partner" title="Request a partnership" subtitle="Tell us your institution and needs." />
          </div>
        </Container>
      </Section>
    </>
  );
}


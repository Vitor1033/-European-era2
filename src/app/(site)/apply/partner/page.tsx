import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Partner application",
  description: "Apply to become a university or institutional partner with European Era."
};

export default function PartnerApplicationPage() {
  return (
    <>
      <PageHeader
        title="Partner application"
        subtitle="Universities and institutions: collaborate to create structured mobility experiences."
      >
        <Breadcrumbs items={[{ label: "Apply", href: "/apply" }, { label: "Partner" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Partnership focus</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Student journeys that stay structured and clear.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Reliable communication and expectation alignment.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Scalable resources: guides, checklists, and process templates.</li>
              </ul>
            </div>
            <LeadForm kind="partner" title="Apply as a partner" subtitle="Share your institution and what collaboration you need." />
          </div>
        </Container>
      </Section>
    </>
  );
}


import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Erasmus+",
  description: "European Era supports Erasmus-aligned mobility experiences with structure and quality."
};

export default function ErasmusPlusPage() {
  return (
    <>
      <PageHeader
        title="Erasmus+"
        subtitle="We align with Erasmus mobility values: structured journeys, transparency, and quality partner experiences."
      >
        <Breadcrumbs items={[{ label: "Partners", href: "/partners" }, { label: "Erasmus+" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Our approach</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Clear steps and documentation planning</li>
                <li>Partner coordination and expectation alignment</li>
                <li>Student support and practical mobility guidance</li>
                <li>Resources that help students start strong</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Want to collaborate?</p>
              <p className="mt-2 text-sm text-slate-600">Contact us to discuss Erasmus-aligned partnerships and student programs.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/partnership-requests">Partnership requests</Button>
                <Button variant="secondary" href="/partners/become-partner">
                  Become a partner
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


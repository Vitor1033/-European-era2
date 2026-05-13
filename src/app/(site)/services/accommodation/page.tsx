import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Accommodation",
  description: "Accommodation guidance and planning support for students moving across Europe."
};

export default function AccommodationPage() {
  return (
    <>
      <PageHeader
        title="Accommodation"
        subtitle="A practical approach to finding accommodation: evaluate options, reduce risk, and plan early."
      >
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Accommodation" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">Guidance you can trust</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>What to check before paying deposits</li>
                <li>Typical documents and contracts</li>
                <li>Safety and neighborhood considerations</li>
                <li>Budget planning and realistic timelines</li>
              </ul>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-slate-900">Note</p>
                <p className="mt-2 text-sm text-slate-600">
                  Requirements vary per city and season. We help you plan early and avoid common mistakes.
                </p>
              </div>
            </div>

            <LeadForm kind="contact" title="Get accommodation guidance" subtitle="Share your destination and timeframe." />
          </div>
        </Container>
      </Section>
    </>
  );
}


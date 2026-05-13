import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Documents",
  description: "Common mobility documents for Erasmus and internships."
};

export default function DocumentsPage() {
  return (
    <>
      <PageHeader title="Documents" subtitle="Common mobility documents — presented as a practical reference.">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Documents" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Common documents</p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {[
                "Learning Agreement",
                "Insurance proof",
                "Accommodation details",
                "ID/passport copies",
                "Emergency contacts",
                "CV/portfolio (for internships)"
              ].map((d) => (
                <li key={d} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Requirements vary by institution and country. When you apply, we help confirm your specific checklist early.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}


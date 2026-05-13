import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Checklists",
  description: "Checklists for Erasmus mobility and internships."
};

export default function ChecklistsPage() {
  return (
    <>
      <PageHeader title="Checklists" subtitle="Stay organized before and after arrival with clear, practical checklists.">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Checklists" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Before you go", items: ["Documents and copies", "Accommodation plan", "Budget and essentials"] },
              { title: "First week", items: ["Local SIM and transport", "Banking basics", "Meet your team/mentor"] }
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                  {c.items.map((i) => (
                    <li key={i} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


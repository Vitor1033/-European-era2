import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Downloads",
  description: "Downloads and templates for Erasmus and internships."
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader title="Downloads" subtitle="Templates and practical materials to help you stay organized.">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Downloads" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Mobility checklist (PDF)", desc: "A structured checklist for your timeline." },
              { title: "Interview prep prompts", desc: "A practical set of prompts to prepare your story." }
            ].map((d) => (
              <div key={d.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{d.title}</p>
                <p className="mt-2 text-sm text-slate-600">{d.desc}</p>
                <p className="mt-4 text-xs text-slate-500">Downloads will be enabled when assets are added.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


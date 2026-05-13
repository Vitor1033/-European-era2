import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "GDPR",
  description: "GDPR information for European Era."
};

export default function GdprPage() {
  return (
    <>
      <PageHeader title="GDPR" subtitle="Placeholder GDPR page. Replace with official legal copy before production.">
        <Breadcrumbs items={[{ label: "Legal", href: "/legal/gdpr" }, { label: "GDPR" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Summary</p>
            <p className="mt-2">
              This page is a placeholder. Add GDPR details (data controller, retention, rights, and contact) before launch.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}


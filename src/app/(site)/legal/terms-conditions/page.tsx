import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Terms & conditions",
  description: "Terms and conditions for European Era."
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms & conditions" subtitle="Placeholder legal terms. Replace with your official legal copy.">
        <Breadcrumbs items={[{ label: "Legal", href: "/legal/terms-conditions" }, { label: "Terms & conditions" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Summary</p>
            <p className="mt-2">This page is a placeholder. Add official terms before production deployment.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}


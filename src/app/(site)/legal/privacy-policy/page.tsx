import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Privacy policy",
  description: "Privacy policy for European Era."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy policy" subtitle="A clear overview of how we handle your data.">
        <Breadcrumbs items={[{ label: "Legal", href: "/legal/privacy-policy" }, { label: "Privacy policy" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Summary</p>
            <p className="mt-2">
              This is a placeholder privacy policy page. Replace with your legal copy before production launch.
            </p>
            <p className="mt-4 font-semibold text-slate-900">What we collect</p>
            <p className="mt-2">Data you submit via forms (name, email, message, and optional details).</p>
            <p className="mt-4 font-semibold text-slate-900">How we use it</p>
            <p className="mt-2">To respond to your request and improve our services.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}


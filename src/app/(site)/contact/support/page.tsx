import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Support",
  description: "European Era support for students and partners."
};

export default function SupportPage() {
  return (
    <>
      <PageHeader title="Support" subtitle="Need help with an application or next steps? Send a message and we’ll assist.">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }, { label: "Support" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What to include</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Your full name and email</li>
                <li>Your application type (student/company/partner)</li>
                <li>Your timeline and location</li>
                <li>The question or issue you’re facing</li>
              </ul>
              <p className="mt-6 text-sm text-slate-600">
                Or email us directly at{" "}
                <a className="font-medium text-brand-700 hover:text-brand-800" href="mailto:support@european-era.eu">
                  support@european-era.eu
                </a>
                .
              </p>
            </div>
            <LeadForm kind="contact" title="Contact support" subtitle="We’ll reply with next steps." />
          </div>
        </Container>
      </Section>
    </>
  );
}


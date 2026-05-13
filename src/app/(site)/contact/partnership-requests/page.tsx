import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Partnership requests",
  description: "Request a partnership with European Era."
};

export default function PartnershipRequestsPage() {
  return (
    <>
      <PageHeader
        title="Partnership requests"
        subtitle="Universities, companies, and institutions: let’s collaborate on structured mobility experiences."
      >
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }, { label: "Partnership requests" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What makes a great partnership</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Clear expectations and structured onboarding</li>
                <li>Reliable communication and transparency</li>
                <li>Student-first mindset and quality outcomes</li>
                <li>Long-term collaboration for scale</li>
              </ul>
            </div>
            <LeadForm kind="partner" title="Request a partnership" subtitle="Tell us who you are and what you need." />
          </div>
        </Container>
      </Section>
    </>
  );
}


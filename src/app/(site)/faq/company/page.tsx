import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { companyFaq } from "@/content/faq";

export const metadata = {
  title: "Company FAQ",
  description: "FAQ for companies partnering with European Era."
};

export default function CompanyFaqPage() {
  return (
    <>
      <PageHeader title="Company FAQ" subtitle="Questions about matching, onboarding, and hosting interns.">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }, { label: "Company" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={companyFaq} />
          </div>
        </Container>
      </Section>
    </>
  );
}


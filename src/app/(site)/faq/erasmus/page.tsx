import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { erasmusFaq } from "@/content/faq";

export const metadata = {
  title: "Erasmus FAQ",
  description: "FAQ about Erasmus mobility support with European Era."
};

export default function ErasmusFaqPage() {
  return (
    <>
      <PageHeader title="Erasmus FAQ" subtitle="Questions about Erasmus mobility, coordination, and practical planning.">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }, { label: "Erasmus" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={erasmusFaq} />
          </div>
        </Container>
      </Section>
    </>
  );
}


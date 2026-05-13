import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { generalFaq } from "@/content/faq";

export const metadata = {
  title: "General FAQ",
  description: "General FAQ about European Era."
};

export default function GeneralFaqPage() {
  return (
    <>
      <PageHeader title="General FAQ" subtitle="The essentials about European Era — what we do and how to start.">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }, { label: "General" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={generalFaq} />
          </div>
        </Container>
      </Section>
    </>
  );
}


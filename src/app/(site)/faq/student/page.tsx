import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { studentFaq } from "@/content/faq";

export const metadata = {
  title: "Student FAQ",
  description: "FAQ for students applying to Erasmus programs and internships."
};

export default function StudentFaqPage() {
  return (
    <>
      <PageHeader title="Student FAQ" subtitle="Questions about applications, documents, and preparing to go abroad.">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }, { label: "Student" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={studentFaq} />
          </div>
        </Container>
      </Section>
    </>
  );
}


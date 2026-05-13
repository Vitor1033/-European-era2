import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { generalFaq } from "@/content/faq";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about European Era programs, internships, and mobility support."
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Clear answers to the most common questions — so you can move forward confidently.">
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Link href="/faq/general">General</Link>
          </Badge>
          <Badge>
            <Link href="/faq/student">Student</Link>
          </Badge>
          <Badge>
            <Link href="/faq/company">Company</Link>
          </Badge>
          <Badge>
            <Link href="/faq/erasmus">Erasmus</Link>
          </Badge>
        </div>
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


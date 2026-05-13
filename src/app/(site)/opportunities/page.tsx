import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { opportunities } from "@/content/opportunities";

export const metadata = {
  title: "Opportunities",
  description: "Explore internships and Erasmus placements across Europe, with filters and clear details."
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHeader
        title="Opportunities"
        subtitle="A curated set of internships and mobility-friendly placements across Europe — with clear details and a structured application flow."
      >
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Link href="/apply/student">Apply as a student</Link>
          </Badge>
          <Badge>
            <Link href="/partners/become-partner">Become a partner</Link>
          </Badge>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={opportunities} />
        </Container>
      </Section>
    </>
  );
}


import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "Marketing opportunities",
  description: "Explore marketing internships and placements across Europe."
};

export default function MarketingOpportunitiesPage() {
  return (
    <>
      <PageHeader title="Marketing opportunities" subtitle="Growth, content, and performance roles in mobility-friendly teams.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "Marketing" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={getOpportunitiesByCategory("marketing")} initialCategory="marketing" />
        </Container>
      </Section>
    </>
  );
}


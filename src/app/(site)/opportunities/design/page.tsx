import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "Design opportunities",
  description: "Explore design internships and placements across Europe."
};

export default function DesignOpportunitiesPage() {
  return (
    <>
      <PageHeader title="Design opportunities" subtitle="UI/UX and product design roles focused on clarity and outcomes.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "Design" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={getOpportunitiesByCategory("design")} initialCategory="design" />
        </Container>
      </Section>
    </>
  );
}


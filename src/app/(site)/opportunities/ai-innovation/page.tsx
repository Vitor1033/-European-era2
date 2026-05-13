import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "AI & Innovation opportunities",
  description: "Explore AI, innovation, and research-friendly placements across Europe."
};

export default function AiInnovationOpportunitiesPage() {
  return (
    <>
      <PageHeader title="AI & Innovation opportunities" subtitle="Applied AI and innovation roles in partner organizations.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "AI & Innovation" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer
            opportunities={getOpportunitiesByCategory("ai-innovation")}
            initialCategory="ai-innovation"
          />
        </Container>
      </Section>
    </>
  );
}


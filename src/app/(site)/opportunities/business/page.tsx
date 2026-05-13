import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "Business opportunities",
  description: "Explore business and operations internships and placements across Europe."
};

export default function BusinessOpportunitiesPage() {
  return (
    <>
      <PageHeader title="Business opportunities" subtitle="Operations, strategy, and partner-facing roles with clear growth paths.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "Business" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={getOpportunitiesByCategory("business")} initialCategory="business" />
        </Container>
      </Section>
    </>
  );
}


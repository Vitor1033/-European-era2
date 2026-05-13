import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "IT & Tech opportunities",
  description: "Explore IT, engineering, and tech internships and placements across Europe."
};

export default function ItTechOpportunitiesPage() {
  return (
    <>
      <PageHeader title="IT & Tech opportunities" subtitle="Engineering roles in modern stacks — with learning and mentorship.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "IT & Tech" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={getOpportunitiesByCategory("it-tech")} initialCategory="it-tech" />
        </Container>
      </Section>
    </>
  );
}


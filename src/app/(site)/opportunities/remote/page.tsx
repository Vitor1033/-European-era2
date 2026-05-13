import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { OpportunitiesExplorer } from "@/components/opportunities/OpportunitiesExplorer";
import { getOpportunitiesByCategory } from "@/content/opportunities";

export const metadata = {
  title: "Remote opportunities",
  description: "Explore remote internships with EU-friendly hours and structured onboarding."
};

export default function RemoteOpportunitiesPage() {
  return (
    <>
      <PageHeader title="Remote opportunities" subtitle="Remote-first roles with clear deliverables and EU-friendly collaboration.">
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: "Remote" }]} />
      </PageHeader>

      <Section>
        <Container>
          <OpportunitiesExplorer opportunities={getOpportunitiesByCategory("remote")} initialCategory="remote" />
        </Container>
      </Section>
    </>
  );
}


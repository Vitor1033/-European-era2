import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export const metadata = {
  title: "Success stories",
  description: "Success stories from European Era placements and mobility outcomes."
};

export default function SuccessStoriesPage() {
  const list = testimonials.filter((t) => t.kind === "success");
  return (
    <>
      <PageHeader title="Success stories" subtitle="Outcomes and progress stories from internships and Erasmus placements.">
        <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }, { label: "Success stories" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


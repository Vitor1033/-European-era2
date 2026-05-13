import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export const metadata = {
  title: "Student stories",
  description: "Student stories and feedback from European Era journeys."
};

export default function StudentStoriesPage() {
  const list = testimonials.filter((t) => t.kind === "student");
  return (
    <>
      <PageHeader title="Student stories" subtitle="Experiences from students who moved forward with clarity and support.">
        <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }, { label: "Student stories" }]} />
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


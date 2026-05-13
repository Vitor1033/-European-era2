import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export const metadata = {
  title: "Partner feedback",
  description: "Partner feedback from universities and companies working with European Era."
};

export default function PartnerFeedbackPage() {
  const list = testimonials.filter((t) => t.kind === "partner");
  return (
    <>
      <PageHeader title="Partner feedback" subtitle="Feedback from partners focused on process quality and clarity.">
        <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }, { label: "Partner feedback" }]} />
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


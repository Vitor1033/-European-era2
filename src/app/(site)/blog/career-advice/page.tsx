import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/content/blog";

export const metadata = {
  title: "Career advice",
  description: "Career advice for EU internships: interviews, CV, portfolio, and communication."
};

export default function CareerAdvicePage() {
  const list = getPostsByCategory("career-advice");
  return (
    <>
      <PageHeader title="Career advice" subtitle="Interviews, portfolio signals, and practical steps to stand out.">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Career advice" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/content/blog";

export const metadata = {
  title: "Student experience",
  description: "Student experience guides: settling in, routines, and practical life abroad."
};

export default function StudentExperiencePage() {
  const list = getPostsByCategory("student-experience");
  return (
    <>
      <PageHeader title="Student experience" subtitle="Practical guides to arrive, settle, and build confidence abroad.">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Student experience" }]} />
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


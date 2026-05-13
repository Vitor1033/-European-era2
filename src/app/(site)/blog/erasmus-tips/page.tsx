import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/content/blog";

export const metadata = {
  title: "Erasmus tips",
  description: "Practical Erasmus tips: documents, timelines, and mobility planning."
};

export default function ErasmusTipsPage() {
  const list = getPostsByCategory("erasmus-tips");
  return (
    <>
      <PageHeader title="Erasmus tips" subtitle="Clear, practical guidance for Erasmus mobility and documentation.">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Erasmus tips" }]} />
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


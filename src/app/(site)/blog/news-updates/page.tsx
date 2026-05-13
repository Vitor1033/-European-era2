import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/content/blog";

export const metadata = {
  title: "News & updates",
  description: "European Era news and updates."
};

export default function NewsUpdatesPage() {
  const list = getPostsByCategory("news-updates");
  return (
    <>
      <PageHeader title="News & updates" subtitle="Announcements and platform updates from European Era.">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "News & updates" }]} />
      </PageHeader>

      <Section>
        <Container>
          {list.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              Updates will appear here. For now, browse the latest posts on the blog.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}


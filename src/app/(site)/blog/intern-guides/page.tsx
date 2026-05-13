import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { getPostsByCategory } from "@/content/blog";

export const metadata = {
  title: "Intern guides",
  description: "Internship guides: preparation, onboarding, and how to start strong."
};

export default function InternGuidesPage() {
  const list = getPostsByCategory("intern-guides");
  return (
    <>
      <PageHeader title="Intern guides" subtitle="Guides for onboarding, expectations, and strong outcomes in internships.">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "Intern guides" }]} />
      </PageHeader>

      <Section>
        <Container>
          {list.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
              New guides are coming soon. In the meantime, browse the latest posts on the blog.
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


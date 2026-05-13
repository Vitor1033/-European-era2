import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getLatestPosts, getPostBySlug } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog post" };
  return { title: post.title, description: post.excerpt };
}

const categoryLabel: Record<string, string> = {
  "erasmus-tips": "Erasmus tips",
  "career-advice": "Career advice",
  "intern-guides": "Intern guides",
  "student-experience": "Student experience",
  "news-updates": "News & updates"
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const recommended = getLatestPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHeader title={post.title} subtitle={post.excerpt}>
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Badge>{categoryLabel[post.category] ?? post.category}</Badge>
          <Badge>{post.readingTime}</Badge>
          <Badge>{new Date(post.date).toLocaleDateString("en-GB")}</Badge>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              {post.content.map((block, idx) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={idx} className="mt-8 text-xl font-semibold tracking-tight text-slate-900 first:mt-0">
                      {block.value as string}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={idx} className="mt-4 grid gap-2 text-sm text-slate-700">
                      {(block.value as string[]).map((li) => (
                        <li key={li} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="mt-4 text-sm leading-relaxed text-slate-700 first:mt-0">
                    {block.value as string}
                  </p>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Want help with your next step?</p>
              <p className="mt-2 text-sm text-slate-600">
                Apply as a student or contact us to discuss mobility, placements, or partnerships.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/apply/student">Apply now</Button>
                <Button variant="secondary" href="/contact">
                  Contact us
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-end justify-between gap-6">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">Recommended posts</h2>
                <Link className="text-sm font-medium text-brand-700 hover:text-brand-800" href="/blog">
                  View all
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {recommended.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}


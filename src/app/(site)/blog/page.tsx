import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { posts } from "@/content/blog";

export const metadata = {
  title: "Blog",
  description: "Practical guides and insights for Erasmus mobility, internship preparation, and student life abroad."
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Practical guidance for Erasmus mobility, internship preparation, and career growth — written for clarity."
      >
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Link href="/blog/erasmus-tips">Erasmus tips</Link>
          </Badge>
          <Badge>
            <Link href="/blog/career-advice">Career advice</Link>
          </Badge>
          <Badge>
            <Link href="/blog/intern-guides">Intern guides</Link>
          </Badge>
          <Badge>
            <Link href="/blog/student-experience">Student experience</Link>
          </Badge>
          <Badge>
            <Link href="/blog/news-updates">News & updates</Link>
          </Badge>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


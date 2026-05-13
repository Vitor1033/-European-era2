import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

const categoryLabel: Record<BlogPost["category"], string> = {
  "erasmus-tips": "Erasmus tips",
  "career-advice": "Career advice",
  "intern-guides": "Intern guides",
  "student-experience": "Student experience",
  "news-updates": "News & updates"
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
          {categoryLabel[post.category]}
        </span>
        <span className="text-xs text-slate-500">{post.readingTime}</span>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-900">{post.title}</p>
      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
        Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </p>
    </Link>
  );
}


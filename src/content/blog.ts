export type BlogCategory =
  | "erasmus-tips"
  | "career-advice"
  | "intern-guides"
  | "student-experience"
  | "news-updates";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  content: Array<{ type: "p" | "h2" | "ul"; value: string | string[] }>;
};

export const posts: BlogPost[] = [
  {
    slug: "erasmus-documents-checklist",
    title: "Erasmus documents checklist (what you actually need)",
    category: "erasmus-tips",
    excerpt: "A practical checklist for the most common Erasmus mobility documents — and how to avoid last-minute stress.",
    date: "2026-05-01",
    readingTime: "6 min",
    content: [
      {
        type: "p",
        value:
          "Paperwork is one of the biggest sources of delays. A clear checklist, a timeline, and a single place to store files will save you hours."
      },
      { type: "h2", value: "A simple checklist" },
      {
        type: "ul",
        value: ["Learning Agreement", "Insurance proof", "Accommodation details", "ID/passport copies", "Emergency contacts"]
      },
      {
        type: "p",
        value:
          "Your specific list depends on your institution and host country. European Era helps you confirm requirements early and keep everything structured."
      }
    ]
  },
  {
    slug: "internship-interview-prep-eu",
    title: "Internship interview prep for EU companies",
    category: "career-advice",
    excerpt: "How to prepare for internship interviews with a clear story, strong portfolio signals, and confident communication.",
    date: "2026-04-18",
    readingTime: "7 min",
    content: [
      { type: "p", value: "Focus on clarity: your goal, your projects, and your learning mindset. Keep it concrete, not generic." },
      { type: "h2", value: "What to prepare" },
      { type: "ul", value: ["A 60-second intro", "Two projects with outcomes", "One challenge + what you learned"] }
    ]
  },
  {
    slug: "first-week-abroad-playbook",
    title: "Your first week abroad: a calm playbook",
    category: "student-experience",
    excerpt: "A structured way to arrive, settle, and start strong — without overwhelm.",
    date: "2026-03-30",
    readingTime: "5 min",
    content: [
      { type: "p", value: "Treat the first week like onboarding: focus on essentials, small wins, and building routines." },
      { type: "h2", value: "Small wins that matter" },
      { type: "ul", value: ["Local SIM + transport card", "Bank basics", "Meet your team/mentor", "Write your weekly plan"] }
    ]
  }
];

export function getLatestPosts(limit = 3) {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory) {
  return posts.filter((p) => p.category === category);
}


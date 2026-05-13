import type { MetadataRoute } from "next";
import { opportunities } from "@/content/opportunities";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://european-era.eu";

  const staticRoutes = [
    "/",
    "/about",
    "/about/mission",
    "/about/vision",
    "/about/team",
    "/about/values",
    "/opportunities",
    "/opportunities/marketing",
    "/opportunities/business",
    "/opportunities/it-tech",
    "/opportunities/design",
    "/opportunities/ai-innovation",
    "/opportunities/remote",
    "/services",
    "/services/erasmus-programs",
    "/services/internship-placement",
    "/services/mobility-support",
    "/services/accommodation",
    "/services/student-support",
    "/services/company-partners",
    "/how-it-works",
    "/how-it-works/apply",
    "/how-it-works/matching",
    "/how-it-works/preparation",
    "/how-it-works/start-experience",
    "/partners",
    "/partners/universities",
    "/partners/companies",
    "/partners/erasmus-plus",
    "/partners/become-partner",
    "/testimonials",
    "/testimonials/student-stories",
    "/testimonials/success-stories",
    "/testimonials/partner-feedback",
    "/blog",
    "/blog/erasmus-tips",
    "/blog/career-advice",
    "/blog/intern-guides",
    "/blog/student-experience",
    "/blog/news-updates",
    "/apply",
    "/apply/student",
    "/apply/company",
    "/apply/partner",
    "/faq",
    "/faq/general",
    "/faq/student",
    "/faq/company",
    "/faq/erasmus",
    "/contact",
    "/contact/support",
    "/contact/partnership-requests",
    "/resources",
    "/resources/guides",
    "/resources/downloads",
    "/resources/checklists",
    "/resources/documents",
    "/legal/privacy-policy",
    "/legal/terms-conditions",
    "/legal/cookie-policy",
    "/legal/gdpr"
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7
    })),
    ...opportunities.map((o) => ({
      url: `${baseUrl}/opportunities/${o.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6
    })),
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.5
    }))
  ];
}


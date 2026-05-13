export type OpportunityCategory =
  | "marketing"
  | "business"
  | "it-tech"
  | "design"
  | "ai-innovation"
  | "remote";

export type Opportunity = {
  slug: string;
  title: string;
  category: OpportunityCategory;
  location: string;
  duration: string;
  type: "Internship" | "Erasmus Placement" | "Remote Internship";
  shortDescription: string;
  featured?: boolean;
  highlights: string[];
  requirements: string[];
};

export const opportunities: Opportunity[] = [
  {
    slug: "growth-marketing-intern-lisbon",
    title: "Growth Marketing Intern",
    category: "marketing",
    location: "Lisbon, Portugal",
    duration: "3–6 months",
    type: "Internship",
    shortDescription: "Support campaigns, content distribution, and analytics in a fast-paced EU startup environment.",
    featured: true,
    highlights: ["Hands-on campaign execution", "Mentorship + weekly feedback", "Portfolio-ready outcomes"],
    requirements: ["English B2+", "Basic analytics literacy", "Curiosity and ownership"]
  },
  {
    slug: "business-operations-intern-berlin",
    title: "Business Operations Intern",
    category: "business",
    location: "Berlin, Germany",
    duration: "4–6 months",
    type: "Internship",
    shortDescription: "Learn how EU teams run operations: reporting, process improvement, and partner coordination.",
    featured: true,
    highlights: ["Cross-functional exposure", "Structured onboarding", "Hybrid-friendly team"],
    requirements: ["English B2+", "Excel/Sheets basics", "Strong organization"]
  },
  {
    slug: "frontend-intern-barcelona",
    title: "Frontend Developer Intern (React)",
    category: "it-tech",
    location: "Barcelona, Spain",
    duration: "3–6 months",
    type: "Internship",
    shortDescription: "Build production UI, ship features, and learn best practices in modern web development.",
    featured: true,
    highlights: ["React + TypeScript stack", "Code reviews and pairing", "Real product impact"],
    requirements: ["React fundamentals", "Git basics", "Comfort with TypeScript or willingness to learn"]
  },
  {
    slug: "product-design-intern-amsterdam",
    title: "Product Design Intern",
    category: "design",
    location: "Amsterdam, Netherlands",
    duration: "3–5 months",
    type: "Internship",
    shortDescription: "Design user flows and polished UI components with a focus on clarity and conversion.",
    highlights: ["Figma-first workflow", "Design system exposure", "User research practice"],
    requirements: ["Portfolio required", "UX fundamentals", "Attention to detail"]
  },
  {
    slug: "ai-innovation-analyst-prague",
    title: "AI & Innovation Analyst",
    category: "ai-innovation",
    location: "Prague, Czechia",
    duration: "4–6 months",
    type: "Erasmus Placement",
    shortDescription: "Support innovation projects and AI adoption initiatives in a partner organization.",
    highlights: ["Applied AI projects", "Stakeholder collaboration", "European partner ecosystem"],
    requirements: ["English B2+", "Research mindset", "Comfort with data/tools"]
  },
  {
    slug: "remote-data-intern-eu",
    title: "Remote Data Intern (EU-friendly hours)",
    category: "remote",
    location: "Remote",
    duration: "3–6 months",
    type: "Remote Internship",
    shortDescription: "Work remotely on dashboards and reporting with a distributed European team.",
    highlights: ["Remote-first culture", "Clear weekly deliverables", "Documentation-driven work"],
    requirements: ["English B2+", "Basic SQL or BI tool familiarity", "Reliable communication"]
  }
];

export function getFeaturedOpportunities() {
  return opportunities.filter((o) => o.featured).slice(0, 3);
}

export function getOpportunityBySlug(slug: string) {
  return opportunities.find((o) => o.slug === slug);
}

export function getOpportunitiesByCategory(category: OpportunityCategory) {
  return opportunities.filter((o) => o.category === category);
}


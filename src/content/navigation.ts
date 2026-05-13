export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const primaryNav: Array<NavItem | NavGroup> = [
  {
    label: "Opportunities",
    items: [
      { label: "All opportunities", href: "/opportunities" },
      { label: "Marketing", href: "/opportunities/marketing" },
      { label: "Business", href: "/opportunities/business" },
      { label: "IT & Tech", href: "/opportunities/it-tech" },
      { label: "Design", href: "/opportunities/design" },
      { label: "AI & Innovation", href: "/opportunities/ai-innovation" },
      { label: "Remote", href: "/opportunities/remote" }
    ]
  },
  {
    label: "Services",
    items: [
      { label: "Erasmus programs", href: "/services/erasmus-programs" },
      { label: "Internship placement", href: "/services/internship-placement" },
      { label: "Mobility support", href: "/services/mobility-support" },
      { label: "Accommodation", href: "/services/accommodation" },
      { label: "Student support", href: "/services/student-support" },
      { label: "Company partners", href: "/services/company-partners" }
    ]
  },
  {
    label: "How it works",
    items: [
      { label: "Apply", href: "/how-it-works/apply" },
      { label: "Matching", href: "/how-it-works/matching" },
      { label: "Preparation", href: "/how-it-works/preparation" },
      { label: "Start experience", href: "/how-it-works/start-experience" }
    ]
  },
  { label: "Partners", href: "/partners" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" }
];

export const ctaNav = {
  label: "Apply",
  href: "/apply"
};


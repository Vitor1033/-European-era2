import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Services",
  description:
    "Explore European Era services: Erasmus programs, internship placement, mobility support, accommodation and student support."
};

const services = [
  {
    title: "Erasmus Programs",
    desc: "Guidance for Erasmus mobility, documentation, and partner coordination.",
    href: "/services/erasmus-programs"
  },
  {
    title: "Internship Placement",
    desc: "Curated placements across Europe with matching and onboarding support.",
    href: "/services/internship-placement"
  },
  {
    title: "Mobility Support",
    desc: "Structured support for logistics, settling in, and practical steps.",
    href: "/services/mobility-support"
  },
  { title: "Accommodation", desc: "Help navigating accommodation options and planning.", href: "/services/accommodation" },
  { title: "Student Support", desc: "Check-ins, resources, and guidance when you need it.", href: "/services/student-support" },
  {
    title: "Company Partners",
    desc: "Partner with us to host talent and build mobility-friendly programs.",
    href: "/services/company-partners"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services designed for clarity"
        subtitle="European Era supports students and partners from first contact to a confident start — through a structured, step-by-step process."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/apply/student">Apply now</Button>
          <Button variant="secondary" href="/contact">
            Contact us
          </Button>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


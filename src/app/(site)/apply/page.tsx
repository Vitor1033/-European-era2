import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Apply",
  description: "Apply as a student, company, or partner to work with European Era."
};

export default function ApplyIndexPage() {
  return (
    <>
      <PageHeader
        title="Apply"
        subtitle="Choose the application that matches your role. We’ll follow up with clear next steps."
      />

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Student application",
                desc: "Apply for Erasmus programs or internship placements across Europe.",
                href: "/apply/student"
              },
              {
                title: "Company application",
                desc: "Host students and access a reliable candidate pipeline with structured matching.",
                href: "/apply/company"
              },
              {
                title: "Partner application",
                desc: "Universities and institutions: collaborate to scale mobility opportunities.",
                href: "/apply/partner"
              }
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                  Start <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


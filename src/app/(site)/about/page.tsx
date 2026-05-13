import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "About",
  description: "Learn about European Era — our mission, values, and the team behind our student-first approach."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About European Era"
        subtitle="A modern European mobility partner for students, universities, and companies — built around clarity, trust, and outcomes."
      />

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Mission",
                desc: "Make Erasmus and internships accessible with structure, guidance, and partner quality.",
                href: "/about/mission"
              },
              {
                title: "Vision",
                desc: "A European ecosystem where mobility is simple, transparent, and opportunity-rich.",
                href: "/about/vision"
              },
              { title: "Team", desc: "A cross-functional team focused on student success and partner excellence.", href: "/about/team" },
              { title: "Values", desc: "Principles that guide how we communicate, match, and support.", href: "/about/values" }
            ].map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
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


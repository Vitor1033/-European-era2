import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "How it works",
  description: "Learn how European Era works: apply, matching, preparation and starting your experience."
};

const steps = [
  { title: "Apply", href: "/how-it-works/apply", desc: "Tell us your goals, timeline, and preferences." },
  { title: "Matching", href: "/how-it-works/matching", desc: "We align you with suitable opportunities and partners." },
  { title: "Preparation", href: "/how-it-works/preparation", desc: "Docs, onboarding, and interview readiness." },
  { title: "Start experience", href: "/how-it-works/start-experience", desc: "Arrive confident with clear expectations." }
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How it works"
        subtitle="A structured journey designed to reduce uncertainty and help students and partners move faster with clarity."
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
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((s, idx) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold text-brand-700">Step {String(idx + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{s.title}</p>
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


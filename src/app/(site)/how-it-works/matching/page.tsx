import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "How it works — Matching",
  description: "Step 2: matching. How European Era aligns students and partners with the right opportunities."
};

export default function HowMatchingPage() {
  return (
    <>
      <PageHeader
        title="Step 02 — Matching"
        subtitle="We match based on skills, learning goals, and timelines — with clear expectations to reduce friction."
      >
        <Breadcrumbs items={[{ label: "How it works", href: "/how-it-works" }, { label: "Matching" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Profile fit", d: "Skills, interests, and learning goals aligned with roles." },
              { t: "Timeline fit", d: "Start dates and duration matched to partner constraints." },
              { t: "Expectation clarity", d: "We confirm what success looks like before you start." },
              { t: "Quality signals", d: "We prioritize partners that support learning and growth." }
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{x.t}</p>
                <p className="mt-2 text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


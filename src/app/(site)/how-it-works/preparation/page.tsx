import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "How it works — Preparation",
  description: "Step 3: preparation. Documents, onboarding and interview readiness with European Era."
};

export default function HowPreparationPage() {
  return (
    <>
      <PageHeader
        title="Step 03 — Preparation"
        subtitle="Preparation that removes uncertainty: checklists, onboarding expectations, and practical mobility steps."
      >
        <Breadcrumbs items={[{ label: "How it works", href: "/how-it-works" }, { label: "Preparation" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Documents & timeline", d: "Know what’s needed, when, and where to store it." },
              { t: "Interview readiness", d: "A clear story, practical examples, and calm preparation." },
              { t: "Onboarding expectations", d: "What success looks like in the first week and month." },
              { t: "Mobility planning", d: "Accommodation, arrival steps, and local essentials." }
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


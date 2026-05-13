import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "How it works — Apply",
  description: "Step 1: apply. Share your goals and timeline to start the European Era process."
};

export default function HowApplyPage() {
  return (
    <>
      <PageHeader title="Step 01 — Apply" subtitle="Start with a simple application. We use it to understand fit and timelines.">
        <Breadcrumbs items={[{ label: "How it works", href: "/how-it-works" }, { label: "Apply" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What we ask for</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Your goals and preferred countries/cities</li>
                <li>Availability and target start date</li>
                <li>Skills, interests, and learning objectives</li>
                <li>Constraints (visa, remote preference, etc.)</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Ready to apply?</p>
              <p className="mt-2 text-sm text-slate-600">Applications take ~3 minutes and help us match you faster.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/apply/student">Apply as a student</Button>
                <Button variant="secondary" href="/apply/company">
                  Company application
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


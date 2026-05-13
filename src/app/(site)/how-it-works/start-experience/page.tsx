import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "How it works — Start experience",
  description: "Step 4: start your experience with clear expectations and a structured first-week plan."
};

export default function HowStartExperiencePage() {
  return (
    <>
      <PageHeader
        title="Step 04 — Start experience"
        subtitle="A calm start matters. We help you arrive prepared, set expectations, and build routines in the first weeks."
      >
        <Breadcrumbs items={[{ label: "How it works", href: "/how-it-works" }, { label: "Start experience" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">First-week structure</p>
              <ol className="mt-4 grid gap-3 text-sm text-slate-600">
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Confirm onboarding, schedule, and mentor contact.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Set up essentials (SIM, transport, banking basics).</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">Define weekly goals and communication cadence.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Need support?</p>
              <p className="mt-2 text-sm text-slate-600">
                Contact us if you have questions about preparation, mobility logistics, or partner expectations.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Contact us</Button>
                <Button variant="secondary" href="/faq">
                  Read FAQ
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


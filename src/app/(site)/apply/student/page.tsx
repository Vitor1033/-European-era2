import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Student application",
  description: "Apply for Erasmus programs and internships across Europe with European Era."
};

export default function StudentApplicationPage() {
  return (
    <>
      <PageHeader
        title="Student application"
        subtitle="Apply in minutes. We’ll follow up with matching and clear next steps."
      >
        <Breadcrumbs items={[{ label: "Apply", href: "/apply" }, { label: "Student" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="text-slate-700">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">What happens after you apply</h2>
              <ol className="mt-4 grid gap-3 text-sm text-slate-600">
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">We review your profile and timeline.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">We match you to suitable opportunities or programs.</li>
                <li className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">You get preparation support for interviews and onboarding.</li>
              </ol>
            </div>
            <LeadForm kind="student" title="Apply now" subtitle="Share your goals and we’ll reply with next steps." />
          </div>
        </Container>
      </Section>
    </>
  );
}


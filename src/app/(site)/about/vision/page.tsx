import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Vision",
  description: "European Era’s vision for a simpler, more connected European mobility ecosystem."
};

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title="Our vision"
        subtitle="A European ecosystem where mobility is simple, opportunity-driven, and accessible — for students and partners."
      >
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Vision" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="max-w-3xl text-slate-700">
            <p className="text-base leading-relaxed">
              We believe mobility should feel like a guided product experience — not a fragmented set of emails and unknowns.
              European Era is building a modern platform foundation where content stays editable, processes are measurable, and
              partnerships scale responsibly.
            </p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What this means in practice</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                <li>Structured journeys for students and partners</li>
                <li>Clear quality signals for opportunities and placements</li>
                <li>Content and resources that stay current and actionable</li>
                <li>Technology that supports trust, not noise</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


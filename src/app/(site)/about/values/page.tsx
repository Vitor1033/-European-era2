import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Values",
  description: "The values that guide European Era’s work with students and partners."
};

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        title="Our values"
        subtitle="We design every step around trust, clarity, and a respectful conversion experience."
      >
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Values" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Clarity",
                desc: "We explain steps, timelines, and expectations in plain language."
              },
              {
                title: "Trust",
                desc: "We prioritize partner quality, student safety, and transparent communication."
              },
              {
                title: "Outcomes",
                desc: "We focus on placements that create real learning and career progress."
              },
              {
                title: "Respect",
                desc: "We keep CTAs direct and helpful — never manipulative."
              }
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{v.title}</p>
                <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


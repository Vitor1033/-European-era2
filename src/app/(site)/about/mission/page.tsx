import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Mission",
  description: "European Era’s mission: make mobility opportunities easier to access through clarity and support."
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        title="Our mission"
        subtitle="Make European mobility more accessible — with a process that is transparent, supportive, and built for real outcomes."
      >
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Mission" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="max-w-3xl text-slate-700">
            <p className="text-base leading-relaxed">
              European Era exists to help students move from interest to action with confidence. We reduce complexity across
              applications, matching, preparation, and practical mobility steps — so the experience feels achievable and
              structured.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Clarity over confusion", desc: "Clear steps, timelines, and expectations." },
                { title: "Support that scales", desc: "Guides, checklists, and human touchpoints." },
                { title: "Quality network", desc: "Partners aligned with learning and growth." },
                { title: "Conversion with trust", desc: "CTAs that respect user intent and decision-making." }
              ].map((b) => (
                <div key={b.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">{b.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


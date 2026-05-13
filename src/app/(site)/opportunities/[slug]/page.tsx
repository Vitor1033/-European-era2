import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getOpportunityBySlug } from "@/content/opportunities";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const o = getOpportunityBySlug(slug);
  if (!o) return { title: "Opportunity" };
  return {
    title: o.title,
    description: o.shortDescription
  };
}

export default async function OpportunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const o = getOpportunityBySlug(slug);
  if (!o) notFound();

  return (
    <>
      <PageHeader title={o.title} subtitle={o.shortDescription}>
        <Breadcrumbs items={[{ label: "Opportunities", href: "/opportunities" }, { label: o.title }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>{o.type}</Badge>
                <Badge className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-slate-400" /> {o.location}
                </Badge>
                <Badge>{o.duration}</Badge>
              </div>

              <h2 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">Highlights</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                {o.highlights.map((h) => (
                  <li key={h} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">
                    {h}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-semibold tracking-tight text-slate-900">Requirements</h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                {o.requirements.map((r) => (
                  <li key={r} className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-inset ring-slate-200">
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Apply for this opportunity</p>
              <p className="mt-2 text-sm text-slate-600">
                Apply as a student and we’ll follow up with matching and next steps.
              </p>
              <div className="mt-6 grid gap-3">
                <Button href="/apply/student" className="w-full justify-center">
                  Apply now
                </Button>
                <Button variant="secondary" href="/contact" className="w-full justify-center">
                  Ask a question
                </Button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Tip: mention <span className="font-semibold text-slate-700">{o.slug}</span> in your message.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


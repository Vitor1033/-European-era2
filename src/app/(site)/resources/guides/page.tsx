import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Guides",
  description: "Guides for Erasmus mobility and internship preparation."
};

export default function GuidesPage() {
  return (
    <>
      <PageHeader title="Guides" subtitle="Structured guidance for Erasmus mobility and internships — built for clarity.">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Guides" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Coming soon</p>
              <p className="mt-2 text-sm text-slate-600">
                We’re preparing practical guides. For now, explore the blog or contact us for personalized support.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href="/blog">Visit blog</Button>
                <Button variant="secondary" href="/contact">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


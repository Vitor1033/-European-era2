import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Team",
  description: "Meet the team behind European Era."
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our team"
        subtitle="A small, focused team combining student support, partnerships, and a product mindset."
      >
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Team" }]} />
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Program Lead", role: "Mobility & Erasmus coordination", bio: "Ensures journeys stay structured and transparent." },
              { name: "Partnerships", role: "Universities & companies", bio: "Builds high-quality networks and alignment." },
              { name: "Student Success", role: "Onboarding & support", bio: "Turns uncertainty into clear next steps." },
              { name: "Operations", role: "Process & quality", bio: "Improves the flow end-to-end for scaling." },
              { name: "Content", role: "Guides & resources", bio: "Creates practical materials that save time." },
              { name: "Product", role: "Platform foundation", bio: "Prepares the site for CMS, forms and analytics." }
            ].map((m) => (
              <div key={m.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
                  EE
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">{m.name}</p>
                <p className="mt-1 text-sm text-slate-600">{m.role}</p>
                <p className="mt-3 text-sm text-slate-600">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


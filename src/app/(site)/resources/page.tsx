import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Resources",
  description: "Resources for Erasmus mobility and internships: guides, downloads, checklists, and documents."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        subtitle="Practical resources designed to reduce stress and improve clarity — from checklists to downloadable templates."
      />

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Guides", desc: "Step-by-step articles and playbooks.", href: "/resources/guides" },
              { title: "Downloads", desc: "Templates and helpful materials.", href: "/resources/downloads" },
              { title: "Checklists", desc: "Stay organized before and after arrival.", href: "/resources/checklists" },
              { title: "Documents", desc: "Common mobility document references.", href: "/resources/documents" }
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


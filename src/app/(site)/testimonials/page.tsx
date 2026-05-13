import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Testimonials",
  description: "Feedback from students and partners who worked with European Era."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        title="Testimonials"
        subtitle="Real feedback from students and partners — focused on clarity, trust, and successful outcomes."
      >
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Link href="/testimonials/student-stories">Student stories</Link>
          </Badge>
          <Badge>
            <Link href="/testimonials/success-stories">Success stories</Link>
          </Badge>
          <Badge>
            <Link href="/testimonials/partner-feedback">Partner feedback</Link>
          </Badge>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50 p-6 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900">Ready to start?</p>
                <p className="mt-1 text-sm text-slate-600">Explore opportunities or apply in minutes.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  href="/opportunities"
                >
                  Explore opportunities <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  href="/apply/student"
                >
                  Apply now
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


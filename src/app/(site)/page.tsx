import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LogoCloud } from "@/components/site/LogoCloud";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { getFeaturedOpportunities } from "@/content/opportunities";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import { BlogCard } from "@/components/blog/BlogCard";
import { getLatestPosts } from "@/content/blog";
import { Accordion } from "@/components/ui/Accordion";
import { generalFaq } from "@/content/faq";

export const metadata = {
  title: "Home",
  description:
    "European Era helps students access Erasmus programs and internships across Europe with end-to-end mobility support."
};

export default function HomePage() {
  const featuredOpps = getFeaturedOpportunities();
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Section className="overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                Erasmus & internships made simple
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Move faster into your European experience.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg text-slate-600">
                European Era connects students to trusted Erasmus programs and internship placements across Europe —
                with matching, preparation, and mobility support end-to-end.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" href="/apply/student">
                  Apply now <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary" href="/opportunities">
                  Explore opportunities
                </Button>
              </div>
              <ul className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                {[
                  "Europe-wide opportunity network",
                  "Student-first guidance and support",
                  "Partner matching for companies & universities",
                  "Clear timelines and transparent steps"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-tr from-brand-100 via-white to-brand-50 blur-2xl" />
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-900">What you get</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "Opportunity matching", desc: "Aligned with your profile, goals, and timeline." },
                    { title: "Preparation support", desc: "Docs, onboarding, and expectations clarified." },
                    { title: "Mobility guidance", desc: "Accommodation, logistics, and student support." },
                    { title: "Partner network", desc: "Universities, companies, and Erasmus+ ecosystem." }
                  ].map((c) => (
                    <div key={c.title} className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Ready to start?</p>
                    <p className="text-sm text-slate-600">Applications take ~3 minutes.</p>
                  </div>
                  <Button href="/apply/student">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-10">
        <Container>
          <LogoCloud />
        </Container>
      </Section>

      <Section className="py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "EU network", v: "Universities, companies & institutions" },
              { k: "Structured process", v: "Apply → matching → preparation → start" },
              { k: "Student-first", v: "Clarity, support, and quality outcomes" }
            ].map((s) => (
              <div key={s.k} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-900">{s.k}</p>
                <p className="mt-2 text-sm text-slate-600">{s.v}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Our core services</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                A structured process that supports students and partners from first contact to a successful start.
              </p>
            </div>
            <Button variant="secondary" className="hidden sm:inline-flex" href="/services">
              View all services
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Erasmus Programs",
                desc: "Guidance for Erasmus mobility, documentation, and partner coordination.",
                href: "/services/erasmus-programs"
              },
              {
                title: "Internship Placement",
                desc: "Find internships across Europe with support from matching to onboarding.",
                href: "/services/internship-placement"
              },
              {
                title: "Mobility Support",
                desc: "Accommodation, travel planning, and student support during the process.",
                href: "/services/mobility-support"
              }
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
                  Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
              <p className="mt-2 text-slate-600">
                A clear, step-by-step experience that keeps you informed — from application to your first week.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { step: "01", title: "Apply", href: "/how-it-works/apply", desc: "Tell us your goals and timeline." },
                { step: "02", title: "Matching", href: "/how-it-works/matching", desc: "We align you with the right path." },
                { step: "03", title: "Preparation", href: "/how-it-works/preparation", desc: "Docs, onboarding, expectations." },
                { step: "04", title: "Start experience", href: "/how-it-works/start-experience", desc: "Arrive confident and supported." }
              ].map((it) => (
                <Link
                  key={it.title}
                  href={it.href}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-xs font-semibold text-brand-700">{it.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{it.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured opportunities</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Explore a curated set of internships and mobility-friendly placements across Europe.
              </p>
            </div>
            <Button variant="secondary" className="hidden sm:inline-flex" href="/opportunities">
              Browse all
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredOpps.map((o) => (
              <OpportunityCard key={o.slug} opportunity={o} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">What students say</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Real feedback from students and partners who moved forward with clarity.
              </p>
            </div>
            <Button variant="secondary" className="hidden sm:inline-flex" href="/testimonials">
              View all
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Latest insights</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Practical guidance for Erasmus mobility, internship preparation, and career growth.
              </p>
            </div>
            <Button variant="secondary" className="hidden sm:inline-flex" href="/blog">
              Visit blog
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
              <p className="mt-2 text-slate-600">
                Quick answers to common questions. For more details, visit the full FAQ.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/faq">View all FAQs</Button>
                <Button variant="secondary" href="/contact">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="max-w-xl">
              <Accordion items={generalFaq} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-white to-brand-50">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Ready to take the next step?</h2>
                <p className="mt-2 max-w-2xl text-slate-600">
                  Apply as a student, or contact us to explore partnerships for universities and companies.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" href="/apply/student">
                  Apply now
                </Button>
                <Button size="lg" variant="secondary" href="/contact">
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


import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Contact",
  description: "Contact European Era for student support, opportunities, and partnerships."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Tell us what you need — we’ll reply with clear next steps for students and partners."
      >
        <div className="flex flex-wrap gap-2">
          <Badge>
            <Link href="/contact/support">Support</Link>
          </Badge>
          <Badge>
            <Link href="/contact/partnership-requests">Partnership requests</Link>
          </Badge>
        </div>
      </PageHeader>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Contact details</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a className="hover:text-slate-900" href="mailto:hello@european-era.eu">
                    hello@european-era.eu
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Support:</span>{" "}
                  <a className="hover:text-slate-900" href="mailto:support@european-era.eu">
                    support@european-era.eu
                  </a>
                </p>
              </div>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
                <p className="text-sm font-semibold text-slate-900">Typical response time</p>
                <p className="mt-1 text-sm text-slate-600">Within a few business days.</p>
              </div>
            </div>

            <LeadForm kind="contact" title="Send a message" subtitle="We’ll reply with clear next steps." />
          </div>
        </Container>
      </Section>
    </>
  );
}


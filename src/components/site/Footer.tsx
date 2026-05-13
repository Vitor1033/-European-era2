import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Field";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" }
  ],
  Opportunities: [
    { label: "All opportunities", href: "/opportunities" },
    { label: "Remote", href: "/opportunities/remote" },
    { label: "AI & Innovation", href: "/opportunities/ai-innovation" }
  ],
  Apply: [
    { label: "Student application", href: "/apply/student" },
    { label: "Company application", href: "/apply/company" },
    { label: "Partner application", href: "/apply/partner" }
  ],
  Legal: [
    { label: "Privacy policy", href: "/legal/privacy-policy" },
    { label: "Terms & conditions", href: "/legal/terms-conditions" },
    { label: "Cookie policy", href: "/legal/cookie-policy" },
    { label: "GDPR", href: "/legal/gdpr" }
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-sm">EE</span>
              <span>European Era</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Erasmus programs, internship placements, and mobility support — designed for clarity, trust, and strong outcomes.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-slate-600">
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
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <a
                className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
                href="#"
                aria-label="European Era on LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
                href="#"
                aria-label="European Era on Instagram"
              >
                Instagram
              </a>
              <a
                className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
                href="#"
                aria-label="European Era on YouTube"
              >
                YouTube
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} European Era. All rights reserved.</p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-600 hover:text-slate-900">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900">Newsletter</p>
            <p className="mt-1 text-sm text-slate-600">Get practical Erasmus and internship tips — no spam.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]" aria-label="Newsletter signup">
            <div>
              <Label htmlFor="newsletterEmail">Email</Label>
              <Input id="newsletterEmail" name="newsletterEmail" type="email" placeholder="you@email.com" required />
            </div>
            <div className="sm:self-end">
              <Button type="button" className="w-full justify-center sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-500 sm:col-span-2">Newsletter signup will be connected to your email provider/CRM.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}


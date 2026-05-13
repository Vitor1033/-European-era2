import Link from "next/link";
import { Container } from "@/components/ui/Container";

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
      </Container>
    </footer>
  );
}


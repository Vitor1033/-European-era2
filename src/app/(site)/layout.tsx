import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}


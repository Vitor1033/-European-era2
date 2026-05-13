import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "404",
  description: "Page not found."
};

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center bg-white">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold text-brand-700">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">
            The page you’re looking for doesn’t exist, or it may have been moved.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Go home</Button>
            <Button variant="secondary" href="/contact">
              Contact us
            </Button>
          </div>
          <p className="mt-8 text-xs text-slate-500">
            Or explore <Link className="text-brand-700 hover:text-brand-800" href="/opportunities">opportunities</Link>.
          </p>
        </div>
      </Container>
    </div>
  );
}


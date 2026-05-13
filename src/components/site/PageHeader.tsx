import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-200 bg-gradient-to-b from-brand-50 via-white to-white">
      <Container className="py-10 sm:py-12">
        <div className="max-w-3xl">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-3 text-pretty text-base text-slate-600 sm:text-lg">{subtitle}</p> : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}


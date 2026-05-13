import { cn } from "@/lib/cn";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200",
        className
      )}
    >
      {children}
    </span>
  );
}


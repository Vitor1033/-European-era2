import { cn } from "@/lib/cn";

export function Prose({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-none text-slate-700",
        className
      )}
    >
      {children}
    </div>
  );
}


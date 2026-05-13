import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-sm hover:bg-brand-700 focus-visible:outline-brand-600 disabled:bg-slate-300",
  secondary:
    "bg-white text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus-visible:outline-brand-600 disabled:text-slate-400",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:outline-brand-600"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = Common &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    prefetch?: boolean;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed";
  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, prefetch, ...rest } = props;
    return (
      <Link href={href} className={cls} prefetch={prefetch} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}


import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  variant = "primary",
  children,
  className,
  ...rest
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-[transform,box-shadow,background-color,border-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
        variant === "primary" &&
          "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-[0_8px_24px_-6px_rgba(232,193,88,0.45)] hover:shadow-[0_12px_32px_-6px_rgba(232,193,88,0.6)] hover:-translate-y-0.5",
        variant === "secondary" &&
          "bg-cream text-navy-900 hover:bg-white hover:-translate-y-0.5",
        variant === "ghost" &&
          "border border-cream/25 text-cream hover:border-gold-400/70 hover:text-gold-300",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

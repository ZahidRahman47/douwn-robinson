import clsx from "clsx";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400",
        className
      )}
    >
      <span className="h-px w-6 bg-gold-400/70" />
      {children}
    </span>
  );
}

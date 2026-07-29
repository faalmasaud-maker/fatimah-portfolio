import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  body,
  className,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-sans text-caption font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-head-l font-semibold text-ink-primary">
        {heading}
      </h2>
      {body ? (
        <p className="mt-4 text-body text-ink-secondary">{body}</p>
      ) : null}
    </div>
  );
}

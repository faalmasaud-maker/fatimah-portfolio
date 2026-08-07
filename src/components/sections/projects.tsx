import {
  Boxes,
  ChartNoAxesColumn,
  ClipboardCheck,
  DatabaseZap,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const icons = {
  Boxes,
  Workflow,
  DatabaseZap,
  ClipboardCheck,
  ChartNoAxesColumn,
  PanelsTopLeft,
} as const;

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          body={t("body")}
        />
      </Reveal>

      <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = icons[project.icon as keyof typeof icons];
          const tags = t.raw(`items.${project.key}.tags`) as string[];

          return (
            <Reveal
              key={project.key}
              delay={0.05 * Math.min(i, 4)}
              className={cn("min-h-[220px]", project.span)}
            >
              <article
                className={cn(
                  "group glass card-depth flex h-full flex-col rounded-card p-6 transition-all duration-200 hover:border-edge-strong sm:p-7",
                  project.featured && "md:p-9"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="h-5 w-5 shrink-0 text-ink-muted transition-colors duration-200 group-hover:text-ink-primary"
                    strokeWidth={1.5}
                  />
                  {project.featured ? (
                    <span className="rounded-full border border-edge px-2.5 py-1 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
                      {t("featuredLabel")}
                    </span>
                  ) : null}
                </div>

                <h3
                  className={cn(
                    "mt-6 font-semibold leading-snug text-ink-primary",
                    project.featured ? "text-head-l" : "text-head-m"
                  )}
                >
                  {t(`items.${project.key}.title`)}
                </h3>

                <p
                  className={cn(
                    "mt-3 leading-relaxed text-ink-secondary",
                    project.featured ? "max-w-xl text-body" : "text-[0.9375rem]"
                  )}
                >
                  {t(`items.${project.key}.description`)}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-edge-subtle bg-bg-base px-3 py-1 text-[0.875rem] text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

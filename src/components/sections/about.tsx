import { GraduationCap, Infinity as InfinityIcon, ScanSearch, Waypoints } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { pillars } from "@/data/portfolio";

const icons = {
  ScanSearch,
  Waypoints,
  Infinity: InfinityIcon,
} as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal delay={0.06}>
          <div className="space-y-5">
            <p className="text-[1.0625rem] leading-relaxed text-ink-secondary">
              {t("paragraph1")}
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-ink-secondary">
              {t("paragraph2")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="inline-flex items-start gap-3 rounded-card border border-edge bg-bg-surface px-5 py-4">
            <GraduationCap
              className="mt-0.5 h-5 w-5 shrink-0 text-ink-muted"
              strokeWidth={1.5}
            />
            <span className="text-[0.9375rem] leading-relaxed text-ink-primary">
              {t("degreeBadge")}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = icons[pillar.icon as keyof typeof icons];
          return (
            <Reveal key={pillar.key} delay={0.06 * i}>
              <Card className="h-full p-6 hover:border-edge-strong">
                <Icon className="h-5 w-5 text-ink-muted" strokeWidth={1.5} />
                <h3 className="mt-5 text-base font-semibold text-ink-primary">
                  {t(`pillars.${pillar.key}.title`)}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-secondary">
                  {t(`pillars.${pillar.key}.body`)}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

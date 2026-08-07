import { FileText, ScanSearch, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SignatureField } from "@/components/shared/signature-field";
import { skillGroups } from "@/data/portfolio";

const icons = { ScanSearch, FileText, Workflow } as const;

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="relative overflow-hidden border-t border-edge">
      <SignatureField intensity="soft" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            // Read the array itself so the list can never fall out of sync
            // with the message catalogue.
            const items = t.raw(`groups.${group.key}.items`) as string[];

            return (
              <Reveal key={group.key} delay={0.06 * i} className="h-full">
                <article className="glass card-depth h-full rounded-card p-6 transition-all duration-200 hover:border-edge-strong sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn border border-edge bg-bg-surface/70">
                      <Icon className="h-[18px] w-[18px] text-accent" strokeWidth={1.5} />
                    </span>
                    <h3 className="text-head-m font-semibold text-ink-primary">
                      {t(`groups.${group.key}.title`)}
                    </h3>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="rounded-btn border border-edge-subtle bg-bg-base/50 px-3 py-1.5 text-[0.875rem] text-ink-secondary transition-colors duration-200 hover:border-edge hover:text-ink-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

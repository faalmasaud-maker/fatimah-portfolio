import {
  Boxes,
  Database,
  FileText,
  Frame,
  Palette,
  PieChart,
  Server,
  Shapes,
  Sparkles,
  Table2,
  Users,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SignatureField } from "@/components/shared/signature-field";
import { toolItems } from "@/data/portfolio";

const icons = {
  Server, Boxes, Users, PieChart, Database,
  Table2, Frame, Shapes, Palette, FileText, Workflow, Sparkles,
} as const;

export function Tools() {
  const t = useTranslations("tools");

  return (
    <section id="tools" className="relative overflow-hidden border-t border-edge">
      <SignatureField intensity="soft" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {toolItems.map((tool, i) => {
            const Icon = icons[tool.icon as keyof typeof icons];
            return (
              <Reveal key={tool.key} delay={0.03 * Math.min(i, 7)} className="h-full">
                <li className="glass card-depth group h-full rounded-card p-5 transition-all duration-200 hover:border-edge-strong">
                  <Icon
                    className="h-5 w-5 text-accent transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <p className="mt-4 text-[0.9375rem] font-semibold leading-snug text-ink-primary">
                    {t(`items.${tool.key}.name`)}
                  </p>
                  <p className="mt-1 text-caption text-ink-muted">
                    {t(`items.${tool.key}.role`)}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

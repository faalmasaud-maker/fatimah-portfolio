import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { contact } from "@/data/portfolio";

export function Membership() {
  const t = useTranslations("membership");

  return (
    <section
      id="membership"
      className="border-y border-edge bg-bg-surface/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="glass card-depth mt-10 max-w-2xl overflow-hidden rounded-card">
            <div className="flex items-start gap-5 p-7 sm:p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-edge bg-bg-surface">
                <ShieldCheck className="h-5 w-5 text-ink-primary" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  {t("issuerCode")}
                </p>
                <h3 className="mt-2 text-head-m font-semibold text-ink-primary">
                  {t("title")}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] text-ink-secondary">{t("issuer")}</p>
              </div>
            </div>

            <div className="hairline" />

            <a
              href={contact.councilUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-7 py-4 text-sm text-ink-secondary transition-colors duration-200 hover:bg-bg-surface hover:text-ink-primary sm:px-8"
            >
              <span>{t("linkLabel")}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 rtl:-scale-x-100" strokeWidth={1.5} />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

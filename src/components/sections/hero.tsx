"use client";

import { ArrowDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SignatureField } from "@/components/shared/signature-field";
import { stats } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const nameRef = useRef<HTMLHeadingElement>(null);

  /**
   * Shrink the display name only if it would exceed its column. The CSS
   * formula gets it right for the fallback faces; this guards the case where
   * a swapped-in font is wider than expected.
   */
  const fitName = useCallback(() => {
    const el = nameRef.current;
    if (!el) return;
    el.style.fontSize = "";
    const avail = el.parentElement?.clientWidth ?? 0;
    if (!avail) return;
    const size = parseFloat(getComputedStyle(el).fontSize);
    if (!size || !el.scrollWidth) return;
    // Width per 1px of font-size, measured from the real rendered glyphs.
    const perPx = el.scrollWidth / size;
    const target = Math.floor((avail - 2) / perPx);
    if (target > 12 && target < size) el.style.fontSize = `${target}px`;
  }, []);

  useEffect(() => {
    fitName();
    window.addEventListener("resize", fitName);
    document.fonts?.ready.then(fitName).catch(() => {});
    return () => window.removeEventListener("resize", fitName);
  }, [fitName, locale]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <SignatureField />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <span className="glass inline-flex items-center rounded-btn px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {t("eyebrow")}
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            ref={nameRef}
            className={cn(
              "ink-fade display-name mt-8",
              isArabic
                ? "keep-tatweel font-thmanyah-display font-bold leading-[1.28] tracking-wide"
                : "font-display font-medium leading-[1.05] tracking-tight"
            )}
          >
            {t("name_display")}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="tagline-ar mt-7 max-w-xl text-head-l font-medium text-ink-primary">
            {t("tagline")}
          </p>
          <p className="mt-3 max-w-xl text-body text-ink-secondary">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("ctaSecondary")}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className="glass mt-16 grid max-w-2xl grid-cols-2 overflow-hidden rounded-card shadow-soft sm:w-fit sm:max-w-full sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="min-w-0 border-edge/70 px-4 py-5 [&:nth-child(n+3)]:border-t [&:nth-child(even)]:border-s sm:border-t-0 sm:px-6 sm:py-6 sm:[&+&]:border-s sm:[&:nth-child(n+3)]:border-t-0"
              >
                <dd className="font-sans text-[clamp(1.625rem,5vw,2.25rem)] font-semibold tabular-nums leading-none text-ink-primary">
                  {t(`stats.${stat.key}.value`)}
                </dd>
                <dt className="mt-2 text-caption text-ink-muted">
                  {t(`stats.${stat.key}.label`)}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
        <span className="inline-flex items-center gap-2 font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          {t("scroll")}
        </span>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/**
 * The opening moment: the tagline in both languages over a navy field,
 * separated by a hairline of light that draws between them. Bilingual
 * regardless of the active locale — English above, Arabic below.
 * Runs once per load, skipped entirely under prefers-reduced-motion.
 */
export function IntroMoment() {
  const t = useTranslations("intro");
  const [gone, setGone] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkip(true);
      setGone(true);
      return;
    }
    const id = window.setTimeout(() => setGone(true), 2050);
    return () => window.clearTimeout(id);
  }, []);

  if (skip || gone) return null;

  return (
    <div
      aria-hidden
      className="intro-veil pointer-events-none fixed inset-0 z-[100] grid place-items-center overflow-hidden panel-brand"
    >
      <div
        className="intro-bloom absolute left-1/2 top-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(222 52% 80% / 0.30), hsl(217 58% 32% / 0.16) 42%, transparent 68%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-5 px-6 text-center sm:gap-6">
        <p
          dir="ltr"
          className="intro-line-en font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          {t("lineEn")}
        </p>

        <span
          className="intro-rule h-px w-[min(22rem,60vw)] origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(222 52% 80% / 0.85), transparent)",
          }}
        />

        <p
          dir="rtl"
          className="intro-line-ar font-thmanyah-display text-lg font-medium leading-relaxed tracking-wide text-white/90 sm:text-2xl lg:text-3xl"
        >
          {t("lineAr")}
        </p>
      </div>
    </div>
  );
}

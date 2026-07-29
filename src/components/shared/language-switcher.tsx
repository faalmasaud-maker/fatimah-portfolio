"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isPending, startTransition] = useTransition();

  const target = locale === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(() => router.replace(pathname, { locale: target }))
      }
      aria-label={t("switchLanguage")}
      className="pill-tint h-9 rounded-btn border border-edge px-3.5 max-[360px]:px-2.5 font-sans text-xs font-medium uppercase tracking-widest text-ink-secondary transition-colors duration-200 hover:border-edge-strong hover:text-ink-primary disabled:opacity-50"
    >
      {target === "en" ? "EN" : "ع"}
    </button>
  );
}

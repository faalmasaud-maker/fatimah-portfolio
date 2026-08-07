import { useLocale, useTranslations } from "next-intl";
import { contact } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Footer() {
  const t = useTranslations("footer");
  const tHero = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "text-ink-primary",
              isArabic
                ? "keep-tatweel font-thmanyah-display text-base font-medium tracking-wide"
                : "font-sans text-sm font-semibold tracking-tight"
            )}
          >
            {tHero("name_display")}
          </span>
          <span className="text-[0.875rem] text-ink-muted">{t("role")}</span>
        </div>

        <div className="flex flex-col gap-1 text-[0.875rem] text-ink-muted sm:items-end">
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors duration-200 hover:text-ink-primary"
          >
            {contact.email}
          </a>
          <span>
            &copy; {year} &middot; {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}

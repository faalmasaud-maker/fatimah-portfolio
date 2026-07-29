"use client";

import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const innerRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLAnchorElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  /**
   * Fit the wordmark to whatever space the control pills leave. Measured at
   * runtime rather than assumed: the language pill is wider in Arabic ("EN")
   * than in English, and a swapped-in font changes the name's width too.
   */
  const fitWordmark = useCallback(() => {
    const mark = markRef.current;
    const inner = innerRef.current;
    const actions = actionsRef.current;
    if (!mark || !inner || !actions) return;

    mark.style.fontSize = "";
    const cs = getComputedStyle(inner);
    const gap = parseFloat(cs.columnGap || "0") || 0;
    const avail =
      inner.clientWidth -
      parseFloat(cs.paddingLeft) -
      parseFloat(cs.paddingRight) -
      actions.getBoundingClientRect().width -
      gap -
      4;
    const size = parseFloat(getComputedStyle(mark).fontSize);
    const natural = mark.getBoundingClientRect().width;
    if (!avail || !size || !natural) return;
    const perPx = natural / size;
    const target = Math.floor(avail / perPx);
    if (target > 10 && target < size) mark.style.fontSize = `${target}px`;
  }, []);

  useEffect(() => {
    fitWordmark();
    window.addEventListener("resize", fitWordmark);
    document.fonts?.ready.then(fitWordmark).catch(() => {});
    return () => window.removeEventListener("resize", fitWordmark);
  }, [fitWordmark, locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-edge/80 bg-bg-base/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-bg-base/20 backdrop-blur-md"
      )}
    >
      <nav
        ref={innerRef}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 max-[360px]:gap-2 sm:px-8"
      >
        {/* Wordmark — the name itself is the mark. No logo, no icon. */}
        <a
          ref={markRef}
          href="#home"
          className={cn(
            "wordmark-fit shrink-0 text-ink-primary transition-opacity duration-200 hover:opacity-70",
            isArabic
              ? "keep-tatweel font-thmanyah-display font-medium tracking-wide"
              : "font-sans font-semibold tracking-tight"
          )}
        >
          {tHero("name_display")}
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div ref={actionsRef} className="flex shrink-0 items-center gap-2 max-[360px]:gap-1.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="pill-tint grid h-9 w-9 place-items-center rounded-btn border border-edge text-ink-secondary transition-colors duration-200 hover:text-ink-primary lg:hidden"
          >
            {open ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
            ) : (
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-edge bg-bg-base/90 backdrop-blur-xl transition-[max-height] duration-200 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        )}
      >
        <ul className="flex flex-col px-5 py-2 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-edge-subtle py-3.5 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

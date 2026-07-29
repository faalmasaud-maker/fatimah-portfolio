"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("nav");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const label = theme === "dark" ? t("switchToLight") : t("switchToDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="pill-tint grid h-9 w-9 place-items-center rounded-btn border border-edge text-ink-secondary transition-colors duration-200 hover:border-edge-strong hover:text-ink-primary"
    >
      {mounted && theme === "light" ? (
        <Moon className="h-[14px] w-[14px]" strokeWidth={1.6} />
      ) : (
        <Sun className="h-[14px] w-[14px]" strokeWidth={1.6} />
      )}
    </button>
  );
}

import type { Config } from "tailwindcss";

/**
 * Every colour resolves to a CSS variable declared in globals.css.
 * No raw hex in components — that keeps the navy identity enforceable.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "hsl(var(--bg-base) / <alpha-value>)",
          surface: "hsl(var(--bg-surface) / <alpha-value>)",
          elevated: "hsl(var(--bg-elevated) / <alpha-value>)",
          invert: "hsl(var(--bg-invert) / <alpha-value>)",
        },
        ink: {
          primary: "hsl(var(--ink-primary) / <alpha-value>)",
          secondary: "hsl(var(--ink-secondary) / <alpha-value>)",
          muted: "hsl(var(--ink-muted) / <alpha-value>)",
          subtle: "hsl(var(--ink-subtle) / <alpha-value>)",
          invert: "hsl(var(--ink-invert) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          deep: "hsl(var(--accent-deep) / <alpha-value>)",
        },
        grad: {
          1: "hsl(var(--grad-1) / <alpha-value>)",
          2: "hsl(var(--grad-2) / <alpha-value>)",
          3: "hsl(var(--grad-3) / <alpha-value>)",
        },
        edge: {
          DEFAULT: "hsl(var(--edge) / <alpha-value>)",
          strong: "hsl(var(--edge-strong) / <alpha-value>)",
          subtle: "hsl(var(--edge-subtle) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        "thmanyah-display": ["ThmanyahDisplay", "var(--font-arabic-fallback)"],
        "thmanyah-text": ["ThmanyahText", "var(--font-arabic-fallback)"],
        arabic: ["ThmanyahText", "var(--font-arabic-fallback)"],
      },
      fontSize: {
        /* Hero XL / Heading L / Heading M / Body / Caption.
           Each clamps down on small viewports so mobile keeps the
           proportions rather than inheriting desktop sizes. */
        "hero-xl": ["clamp(2.125rem, 7vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        /* head-l floor lowered from 1.625rem: at 390px it rendered 27.6px,
           larger than the display name (27px), which inverted the hierarchy. */
        "head-l": ["clamp(1.375rem, 3.6vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "head-m": ["clamp(1.0625rem, 1.7vw, 1.3125rem)", { lineHeight: "1.34", letterSpacing: "-0.01em" }],
        body: ["clamp(1rem, 0.6vw + 0.86rem, 1.0625rem)", { lineHeight: "1.7" }],
        /* caption floor raised from 0.8125rem (13.8px) — too small on phones. */
        caption: ["clamp(0.875rem, 0.4vw + 0.79rem, 0.9375rem)", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      borderRadius: {
        btn: "14px",
        card: "20px",
        panel: "18px",
      },
      boxShadow: {
        soft: "0 1px 2px hsl(var(--grad-1) / 0.04), 0 8px 24px -12px hsl(var(--grad-1) / 0.18)",
        lift: "0 2px 4px hsl(var(--grad-1) / 0.06), 0 18px 48px -18px hsl(var(--grad-1) / 0.28)",
      },
      transitionDuration: { DEFAULT: "200ms" },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-3%,0) scale(1.05)" },
        },
      },
      animation: { drift: "drift 22s ease-in-out infinite" },
    },
  },
  plugins: [],
};

export default config;

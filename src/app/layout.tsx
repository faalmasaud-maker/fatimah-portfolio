import type { ReactNode } from "react";
import "./globals.css";

/**
 * Minimal root. The real <html>/<body> shell lives in [locale]/layout.tsx
 * because lang and dir depend on the active locale.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The signature background: curved trails of light over soft mesh gradients.
 * No circles anywhere — no node dots, no floating blooms — just the flowing
 * lines and the mesh, which reads as systems and data flow.
 *
 * Three separate compositions, one per breakpoint. Each SVG's viewBox matches
 * the orientation it is drawn for and uses preserveAspectRatio="none", so a
 * portrait screen gets artwork composed for portrait instead of a cropped
 * slice of the desktop piece.
 */

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-trail`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
        <stop offset="28%" stopColor="hsl(var(--accent))" style={{ stopOpacity: "var(--trail)" }} />
        <stop offset="62%" stopColor="hsl(var(--grad-3))" style={{ stopOpacity: "var(--trail)" }} />
        <stop offset="100%" stopColor="hsl(var(--grad-2))" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${id}-trail2`} x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--grad-3))" stopOpacity="0" />
        <stop offset="45%" stopColor="hsl(var(--accent))" style={{ stopOpacity: "var(--wave-2)" }} />
        <stop offset="100%" stopColor="hsl(var(--grad-2))" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${id}-mesh`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--grad-3))" style={{ stopOpacity: "var(--mesh-a)" }} />
        <stop offset="55%" stopColor="hsl(var(--grad-2))" style={{ stopOpacity: "var(--mesh-b)" }} />
        <stop offset="100%" stopColor="hsl(var(--grad-1))" stopOpacity="0" />
      </linearGradient>
      <filter id={`${id}-soft`} x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="46" />
      </filter>
      <filter id={`${id}-lift`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
  );
}

/** Landscape: a wide process flow sweeping across the composition. */
function DesktopArt() {
  const id = "sf-d";
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <Defs id={id} />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-140 240 C 220 120, 470 400, 780 320 C 1060 248, 1240 80, 1580 170 L 1580 -80 L -140 -80 Z"
      />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-140 660 C 260 780, 500 500, 820 580 C 1090 646, 1300 800, 1580 700 L 1580 1000 L -140 1000 Z"
      />
      <g fill="none" strokeLinecap="round" filter={`url(#${id}-lift)`}>
        <path stroke={`url(#${id}-trail)`} strokeWidth="1.6"
          d="M-60 250 C 240 180, 430 380, 700 320 C 950 266, 1120 120, 1520 200" />
        <path stroke={`url(#${id}-trail)`} strokeWidth="1.2"
          d="M-60 520 C 260 600, 480 420, 760 500 C 1020 572, 1230 660, 1520 560" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="1"
          d="M-60 720 C 300 780, 520 650, 830 710 C 1090 762, 1270 830, 1520 750" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="0.9"
          d="M700 320 C 720 420, 740 450, 760 500" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="0.9"
          d="M760 500 C 790 600, 800 660, 830 710" />
      </g>
    </svg>
  );
}

/** Recomposed for tablet: the flow turns diagonal and gains vertical travel. */
function TabletArt() {
  const id = "sf-t";
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1024 1200"
      preserveAspectRatio="none"
      aria-hidden
    >
      <Defs id={id} />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-120 300 C 220 200, 380 520, 660 460 C 860 418, 960 240, 1160 300 L 1160 -80 L -120 -80 Z"
      />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-120 880 C 200 980, 420 760, 660 840 C 860 906, 980 1020, 1160 960 L 1160 1300 L -120 1300 Z"
      />
      <g fill="none" strokeLinecap="round" filter={`url(#${id}-lift)`}>
        <path stroke={`url(#${id}-trail)`} strokeWidth="1.5"
          d="M-40 220 C 240 340, 200 540, 470 640 C 700 724, 830 900, 1080 990" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="1.2"
          d="M1080 280 C 800 370, 690 570, 440 670 C 230 754, 150 950, -40 1010" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="0.9"
          d="M470 640 C 450 700, 450 640, 440 670" />
      </g>
    </svg>
  );
}

/** Portrait: a data stream descending a narrow column. Drawn for mobile. */
function MobileArt() {
  const id = "sf-m";
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 420 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <Defs id={id} />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-80 180 C 100 100, 200 300, 340 230 C 420 194, 460 120, 500 160 L 500 -60 L -80 -60 Z"
      />
      <path
        filter={`url(#${id}-soft)`}
        fill={`url(#${id}-mesh)`}
        d="M-80 640 C 80 720, 190 560, 330 630 C 420 674, 460 760, 500 720 L 500 960 L -80 960 Z"
      />
      <g fill="none" strokeLinecap="round" filter={`url(#${id}-lift)`}>
        <path stroke={`url(#${id}-trail)`} strokeWidth="1.5"
          d="M70 -40 C 190 130, 90 300, 210 450 C 330 600, 200 760, 300 950" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="1.1"
          d="M350 -40 C 250 150, 340 320, 215 470 C 100 620, 250 790, 140 950" />
        <path stroke={`url(#${id}-trail2)`} strokeWidth="0.9"
          d="M210 450 C 212 460, 213 462, 215 470" />
      </g>
    </svg>
  );
}

export function SignatureField({
  className,
  intensity = "full",
}: {
  className?: string;
  intensity?: "full" | "soft";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const art = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const still = { y: 0 };

  const wrap = (children: ReactNode) => (
    <motion.div style={reduced ? still : { y: art }} className="absolute inset-0">
      {children}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: intensity === "full" ? 1 : 0.6 }}
    >
      {/* One composition per breakpoint. Nothing is cropped or stretched. */}
      <div className="absolute inset-0 sm:hidden">{wrap(<MobileArt />)}</div>
      <div className="absolute inset-0 hidden sm:block lg:hidden">{wrap(<TabletArt />)}</div>
      <div className="absolute inset-0 hidden lg:block">{wrap(<DesktopArt />)}</div>
    </div>
  );
}

/**
 * Structure only. Every user-facing string lives in messages/{ar,en}.json
 * and is looked up by the keys below.
 */

export type ProjectKey =
  | "erp"
  | "hrms"
  | "migration"
  | "uat"
  | "reporting"
  | "cbahi";

export interface Project {
  key: ProjectKey;
  icon: string;
  /** Tailwind span classes for the 3-column bento grid. */
  span: string;
  featured?: boolean;
}

/**
 * Bento layout, 3 columns:
 *   Row 1-2  erp (2 cols x 2 rows, featured)  |  hrms (1 col x 2 rows)
 *   Row 3    migration | uat | reporting      (1 x 1 each)
 *   Row 4    cbahi                            (3 cols x 1 row)
 */
export const projects: Project[] = [
  {
    key: "erp",
    icon: "Boxes",
    span: "md:col-span-2 md:row-span-2",
    featured: true
  },
  { key: "hrms", icon: "Workflow", span: "md:col-span-1 md:row-span-2" },
  { key: "migration", icon: "DatabaseZap", span: "md:col-span-1" },
  { key: "uat", icon: "ClipboardCheck", span: "md:col-span-1" },
  { key: "reporting", icon: "ChartNoAxesColumn", span: "md:col-span-1" },
  { key: "cbahi", icon: "PanelsTopLeft", span: "md:col-span-3" },
];

export const stats = [
  { key: "experience" },
  { key: "sectors" },
  { key: "documentation" },
] as const;

export const pillars = [
  { key: "analysis", icon: "ScanSearch" },
  { key: "bridge", icon: "Waypoints" },
  { key: "value", icon: "Infinity" },
] as const;

export const contact = {
  email: "Fa.almasaud@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatimah-al-masaud-b300b6206",
  councilUrl: "https://www.saudieng.sa/"
} as const;

export const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "cv", href: "#cv" },
  { key: "contact", href: "#contact" },
] as const;

/** Skill groups. Item labels live in messages/ under skills.groups.<key>.items */
export const skillGroups = [
  { key: "analysis", icon: "ScanSearch" },
  { key: "reporting", icon: "FileText" },
  { key: "process", icon: "Workflow" },
] as const;

/** Tools & software. Names/roles live in messages under tools.items.<key> */
export const toolItems = [
  { key: "erp", icon: "Server" },
  { key: "odoo", icon: "Boxes" },
  { key: "jisr", icon: "Users" },
  { key: "powerbi", icon: "PieChart" },
  { key: "sql", icon: "Database" },
  { key: "excel", icon: "Table2" },
  { key: "figma", icon: "Frame" },
  { key: "miro", icon: "Shapes" },
  { key: "canva", icon: "Palette" },
  { key: "m365", icon: "FileText" },
  { key: "n8n", icon: "Workflow" },
  { key: "ai", icon: "Sparkles" },
] as const;

export const cv = {
  /** Lives in /public/cv. The download attribute renames it on save. */
  path: "/cv/Fatimah-AL-Masaud-CV.pdf",
  downloadName: "Fatimah AL Masaud-CV.pdf"
} as const;

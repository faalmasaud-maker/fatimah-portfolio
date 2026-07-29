import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

/**
 * Role titles she is open to, in the active language only. Each message
 * catalogue carries its own list, so there is no locale branching here.
 */
export function Roles() {
  const t = useTranslations("roles");

  return (
    <section id="roles" className="border-t border-edge">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {(t.raw("titles") as string[]).map((title) => (
              <li
                key={title}
                className="glass card-depth rounded-btn px-3.5 py-2 text-caption text-ink-secondary transition-all duration-200 hover:border-edge-strong hover:text-ink-primary sm:text-[0.875rem]"
              >
                {title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

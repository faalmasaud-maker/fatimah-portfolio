import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { contact } from "@/data/portfolio";

export function Contact() {
  const t = useTranslations("contact");

  const details = [
    {
      key: "email",
      icon: Mail,
      label: t("emailLabel"),
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      key: "phone",
      icon: Phone,
      label: t("phoneLabel"),
      value: contact.phone,
      href: `tel:${contact.phoneIntl}`,
      external: false,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: t("linkedinLabel"),
      value: t("linkedinValue"),
      href: contact.linkedin,
      external: true,
    },
    {
      key: "location",
      icon: MapPin,
      label: t("locationLabel"),
      value: t("locationValue"),
      href: null,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-edge bg-bg-surface/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <a
            href={`mailto:${contact.email}`}
            className="btn-surface btn-glow mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn px-7 text-[0.9375rem] font-medium sm:w-auto"
          >
            {t("cta")}
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((detail, i) => {
            const Icon = detail.icon;
            const inner = (
              <>
                <div className="flex items-center gap-2.5 leading-none">
                  <Icon
                    className="h-[17px] w-[17px] shrink-0 translate-y-[0.5px] text-accent transition-colors duration-200 group-hover:text-ink-primary"
                    strokeWidth={1.5}
                  />
                  <p className="font-sans text-[0.75rem] font-medium uppercase leading-none tracking-[0.16em] text-ink-muted">
                    {detail.label}
                  </p>
                </div>
                <p className="mt-3 break-words text-[0.9375rem] text-ink-primary">
                  {detail.value}
                </p>
                {detail.href ? (
                  <ArrowUpRight
                    className="absolute end-6 top-6 h-4 w-4 text-ink-subtle opacity-0 transition-opacity duration-200 group-hover:opacity-100 rtl:-scale-x-100"
                    strokeWidth={1.5}
                  />
                ) : null}
              </>
            );

            const className =
              "group glass card-depth relative block h-full rounded-card p-6 transition-all duration-200 hover:border-edge-strong";

            return (
              <Reveal key={detail.key} delay={0.06 * i}>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className={className}
                    {...(detail.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

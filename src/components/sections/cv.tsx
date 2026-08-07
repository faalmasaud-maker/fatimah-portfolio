import { Download, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SignatureField } from "@/components/shared/signature-field";
import { cv } from "@/data/portfolio";

export function CV() {
  const t = useTranslations("cv");

  return (
    <section id="cv" className="relative overflow-hidden border-t border-edge">
      <SignatureField intensity="soft" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            body={t("body")}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="relative mt-10 max-w-3xl overflow-hidden rounded-card border border-edge-strong shadow-lift">
            <div className="panel-brand absolute inset-0" aria-hidden />
            <div
              className="absolute inset-0 opacity-70"
              aria-hidden
              style={{
                background:
                  "radial-gradient(120% 90% at 85% 10%, hsl(223 40% 78% / 0.24), transparent 62%)",
              }}
            />

            <div className="relative flex flex-col gap-7 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-panel border border-white/20 bg-white/10 backdrop-blur-md">
                  <FileText className="h-6 w-6 text-white" strokeWidth={1.5} />
                </span>
                <p className="text-[0.9375rem] text-white/75">{t("fileMeta")}</p>
              </div>

              <a
                href={cv.path}
                download={cv.downloadName}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2.5 btn-on-brand rounded-btn px-7 text-[0.9375rem] font-medium transition-colors duration-200"
              >
                <Download className="h-[18px] w-[18px]" strokeWidth={1.5} />
                {t("download")}
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

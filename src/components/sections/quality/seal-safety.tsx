import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";

const points = ["sealed", "tamperProof", "checkSeal", "storage"] as const;

export function SealSafety() {
  const t = useTranslations("quality.sealSafety");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 rounded-3xl bg-brand-navy p-8 sm:p-10 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
            <img src="/images/products/bottle-seal.webp" alt="" className="size-full object-cover" />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
            <h2 className="text-2xl font-bold text-balance text-white sm:text-3xl">{t("title")}</h2>
            <p className="mt-3 text-sm text-white/70">{t("description")}</p>
            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  {t(`points.${point}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { useTranslations } from "next-intl";
import type { Certification } from "@/data/certifications";
import { Card } from "@/components/ui/card";

export function CertificateCard({ certification }: { certification: Certification }) {
  const t = useTranslations(`quality.certifications.items.${certification.key}`);

  return (
    <Card className="overflow-hidden p-3 text-center">
      <div className="aspect-[3/4] overflow-hidden rounded-lg border bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
        <img src={certification.image} alt={t("name")} className="size-full object-cover" />
      </div>
      <p className="mt-3 text-sm font-semibold text-brand-navy dark:text-foreground">{t("name")}</p>
      {certification.regNo ? (
        <p className="text-xs text-muted-foreground">{t("regLabel")}: {certification.regNo}</p>
      ) : null}
    </Card>
  );
}

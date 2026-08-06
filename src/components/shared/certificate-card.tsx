import { existsSync } from "node:fs";
import path from "node:path";
import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Certification } from "@/data/certifications";
import { Card } from "@/components/ui/card";

export function CertificateCard({ certification }: { certification: Certification }) {
  const t = useTranslations(`quality.certifications.items.${certification.key}`);

  // Checked at build time (this runs during static generation, not in the
  // browser) so a missing scan shows a clean placeholder instead of a
  // broken image / 404 — and starts rendering automatically the moment the
  // real file is dropped into public/, with no code change needed.
  const imageExists = existsSync(path.join(process.cwd(), "public", certification.image));

  return (
    <Card className="overflow-hidden p-3 text-center">
      <div className="aspect-3/4 overflow-hidden rounded-lg border bg-muted">
        {imageExists ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly
          <img src={certification.image} alt={t("name")} className="size-full object-cover" />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-2 p-2 text-muted-foreground">
            <FileText className="size-6" strokeWidth={1.5} />
            <span className="text-[10px] leading-tight">{t("name")}</span>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-brand-navy dark:text-foreground">{t("name")}</p>
      {certification.regNo ? (
        <p className="text-xs text-muted-foreground">{t("regLabel")}: {certification.regNo}</p>
      ) : null}
    </Card>
  );
}

import { FlaskConical, BadgeCheck, ShieldCheck, PackageCheck, Stamp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { IconFeature } from "@/components/shared/icon-feature";
import { Button } from "@/components/ui/button";

const items = [
  { key: "labTesting", icon: FlaskConical },
  { key: "consistentQuality", icon: BadgeCheck },
  { key: "safetyGuaranteed", icon: ShieldCheck },
  { key: "dftqcRegistered", icon: PackageCheck },
  { key: "sealSafety", icon: Stamp },
] as const;

export function CertifiedPurity() {
  const t = useTranslations("purity.certified");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border bg-brand-sky p-8 dark:bg-secondary sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">{t("title")}</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t("description")}</p>
            </div>
            <Button asChild size="lg">
              <Link href="/quality">{t("cta")}</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {items.map((item) => (
              <IconFeature key={item.key} icon={item.icon} title={t(`items.${item.key}`)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

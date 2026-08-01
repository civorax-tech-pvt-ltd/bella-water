import { FlaskConical, Award, Cpu, GraduationCap, ClipboardCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { IconFeature } from "@/components/shared/icon-feature";

const items = [
  { key: "labTesting", icon: FlaskConical },
  { key: "consistentQuality", icon: Award },
  { key: "equipment", icon: Cpu },
  { key: "skilledProfessionals", icon: GraduationCap },
  { key: "standardCompliance", icon: ClipboardCheck },
] as const;

export function QualityStandards() {
  const t = useTranslations("quality.standards");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container>
        <h2 className="text-center text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">{t("title")}</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <IconFeature key={item.key} icon={item.icon} title={t(`${item.key}.title`)} description={t(`${item.key}.description`)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

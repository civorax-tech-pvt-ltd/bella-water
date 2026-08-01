import { Award, Tags, PackageCheck, Megaphone, Headset } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconFeature } from "@/components/shared/icon-feature";

const items = [
  { key: "trustedBrand", icon: Award },
  { key: "attractiveMargins", icon: Tags },
  { key: "consistentSupply", icon: PackageCheck },
  { key: "marketingSupport", icon: Megaphone },
  { key: "dedicatedSupport", icon: Headset },
] as const;

export function WhyPartner() {
  const t = useTranslations("business.whyPartner");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} align="center" className="mx-auto" />
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <IconFeature key={item.key} icon={item.icon} title={t(`items.${item.key}`)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

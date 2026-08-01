import { Droplet, Leaf, ShieldCheck, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { IconFeature } from "@/components/shared/icon-feature";

const items = [
  { key: "pureSafe", icon: Droplet },
  { key: "mineralBalanced", icon: Leaf },
  { key: "qualityAssured", icon: ShieldCheck },
  { key: "reliableDelivery", icon: Truck },
] as const;

export function FeatureStrip() {
  const t = useTranslations("products.featureStrip");

  return (
    <section className="py-14">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {items.map((item) => (
          <IconFeature
            key={item.key}
            icon={item.icon}
            title={t(`${item.key}.title`)}
            description={t(`${item.key}.description`)}
          />
        ))}
      </Container>
    </section>
  );
}

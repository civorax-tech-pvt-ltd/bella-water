import { Droplets, Leaf, MapPinned, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { IconFeature } from "@/components/shared/icon-feature";

const items = [
  { key: "pureSafe", icon: Droplets },
  { key: "essentialMinerals", icon: Leaf },
  { key: "nepalProud", icon: MapPinned },
  { key: "trustedThousands", icon: ShieldCheck },
] as const;

export function TrustBar() {
  const t = useTranslations("home.trustBar");

  return (
    <section className="border-b bg-background py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-brand-green uppercase">
          {t("eyebrow")}
        </p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <IconFeature
              key={item.key}
              icon={item.icon}
              title={t(`items.${item.key}.title`)}
              description={t(`items.${item.key}.description`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

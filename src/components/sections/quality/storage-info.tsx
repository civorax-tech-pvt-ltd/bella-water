import { CalendarClock, Thermometer, Package, Recycle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { IconFeature } from "@/components/shared/icon-feature";

const items = [
  { key: "bestBefore", icon: CalendarClock },
  { key: "storage", icon: Thermometer },
  { key: "packaging", icon: Package },
  { key: "recyclable", icon: Recycle },
] as const;

export function StorageInfo() {
  const t = useTranslations("quality.storage");

  return (
    <section className="border-t py-14">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {items.map((item) => (
          <IconFeature key={item.key} icon={item.icon} title={t(`${item.key}.title`)} description={t(`${item.key}.description`)} />
        ))}
      </Container>
    </section>
  );
}

import { Droplet, ShieldCheck, Leaf, HeartHandshake, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconFeature } from "@/components/shared/icon-feature";
import { Button } from "@/components/ui/button";

const items = [
  { key: "pureSource", icon: Droplet },
  { key: "advancedPurification", icon: ShieldCheck },
  { key: "addedMinerals", icon: Leaf },
  { key: "trustedQuality", icon: HeartHandshake },
] as const;

export function StoryJourney() {
  const t = useTranslations("ourStory.journey");

  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <Button asChild className="mt-6">
            <Link href="/purity">
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:border-l lg:pl-10">
          {items.map((item) => (
            <IconFeature key={item.key} icon={item.icon} title={t(`items.${item.key}`)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

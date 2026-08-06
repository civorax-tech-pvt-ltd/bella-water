import { Factory, Cpu, FlaskConical, Users2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const items = [
  { key: "environment", icon: Factory },
  { key: "equipment", icon: Cpu },
  { key: "lab", icon: FlaskConical },
  { key: "team", icon: Users2 },
] as const;

export function FactorySection() {
  const t = useTranslations("ourStory.factory");

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 max-w-lg text-base text-white/70">{t("description")}</p>
          <Button asChild variant="secondary" className="mt-6">
            <Link href="/quality">{t("cta")}</Link>
          </Button>
          <dl className="mt-8 grid grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item.key} className="flex items-start gap-2.5">
                <item.icon className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <div>
                  <dt className="text-sm font-semibold text-white">{t(`items.${item.key}.title`)}</dt>
                  <dd className="text-xs text-white/60">{t(`items.${item.key}.description`)}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img src="/images/factory/factory-exterior.webp" alt="" className="size-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

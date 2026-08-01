import { ShoppingCart, ArrowRight, Droplet, Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

const stats = [Droplet, Leaf, ShieldCheck, HeartPulse];

export function HomeHero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-sky to-white dark:from-secondary dark:to-background">
      <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="mb-3 font-heading text-lg text-brand-green italic">{t("kicker")}</p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-brand-navy sm:text-5xl lg:text-6xl dark:text-foreground">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="size-4" />
                {t("primaryCta")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                {t("secondaryCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((Icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-navy dark:bg-primary/15 dark:text-primary">
                  <Icon className="size-4" strokeWidth={1.75} />
                </span>
                <dd className="text-xs font-medium text-brand-navy sm:text-sm dark:text-foreground">
                  {t(`stats.${i}`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-white/50 blur-2xl dark:bg-primary/10" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img
            src="/images/hero/home-hero-bottles.png"
            alt={t("imageAlt")}
            className="relative size-full object-contain drop-shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}

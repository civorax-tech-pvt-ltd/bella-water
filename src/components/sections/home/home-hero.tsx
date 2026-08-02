import { ShoppingCart, ArrowRight, Droplet, Leaf, ShieldCheck, HeartPulse } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

const stats = [Droplet, Leaf, ShieldCheck, HeartPulse];

/** Full-bleed hero, matching the treatment shared by every other page's PageHero. */
export function HomeHero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
      <img
        src="/images/hero/home-hero-bottles.jpg"
        alt={t("imageAlt")}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/10"
        aria-hidden
      />

      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl">
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
                <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm dark:bg-primary/15 dark:text-primary">
                  <Icon className="size-4" strokeWidth={1.75} />
                </span>
                <dd className="text-xs font-medium text-brand-navy sm:text-sm dark:text-foreground">
                  {t(`stats.${i}`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

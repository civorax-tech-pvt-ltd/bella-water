import { PenTool, Tag, Droplets, ShieldCheck, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { VideoCard } from "@/components/shared/video-card";
import { Button } from "@/components/ui/button";
import { videoUrls } from "@/config/videos";

const capabilities = [
  { key: "design", icon: PenTool },
  { key: "branding", icon: Tag },
  { key: "bottling", icon: Droplets },
  { key: "quality", icon: ShieldCheck },
] as const;

export function PrivateLabel() {
  const t = useTranslations("business.privateLabel");
  const tCommon = useTranslations("common");

  return (
    <section id="private-label" className="bg-brand-navy py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 max-w-lg text-base text-white/70">{t("description")}</p>

          <dl className="mt-8 grid grid-cols-2 gap-5">
            {capabilities.map((item) => (
              <div key={item.key} className="flex items-start gap-2.5">
                <item.icon className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <div>
                  <dt className="text-sm font-semibold text-white">{t(`items.${item.key}.title`)}</dt>
                  <dd className="text-xs text-white/60">{t(`items.${item.key}.description`)}</dd>
                </div>
              </div>
            ))}
          </dl>

          <Button asChild size="lg" variant="secondary" className="mt-8">
            <a href="#partner-form">
              {t("cta")}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <VideoCard
          video={videoUrls.bottleBlowingPackaging}
          poster="/videos/bottle-blowing-packaging.jpg"
          title={t("videoTitle")}
          playLabel={tCommon("playVideo", { title: t("videoTitle") })}
        />
      </Container>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { videoUrls } from "@/config/videos";

export function BrandVideo() {
  const t = useTranslations("home.video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    videoRef.current?.play();
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          className="mx-auto"
        />
        <div className="relative mx-auto mt-12 aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-xl">
          <video
            ref={videoRef}
            src={videoUrls.bellaCinematic}
            poster="/images/hero/home-hero-bottles.jpg"
            controls={playing}
            playsInline
            className="size-full object-cover"
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
          />
          {!playing ? (
            <button
              type="button"
              onClick={handlePlay}
              aria-label={t("playLabel")}
              className="group absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
            >
              <span className="flex size-24 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
                <Play className="size-9 translate-x-0.5 text-brand-navy" fill="currentColor" />
              </span>
            </button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

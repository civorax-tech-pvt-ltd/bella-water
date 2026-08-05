import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { VideoCard } from "@/components/shared/video-card";
import { manufacturingSteps } from "@/data/manufacturing-process";

export function ManufacturingProcess() {
  const t = useTranslations("ourStory.manufacturing");
  const tItems = useTranslations("ourStory.manufacturing.items");
  const tCommon = useTranslations("common");

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
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {manufacturingSteps.map((step) => (
            <VideoCard
              key={step.key}
              video={step.video}
              poster={step.poster}
              title={tItems(`${step.key}.title`)}
              description={tItems(`${step.key}.description`)}
              playLabel={tCommon("playVideo", { title: tItems(`${step.key}.title`) })}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

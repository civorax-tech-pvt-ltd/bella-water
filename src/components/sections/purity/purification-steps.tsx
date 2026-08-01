import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StepCard } from "@/components/shared/step-card";
import { purificationSteps } from "@/data/purification-process";

export function PurificationSteps() {
  const t = useTranslations("purity.process");
  const tSteps = useTranslations("purity.process.steps");

  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" className="mx-auto" />
        <div className="mt-12">
          {purificationSteps.map((step) => (
            <StepCard
              key={step.key}
              number={step.number}
              icon={step.icon}
              title={tSteps(`${step.key}.title`)}
              description={tSteps(`${step.key}.description`)}
              image={step.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

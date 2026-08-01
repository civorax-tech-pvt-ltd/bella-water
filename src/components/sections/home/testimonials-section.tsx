import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { RatingStars } from "@/components/shared/rating-stars";
import { testimonials, averageRating } from "@/data/testimonials";

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="bg-brand-navy py-16 sm:py-20 dark:bg-secondary">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} tone="inverted" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">{averageRating}/5</span>
            <div>
              <RatingStars rating={averageRating} />
              <p className="text-xs text-white/70">{t("basedOn")}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.key} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

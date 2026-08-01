import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Testimonial } from "@/data/testimonials";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RatingStars } from "@/components/shared/rating-stars";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const t = useTranslations(`home.testimonials.items.${testimonial.key}`);
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <Quote className="size-6 text-brand-green" strokeWidth={1.5} />
      <p className="flex-1 text-sm leading-relaxed text-foreground">{t("quote")}</p>
      <div className="flex items-center gap-3 pt-2">
        <Avatar>
          <AvatarFallback className="bg-brand-navy text-white">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-brand-navy dark:text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{t("role")}</p>
        </div>
        <RatingStars rating={testimonial.rating} className="ml-auto" />
      </div>
    </Card>
  );
}

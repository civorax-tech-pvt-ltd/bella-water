"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { submitToFormEndpoint, buildMailtoFallback, navigateTo } from "@/lib/forms";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.email(),
  subject: z.string().min(2),
  message: z.string().min(5),
});

type FormValues = z.infer<typeof schema>;

export function DeliveryAndForm() {
  const t = useTranslations("contact.form");
  const tAreas = useTranslations("contact.deliveryAreas");
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const { ok } = await submitToFormEndpoint("contact-message", values);
      if (ok) {
        toast.success(t("successTitle"), { description: t("successDescription") });
        reset();
      } else {
        navigateTo(buildMailtoFallback(siteConfig.contact.email, values.subject, values));
      }
    } catch {
      navigateTo(buildMailtoFallback(siteConfig.contact.email, values.subject, values));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="delivery-areas" className="pb-16 sm:pb-20">
      <Container className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="overflow-hidden rounded-2xl border bg-card">
          <div className="aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
            <img src="/images/lifestyle/delivery-truck-side.webp" alt="" className="size-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-brand-navy dark:text-foreground">{tAreas("title")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{tAreas("description")}</p>
            <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {siteConfig.deliveryAreas.map((area) => (
                <li key={area.name} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{area.name}</p>
                    <p className="text-xs text-muted-foreground">{area.coverage}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-5">
              <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                {tAreas("cta")}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div id="order" className="rounded-2xl border bg-brand-sky p-6 dark:bg-secondary sm:p-8">
          <h3 className="text-lg font-bold text-brand-navy dark:text-foreground">{t("title")}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{t("description")}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">{t("fields.name")}</Label>
              <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">{t("fields.phone")}</Label>
              <Input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t("fields.email")}</Label>
              <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="subject">{t("fields.subject")}</Label>
              <Input id="subject" {...register("subject")} aria-invalid={!!errors.subject} />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="message">{t("fields.message")}</Label>
              <Textarea id="message" rows={4} {...register("message")} aria-invalid={!!errors.message} />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="sm:col-span-2 sm:w-fit">
              {submitting ? t("submitting") : t("submit")}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

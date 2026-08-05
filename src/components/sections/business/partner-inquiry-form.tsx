"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, Zap, Lock, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { Container } from "@/components/shared/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site";
import { submitToFormEndpoint, buildMailtoFallback, navigateTo } from "@/lib/forms";

const businessTypes = ["retailer", "distributor", "hotelRestaurant", "eventInstitution", "other"] as const;
const interests = ["bulkOrders", "distributorship", "retailStock", "eventSupply", "privateLabel"] as const;

const schema = z.object({
  fullName: z.string().min(2),
  businessName: z.string().min(2),
  phone: z.string().min(7),
  email: z.email(),
  businessType: z.enum(businessTypes),
  interest: z.enum(interests),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const assurances = [
  { key: "quickResponse", icon: Zap },
  { key: "securePrivate", icon: Lock },
  { key: "personalizedSupport", icon: UserCheck },
] as const;

export function PartnerInquiryForm() {
  const t = useTranslations("business.form");
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const { ok } = await submitToFormEndpoint("business-partner-inquiry", values);
      if (ok) {
        toast.success(t("successTitle"), { description: t("successDescription") });
        reset();
      } else {
        navigateTo(buildMailtoFallback(siteConfig.contact.email, t("mailtoSubject"), values));
      }
    } catch {
      navigateTo(buildMailtoFallback(siteConfig.contact.email, t("mailtoSubject"), values));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="partner-form" className="py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border bg-card p-6 sm:p-8">
          <p className="mb-1 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">{t("title")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("description")}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="fullName">{t("fields.fullName")}</Label>
              <Input id="fullName" {...register("fullName")} aria-invalid={!!errors.fullName} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="businessName">{t("fields.businessName")}</Label>
              <Input id="businessName" {...register("businessName")} aria-invalid={!!errors.businessName} />
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
              <Label htmlFor="businessType">{t("fields.businessType")}</Label>
              <Select onValueChange={(v) => setValue("businessType", v as FormValues["businessType"])} value={watch("businessType")}>
                <SelectTrigger id="businessType" className="w-full">
                  <SelectValue placeholder={t("fields.businessTypePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {t(`businessTypes.${type}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="interest">{t("fields.interest")}</Label>
              <Select onValueChange={(v) => setValue("interest", v as FormValues["interest"])} value={watch("interest")}>
                <SelectTrigger id="interest" className="w-full">
                  <SelectValue placeholder={t("fields.interestPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest} value={interest}>
                      {t(`interests.${interest}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="message">{t("fields.message")}</Label>
              <Textarea id="message" rows={4} {...register("message")} />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="sm:col-span-2 sm:w-fit">
              {submitting ? t("submitting") : t("submit")}
            </Button>
          </form>
        </div>

        <div className="space-y-5">
          {assurances.map((item) => (
            <div key={item.key} className="flex items-start gap-3 rounded-2xl border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary">
                <item.icon className="size-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-navy dark:text-foreground">{t(`assurances.${item.key}.title`)}</p>
                <p className="text-xs text-muted-foreground">{t(`assurances.${item.key}.description`)}</p>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 rounded-2xl bg-brand-navy p-5 text-white">
            <ShieldCheck className="size-5 shrink-0" />
            <p className="text-xs text-white/80">{t("guarantee")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

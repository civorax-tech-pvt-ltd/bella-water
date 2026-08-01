import { ShieldCheck, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CertificateCard } from "@/components/shared/certificate-card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import { siteConfig } from "@/config/site";

export function CertificationsSection() {
  const t = useTranslations("quality.certifications");

  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <div className="mt-8 grid grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <CertificateCard key={cert.key} certification={cert} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl border bg-brand-sky p-6 dark:bg-secondary">
          <ShieldCheck className="size-8 text-brand-navy dark:text-primary" />
          <h3 className="mt-3 text-lg font-bold text-brand-navy dark:text-foreground">{t("dftqc.title")}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("dftqc.regLabel")}: {certifications[0]?.regNo}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{t("dftqc.description")}</p>
          <Button asChild variant="outline" className="mt-5 w-fit">
            <a href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Registration document request")}`}>
              <Download className="size-4" />
              {t("dftqc.cta")}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

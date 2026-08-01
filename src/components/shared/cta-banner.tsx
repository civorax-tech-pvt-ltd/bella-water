import { MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  className?: string;
}

/** Recurring bottom-of-page conversion banner ("Order Water", "Chat on WhatsApp"). */
export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref = siteConfig.contact.whatsappLink,
  secondaryLabel,
  secondaryHref = "/contact",
  image,
  className,
}: CTABannerProps) {
  return (
    <section className={cn("bg-brand-sky py-10 dark:bg-secondary", className)}>
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl border bg-card px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-5">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly
              <img src={image} alt="" className="hidden h-20 w-auto sm:block" />
            ) : null}
            <div>
              <h3 className="text-xl font-bold text-brand-navy sm:text-2xl dark:text-foreground">
                {title}
              </h3>
              {description ? (
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-whatsapp text-white hover:bg-whatsapp/90">
              <a href={primaryHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                {primaryLabel}
              </a>
            </Button>
            {secondaryLabel ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

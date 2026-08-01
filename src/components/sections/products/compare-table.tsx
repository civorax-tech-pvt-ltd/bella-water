import { Check, X, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { RatingStars } from "@/components/shared/rating-stars";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

const rows = ["availableSizes", "bestFor", "portability", "refillable", "idealUse"] as const;

export function CompareTable() {
  const t = useTranslations("products.compare");
  const tItems = useTranslations("products.items");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">{t("title")}</h2>
          <div className="overflow-x-auto rounded-2xl border bg-card">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs font-semibold text-muted-foreground uppercase">
                  <th className="px-4 py-3">{t("features")}</th>
                  {products.map((product) => (
                    <th key={product.slug} className="px-4 py-3 text-brand-navy dark:text-foreground">
                      {tItems(`${product.key}.name`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row} className="border-b last:border-0">
                    <td className="px-4 py-3.5 font-medium text-muted-foreground">{t(`rows.${row}`)}</td>
                    {products.map((product) => (
                      <td key={product.slug} className="px-4 py-3.5">
                        {row === "portability" ? (
                          <RatingStars rating={product.portabilityStars} />
                        ) : row === "refillable" ? (
                          product.refillable ? (
                            <Check className="size-4 text-brand-green" />
                          ) : (
                            <X className="size-4 text-destructive" />
                          )
                        ) : row === "bestFor" ? (
                          product.bestFor
                        ) : row === "availableSizes" ? (
                          product.sizeLabel
                        ) : (
                          tItems(`${product.key}.idealUse`)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-2xl border bg-card p-6 text-center">
          <p className="text-sm font-semibold text-brand-navy dark:text-foreground">{t("helpTitle")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("helpDescription")}</p>
          <Button asChild size="icon" className="mx-auto mt-4 size-14 rounded-full bg-whatsapp hover:bg-whatsapp/90">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" aria-label={t("chatCta")}>
              <MessageCircle className="size-6" />
            </a>
          </Button>
          <Button asChild variant="outline" className="mt-4">
            <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
              {t("chatCta")}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

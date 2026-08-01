import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations(`products.items.${product.key}`);
  const tCommon = useTranslations("products.card");

  return (
    <Card id={product.slug} className="group relative overflow-hidden border-0 bg-brand-sky p-6 shadow-none dark:bg-secondary">
      <Badge className="absolute top-6 left-6 bg-white text-brand-navy hover:bg-white dark:bg-card dark:text-primary">
        {t("badge")}
      </Badge>
      <div className="mx-auto flex h-48 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
        <img
          src={product.image}
          alt={t("name")}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-brand-navy dark:text-foreground">{t("name")}</h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground">{t("tagline")}</p>
        <p className="mt-3 text-sm text-muted-foreground">{t("description")}</p>
        <ul className="mt-4 space-y-2">
          {product.featureKeys.map((key) => (
            <li key={key} className="flex items-center gap-2 text-sm text-brand-navy dark:text-foreground">
              <span className="size-1.5 rounded-full bg-brand-green" />
              {t(`features.${key}`)}
            </li>
          ))}
        </ul>
        <a
          href={`#${product.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:gap-2.5 dark:text-primary"
        >
          {tCommon("learnMore")}
          <ArrowRight className="size-4 transition-all" />
        </a>
      </div>
    </Card>
  );
}

import { useTranslations } from "next-intl";
import { Container } from "@/components/shared/container";
import { mineralComposition } from "@/data/minerals";

export function MineralComposition() {
  const t = useTranslations("minerals");

  return (
    <section className="bg-brand-sky py-16 sm:py-20 dark:bg-secondary">
      <Container className="text-center">
        <p className="mb-2 text-sm font-semibold tracking-wide text-brand-green uppercase">{t("eyebrow")}</p>
        <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl dark:text-foreground">{t("title")}</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {mineralComposition.map((mineral) => (
            <div key={mineral.key} className="rounded-2xl border bg-card p-5">
              <p className="text-2xl font-bold text-brand-navy dark:text-primary">{mineral.symbol}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t(mineral.key)}</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{mineral.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{t("disclaimer")}</p>
      </Container>
    </section>
  );
}

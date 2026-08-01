import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <p className="text-sm font-semibold tracking-wide text-brand-green uppercase">404</p>
      <h1 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl dark:text-foreground">{t("title")}</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">{t("description")}</p>
      <Button asChild className="mt-8">
        <Link href="/">{t("backHome")}</Link>
      </Button>
    </Container>
  );
}

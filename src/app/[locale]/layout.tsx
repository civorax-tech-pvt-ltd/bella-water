import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "../globals.css";
import { routing } from "@/i18n/routing";
import { getLanguage } from "@/config/languages";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    ...pageMetadata({
      locale,
      pathname: "/",
      title: t("title"),
      description: t("description"),
    }),
    metadataBase: new URL("https://www.bellawater.com.np"),
    title: {
      default: t("title"),
      template: `%s | Bella`,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/images/logo/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale's subtree.
  setRequestLocale(locale);

  const language = getLanguage(locale);

  return (
    <html
      lang={language?.htmlLang ?? locale}
      dir={language?.dir ?? "ltr"}
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider>
            <TooltipProvider delayDuration={150}>
              <JsonLd data={organizationSchema(locale)} />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppFloatButton />
              <Toaster />
            </TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

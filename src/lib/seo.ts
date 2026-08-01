import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { activeLanguages, defaultLocale, type LanguageCode } from "@/config/languages";

/** Resolve a site-relative path to an absolute URL. */
export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}

/**
 * Absolute, trailing-slash URL for a locale + unlocalized pathname — matches
 * `trailingSlash: true` in next.config.ts (required for the static export
 * to resolve directory-style URLs like /en/products/ on any static host).
 */
export function localizedUrl(locale: string, pathname: string): string {
  const clean = pathname === "/" ? "" : pathname;
  return absoluteUrl(`/${locale}${clean}/`);
}

/**
 * hreflang alternates for every active locale plus x-default, pointing at
 * the same `pathname` (unlocalized slug — see routing.ts for why).
 */
export function buildLanguageAlternates(pathname: string) {
  const languages: Record<string, string> = {};
  for (const lang of activeLanguages) {
    languages[lang.htmlLang] = localizedUrl(lang.code, pathname);
  }
  languages["x-default"] = localizedUrl(defaultLocale, pathname);
  return languages;
}

interface PageMetadataInput {
  locale: LanguageCode | string;
  /** Unlocalized pathname, e.g. "/products" or "/" for the homepage. */
  pathname: string;
  title: string;
  description: string;
  /** Absolute or root-relative image path for Open Graph / Twitter cards. */
  image?: string;
  noIndex?: boolean;
}

export function pageMetadata({
  locale,
  pathname,
  title,
  description,
  image = "/images/og/default-og.jpg",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = localizedUrl(locale, pathname);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(pathname),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.fullName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

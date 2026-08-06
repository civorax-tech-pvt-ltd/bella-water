import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";

/** schema.org Organization + LocalBusiness JSON-LD, shared across pages. */
export function organizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl(`/${locale}/#organization`),
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl(`/${locale}`),
    logo: absoluteUrl("/images/logo/bella-logo.png"),
    image: absoluteUrl("/images/og/default-og.jpg"),
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      ...(siteConfig.address.postalCode ? { postalCode: siteConfig.address.postalCode } : {}),
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.coordinates.lat,
      longitude: siteConfig.address.coordinates.lng,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ],
  };
}

export function breadcrumbSchema(
  locale: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(`/${locale}${item.path}`),
    })),
  };
}

export function productSchema(locale: string, product: {
  name: string;
  description: string;
  image: string;
  sku: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    url: absoluteUrl(`/${locale}/products`),
  };
}

export function articleSchema(
  locale: string,
  post: { slug: string; title: string; description: string; image: string; publishedDate: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image),
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo/icon-512.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/${locale}/blog/${post.slug}`),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

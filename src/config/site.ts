/**
 * Central business/brand config. Pure data — no JSX — so it can be imported
 * from Server Components, metadata generators, and JSON-LD builders alike.
 * Update this file (not scattered components) when business details change.
 */

export const siteConfig = {
  name: "Bella",
  fullName: "Bella Premium Drinking Water",
  tagline: "Pure by nature. Perfected by science.",
  description:
    "Bella is a premium packaged drinking water brand from Biratnagar, Nepal — advanced 4-step purification, mineral-balanced, DFTQC-registered, and delivered fresh to homes, offices and businesses.",
  url: "https://www.bellawater.com.np",
  legalName: "Eastern Food & Beverage Pvt. Ltd.",
  founded: "2024",

  contact: {
    phone: "+977-021-552210",
    phoneDisplay: "+977-021-552210",
    whatsapp: "+977-021-552210",
    whatsappLink: "https://wa.me/97721552210",
    email: "info@bellawater.com.np",
    hours: {
      weekdays: "Mon - Sat: 8:00 AM - 6:00 PM",
      weekend: "Sunday: Closed",
    },
  },

  address: {
    factory: "Factory: Biratnagar-15, Morang, Nepal",
    street: "Biratnagar-15",
    city: "Morang",
    region: "Koshi Province",
    country: "Nepal",
    postalCode: "56613",
  },

  social: {
    facebook: "https://facebook.com/bellawaternepal",
    instagram: "https://instagram.com/bellawaternepal",
    whatsapp: "https://wa.me/97721552210",
    youtube: "https://youtube.com/@bellawaternepal",
  },

  deliveryAreas: [
    { name: "Biratnagar Metropolitan City", coverage: "All Wards" },
    { name: "Damak", coverage: "All Areas" },
    { name: "Itahari", coverage: "Select Areas" },
    { name: "Jahada, Rangeli, Belbari", coverage: "And nearby locations" },
  ],
} as const;

export type NavItem = {
  /** Message key under the `nav` namespace in messages/<locale>.json */
  key: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  { key: "ourStory", href: "/our-story" },
  { key: "purity", href: "/purity" },
  { key: "products", href: "/products" },
  { key: "quality", href: "/quality" },
  { key: "business", href: "/business" },
  { key: "contact", href: "/contact" },
];

export type FooterColumn = {
  key: string;
  links: NavItem[];
};

export const footerNav: FooterColumn[] = [
  {
    key: "explore",
    links: [
      { key: "home", href: "/" },
      { key: "ourStory", href: "/our-story" },
      { key: "purity", href: "/purity" },
      { key: "products", href: "/products" },
      { key: "quality", href: "/quality" },
    ],
  },
  {
    key: "products",
    links: [
      { key: "bottle500ml", href: "/products#500ml-bottle" },
      { key: "bottle1l", href: "/products#1l-bottle" },
      { key: "jar20l", href: "/products#20l-refill-jar" },
    ],
  },
  {
    key: "order",
    links: [
      { key: "orderWater", href: "/contact#order" },
      { key: "refill20l", href: "/products#20l-refill-jar" },
      { key: "deliveryAreas", href: "/contact#delivery-areas" },
      { key: "whatsapp", href: siteConfig.contact.whatsappLink },
    ],
  },
  {
    key: "business",
    links: [
      { key: "retailers", href: "/business#retailers" },
      { key: "distributors", href: "/business#distributors" },
      { key: "bulkOrders", href: "/business#events" },
      { key: "partnerWithUs", href: "/business#partner-form" },
    ],
  },
];

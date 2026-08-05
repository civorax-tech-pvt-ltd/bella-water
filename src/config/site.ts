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
    "Bella is a premium packaged drinking water brand from Jhapa, Nepal — advanced 4-step purification, mineral-balanced, DFTQC-registered, and delivered fresh to homes, offices and businesses.",
  url: "https://www.bellawater.com.np",
  legalName: "Eastern Food & Beverage Pvt. Ltd.",
  founded: "2024",

  contact: {
    // Primary — used for tel: links and the WhatsApp CTA everywhere on the site.
    phone: "+977-9852620501",
    // All three numbers, for display in the footer / contact page "Call Us" card.
    phoneDisplay: "+977-9852620501 / +977-9852620502 / +977-9852620503",
    phones: ["+977-9852620501", "+977-9852620502", "+977-9852620503"],
    // Assuming the first number is WhatsApp-enabled — tell me if a different one should be used.
    whatsapp: "+977-9852620501",
    whatsappLink: "https://wa.me/9779852620501",
    email: "info@bellawater.com.np",
    hours: {
      weekdays: "Mon - Sat: 8:00 AM - 6:00 PM",
      weekend: "Sunday: Closed",
    },
  },

  address: {
    factory: "Factory: Kamal-6, Lakhanpur, Jhapa, Nepal",
    street: "Kamal-6, Lakhanpur",
    city: "Jhapa",
    region: "Koshi Province",
    country: "Nepal",
    // TODO: exact postal code for Lakhanpur, Jhapa not confirmed — add when known.
    postalCode: "",
    coordinates: {
      lat: 26.640409007846593,
      lng: 87.71311004587909,
    },

  
  },

  social: {
    facebook: "https://www.facebook.com/refreshingbellawater",
    instagram: "https://instagram.com/bellawaternepal",
    whatsapp: "https://wa.me/9779852620501",
    youtube: "https://youtube.com/@bellawaternepal",
  },

  // Major towns across Koshi Province served from the Lakhanpur factory
  // (used on the Contact page).
  deliveryAreas: [
    { name: "Biratnagar", coverage: "All Wards" },
    { name: "Dharan", coverage: "All Areas" },
    { name: "Itahari", coverage: "All Areas" },
    { name: "Biratchowk", coverage: "All Areas" },
    { name: "Belbari", coverage: "All Areas" },
    { name: "Urlabari", coverage: "All Areas" },
    { name: "Damak", coverage: "All Areas" },
    { name: "Birtamod", coverage: "All Areas" },
    { name: "Kakarbhitta", coverage: "All Areas" },
    { name: "Bhadrapur, Charali", coverage: "And nearby locations" },
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

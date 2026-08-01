import type { LucideIcon } from "lucide-react";
import { Store, Truck, Building2, CalendarDays } from "lucide-react";

export interface BusinessOpportunity {
  /** Message key under `business.opportunities.items.<key>` */
  key: string;
  slug: string;
  icon: LucideIcon;
  image: string;
}

export const businessOpportunities: BusinessOpportunity[] = [
  { key: "retailers", slug: "retailers", icon: Store, image: "/images/business/retailers.jpg" },
  { key: "distributors", slug: "distributors", icon: Truck, image: "/images/business/distributors.jpg" },
  { key: "hotelsRestaurants", slug: "hotels-restaurants", icon: Building2, image: "/images/business/hotels.jpg" },
  { key: "eventsInstitutions", slug: "events", icon: CalendarDays, image: "/images/business/events.jpg" },
];

export interface BusinessBenefit {
  /** Message key under `business.whyPartner.items.<key>` */
  key: string;
  icon: string;
}

export const businessBenefitKeys = [
  "trustedBrand",
  "attractiveMargins",
  "consistentSupply",
  "marketingSupport",
  "dedicatedSupport",
] as const;

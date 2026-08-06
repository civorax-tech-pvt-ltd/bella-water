export interface Product {
  slug: string;
  /** Message key under `products.items.<key>` in messages/<locale>.json */
  key: string;
  sizeLabel: string;
  image: string;
  bestFor: string;
  portabilityStars: 1 | 2 | 3 | 4 | 5;
  refillable: boolean;
  featureKeys: string[];
}

export const products: Product[] = [
  {
    slug: "500ml-bottle",
    key: "bottle500ml",
    sizeLabel: "500 ml",
    image: "/images/products/bottle-500ml.webp",
    bestFor: "Individuals, Travel, Gym",
    portabilityStars: 5,
    refillable: false,
    featureKeys: ["easyToCarry", "perfectHydration", "trustedQuality"],
  },
  {
    slug: "1l-bottle",
    key: "bottle1l",
    sizeLabel: "1 Litre",
    image: "/images/products/bottle-1l.webp",
    bestFor: "Daily Use, Home, Office",
    portabilityStars: 4,
    refillable: false,
    featureKeys: ["pureBalanced", "essentialMinerals", "trustedPurity"],
  },
  {
    slug: "20l-refill-jar",
    key: "jar20l",
    sizeLabel: "20 Litre",
    image: "/images/products/jar-20l.webp",
    bestFor: "Home, Office, Institutions",
    portabilityStars: 1,
    refillable: true,
    featureKeys: ["costEffective", "ecoFriendly", "alwaysAvailable"],
  },
];

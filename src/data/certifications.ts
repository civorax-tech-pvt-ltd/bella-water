export interface Certification {
  /** Message key under `quality.certifications.items.<key>` */
  key: string;
  image: string;
  regNo?: string;
}

export const certifications: Certification[] = [
  { key: "dftqc", image: "/images/certificates/dftqc-registration.webp", regNo: "GINE-0029-FC" },
  // { key: "companyRegistration", image: "/images/certificates/company-registration.webp", regNo: "11723/5074/075" },
  { key: "foodQuality", image: "/images/certificates/food-quality-compliance.webp" },
];



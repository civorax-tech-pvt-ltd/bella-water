export interface Certification {
  /** Message key under `quality.certifications.items.<key>` */
  key: string;
  image: string;
  regNo?: string;
}

export const certifications: Certification[] = [
  { key: "dftqc", image: "/images/certificates/dftqc-registration.jpg", regNo: "02-04-76-08-817" },
  { key: "companyRegistration", image: "/images/certificates/company-registration.jpg", regNo: "11723/5074/075" },
  { key: "foodQuality", image: "/images/certificates/food-quality-compliance.jpg" },
];

export interface Testimonial {
  /** Message key under `home.testimonials.items.<key>` */
  key: string;
  name: string;
  /** Message key for the person's role, under `home.testimonials.items.<key>.role` */
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  { key: "sumanShrestha", name: "Suman Shrestha", rating: 5 },
  { key: "rajanK", name: "Rajan K.", rating: 5 },
  { key: "anitaGurung", name: "Anita Gurung", rating: 5 },
];

export const averageRating = 4.9;

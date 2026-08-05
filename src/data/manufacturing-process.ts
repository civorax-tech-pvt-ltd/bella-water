export interface ManufacturingStep {
  /** Message key under `ourStory.manufacturing.items.<key>` */
  key: string;
  video: string;
  poster: string;
}

export const manufacturingSteps: ManufacturingStep[] = [
  { key: "petPreform", video: "/videos/pet-preform-manufacturing.mp4", poster: "/videos/pet-preform-manufacturing.jpg" },
  { key: "capMolding", video: "/videos/cap-molding.mp4", poster: "/videos/cap-molding.jpg" },
  { key: "waterTreatment", video: "/videos/water-treatment.mp4", poster: "/videos/water-treatment.jpg" },
  { key: "bottleBlowing", video: "/videos/bottle-blowing-packaging.mp4", poster: "/videos/bottle-blowing-packaging.jpg" },
];

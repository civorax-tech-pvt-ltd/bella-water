import { videoUrls } from "@/config/videos";

export interface ManufacturingStep {
  /** Message key under `ourStory.manufacturing.items.<key>` */
  key: string;
  video: string;
  poster: string;
}

export const manufacturingSteps: ManufacturingStep[] = [
  { key: "petPreform", video: videoUrls.petPreformManufacturing, poster: "/videos/pet-preform-manufacturing.jpg" },
  { key: "capMolding", video: videoUrls.capMolding, poster: "/videos/cap-molding.jpg" },
  { key: "waterTreatment", video: videoUrls.waterTreatment, poster: "/videos/water-treatment.jpg" },
  { key: "bottleBlowing", video: videoUrls.bottleBlowingPackaging, poster: "/videos/bottle-blowing-packaging.jpg" },
];

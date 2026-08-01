import type { LucideIcon } from "lucide-react";
import { Droplet, FlaskConical, TestTube, ShieldCheck, Truck } from "lucide-react";

export interface QualityStep {
  /** Message key under `quality.process.steps.<key>` */
  key: string;
  number: string;
  icon: LucideIcon;
}

export const qualityProcessSteps: QualityStep[] = [
  { key: "sourceSelection", number: "01", icon: Droplet },
  { key: "advancedPurification", number: "02", icon: FlaskConical },
  { key: "qualityTesting", number: "03", icon: TestTube },
  { key: "safePackaging", number: "04", icon: ShieldCheck },
  { key: "secureDelivery", number: "05", icon: Truck },
];

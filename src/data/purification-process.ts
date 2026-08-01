import type { LucideIcon } from "lucide-react";
import { Waves, Grid3x3, Atom, Sun } from "lucide-react";

export interface PurificationStep {
  /** Message key under `purity.process.steps.<key>` */
  key: string;
  number: string;
  icon: LucideIcon;
  image: string;
}

export const purificationSteps: PurificationStep[] = [
  { key: "reverseOsmosis", number: "01", icon: Waves, image: "/images/process/reverse-osmosis.jpg" },
  { key: "nanoFiltration", number: "02", icon: Grid3x3, image: "/images/process/nano-filtration.jpg" },
  { key: "ozonation", number: "03", icon: Atom, image: "/images/process/ozonation.jpg" },
  { key: "uvSterilization", number: "04", icon: Sun, image: "/images/process/uv-sterilization.jpg" },
];

export interface MineralValue {
  symbol: string;
  /** Message key under `minerals.<key>` */
  key: string;
  value: string;
  unit: string;
}

/** Approximate mineral composition in mg/ltr. */
export const mineralComposition: MineralValue[] = [
  { symbol: "Ca", key: "calcium", value: "4", unit: "mg/l" },
  { symbol: "Mg", key: "magnesium", value: "4", unit: "mg/l" },
  { symbol: "Na", key: "sodium", value: "0", unit: "mg/l" },
  { symbol: "K", key: "potassium", value: "0.25", unit: "mg/l" },
  { symbol: "Cl", key: "chloride", value: "4.5", unit: "mg/l" },
  { symbol: "TDS", key: "tds", value: "105", unit: "mg/l" },
];

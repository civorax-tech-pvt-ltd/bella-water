/**
 * Single source of truth for supported languages.
 * `active: true` locales are live and included in i18n routing + static generation.
 * `active: false` locales are staged for future rollout — add translations under
 * `messages/<code>.json`, flip `active` to true, and the whole site (routes, nav,
 * language switcher, sitemap) picks them up automatically.
 */
export type LanguageCode =
  | "en"
  | "ne"
  | "mai"
  | "bho"
  | "raj"
  | "taj"
  | "tdh";

export interface LanguageConfig {
  code: LanguageCode;
  /** Name shown to a reader who already speaks this language. */
  nativeName: string;
  /** English name, used in the language switcher subtitle. */
  englishName: string;
  /** BCP 47 tag for <html lang>, hreflang, and Open Graph locale. */
  htmlLang: string;
  dir: "ltr" | "rtl";
  active: boolean;
}

export const languages: LanguageConfig[] = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
    htmlLang: "en",
    dir: "ltr",
    active: true,
  },
  {
    code: "ne",
    nativeName: "नेपाली",
    englishName: "Nepali",
    htmlLang: "ne",
    dir: "ltr",
    active: true,
  },
  // Staged for future rollout — see messages/README.md
  {
    code: "mai",
    nativeName: "मैथिली",
    englishName: "Maithili",
    htmlLang: "mai",
    dir: "ltr",
    active: false,
  },
  {
    code: "bho",
    nativeName: "भोजपुरी",
    englishName: "Bhojpuri",
    htmlLang: "bho",
    dir: "ltr",
    active: false,
  },
  {
    code: "raj",
    nativeName: "राजबंशी",
    englishName: "Rajbanshi",
    htmlLang: "raj",
    dir: "ltr",
    active: false,
  },
  {
    code: "taj",
    nativeName: "तामाङ",
    englishName: "Tamang",
    htmlLang: "taj",
    dir: "ltr",
    active: false,
  },
  {
    code: "tdh",
    nativeName: "थारू (चौधरी)",
    englishName: "Tharu / Chaudhary",
    htmlLang: "tdh",
    dir: "ltr",
    active: false,
  },
];

export const activeLanguages = languages.filter((l) => l.active);
export const activeLocaleCodes = activeLanguages.map((l) => l.code);
export const defaultLocale: LanguageCode = "en";

export function getLanguage(code: string): LanguageConfig | undefined {
  return languages.find((l) => l.code === code);
}
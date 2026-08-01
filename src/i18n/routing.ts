import { defineRouting } from "next-intl/routing";
import { activeLocaleCodes, defaultLocale } from "@/config/languages";

/**
 * Pathnames are intentionally NOT localized (no `/ne/hamro-kahani` style
 * translated slugs). next-intl's pathname translation relies on Next.js
 * rewrites, which are unavailable under `output: "export"` (static export).
 * Every locale shares the same slug (e.g. /en/our-story, /ne/our-story) so
 * the site remains fully static-hostable. Page titles/content are still
 * translated — only the URL segment stays stable.
 */
export const routing = defineRouting({
  locales: activeLocaleCodes,
  defaultLocale,
  localePrefix: "always",
});

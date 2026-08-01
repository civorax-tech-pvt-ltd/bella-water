import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

/**
 * Only takes effect when the app runs on a Node/Edge server (`next dev`,
 * `next start`, or platforms like Vercel). Under `output: "export"` (static
 * hosting) middleware does not execute — locale entry then relies on
 * `src/app/page.tsx` redirecting to `/${defaultLocale}` and every internal
 * link already pointing at a locale-prefixed path via `src/i18n/navigation.ts`.
 */
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};

import type { ReactNode } from "react";

/**
 * Intentionally has NO <html>/<body> tags. `src/app/[locale]/layout.tsx` is
 * the real root document (it knows the locale, so it can set <html lang>
 * and dir correctly). This file only exists because Next.js requires a
 * root `app/layout.tsx`; it must stay a transparent pass-through.
 *
 * The bare "/" route has no page — see `public/index.html` (static-redirect
 * fallback for static hosting) and `middleware.ts` (server redirect when
 * running on Node/Vercel) for how visitors land on `/${defaultLocale}`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

import Link from "next/link";

/**
 * Root not-found — used only for paths outside `[locale]` (e.g. a stray
 * `/foo`). Needs its own <html>/<body> because `app/layout.tsx` is a bare
 * pass-through (see that file for why). The localized 404 that visitors
 * actually see for `/en/foo` etc. lives at `app/[locale]/not-found.tsx`.
 */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontWeight: 600, color: "#1f7a4d" }}>404</p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0b2c5c" }}>Page not found</h1>
        <p style={{ marginTop: "0.5rem", color: "#666" }}>
          <Link href="/en/" style={{ color: "#0b2c5c", textDecoration: "underline" }}>
            Go to homepage
          </Link>
        </p>
      </body>
    </html>
  );
}

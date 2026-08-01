/**
 * The site is fully static (`output: "export"`), so there is no Next.js API
 * route to receive form submissions. Point `NEXT_PUBLIC_FORM_ENDPOINT` at a
 * form backend (Formspree, Getform, Basin, a serverless function you host
 * separately, etc.) that accepts a POST with JSON or FormData and this
 * helper will submit to it. Until that's configured, forms fall back to
 * opening the visitor's email client via `mailto:` with the message
 * pre-filled, so nothing is ever silently lost.
 */
export async function submitToFormEndpoint(
  formName: string,
  data: Record<string, string>,
): Promise<{ ok: boolean }> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  if (!endpoint) {
    return { ok: false };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form: formName, ...data }),
  });

  return { ok: response.ok };
}

export function buildMailtoFallback(
  email: string,
  subject: string,
  data: Record<string, string>,
): string {
  const body = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Module-level so React Compiler doesn't flag it as an in-render external mutation. */
export function navigateTo(url: string) {
  window.location.href = url;
}

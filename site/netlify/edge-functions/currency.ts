import type { Context } from "https://edge.netlify.com";

/**
 * Set the default currency from the visitor's country, in the HTML itself.
 *
 * WHY REWRITE THE RESPONSE rather than let the browser decide. The site is a
 * static build, so there is no per-request render. If the currency were chosen
 * by client JS the visitor would see one currency and then watch it change —
 * the flash of the wrong price this is explicitly meant to avoid. Stamping the
 * attribute on <html> at the edge means the markup arrives correct.
 *
 * NOTHING IS HIDDEN FROM CRAWLERS. Every price appears in the page text in
 * both currencies ("AED 6,500 / £1,400") whatever this sets. The attribute
 * only decides which one the plan cards and the builder lead with, so a
 * crawler in any country reads the same prices.
 *
 * A stored choice wins over geography: if the visitor has used the switch, the
 * cookie is already on the request and is used as-is.
 */
const AED_COUNTRIES = new Set(["AE", "SA", "QA", "KW", "BH", "OM"]);
const COOKIE = "brandure_cur";

export default async function (request: Request, context: Context) {
  const response = await context.next();

  const type = response.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) return response;

  const chosen = request.headers
    .get("cookie")
    ?.split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.split("=")[1];

  const currency =
    chosen === "aed" || chosen === "gbp"
      ? chosen
      : AED_COUNTRIES.has(context.geo?.country?.code ?? "")
        ? "aed"
        : "gbp";

  const html = await response.text();
  /* The build emits data-cur="gbp" as the default, so this is a swap rather
     than an insertion — if the attribute is ever missing, the page still works
     and simply shows the build-time default. */
  const out = html.replace(
    /(<html[^>]*?)\sdata-cur="(?:aed|gbp)"/i,
    `$1 data-cur="${currency}"`,
  );

  const headers = new Headers(response.headers);
  headers.set("x-brandure-currency", currency);
  /* Geography affects the markup, so shared caches must not serve one
     country's copy to another. */
  headers.append("vary", "cookie");
  return new Response(out, { status: response.status, headers });
}

export const config = { path: "/*" };

import { contact } from "../data/siteContent.js";

export async function sendContact(payload) {
  const endpoint = import.meta.env?.VITE_CONTACT_ENDPOINT?.trim()
    || `https://formsubmit.co/ajax/${contact.email}`;
  const isFormSubmit = new URL(endpoint, "https://www.trustrealty.ca").hostname === "formsubmit.co";
  const body = isFormSubmit ? {
    ...payload,
    _subject: "Trust Realty — new website inquiry",
    _replyto: payload.email,
    _template: "table",
  } : payload;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error("Unable to send");
  const result = await response.json().catch(() => null);
  // FormSubmit may return HTTP 200 even when submission fails.
  if (isFormSubmit && result?.success !== true && result?.success !== "true") {
    throw new Error("FormSubmit did not accept the message");
  }
  if (result?.success === false || result?.success === "false") {
    throw new Error("Unable to send");
  }
  return { ok: true };
}

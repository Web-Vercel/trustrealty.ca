export async function sendContact(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  if (!endpoint) return { ok: false, unconfigured: true };
  const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error("Unable to send");
  return { ok: true };
}

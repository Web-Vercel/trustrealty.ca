// Web3Forms access keys are public identifiers intended for browser forms.
const accessKey = "36438908-e244-456e-9659-36e9cf59626d";

export async function sendContact(payload) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...payload,
      access_key: accessKey,
      subject: "Trust Realty — new website inquiry",
      from_name: "Trust Realty Website",
      replyto: payload.email,
    }),
    signal: AbortSignal.timeout(20000),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    throw new Error("Message was not accepted by Web3Forms");
  }
  return { ok: true };
}

# Trust Realty

Independent Vite/React website for Kenny Lu, RE/MAX City Realty.

## Local development

`npm install && npm run dev`

## Contact form

The form posts to `https://formsubmit.co/kennylu.realtor@gmail.com` by default. No API key or Vercel environment variable is required. The browser uses a standard HTML form POST, allowing FormSubmit to show its verification, activation or error page directly. FormSubmit forwards inquiries to that inbox and uses the visitor’s email as the reply-to address. CAPTCHA verification remains enabled.

Before relying on delivery, submit the form once from the deployed website and confirm FormSubmit’s activation email in `kennylu.realtor@gmail.com` (check spam too). Then send a second inquiry and verify it arrives. The integration does not establish inbox activation or delivery until these steps are completed.

`VITE_CONTACT_ENDPOINT` is an optional override for another standard HTML form POST endpoint. Do not use the FormSubmit `/ajax/` endpoint here. Remove any obsolete override in Vercel and redeploy to use the default. Never put secret API keys in `VITE_` variables; they are public browser configuration.

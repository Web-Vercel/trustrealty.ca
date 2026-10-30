# Trust Realty

Independent Vite/React website for Kenny Lu, RE/MAX City Realty.

## Local development

`npm install && npm run dev`

## Contact form

The contact form sends JSON to `https://api.web3forms.com/submit`. It uses the owner-provided public Web3Forms access key in `src/services/contactService.js`; the recipient inbox is bound to that key in Web3Forms. No Vercel environment variables or email passwords are needed. `VITE_CONTACT_ENDPOINT` is no longer used.

The form stays on the Contact page, reports success only after Web3Forms accepts the request, and retains the visitor's input if submission fails. A honeypot and submission timeout are included. Feedback is available in English, Simplified Chinese and Traditional Chinese.

After deployment, submit one inquiry and verify delivery to `kennylu.realtor@gmail.com` (including spam). Mocked tests confirm submission behavior but cannot establish key activation, provider availability or inbox delivery.

Run `node tests/contactService.test.mjs` for submission checks without sending real email.

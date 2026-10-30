import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../App";
import { contact } from "../data/siteContent";
import { pageContent } from "../data/pageContent";

const interestValues = ['Residential', 'Commercial', 'Presales', 'Court-ordered sales', 'Land', 'Business purchase & sale', 'Tenant Placement', 'Full Property Management', 'Others'];

export default function Contact() {
  const { lang } = useLanguage();
  const t = pageContent[lang].contact;
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim() || `https://formsubmit.co/${contact.email}`;
  return <section className="py-20"><div className="wrap grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <div><p className="eyebrow">{t.eyebrow}</p><h1 className="heading mt-3">{t.title}</h1><div className="mt-8 space-y-5"><a href={contact.phoneHref} className="flex gap-3"><Phone className="text-brand"/>{contact.phoneDisplay}</a><a href={`mailto:${contact.email}`} className="flex gap-3"><Mail className="text-brand"/>{contact.email}</a><p className="flex gap-3"><MapPin className="shrink-0 text-brand"/>{contact.office}</p></div></div>
    <form action={endpoint} method="POST" className="card grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="_subject" value="Trust Realty — new website inquiry"/>
      <input type="hidden" name="_template" value="table"/>
      <label className="text-sm font-bold">{t.name}<input required name="name" autoComplete="name" className="mt-2 w-full rounded-lg border p-3 font-normal"/></label>
      <label className="text-sm font-bold">{t.email}<input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-lg border p-3 font-normal"/></label>
      <label className="text-sm font-bold">{t.phone}<input type="tel" name="phone" autoComplete="tel" className="mt-2 w-full rounded-lg border p-3 font-normal"/></label>
      <label className="text-sm font-bold">{t.interest}<select name="interest" className="mt-2 w-full rounded-lg border p-3 font-normal">{t.interests.map((label, i) => <option key={interestValues[i]} value={interestValues[i]}>{label}</option>)}</select></label>
      <label className="text-sm font-bold sm:col-span-2">{t.message}<textarea required name="message" rows="5" className="mt-2 w-full rounded-lg border p-3 font-normal"/></label>
      <p className="text-sm leading-6 text-slate-600 sm:col-span-2">{t.verification}</p>
      <button type="submit" className="btn-primary sm:col-span-2">{t.send}</button>
    </form>
  </div></section>;
}

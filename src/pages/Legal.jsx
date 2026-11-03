import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";
import { legalContent, legalLabels } from "../data/legalContent";
import { contact } from "../data/siteContent";

export default function Legal({ type }) {
  const { lang } = useLanguage();
  const labels = legalLabels[lang];
  const document = legalContent[lang][type];
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [type]);
  return <section className="bg-[#f8f7f4] py-12 sm:py-20" aria-labelledby="legal-title">
    <div className="wrap max-w-4xl">
      <nav aria-label={lang === "en" ? "Legal documents" : lang === "zh-CN" ? "法律文件" : "法律文件"} className="mb-8 flex flex-wrap gap-5 text-sm font-semibold">
        <Link to="/privacy" aria-current={type === "privacy" ? "page" : undefined} className={type === "privacy" ? "text-brand underline underline-offset-4" : "text-slate-600 hover:text-brand"}>{labels.privacy}</Link>
        <Link to="/terms" aria-current={type === "terms" ? "page" : undefined} className={type === "terms" ? "text-brand underline underline-offset-4" : "text-slate-600 hover:text-brand"}>{labels.terms}</Link>
      </nav>
      <h1 id="legal-title" className="heading break-words">{labels[type]}</h1>
      <p className="mt-4 text-sm text-slate-500">{labels.updated}</p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
        <p className="text-base leading-8 text-slate-600">{document.intro}</p>
        {document.sections.map(([title, text]) => <section key={title} className="mt-8"><h2 className="text-xl font-bold leading-8 text-ink">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></section>)}
        <section className="mt-10 border-t border-slate-200 pt-6"><h2 className="text-xl font-bold text-ink">{labels.contact}</h2><address className="mt-4 space-y-2 break-words text-sm not-italic leading-7 text-slate-600"><p>{contact.name} · {contact.brokerage}</p><p>{contact.office}</p><a className="block text-brand underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a><a className="block text-brand underline underline-offset-4" href={contact.phoneHref}>{contact.phoneDisplay}</a></address></section>
      </div>
    </div>
  </section>;
}

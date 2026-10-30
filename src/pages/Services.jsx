import { ArrowRight, Building2, BriefcaseBusiness, Gavel, HomeIcon, KeyRound, Map, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";
import { homeContent } from "../data/homeContent";

const tradingIcons = [HomeIcon, Building2, Sparkles, Gavel, Map, BriefcaseBusiness];

export default function Services() {
  const { lang } = useLanguage();
  const t = homeContent[lang];
  return (
    <section id="expertise" className="scroll-mt-24 bg-white py-16 lg:py-24" aria-labelledby="expertise-title">
      <div className="wrap">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow leading-6">{t.eyebrow}</p><h1 id="expertise-title" className="heading mt-3">{t.heading}</h1></div>
          <p className="max-w-lg text-base leading-8 text-slate-600 lg:justify-self-end">{t.description}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-slate-200 bg-[#f8f7f4] p-6 sm:p-10">
            <div className="flex items-center justify-between"><Building2 className="text-brand" size={32}/><span className="font-display text-4xl text-ink/20" aria-hidden="true">01</span></div>
            <p className="mt-7 text-[10px] font-bold leading-5 tracking-[.15em] text-brand">{t.tradingLicense}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">{t.trading}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{t.tradingIntro}</p>
            <ul className="my-8 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">{t.tradingItems.map((label, i) => {
              const Icon = tradingIcons[i];
              return <li className="flex items-center gap-3 text-sm font-semibold text-ink" key={label}><Icon size={19} strokeWidth={1.5} className="shrink-0 text-brand"/>{label}</li>;
            })}</ul>
            <Link to="/contact" className="mt-auto flex items-center justify-between gap-4 border-t border-ink/15 pt-6 text-sm font-bold text-ink">{t.tradingCta}<ArrowRight size={20} className="shrink-0 text-brand"/></Link>
          </article>
          <article className="flex flex-col rounded-3xl bg-ink p-6 text-white sm:p-10">
            <div className="flex items-center justify-between"><KeyRound className="text-[#e3c79a]" size={32}/><span className="font-display text-4xl text-white/25" aria-hidden="true">02</span></div>
            <p className="mt-7 text-[10px] font-bold leading-5 tracking-[.15em] text-[#e3c79a]">{t.rentalLicense}</p>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{t.rental}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{t.rentalIntro}</p>
            <ul className="my-8 space-y-6">{t.rentalItems.map(([title, description], i) => {
              const Icon = i === 0 ? Users : ShieldCheck;
              return <li className="flex items-start gap-4" key={title}><Icon size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-[#e3c79a]"/><div><h4 className="text-base font-semibold">{title}</h4><p className="mt-1 text-sm leading-6 text-slate-300">{description}</p></div></li>;
            })}</ul>
            <Link to="/contact" className="mt-auto flex items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm font-bold">{t.rentalCta}<ArrowRight size={20} className="shrink-0 text-[#e3c79a]"/></Link>
          </article>
        </div>
      </div>
    </section>
  );
}

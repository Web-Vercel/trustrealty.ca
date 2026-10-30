import { ArrowDown, ArrowRight, Building2, BriefcaseBusiness, Gavel, HomeIcon, KeyRound, Map, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";
import { contact } from "../data/siteContent";
import { homeContent } from "../data/homeContent";

const tradingIcons = [HomeIcon, Building2, Sparkles, Gavel, Map, BriefcaseBusiness];

export default function Home() {
  const { lang } = useLanguage();
  const t = homeContent[lang];
  return <>
    <section className="home-hero" aria-labelledby="home-title">
      <div className="wrap grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-16">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[.2em] text-slate-500">{t.region}</p>
          <p className="mt-7 font-display text-3xl text-ink">{t.name} <span className="ml-2 text-xl text-slate-500">{t.chineseName}</span></p>
          <h1 id="home-title" className="mt-5 whitespace-pre-line font-display text-[2.8rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-6xl xl:text-[4.25rem]">{t.headline}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">{t.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact" className="btn-primary gap-3">{t.contact}<ArrowRight size={17}/></Link>
            <a href="#expertise" className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-ink">{t.explore}<ArrowDown size={16}/></a>
          </div>
          <div className="mt-9 flex items-start gap-3 border-t border-ink/10 pt-5 text-xs font-medium leading-6 text-slate-600"><ShieldCheck className="mt-1 shrink-0 text-brand" size={18}/><span>{t.credentials}</span></div>
        </div>
        <div className="hero-portrait relative mx-auto w-full max-w-lg overflow-hidden rounded-t-[10rem] border border-ink/5 bg-white">
          <img src="/assets/kenny-lu.png" alt="Kenny Lu, RE/MAX City Realty" className="aspect-[4/4.5] w-full object-cover object-top" fetchPriority="high" width="1024" height="1152"/>
          <div className="absolute inset-x-0 bottom-0 bg-ink/95 px-6 py-5 text-white sm:px-8"><p className="font-display text-2xl">Kenny Lu <span className="ml-2 text-sm text-white/70">{t.chineseName}</span></p><p className="mt-1 text-[11px] font-semibold uppercase tracking-[.2em] text-white/70">{contact.brokerage}</p></div>
        </div>
      </div>
    </section>

    <section id="expertise" className="scroll-mt-24 bg-white py-16 lg:py-24" aria-labelledby="expertise-title">
      <div className="wrap">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow leading-6">{t.eyebrow}</p><h2 id="expertise-title" className="heading mt-3">{t.heading}</h2></div>
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
    <section className="border-t border-slate-200 bg-[#f8f7f4] py-14"><div className="wrap flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"><div><h2 className="font-display text-3xl leading-tight text-ink">{t.closing}</h2><p className="mt-3 leading-7 text-slate-600">{t.closingText}</p></div><a href={contact.phoneHref} className="btn-dark shrink-0 gap-3">{contact.phoneDisplay}<ArrowRight size={17}/></a></div></section>
  </>;
}

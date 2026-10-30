import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";
import { contact } from "../data/siteContent";
import { homeContent } from "../data/homeContent";

export default function Home() {
  const { lang } = useLanguage();
  const t = homeContent[lang];
  return <>
    <section className="home-hero" aria-labelledby="home-title">
      <div className="wrap grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-16">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase leading-6 tracking-[.2em] text-slate-500">{t.region}</p>
          <p className="mt-7 font-display text-3xl text-ink">{t.name}</p>
          <h1 id="home-title" className="mt-5 whitespace-pre-line font-display text-[2.8rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-6xl xl:text-[4.25rem]">{t.headline}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">{t.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/contact" className="btn-primary gap-3">{t.contact}<ArrowRight size={17}/></Link>
            <Link to="/services" className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-ink">{t.explore}<ArrowRight size={16}/></Link>
          </div>
          <div className="mt-9 flex items-start gap-3 border-t border-ink/10 pt-5 text-xs font-medium leading-6 text-slate-600"><ShieldCheck className="mt-1 shrink-0 text-brand" size={18}/><span>{t.credentials}</span></div>
        </div>
        <div className="hero-portrait relative mx-auto w-full max-w-lg overflow-hidden rounded-t-[10rem] border border-ink/5 bg-white">
          <img src="/assets/kenny-lu.png" alt="Kenny Lu, RE/MAX City Realty" className="aspect-[4/4.5] w-full object-cover object-top" fetchPriority="high" width="1024" height="1152"/>
          <div className="absolute inset-x-0 bottom-0 bg-ink/95 px-6 py-5 text-white sm:px-8"><p className="font-display text-2xl">Kenny Lu</p><p className="mt-1 text-[11px] font-semibold uppercase tracking-[.2em] text-white/70">{contact.brokerage}</p></div>
        </div>
      </div>
    </section>


    <section className="border-t border-slate-200 bg-[#f8f7f4] py-14"><div className="wrap flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"><div><h2 className="font-display text-3xl leading-tight text-ink">{t.closing}</h2><p className="mt-3 leading-7 text-slate-600">{t.closingText}</p></div><a href={contact.phoneHref} className="btn-dark shrink-0 gap-3">{contact.phoneDisplay}<ArrowRight size={17}/></a></div></section>
  </>;
}

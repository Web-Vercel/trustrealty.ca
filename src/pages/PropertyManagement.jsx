import { ArrowLeft, ArrowRight, Check, KeyRound, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../App";

const content = {
  en: {
    back: "All services", eyebrow: "RENTAL PROPERTY MANAGEMENT", title: "Your property. Our priority.",
    intro: "From finding the right tenant to caring for your rental day after day. Choose the support that works for you, with clear pricing from the start.",
    services: "Our Services", rent: "of monthly rent", full: "Full Property Management", fullIntro: "Ongoing care for your rental investment.",
    fullItems: ["Ongoing tenancy support", "Rent collection", "Maintenance coordination", "Owner reporting"],
    tenant: "Tenant Replacement", tenantIntro: "Support from marketing to tenancy setup.", once: "One-time fee", tenantItems: ["Rental marketing", "Property viewings", "Tenant screening", "Tenancy setup"],
    cta: "Discuss your rental property", bottom: "A little less to manage. A lot more peace of mind.",
  },
  "zh-CN": {
    back: "全部服务", eyebrow: "出租物业管理", title: "您的物业，我们用心照顾。", intro: "从寻找合适租客到日常租务管理，按您的需求选择服务。从一开始，就让服务与收费清晰透明。",
    services: "我们的服务", rent: "按每月租金计算", full: "全程物业管理", fullIntro: "为您的出租物业提供持续照顾。", fullItems: ["日常租务支持", "租金收取", "维修协调", "业主报告"],
    tenant: "租客更换服务", tenantIntro: "从出租推广到租约安排，协助完成招租。", once: "一次性费用", tenantItems: ["出租推广", "物业带看", "租客背景筛选", "租约安排"],
    cta: "咨询出租物业管理", bottom: "少一份操心，多一份安心。",
  },
  "zh-TW": {
    back: "全部服務", eyebrow: "出租物業管理", title: "您的物業，我們用心照顧。", intro: "從尋找合適租客到日常租務管理，按您的需求選擇服務。從一開始，就讓服務與收費清晰透明。",
    services: "我們的服務", rent: "按每月租金計算", full: "全程物業管理", fullIntro: "為您的出租物業提供持續照顧。", fullItems: ["日常租務支援", "租金收取", "維修協調", "業主報告"],
    tenant: "租客更換服務", tenantIntro: "從出租推廣到租約安排，協助完成招租。", once: "一次性費用", tenantItems: ["出租推廣", "物業帶看", "租客背景篩選", "租約安排"],
    cta: "諮詢出租物業管理", bottom: "少一份操心，多一份安心。",
  },
};

export default function PropertyManagement() {
  const { lang } = useLanguage();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  const t = content[lang];
  return <section className="management-page pb-16 pt-8 sm:pb-24" aria-labelledby="management-title">
    <div className="wrap">
      <Link to="/services" className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-slate-600 hover:text-brand"><ArrowLeft size={16}/>{t.back}</Link>
      <header className="mx-auto mt-8 max-w-3xl text-center">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 id="management-title" className="heading mt-4">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">{t.intro}</p>
      </header>
      <div className="management-services" aria-label={t.services}>
        <article className="orbit-card" aria-labelledby="full-management-title">
          <div className="mb-6 flex items-center justify-between"><span className="service-icon"><ShieldCheck size={24} strokeWidth={1.5}/></span><span className="text-xs font-semibold tracking-widest text-slate-400">01 / ONGOING</span></div>
          <h2 id="full-management-title" className="font-display text-[27px] font-bold leading-tight text-ink">Full Property Management</h2>
          {lang !== "en" && <p className="mt-2 font-semibold text-ink">{t.full}</p>}
          <p className="mt-3 text-sm leading-6 text-slate-500">{t.fullIntro}</p>
          <p className="service-price"><strong>8%</strong><span>{t.rent}</span></p>
          <ul className="service-inclusions">{t.fullItems.map(item => <li key={item}><Check size={16} aria-hidden="true"/><span>{item}</span></li>)}</ul>
        </article>
        <article className="orbit-card" aria-labelledby="tenant-replacement-title">
          <div className="mb-6 flex items-center justify-between"><span className="service-icon"><KeyRound size={24} strokeWidth={1.5}/></span><span className="text-xs font-semibold tracking-widest text-slate-400">02 / ONE-TIME</span></div>
          <h2 id="tenant-replacement-title" className="font-display text-[27px] font-bold leading-tight text-ink">Tenant Replacement</h2>
          {lang !== "en" && <p className="mt-2 font-semibold text-ink">{t.tenant}</p>}
          <p className="mt-3 text-sm leading-6 text-slate-500">{t.tenantIntro}</p>
          <p className="service-price"><strong>50%</strong><span>{t.rent}<br/><span className="font-semibold text-brand">{t.once}</span></span></p>
          <ul className="service-inclusions">{t.tenantItems.map(item => <li key={item}><Check size={16} aria-hidden="true"/><span>{item}</span></li>)}</ul>
        </article>
      </div>
      <div className="mt-12 text-center"><p className="mb-5 font-display text-2xl text-ink">{t.bottom}</p><Link to="/contact" className="btn-dark gap-3">{t.cta}<ArrowRight size={17}/></Link></div>
    </div>
  </section>;
}

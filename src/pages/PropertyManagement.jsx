import { ArrowLeft, ArrowRight, Check, KeyRound, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../App";

const content = {
  en: {
    back: "All services", eyebrow: "RENTAL PROPERTY MANAGEMENT", title: "Your property. Our priority.",
    services: "Our Services", rent: "of monthly rent", full: "Full Property Management", fullIntro: "Ongoing care for your rental investment.",

    tenant: "Tenant Replacement", tenantIntro: "Support from marketing to tenancy setup.", once: "One-time fee",
    cta: "Discuss your rental property", bottom: "A little less to manage. A lot more peace of mind.",
  },
  "zh-CN": {
    back: "全部服务", eyebrow: "出租物业管理", title: "您的物业，我们用心照顾。",
    services: "我们的服务", rent: "按每月租金计算", full: "全程物业管理", fullIntro: "为您的出租物业提供持续照顾。",
    tenant: "租客更换服务", tenantIntro: "从出租推广到租约安排，协助完成招租。", once: "一次性费用",
    cta: "咨询出租物业管理", bottom: "少一份操心，多一份安心。",
  },
  "zh-TW": {
    back: "全部服務", eyebrow: "出租物業管理", title: "您的物業，我們用心照顧。",
    services: "我們的服務", rent: "按每月租金計算", full: "全程物業管理", fullIntro: "為您的出租物業提供持續照顧。",
    tenant: "租客更換服務", tenantIntro: "從出租推廣到租約安排，協助完成招租。", once: "一次性費用",
    cta: "諮詢出租物業管理", bottom: "少一份操心，多一份安心。",
  },
};

const detailsLabels = { en: "Service details", "zh-CN": "服务内容", "zh-TW": "服務內容" };
const serviceItems = {
  en: ["Tenant Credit Checks", "Marketing Your Property", "Advertising Fees", "Property Viewings", "Tenant Application Processing", "Tenant Interviews", "Reference Checks", "Invoice Verification", "RTA Compliant Lease Contracts", "Damage Deposit Collection", "Move In Inspection", "New Tenant Orientation", "Rent Collection", "Contractor Scheduling & Coordination", "24-hour Tenant Calls", "Tenant Management", "Communication with Strata", "Move Out Inspection", "Billing & Invoicing For Expenses", "Monthly Financial Reports", "Inspections Twice A Year", "Year End Accounting"],
  "zh-CN": ["租客信用调查", "物业出租推广", "广告费用", "物业带看", "租赁申请处理", "租客面谈", "推荐人核查", "发票核实", "符合《住宅租赁法》的租约", "损坏押金收取", "入住检查", "新租客入住指引", "租金收取", "承包商预约与协调", "24 小时租客来电服务", "租客管理", "与分契物业管理方沟通", "退租检查", "费用账单与发票处理", "每月财务报告", "每年两次物业检查", "年终会计结算"],
  "zh-TW": ["租客信用調查", "物業出租推廣", "廣告費用", "物業帶看", "租賃申請處理", "租客面談", "推薦人核查", "發票核實", "符合《住宅租賃法》的租約", "損壞押金收取", "入住檢查", "新租客入住指引", "租金收取", "承包商預約與協調", "24 小時租客來電服務", "租客管理", "與分契物業管理方溝通", "退租檢查", "費用帳單與發票處理", "每月財務報告", "每年兩次物業檢查", "年終會計結算"],
};

function ServiceDetails({ label, items }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const container = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = event => { if (!container.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);
  return <div ref={container} className="service-details" onPointerEnter={event => { if (event.pointerType === "mouse") setOpen(true); }} onPointerLeave={event => { if (event.pointerType === "mouse") setOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={event => { if (event.key === "Escape") { setOpen(false); event.stopPropagation(); } }}>
    <button id={`${id}-trigger`} type="button" className="service-details-trigger" aria-expanded={open} aria-controls={id} onFocus={event => { if (event.target.matches(":focus-visible")) setOpen(true); }} onClick={() => setOpen(value => !value)}>{label}<span aria-hidden="true">{open ? "−" : "+"}</span></button>
    <div id={id} role="region" aria-labelledby={`${id}-trigger`} hidden={!open} className="service-details-panel" tabIndex={open ? 0 : -1}>
      <ul className="service-inclusions">{items.map(item => <li key={item}><Check size={16} aria-hidden="true"/><span>{item}</span></li>)}</ul>
    </div>
  </div>;
}

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
      </header>
      <div className="management-services" aria-label={t.services}>
        <article className="orbit-card" aria-labelledby="full-management-title">
          <div className="mb-6 flex items-center justify-between"><span className="service-icon"><ShieldCheck size={24} strokeWidth={1.5}/></span><span className="text-xs font-semibold tracking-widest text-slate-400">01 / ONGOING</span></div>
          <h2 id="full-management-title" className="font-display text-[27px] font-bold leading-tight text-ink">Full Property Management</h2>
          {lang !== "en" && <p className="mt-2 font-semibold text-ink">{t.full}</p>}
          <p className="mt-3 text-sm leading-6 text-slate-500">{t.fullIntro}</p>
          <p className="service-price"><strong>8%</strong><span>{t.rent}</span></p>
          <ServiceDetails label={detailsLabels[lang]} items={serviceItems[lang]} />
        </article>
        <article className="orbit-card" aria-labelledby="tenant-replacement-title">
          <div className="mb-6 flex items-center justify-between"><span className="service-icon"><KeyRound size={24} strokeWidth={1.5}/></span><span className="text-xs font-semibold tracking-widest text-slate-400">02 / ONE-TIME</span></div>
          <h2 id="tenant-replacement-title" className="font-display text-[27px] font-bold leading-tight text-ink">Tenant Replacement</h2>
          {lang !== "en" && <p className="mt-2 font-semibold text-ink">{t.tenant}</p>}
          <p className="mt-3 text-sm leading-6 text-slate-500">{t.tenantIntro}</p>
          <p className="service-price"><strong>50%</strong><span>{t.rent}<br/><span className="font-semibold text-brand">{t.once}</span></span></p>
          <ServiceDetails label={detailsLabels[lang]} items={serviceItems[lang].slice(0, 12)} />
        </article>
      </div>
      <div className="mt-12 text-center"><p className="mb-5 font-display text-2xl text-ink">{t.bottom}</p><Link to="/contact" className="btn-dark gap-3">{t.cta}<ArrowRight size={17}/></Link></div>
    </div>
  </section>;
}

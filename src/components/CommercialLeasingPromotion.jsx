import { ArrowRight, Building2, Store, Warehouse, BedDouble } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../App";
import { contact } from "../data/siteContent";

const content = {
  "zh-CN": {
    headline: "为亚洲企业寻找理想的加拿大商业租赁物业",
    description: "Kenny Lu 专注协助亚洲企业在大温哥华及 BC 省寻找合适的商业租赁物业。无论是商业店铺、仓库、物流配送中心、办公室、员工宿舍，还是外派高管住宿，都可以协助企业寻找、筛选及洽谈合适的租赁空间。",
    categories: ["商业店铺 / 零售铺面", "仓库 / 物流配送中心", "办公室 / 商业办公空间", "员工宿舍 / 高管住宿"],
    cta: "咨询租赁服务",
  },
  "zh-TW": {
    headline: "為亞洲企業尋找理想的加拿大商業租賃物業",
    description: "Kenny Lu 專注協助亞洲企業在大溫哥華及 BC 省尋找合適的商業租賃物業。無論是商業店舖、倉庫、物流配送中心、辦公室、員工宿舍，還是外派高管住宿，都可以協助企業尋找、篩選及洽談合適的租賃空間。",
    categories: ["商業店舖 / 零售舖面", "倉庫 / 物流配送中心", "辦公室 / 商業辦公空間", "員工宿舍 / 高管住宿"],
    cta: "諮詢租賃服務",
  },
};
const icons = [Store, Warehouse, Building2, BedDouble];

export default function CommercialLeasingPromotion() {
  const { lang } = useLanguage();
  const t = content[lang];
  if (!t) return null;

  return <section id="commercial-leasing" aria-labelledby="commercial-leasing-title" className="border-t border-slate-200 bg-white py-14 lg:py-20">
    <div className="wrap grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
      <div>
        <h2 id="commercial-leasing-title" className="heading text-3xl leading-normal sm:text-4xl md:text-4xl">{t.headline}</h2>
        <p className="mt-5 text-base leading-8 text-slate-600">{t.description}</p>
        <div className="mt-7 border-l-4 border-brand pl-4">
          <p className="font-display text-xl font-bold text-ink">{contact.name}</p>
          <p className="mt-1 text-xl font-bold leading-8 text-ink">{contact.brokerage}</p>
        </div>
        <Link to="/contact" className="btn-primary mt-7 gap-3">{t.cta}<ArrowRight size={17} aria-hidden="true"/></Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {t.categories.map((category, index) => {
          const Icon = icons[index];
          return <li key={category} className="flex min-w-0 flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-[#f8f7f4] p-6 sm:min-h-40">
            <span className="rounded-xl bg-white p-3 text-brand"><Icon size={26} strokeWidth={1.5} aria-hidden="true"/></span>
            <span className="text-base font-semibold leading-7 text-ink">{category}</span>
          </li>;
        })}
      </ul>
    </div>
  </section>;
}

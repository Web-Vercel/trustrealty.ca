import { useEffect, useRef } from "react";
import { ChevronDown, ExternalLink, KeyRound, Users } from "lucide-react";
import { useLanguage } from "../App";

const portals = [
  { key: "tenant", href: "https://pmwithremax.managebuilding.com/Resident/PublicPages/login.aspx", Icon: KeyRound },
  { key: "owner", href: "https://pmwithremax.managebuilding.com/manager", Icon: Users },
];
const content = {
  en: { title: "Client Portal", tenant: "Tenant Login", owner: "Owner Login", description: "Already a client? Access your tenant or owner account through our Buildium portal.", newTab: "opens in a new tab" },
  "zh-CN": { title: "客户门户", tenant: "租客登录", owner: "业主登录", description: "现有客户可通过 Buildium 门户访问租客或业主账户。", newTab: "在新标签页打开" },
  "zh-TW": { title: "客戶入口", tenant: "租客登入", owner: "業主登入", description: "現有客戶可透過 Buildium 入口存取租客或業主帳戶。", newTab: "在新分頁開啟" },
};

function PortalLinks({ buttons = false, onNavigate }) {
  const { lang } = useLanguage();
  const t = content[lang];
  return portals.map(({ key, href, Icon }) => <a key={key} href={href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={buttons ? "btn-dark gap-3" : "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-brand"}>
    <Icon size={18} aria-hidden="true"/><span>{t[key]}</span><ExternalLink size={14} aria-hidden="true"/><span className="sr-only"> ({t.newTab})</span>
  </a>);
}

export function PortalNavigation({ onNavigate }) {
  const { lang } = useLanguage();
  const menu = useRef(null);
  useEffect(() => {
    const closeOutside = event => { if (!menu.current?.contains(event.target)) menu.current?.removeAttribute("open"); };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  return <details ref={menu} className="relative" onKeyDown={event => { if (event.key === "Escape") { menu.current.removeAttribute("open"); menu.current.querySelector("summary").focus(); } }}>
    <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand [&::-webkit-details-marker]:hidden">{content[lang].title}<ChevronDown size={15} aria-hidden="true"/></summary>
    <div className="mt-1 rounded-xl border border-slate-200 bg-white p-1 shadow-lg lg:absolute lg:right-0 lg:top-full lg:min-w-52">
      <PortalLinks onNavigate={() => { menu.current?.removeAttribute("open"); onNavigate?.(); }}/>
    </div>
  </details>;
}

export default function ClientPortal() {
  const { lang } = useLanguage();
  const t = content[lang];
  return <section aria-labelledby="client-portal-title" className="mx-auto mt-12 max-w-[960px] rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
    <h2 id="client-portal-title" className="font-display text-3xl font-bold text-ink">{t.title}</h2>
    <p className="mt-3 text-sm leading-7 text-slate-600">{t.description}</p>
    <div className="mt-6 flex flex-wrap gap-3"><PortalLinks buttons/></div>
  </section>;
}

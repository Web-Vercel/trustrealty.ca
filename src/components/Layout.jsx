import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { useLanguage } from "../App";
import { contact, copy, languages } from "../data/siteContent";
export default function Layout() {
  const [open,setOpen]=useState(false); const {lang,setLang}=useLanguage(); const t=copy[lang]; const links=[["/",t.nav[0]],["/services",t.nav[1]],["/listings",t.nav[2]],["/about",t.nav[3]],["/faq",t.nav[4]],["/contact",t.nav[5]]];
  return <div className="min-h-screen"><header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur"><div className="wrap flex h-20 items-center justify-between">
    <Link to="/" className="flex items-end gap-3"><span className="font-display text-2xl font-bold text-ink">Kenny Lu</span><span className="mb-1 text-[10px] font-bold leading-tight text-brand">RE/MAX<br/><i className="not-italic text-slate-500">CITY REALTY</i></span></Link>
    <nav className="hidden items-center gap-1 lg:flex">{links.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>`rounded-lg px-3 py-2 text-sm font-semibold ${isActive?"bg-red-50 text-brand":"text-slate-600 hover:text-ink"}`}>{label}</NavLink>)}<a href={contact.phoneHref} className="ml-2 flex items-center gap-2 text-sm font-semibold"><Phone size={16}/>{contact.phoneDisplay}</a></nav>
    <div className="flex items-center gap-2"><select aria-label="Language" value={lang} onChange={e=>setLang(e.target.value)} className="rounded-lg border px-2 py-2 text-sm">{languages.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}</select><button className="p-2 lg:hidden" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div>{open&&<nav className="wrap grid gap-1 border-t py-4 lg:hidden">{links.map(([to,label])=><NavLink onClick={()=>setOpen(false)} key={to} to={to} className="rounded-lg px-3 py-3 font-semibold">{label}</NavLink>)}</nav>}</header>
  <main><Outlet/></main><footer className="bg-ink py-12 text-white"><div className="wrap grid gap-8 md:grid-cols-3"><div><p className="font-display text-2xl font-bold">{contact.name}</p><p className="mt-2 text-sm text-white/65">{contact.brokerage}<br/>Each office independently owned and operated.</p></div><div><p className="font-bold">Contact</p><a className="mt-2 block text-white/70" href={contact.phoneHref}>{contact.phoneDisplay}</a><a className="text-white/70" href={`mailto:${contact.email}`}>{contact.email}</a></div><div><p className="font-bold">Office</p><p className="mt-2 text-white/70">{contact.office}</p></div></div></footer></div>;
}

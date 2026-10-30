import { LineChart, ShieldCheck, Cpu, Handshake } from "lucide-react";
import { useLanguage } from "../App";
import { pageContent } from "../data/pageContent";

const icons = [LineChart, ShieldCheck, Cpu, Handshake];

export default function About() {
  const { lang } = useLanguage();
  const t = pageContent[lang].about;
  return <>
    <section className="bg-ink py-20 text-white"><div className="wrap"><p className="eyebrow">{t.eyebrow}</p><h1 className="mt-3 font-display text-5xl font-bold">{t.title}</h1></div></section>
    <section className="py-20"><div className="wrap grid items-center gap-12 lg:grid-cols-2"><img src="/assets/kenny-lu-about.jpg" alt="Kenny Lu" className="mx-auto w-full max-w-lg rounded-2xl"/><div><h2 className="heading mt-3">{t.heading}</h2><p className="mt-6 leading-8 text-slate-600">{t.biography}</p><p className="mt-4 leading-8 text-slate-600">{t.communication}</p></div></div></section>
    <section className="bg-mist py-20"><div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-4">{t.values.map(([title, description], i) => {
      const Icon = icons[i];
      return <article className="card" key={title}><Icon className="text-brand"/><h3 className="mt-4 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>;
    })}</div></section>
  </>;
}

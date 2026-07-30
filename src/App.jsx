import { createContext, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import Property from "./pages/Property";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);
export default function App() {
  const [lang, setLang] = useState("en");
  return <LanguageContext.Provider value={{ lang, setLang }}><Routes><Route element={<Layout />}>
    <Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/listings" element={<Listings />} />
    <Route path="/residential" element={<Listings />} /><Route path="/residential/:slug" element={<Property />} />
    <Route path="/about" element={<About />} /><Route path="/faq" element={<FAQ />} /><Route path="/contact" element={<Contact />} />
    <Route path="/ai-consultation" element={<Contact />} /><Route path="*" element={<NotFound />} />
  </Route></Routes></LanguageContext.Provider>;
}

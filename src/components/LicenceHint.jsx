import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Info } from "lucide-react";

export default function LicenceHint({ children, description }) {
  const id = useId();
  const trigger = useRef(null);
  const tooltip = useRef(null);
  const [position, setPosition] = useState(null);
  const [pinned, setPinned] = useState(false);
  const show = () => {
    const rect = trigger.current.getBoundingClientRect();
    const width = Math.min(280, window.innerWidth - 32);
    setPosition({ width, left: Math.max(16, Math.min(rect.left, window.innerWidth - width - 16)), top: rect.bottom + 8 });
  };
  const close = () => { setPosition(null); setPinned(false); };
  const isOpen = position !== null;
  useEffect(() => {
    if (!isOpen) return;
    const outside = event => { if (!trigger.current?.contains(event.target) && !tooltip.current?.contains(event.target)) close(); };
    const reposition = () => {
      const rect = trigger.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) { close(); return; }
      const width = Math.min(280, window.innerWidth - 32);
      setPosition({ width, left: Math.max(16, Math.min(rect.left, window.innerWidth - width - 16)), top: rect.bottom + 8 });
    };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", reposition, true);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", reposition, true);
    };
  }, [isOpen]);
  return <>
    <button ref={trigger} type="button" aria-describedby={position ? id : undefined} className="inline-flex cursor-help items-center gap-1 rounded px-0.5 font-bold text-ink underline decoration-brand decoration-dotted decoration-2 underline-offset-4 transition-colors hover:bg-red-50 hover:text-brand focus-visible:bg-red-50" onPointerEnter={event => { if (event.pointerType === "mouse") show(); }} onPointerLeave={event => { if (event.pointerType === "mouse" && !pinned && !tooltip.current?.contains(event.relatedTarget)) close(); }} onFocus={event => { if (event.target.matches(":focus-visible")) show(); }} onBlur={close} onClick={() => { if (pinned) close(); else { show(); setPinned(true); } }} onKeyDown={event => { if (event.key === "Escape") close(); }}>
      {children}<Info size={13} aria-hidden="true"/>
    </button>
    {position && createPortal(<span ref={tooltip} id={id} role="tooltip" style={position} className="fixed z-[60] rounded-xl bg-ink px-4 py-3 text-sm font-normal leading-6 text-white shadow-lg" onPointerLeave={() => { if (!pinned) close(); }}>{description}</span>, document.body)}
  </>;
}

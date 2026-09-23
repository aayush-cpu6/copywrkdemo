"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader, SiteFooter, whatsappUrl } from "./site-chrome";

/* Real capabilities, mapped to routes that already exist and are indexed —
   nothing here is invented, it's the existing service/landing pages
   presented as a typographic list instead of four identical cards. */
const capabilities = [
  { id: "01", label: "Website design & development", tag: "PRIMARY OFFER", href: "/services/websites" },
  { id: "02", label: "Wedding & event websites", tag: "SPECIALITY", href: "/wedding-event-websites" },
  { id: "03", label: "AI receptionist systems", tag: "ADD-ON", href: "/services/receptionist" },
  { id: "04", label: "Lead follow-up automation", tag: "ADD-ON", href: "/services/followup" },
  { id: "05", label: "Business process automation", tag: "ADD-ON", href: "/services/automation" },
];

/* Real, existing work — same three projects already on /work, each given
   its own composition instead of a repeated card. */
const projects = [
  {
    id: "01",
    name: "WingsCraft",
    href: "/work/wingscraft",
    tag: "Wedding & Events · Concept",
    image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&fm=webp&q=82&w=1600",
    alt: "WingsCraft luxury wedding website concept",
    dark: false,
  },
  {
    id: "02",
    name: "Trinity Wraps",
    href: "/work/trinity-wraps",
    tag: "Automotive · Concept",
    image: "https://raw.githubusercontent.com/copywrk0-lgtm/trinitywraps/main/public/images/trinity_wraps_01_ktm.jpg",
    alt: "Trinity Wraps automotive website concept featuring a custom KTM motorcycle",
    dark: true,
  },
  {
    id: "03",
    name: "GB Motors",
    href: "/work/gb-motors",
    tag: "Automotive · Concept",
    image: "https://raw.githubusercontent.com/copywrk0-lgtm/GB-Motors-Personalized-Demo-/main/public/gb-motors/work-1.jpg",
    alt: "GB Motors automotive detailing website concept",
    dark: false,
  },
];

const stages = [
  { id: "01", label: "UNDERSTAND", copy: "Map the offer, audience, pages and the one conversion goal that matters." },
  { id: "02", label: "DESIGN", copy: "Establish visual direction, hierarchy and responsive behaviour." },
  { id: "03", label: "BUILD", copy: "Turn the approved direction into a fast, production-ready site." },
  { id: "04", label: "SHIP", copy: "Connect the domain, test the important paths, hand it over." },
];

/* The recurring Copywrk graphic device — a loose mark built from a
   crosshair and crop marks, halfway between a sketchbook and a browser
   viewport. Reused sparingly across the page. */
function BuildMark({ size = 56 }: { size?: number }) {
  return (
    <svg className="cw-buildmark" width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M4 16V4h12M60 16V4H48M4 48v12h12M60 48v12H48" strokeWidth="1.6" strokeLinecap="square" />
      <line x1="32" y1="20" x2="32" y2="44" strokeWidth="1" />
      <line x1="20" y1="32" x2="44" y2="32" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.4" />
    </svg>
  );
}

function TypingText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const [started, setStarted] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStarted(true); setTypedLength(text.length); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: .45 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [text]);
  useEffect(() => {
    if (!started) return;
    let typingTimer = 0;
    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        setTypedLength((length) => { if (length >= text.length) { window.clearInterval(typingTimer); return length; } return length + 1; });
      }, 20);
    }, delay);
    return () => { window.clearTimeout(startTimer); window.clearInterval(typingTimer); };
  }, [started, delay, text]);
  return (
    <p ref={elementRef} className={`${className} ${typedLength === text.length ? "is-complete" : ""}`}>
      <span className="typing-reserve" aria-hidden="true">{text}</span>
      <span className="typing-live" aria-hidden="true">{text.slice(0, typedLength)}<i /></span>
      <span className="sr-only">{text}</span>
    </p>
  );
}

/* Subtle pointer-follow tilt on the two hero words. Off on touch devices
   and prefers-reduced-motion; otherwise a small, cheap transform driven
   by CSS custom properties — no animation library required. */
function useHeroTilt() {
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      el.style.setProperty("--tx", (x * 10).toFixed(2));
      el.style.setProperty("--ty", (y * 6).toFixed(2));
    };
    const onLeave = () => { el.style.setProperty("--tx", "0"); el.style.setProperty("--ty", "0"); };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, []);
  return stageRef;
}

export default function MotionSite() {
  const [introReady, setIntroReady] = useState(false);
  const [activeStages, setActiveStages] = useState<Set<string>>(new Set());
  const stageRef = useHeroTilt();
  const philosophyCopy = "A business website should feel specific to the business behind it. Copywrk combines visual direction, responsive design and frontend development instead of forcing every project into the same template.";

  useEffect(() => { const t = window.setTimeout(() => setIntroReady(true), 80); return () => window.clearTimeout(t); }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("cw-seen", entry.isIntersecting)), { threshold: .16 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-stage]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-stage")!;
          setActiveStages((prev) => new Set(prev).add(id));
        }
      });
    }, { threshold: .5 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`cw-main${introReady ? " cw-intro-ready" : ""}`}>
      <SiteHeader />

      {/* HERO — full-viewport typographic composition, no dot field, no ticker */}
      <section className="cw-hero" id="top">
        <div className="cw-hero-row">
          <span className="cw-meta">EST. 2026<br />AVAILABLE — SELECT PROJECTS</span>
          <span className="cw-meta">INDIA → WORLDWIDE</span>
        </div>

        <div className="cw-hero-stage" ref={stageRef}>
          <p className="cw-positioning">Independent web design<br />&amp; development studio</p>
          <h1>
            <span className="cw-word cw-word-1">COPY</span>
            <span className="cw-word cw-word-2">WRK<sup>®</sup></span>
          </h1>
          <p className="cw-hero-statement">We build websites people <b>remember.</b></p>
        </div>

        <div className="cw-hero-bottom">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Start a project ↗</a>
          <span className="cw-scroll">Scroll ↓</span>
          <a href="#work">See our work</a>
        </div>
      </section>

      {/* CORE OFFER — existing SEO copy and internal links, kept intact */}
      <section className="section seo-intro">
        <div className="seo-intro-copy" data-reveal>
          <span>THE CORE OFFER</span>
          <h2>Your website should make the business look worth contacting.</h2>
          <div>
            <p>Copywrk designs and develops premium websites for service businesses that need a stronger digital presence and a clearer path from visitor to enquiry.</p>
            <p>Every project is built mobile-first, responsive across devices, performance-conscious, and structured around the actions you want visitors to take.</p>
            <p>From dental clinics and automotive businesses to wedding brands and professional services, the goal is simple: make the business look credible and make contacting it easy.</p>
          </div>
        </div>
        <div className="seo-paths" data-reveal>
          <Link href="/website-development"><span>01</span><strong>Website development</strong><i>↗</i></Link>
          <Link href="/work"><span>02</span><strong>Selected work</strong><i>↗</i></Link>
        </div>
      </section>

      {/* CAPABILITIES — typographic list instead of service cards */}
      <section className="cw-capabilities" id="services">
        <div className="cw-capabilities-head" data-reveal>
          <div className="cw-label"><i />WHAT WE DO</div>
          <h2>Design first.<br />Built to perform.</h2>
        </div>
        <ol className="cw-cap-list">
          {capabilities.map((c) => (
            <li className="cw-cap-row" key={c.id} data-reveal>
              <Link href={c.href}>
                <span className="cw-num">{c.id}</span>
                <strong>{c.label}</strong>
                <span className="cw-tag">{c.tag}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* SELECTED WORK — the real work, each project with its own composition */}
      <section className="cw-work" id="work">
        <div className="cw-work-head" data-reveal>
          <div className="cw-label"><i />SELECTED WORK</div>
          <h2>Judge us by<br />the work.</h2>
        </div>
        {projects.map((p) => (
          <article className={`cw-project${p.dark ? " cw-dark" : ""}`} key={p.id} data-reveal>
            <div className="cw-project-meta">
              <span>{p.id} / {String(projects.length).padStart(2, "0")}</span>
              <span>{p.tag}</span>
            </div>
            <div className="cw-project-frame">
              <h3 className="cw-project-title">{p.name}</h3>
              <Link className="cw-project-shot" href={p.href} aria-label={`View ${p.name} case study`}>
                <img src={p.image} alt={p.alt} loading={p.id === "01" ? "eager" : "lazy"} />
              </Link>
            </div>
            <div className="cw-project-foot">
              <span>{p.name}</span>
              <Link href={p.href}>View case study ↗</Link>
            </div>
          </article>
        ))}
      </section>

      {/* PHILOSOPHY — one quiet section between the loud ones */}
      <section className="cw-philosophy">
        <div data-reveal>
          <span className="cw-label"><i />POINT OF VIEW</span>
          <h2>Good websites<br />don&rsquo;t look<br />interchangeable.</h2>
          <TypingText text={philosophyCopy} delay={150} />
        </div>
      </section>

      {/* PROCESS — one continuous line through four stages, not four cards */}
      <section className="cw-process" id="process">
        <div className="cw-process-head" data-reveal>
          <div className="cw-label"><i />PROCESS</div>
          <h2>From idea<br />to live site.</h2>
        </div>
        <div className="cw-process-line">
          {stages.map((s) => (
            <div className={`cw-stage${activeStages.has(s.id) ? " cw-active" : ""}`} key={s.id} data-stage={s.id}>
              <span>{s.id}</span>
              <strong>{s.label}</strong>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEHIND COPYWRK — the human element, no fabricated portrait */}
      <section className="cw-founder-note" data-reveal>
        <span className="cw-label"><i />BEHIND COPYWRK</span>
        <h3>Aayush — designer + developer</h3>
        <p>I design and build every Copywrk project myself, end to end, which is why the work stays specific to the business instead of leaning on a template. If you want to talk through a project directly, WhatsApp is the fastest way to reach me.</p>
      </section>

      {/* CONTACT */}
      <section className="cw-contact" id="contact" data-reveal>
        <div className="cw-contact-mark"><BuildMark size={70} /></div>
        <span className="cw-label" style={{ color: "inherit" }}><i style={{ background: "var(--cw-paper)" }} />HAVE A BUSINESS. NEED A BETTER WEBSITE?</span>
        <h2>Let&rsquo;s talk.</h2>
        <a className="cw-contact-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Let&rsquo;s talk <b>↗</b></a>
        <div className="cw-contact-links">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:copywrk0@gmail.com">Email</a>
          <a href="https://www.instagram.com/copywrk/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

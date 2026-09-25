"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type Mode = "design" | "build";

const projects = [
  {
    index: "01",
    name: "Manan Creations",
    type: "Luxury weddings / Editorial",
    line: "A wedding brand rebuilt like a world, not a brochure.",
    image: "/images/manan.png",
    accent: "#8b261f",
  },
  {
    index: "02",
    name: "Ever After",
    type: "Weddings / Bahrain + Mumbai",
    line: "Old-world intimacy, modern enquiry flow.",
    image: "/images/copywrk-portfolio.png",
    accent: "#6f2638",
  },
  {
    index: "03",
    name: "Trinity Wraps",
    type: "Automotive / Culture",
    line: "A sharper digital presence for a louder physical product.",
    image: "/images/copywrk-portfolio.png",
    accent: "#a53a24",
  },
];

export default function HomeExperience() {
  const [mode, setMode] = useState<Mode>("design");
  const modeCopy = useMemo(
    () =>
      mode === "design"
        ? {
            eyebrow: "ART DIRECTION / EXPERIENCE",
            title: "Make them feel it before they understand it.",
            body: "Composition, typography, image rhythm and motion designed as one continuous experience.",
          }
        : {
            eyebrow: "ENGINEERING / PERFORMANCE",
            title: "Make the beautiful thing hold up under pressure.",
            body: "Responsive systems, fast delivery, accessible interactions and clean frontend execution.",
          },
    [mode]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.from(".hero-word .char", {
        yPercent: 120,
        rotate: 3,
        duration: 1.15,
        stagger: 0.025,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.to(".hero-orbit", {
        rotate: 110,
        scale: 1.08,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-chapter").forEach((section) => {
        const media = section.querySelector(".project-media");
        const image = section.querySelector(".project-image");
        gsap.fromTo(
          media,
          { clipPath: "inset(12% 18% 12% 18% round 2px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 2px)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 76%",
              end: "center 52%",
              scrub: 1,
            },
          }
        );
        gsap.fromTo(
          image,
          { scale: 1.12, yPercent: -2 },
          {
            scale: 1.02,
            yPercent: 2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      const track = document.querySelector<HTMLElement>(".horizontal-track");
      const shell = document.querySelector<HTMLElement>(".horizontal-shell");
      if (track && shell && window.innerWidth > 900) {
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: shell,
            start: "top top",
            end: () => `+=${distance() + window.innerHeight * 0.7}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".mode-content > *",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, stagger: 0.07, duration: 0.55, ease: "power3.out" }
    );
  }, [mode]);

  const split = (text: string) =>
    text.split("").map((char, i) => (
      <span className="char" key={`${char}-${i}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <main className={`site mode-${mode}`}>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Copywrk home">
          COPYWRK<sup>®</sup>
        </a>
        <div className="topbar-center">INDEPENDENT DIGITAL STUDIO</div>
        <nav>
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a className="nav-cta" href="mailto:hello@copywrk.website">Start a project ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta hero-meta-left">01 — INDIA / WORLDWIDE</div>
        <div className="hero-meta hero-meta-right">SCROLL TO ENTER ↓</div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring" />
          <div className="orbit-dot" />
        </div>
        <h1 className="hero-title" aria-label="Websites worth remembering">
          <span className="hero-word">{split("WEBSITES")}</span>
          <span className="hero-word hero-word-indent">{split("WORTH")}</span>
          <span className="hero-word hero-word-serif">{split("REMEMBERING.")}</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Strategy, design and development for brands that would rather create a reaction than fill a template.
          </p>
          <a href="#work">Selected work ↓</a>
        </div>
      </section>

      <section className="statement">
        <div className="section-index">02 / PRINCIPLE</div>
        <p className="statement-kicker" data-reveal>THE WEBSITE IS NOT THE CONTAINER.</p>
        <h2 data-reveal>
          It is the <em>experience</em> people use to decide what your business feels like.
        </h2>
        <div className="statement-grid" data-reveal>
          <span>FAST ON EVERY SCREEN.</span>
          <span>CLEAR WHERE IT COUNTS.</span>
          <span>NEVER FROM A TEMPLATE.</span>
        </div>
      </section>

      <section className="mode-section" id="method">
        <div className="mode-top">
          <div className="section-index">03 / TWO SIDES</div>
          <div className="mode-switch" role="group" aria-label="Choose design or build perspective">
            <button className={mode === "design" ? "active" : ""} onClick={() => setMode("design")}>DESIGN</button>
            <span>↔</span>
            <button className={mode === "build" ? "active" : ""} onClick={() => setMode("build")}>BUILD</button>
          </div>
        </div>
        <div className="mode-content" key={mode}>
          <p>{modeCopy.eyebrow}</p>
          <h2>{modeCopy.title}</h2>
          <div className="mode-bottom">
            <p>{modeCopy.body}</p>
            <div className="mode-list">
              {mode === "design" ? (
                <><span>Creative direction</span><span>Responsive art direction</span><span>Motion systems</span><span>Conversion hierarchy</span></>
              ) : (
                <><span>Next.js / React</span><span>GSAP / Lenis</span><span>Performance + SEO</span><span>Responsive QA</span></>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="work-intro" id="work">
        <div className="section-index">04 / SELECTED WORK</div>
        <h2 data-reveal>Not cards.<br/><em>Chapters.</em></h2>
        <p data-reveal>Each project gets its own rhythm, tone and visual language—held together by one Copywrk standard.</p>
      </section>

      {projects.map((project, i) => (
        <section className="project-chapter" key={project.name} style={{ "--accent": project.accent } as CSSProperties}>
          <div className="project-head">
            <span>{project.index}</span>
            <span>{project.type}</span>
            <span>{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          </div>
          <div className="project-media">
            <Image className="project-image" src={project.image} alt={`${project.name} project showcase`} fill sizes="100vw" priority={i === 0} />
            <div className="project-shade" />
            <div className="project-caption">
              <h3>{project.name}</h3>
              <p>{project.line}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="horizontal-shell">
        <div className="horizontal-track">
          <article className="h-panel h-panel-title">
            <span className="section-index">05 / WHAT WE BUILD</span>
            <h2>One site.<br/>Many <em>layers.</em></h2>
          </article>
          <article className="h-panel capability-panel">
            <span>01</span><h3>Direction</h3><p>A single idea strong enough to control the whole visual system.</p>
          </article>
          <article className="h-panel capability-panel">
            <span>02</span><h3>Motion</h3><p>Transitions that change composition—not decorative fade-up spam.</p>
          </article>
          <article className="h-panel capability-panel">
            <span>03</span><h3>Mobile</h3><p>Designed as its own experience, not desktop squeezed into a phone.</p>
          </article>
          <article className="h-panel capability-panel">
            <span>04</span><h3>Conversion</h3><p>Every expressive moment still leads somewhere useful.</p>
          </article>
          <article className="h-panel capability-panel">
            <span>05</span><h3>Build</h3><p>Production frontend that stays fast, clean and easy to hand over.</p>
          </article>
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-image" data-reveal>
          <Image src="/images/copywrk-old.png" alt="Earlier Copywrk website direction" fill sizes="(max-width: 900px) 92vw, 45vw" />
        </div>
        <div className="proof-copy">
          <span className="section-index">06 / EVOLUTION</span>
          <h2 data-reveal>Same business.<br/><em>Different gravity.</em></h2>
          <p data-reveal>Copywrk should demonstrate the standard before a client ever reads the pitch.</p>
          <div className="proof-rule" />
          <div className="proof-meta"><span>Previous direction</span><span>→</span><span>Experience-led system</span></div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-top">
          <span>07 / YOUR MOVE</span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>
        <h2>
          <span>YOUR BUSINESS</span>
          <span className="contact-offset">CHANGED.</span>
          <span className="contact-serif">YOUR WEBSITE</span>
          <span>SHOULD TOO.</span>
        </h2>
        <div className="contact-bottom">
          <a href="mailto:hello@copywrk.website">hello@copywrk.website ↗</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>

      <footer>
        <span>© 2026 COPYWRK</span>
        <span>DESIGN / DEVELOPMENT / MOTION</span>
        <span>INDIA → WORLDWIDE</span>
      </footer>
    </main>
  );
}

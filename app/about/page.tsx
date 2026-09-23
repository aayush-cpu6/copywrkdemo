import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Copywrk, an independent web design and development studio creating distinctive, conversion-focused websites for service businesses.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const values = [
    ["01", "Start with the business", "Every project begins with the offer, audience, customer journey, and the action the website needs visitors to take."],
    ["02", "Design with a point of view", "We avoid template sameness and build around the brand, content, and market instead of forcing every business into the same visual system."],
    ["03", "Build mobile-first", "The website is designed to work intentionally across phones, tablets, and desktops—not squeezed down as an afterthought."],
    ["04", "Make conversion obvious", "Strong hierarchy, clear calls to action, fast load times, and focused enquiry paths matter as much as visual polish."],
  ];

  return <main><SiteHeader/><section className="editorial-hero"><span>ABOUT COPYWRK</span><h1>Small teams should not have to <em>look</em> small online.</h1><p>Copywrk is an independent web design and development studio creating distinctive, high-performing websites for service businesses.</p></section><section className="manifesto"><blockquote>“A good website should make the business feel worth contacting before the first conversation starts.”</blockquote><p>We combine strategy, visual design, responsive development, performance, and conversion-focused UX to create websites that strengthen credibility and make the next step obvious.</p></section><section className="founder"><div className="founder-label"><span>FOUNDER / 01</span><i aria-hidden="true">A</i></div><div className="founder-copy"><span>FOUNDER &amp; WEB DESIGNER</span><h2>Aayush</h2><p>Aayush started Copywrk after seeing how often strong service businesses were being represented by weak, outdated, or generic websites.</p><p>He founded Copywrk to help businesses present themselves with the same level of quality online that they bring to their actual work—through sharper positioning, stronger design, better mobile experiences, and clearer enquiry paths.</p><p>Copywrk focuses primarily on website design and development, with practical automation available only when it supports the website and the client journey.</p></div></section><section className="values"><span>HOW WE THINK</span><div>{values.map(v=><article key={v[0]}><span>{v[0]}</span><h2>{v[1]}</h2><p>{v[2]}</p></article>)}</div></section><section className="next-service"><span>NEED A STRONGER WEBSITE?</span><h2>Let’s make the<br/><em>first impression count.</em></h2><Link href="/contact">Talk to Copywrk ↗</Link></section><SiteFooter/></main>;
}

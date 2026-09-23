import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-chrome";

export const metadata: Metadata = {
  title: "WingsCraft Wedding Website Concept",
  description: "Explore the WingsCraft wedding and event website concept by Copywrk, focused on premium visual storytelling, mobile UX, service clarity, and enquiry conversion.",
  alternates: { canonical: "/work/wingscraft" },
  openGraph: {
    title: "WingsCraft Wedding Website Concept | Copywrk",
    description: "A premium wedding and event website concept focused on brand positioning, responsive UX, and enquiry conversion.",
    url: "/work/wingscraft",
    type: "article",
  },
};

export default function WingsCraftCaseStudy() {
  return <main>
    <SiteHeader />
    <section className="landing-hero coral">
      <span>CASE STUDY · CONCEPT / DEMO</span>
      <h1>WingsCraft: a premium wedding website built around visual trust and enquiries.</h1>
      <div><p>This concept explores how a wedding and event brand can present luxury services, showcase work, and guide visitors toward a clear enquiry path without losing visual impact.</p><Link href="/wedding-event-websites">Wedding & event website design ↗</Link></div>
    </section>
    <section className="landing-audience"><span>THE CHALLENGE</span><p>Wedding brands sell through emotion, taste, trust, and proof. The website therefore needs to feel premium while still making services, credibility, destinations, portfolio work, and contact options easy to understand on mobile and desktop.</p></section>
    <section className="landing-pains"><div><span>DESIGN PRIORITIES</span><h2>Luxury presentation without sacrificing clarity.</h2></div><div>
      <article><b>01</b><h3>Visual storytelling</h3><p>Large-format imagery and editorial composition give the work enough space to communicate atmosphere and production quality.</p></article>
      <article><b>02</b><h3>Service clarity</h3><p>Luxury weddings, destination weddings, planning, and related services need a clear structure so visitors quickly understand the offer.</p></article>
      <article><b>03</b><h3>Enquiry journey</h3><p>Calls to action, WhatsApp, and contact routes are placed around high-intent moments rather than appearing only at the bottom of the site.</p></article>
    </div></section>
    <section className="landing-system"><div><span>APPROACH</span><h2>A website designed around how couples evaluate a wedding brand.</h2></div><ol>
      <li><b>01</b><div><h3>Position</h3><p>Lead with a premium visual identity and messaging that supports luxury and destination-event positioning.</p></div><i>↘</i></li>
      <li><b>02</b><div><h3>Prove</h3><p>Use portfolio imagery, testimonials, achievements, and brand detail to build confidence before the enquiry.</p></div><i>↘</i></li>
      <li><b>03</b><div><h3>Guide</h3><p>Keep navigation and page hierarchy simple enough that prospective clients can move from inspiration to relevant service information quickly.</p></div><i>↘</i></li>
      <li><b>04</b><div><h3>Convert</h3><p>Make contacting the business straightforward through mobile-friendly forms and direct messaging options.</p></div><i>↘</i></li>
    </ol></section>
    <section className="landing-related"><span>RELATED</span><div><Link href="/wedding-event-websites">Wedding & event websites<i>↗</i></Link><Link href="/website-design">Website design<i>↗</i></Link><Link href="/work">All selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>PLANNING A WEDDING OR EVENT WEBSITE?</span><h2>Build a site that<br/><em>looks worth enquiring about.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

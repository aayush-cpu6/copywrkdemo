import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Website Design Services for Service Businesses",
  description: "Website design services for service businesses. Copywrk creates distinctive, mobile-first websites with clear messaging, strong visual hierarchy, and enquiry-focused user journeys.",
  alternates: { canonical: "/website-design" },
  openGraph: {
    title: "Website Design Services for Service Businesses | Copywrk",
    description: "Distinctive, mobile-first website design built around credibility, clarity, and enquiries.",
    url: "/website-design",
  },
};

const faqs = [
  ["Do you use templates?", "We may use proven interface patterns, but the visual direction, page hierarchy, content structure, and interactions are shaped around the business rather than forcing every project into the same template."],
  ["Is mobile design included?", "Yes. Mobile is treated as a primary experience, with navigation, spacing, type, imagery, forms, and calls to action designed and tested for smaller screens."],
  ["Can you redesign an existing website?", "Yes. We can preserve useful brand and content assets while rebuilding the parts that weaken clarity, credibility, responsiveness, or conversion."],
];

export default function WebsiteDesignPage() {
  return <main>
    <SiteHeader />
    <section className="landing-hero coral">
      <span>WEBSITE DESIGN SERVICES</span>
      <h1>Website design services built around your business.</h1>
      <div><p>Copywrk designs distinctive, mobile-first websites for service businesses that need stronger positioning, clearer messaging, and a more credible digital presence.</p><Link href="/contact">Discuss your website ↗</Link></div>
    </section>

    <section className="landing-audience"><span>WHO THIS IS FOR</span><p>For service businesses, wedding and event brands, automotive businesses, professional services, clinics, and growing teams whose website feels generic, dated, confusing, or disconnected from the quality of the real business.</p></section>

    <section className="landing-pains">
      <div><span>WHAT WE FIX</span><h2>Design should make the next decision easier.</h2></div>
      <div>
        <article><b>01</b><h3>Weak first impression</h3><p>The visual experience does not match the quality, pricing, or positioning of the business.</p></article>
        <article><b>02</b><h3>Unclear hierarchy</h3><p>Visitors cannot quickly understand the offer, strongest services, proof, and next step.</p></article>
        <article><b>03</b><h3>Poor mobile experience</h3><p>Desktop-first layouts become cramped, oversized, slow, or difficult to navigate on phones.</p></article>
      </div>
    </section>

    <section className="landing-system">
      <div><span>OUR DESIGN PROCESS</span><h2>From positioning to a responsive visual system.</h2></div>
      <ol>
        <li><b>01</b><div><h3>Understand</h3><p>We map the audience, offer, competitors, brand signals, and primary conversion goal.</p></div><i>↘</i></li>
        <li><b>02</b><div><h3>Structure</h3><p>We shape the pages, content hierarchy, proof, navigation, and calls to action.</p></div><i>↘</i></li>
        <li><b>03</b><div><h3>Design</h3><p>We build a distinctive visual language across desktop and mobile without sacrificing clarity.</p></div><i>↘</i></li>
        <li><b>04</b><div><h3>Refine</h3><p>We test hierarchy, responsive behaviour, interaction, accessibility, and conversion paths before development or launch.</p></div><i>↘</i></li>
      </ol>
    </section>

    <section className="landing-example"><span>SELECTED WORK</span><div><h2>See the design thinking in context.</h2><p>Our work page shows concept and demo builds across service businesses, with project status labelled clearly.</p><Link href="/work">View selected work ↗</Link></div></section>

    <section className="landing-faq"><div><span>COMMON QUESTIONS</span><h2>Before the project starts.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<i>+</i></summary><p>{a}</p></details>)}</div></section>

    <section className="landing-related"><span>KEEP EXPLORING</span><div><Link href="/website-development">Website development<i>↗</i></Link><Link href="/wedding-event-websites">Wedding & event websites<i>↗</i></Link><Link href="/work">Selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>READY TO START?</span><h2>Make the first<br/><em>impression count.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

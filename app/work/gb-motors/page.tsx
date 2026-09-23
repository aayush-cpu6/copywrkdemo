import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-chrome";

export const metadata: Metadata = {
  title: "GB Motors Automotive Website Concept",
  description: "Explore the GB Motors automotive website concept by Copywrk, focused on service presentation, responsive UX, stronger credibility, and enquiry conversion.",
  alternates: { canonical: "/work/gb-motors" },
  openGraph: {
    title: "GB Motors Automotive Website Concept | Copywrk",
    description: "An automotive website concept focused on clearer services, responsive design, credibility, and enquiries.",
    url: "/work/gb-motors",
    type: "article",
  },
};

export default function GBMotorsCaseStudy() {
  return <main>
    <SiteHeader />
    <section className="landing-hero lime">
      <span>CASE STUDY · CONCEPT / DEMO</span>
      <h1>GB Motors: a cleaner automotive website built around credibility and service clarity.</h1>
      <div><p>This concept explores how an automotive service business can present its offer more professionally, communicate trust faster, and guide visitors toward a clear enquiry path.</p><Link href="/website-development">Website development ↗</Link></div>
    </section>
    <section className="landing-audience"><span>THE CHALLENGE</span><p>For service businesses, a weak website can make a strong offline operation look less credible than it really is. The goal was to create a sharper digital first impression while keeping services, proof, and contact routes easy to understand.</p></section>
    <section className="landing-pains"><div><span>DESIGN PRIORITIES</span><h2>Improve clarity without overcomplicating the site.</h2></div><div>
      <article><b>01</b><h3>Stronger hierarchy</h3><p>Visitors should immediately understand the business, the main services, and the action to take next.</p></article>
      <article><b>02</b><h3>Credible presentation</h3><p>Photography, spacing, typography, and layout are used to make the business feel more established and trustworthy.</p></article>
      <article><b>03</b><h3>Responsive usability</h3><p>The experience is designed to stay clear and usable across mobile, tablet, and desktop rather than shrinking a desktop layout.</p></article>
    </div></section>
    <section className="landing-system"><div><span>APPROACH</span><h2>A focused service-business website with a clear next step.</h2></div><ol>
      <li><b>01</b><div><h3>Structure</h3><p>Put the strongest services, trust information, and contact path in a sequence that is easy to scan.</p></div><i>↘</i></li>
      <li><b>02</b><div><h3>Present</h3><p>Use a visual system that feels professional without distracting from the business offer.</p></div><i>↘</i></li>
      <li><b>03</b><div><h3>Adapt</h3><p>Design mobile and desktop layouts intentionally so important content remains easy to use on every screen.</p></div><i>↘</i></li>
      <li><b>04</b><div><h3>Convert</h3><p>Make it straightforward for visitors to call, message, or enquire after reviewing the services.</p></div><i>↘</i></li>
    </ol></section>
    <section className="landing-related"><span>RELATED</span><div><Link href="/website-design">Website design<i>↗</i></Link><Link href="/website-development">Website development<i>↗</i></Link><Link href="/work">All selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>NEED A STRONGER SERVICE-BUSINESS WEBSITE?</span><h2>Make the digital<br/><em>first impression stronger.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

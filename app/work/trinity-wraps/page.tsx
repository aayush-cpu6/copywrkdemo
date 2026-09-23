import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Trinity Wraps Automotive Website Concept",
  description: "Explore the Trinity Wraps automotive website concept by Copywrk, focused on service clarity, trust, mobile usability, and workshop enquiries.",
  alternates: { canonical: "/work/trinity-wraps" },
  openGraph: {
    title: "Trinity Wraps Automotive Website Concept | Copywrk",
    description: "An automotive website concept designed to showcase services, build trust, and make workshop enquiries easier.",
    url: "/work/trinity-wraps",
    type: "article",
  },
};

export default function TrinityWrapsCaseStudy() {
  return <main>
    <SiteHeader />
    <section className="landing-hero blue">
      <span>CASE STUDY · CONCEPT / DEMO</span>
      <h1>Trinity Wraps: an automotive website built to turn visual interest into workshop enquiries.</h1>
      <div><p>This concept focuses on the specific needs of a vehicle wrapping and detailing business: strong visual proof, easy service discovery, trust signals, and simple mobile contact paths.</p><Link href="/website-design">Website design ↗</Link></div>
    </section>
    <section className="landing-audience"><span>THE CHALLENGE</span><p>Automotive customers often decide quickly based on quality, visual proof, service range, convenience, and trust. The website needs to make those signals obvious without burying the visitor in generic copy.</p></section>
    <section className="landing-pains"><div><span>DESIGN PRIORITIES</span><h2>Show the work. Explain the service. Make contact easy.</h2></div><div>
      <article><b>01</b><h3>Service visibility</h3><p>Wrapping, PPF, detailing, tint, and related services need to be easy to scan and understand from the first few screens.</p></article>
      <article><b>02</b><h3>Visual proof</h3><p>Project imagery is treated as evidence, not decoration, so visitors can judge finish quality and style before reaching out.</p></article>
      <article><b>03</b><h3>Mobile conversion</h3><p>Contact, WhatsApp, directions, and quote actions stay easy to use on phones where many local customers will browse.</p></article>
    </div></section>
    <section className="landing-system"><div><span>APPROACH</span><h2>A local-service website with a sharper sales path.</h2></div><ol>
      <li><b>01</b><div><h3>Clarify</h3><p>Organise the service menu around what customers actually search for and compare.</p></div><i>↘</i></li>
      <li><b>02</b><div><h3>Demonstrate</h3><p>Use real or representative project photography to communicate quality and workmanship quickly.</p></div><i>↘</i></li>
      <li><b>03</b><div><h3>Reassure</h3><p>Surface process, location, contact details, and trust information before asking for an enquiry.</p></div><i>↘</i></li>
      <li><b>04</b><div><h3>Convert</h3><p>Keep the quote or contact action visible and straightforward across devices.</p></div><i>↘</i></li>
    </ol></section>
    <section className="landing-related"><span>RELATED</span><div><Link href="/website-design">Website design<i>↗</i></Link><Link href="/website-development">Website development<i>↗</i></Link><Link href="/work">All selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>NEED A BETTER AUTOMOTIVE WEBSITE?</span><h2>Make the work<br/><em>look worth booking.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

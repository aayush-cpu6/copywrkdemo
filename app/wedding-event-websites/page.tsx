import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Wedding Planner Website Design",
  description: "Wedding planner website design for premium wedding and event businesses, with strong visual storytelling, service pages, galleries, enquiry journeys, and mobile-first performance.",
  alternates: { canonical: "/wedding-event-websites" },
  openGraph: {
    title: "Wedding Planner Website Design | Copywrk",
    description: "Premium, mobile-first websites for wedding planners and event companies built to showcase work and generate enquiries.",
    url: "/wedding-event-websites",
  },
};

const faqs = [
  ["Can you build portfolio and gallery sections?", "Yes. We can structure galleries, featured weddings, event categories, image-led case studies, and video where it improves the story rather than slowing the site unnecessarily."],
  ["Can the site connect to WhatsApp and enquiry forms?", "Yes. We can build clear WhatsApp entry points, project enquiry forms, email notifications, and other practical integrations around the way the team already handles leads."],
  ["Can you work with destination wedding brands?", "Yes. The site structure can be built around destinations, services, portfolio stories, venue categories, planning capabilities, and enquiry intent without locking the brand to one location."],
];

export default function WeddingEventWebsitesPage() {
  return <main>
    <SiteHeader />
    <section className="landing-hero violet">
      <span>WEDDING PLANNER WEBSITE DESIGN</span>
      <h1>Website design for wedding planners and event companies.</h1>
      <div><p>Copywrk designs and develops image-led, mobile-first websites for wedding planners, event companies, and celebration brands that need stronger presentation and a clearer path from inspiration to enquiry.</p><Link href="/contact">Discuss your project ↗</Link></div>
    </section>

    <section className="landing-audience"><span>WHO THIS IS FOR</span><p>For wedding planners, destination wedding companies, event agencies, decorators, production teams, and premium celebration brands that rely on visual proof, reputation, and high-intent enquiries.</p></section>

    <section className="landing-pains">
      <div><span>WHERE VALUE IS LOST</span><h2>Beautiful work can still be presented badly online.</h2></div>
      <div>
        <article><b>01</b><h3>Portfolio without story</h3><p>Strong event photography is shown as a generic gallery instead of demonstrating taste, scale, planning quality, and range.</p></article>
        <article><b>02</b><h3>Premium brand, average website</h3><p>The digital presentation feels cheaper or more generic than the experience the business actually delivers.</p></article>
        <article><b>03</b><h3>Weak enquiry journey</h3><p>Visitors admire the work but are not guided toward the right service, destination, budget context, or project enquiry.</p></article>
      </div>
    </section>

    <section className="landing-system">
      <div><span>WHAT WE BUILD</span><h2>A visual experience with a commercial purpose.</h2></div>
      <ol>
        <li><b>01</b><div><h3>Position the brand</h3><p>Clarify the type of weddings or events you want more of, your strongest differentiators, and the level of client you want to attract.</p></div><i>↘</i></li>
        <li><b>02</b><div><h3>Structure the portfolio</h3><p>Organise services, galleries, featured projects, testimonials, destinations, and proof so visitors can understand your work quickly.</p></div><i>↘</i></li>
        <li><b>03</b><div><h3>Design mobile-first</h3><p>Create a premium image-led experience that remains fast, readable, and easy to navigate on phones.</p></div><i>↘</i></li>
        <li><b>04</b><div><h3>Build the enquiry path</h3><p>Connect clear calls to action, structured forms, WhatsApp, email, analytics, and the handoff your team needs.</p></div><i>↘</i></li>
      </ol>
    </section>

    <section className="landing-example"><span>CONCEPT EXAMPLE</span><div><h2>WingsCraft — wedding planner website concept.</h2><p>Our WingsCraft concept explores a premium wedding-planning presentation with stronger visual hierarchy, service storytelling, portfolio emphasis, and a clearer enquiry path.</p><Link href="/work/wingscraft">See WingsCraft case study ↗</Link></div></section>

    <section className="landing-faq"><div><span>COMMON QUESTIONS</span><h2>Useful answers before we start.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<i>+</i></summary><p>{a}</p></details>)}</div></section>

    <section className="landing-related"><span>KEEP EXPLORING</span><div><Link href="/website-design">Website design<i>↗</i></Link><Link href="/website-development">Website development<i>↗</i></Link><Link href="/work">Selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>READY TO START?</span><h2>Turn the portfolio<br/><em>into enquiries.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

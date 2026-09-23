import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Website Development Services for Businesses",
  description: "Website development services for businesses. Copywrk builds fast, responsive, production-ready websites with clean structure, technical SEO foundations, analytics, forms, and practical integrations.",
  alternates: { canonical: "/website-development" },
  openGraph: {
    title: "Website Development Services for Businesses | Copywrk",
    description: "Production-ready, mobile-first website development with strong performance, SEO foundations, and enquiry-focused integrations.",
    url: "/website-development",
  },
};

const faqs = [
  ["Do you build multi-page websites?", "Yes. Page count is based on what users and search engines need to understand clearly, such as services, industries, case studies, FAQs, contact information, and legal pages."],
  ["Is technical SEO included?", "We can include crawlable page structure, metadata, canonical URLs, sitemap and robots configuration, structured data, internal linking, image optimisation, and Search Console setup. Rankings still depend on competition, authority, content quality, and ongoing work."],
  ["Can you connect forms, WhatsApp, analytics, or booking tools?", "Yes. We can connect practical tools around the website, including enquiry forms, WhatsApp entry points, analytics, Search Console, calendars, maps, email notifications, and lightweight lead workflows."],
  ["Can you work remotely?", "Yes. Copywrk works remotely with businesses in India and internationally."],
];

export default function WebsiteDevelopmentPage() {
  return <main>
    <SiteHeader />
    <section className="landing-hero blue">
      <span>WEBSITE DEVELOPMENT SERVICES</span>
      <h1>Website development that looks sharp and works properly.</h1>
      <div><p>Copywrk builds responsive, production-ready websites for service businesses with strong technical foundations, clear conversion paths, and the integrations needed to turn a visitor into a usable enquiry.</p><Link href="/contact">Discuss your website ↗</Link></div>
    </section>

    <section className="landing-audience"><span>WHO THIS IS FOR</span><p>For service businesses, professional teams, wedding and event brands, automotive businesses, clinics, and growing companies that need more than a brochure page or fragile template.</p></section>

    <section className="landing-pains">
      <div><span>WHAT DEVELOPMENT SHOULD SOLVE</span><h2>A website should work as well as it looks.</h2></div>
      <div>
        <article><b>01</b><h3>Slow or fragile pages</h3><p>Heavy assets, unnecessary scripts, and poor implementation create a weak mobile experience and make the site harder to maintain.</p></article>
        <article><b>02</b><h3>Broken conversion paths</h3><p>Forms, calls to action, WhatsApp links, and enquiry handoffs fail or create friction at the moment a visitor is ready to act.</p></article>
        <article><b>03</b><h3>Weak search foundations</h3><p>Important pages are missing clear metadata, crawlable content, internal links, canonical URLs, structured data, or sitemap coverage.</p></article>
      </div>
    </section>

    <section className="landing-system">
      <div><span>HOW WE BUILD</span><h2>Production code, responsive behaviour, and a clean launch path.</h2></div>
      <ol>
        <li><b>01</b><div><h3>Plan the structure</h3><p>Define the pages, content hierarchy, navigation, conversion goals, integrations, and SEO requirements before implementation.</p></div><i>↘</i></li>
        <li><b>02</b><div><h3>Build responsively</h3><p>Develop layouts and interactions that are intentionally tested across mobile, tablet, and desktop rather than simply shrinking a desktop design.</p></div><i>↘</i></li>
        <li><b>03</b><div><h3>Connect the essentials</h3><p>Set up forms, analytics, Search Console, WhatsApp, maps, email notifications, and other project-specific integrations.</p></div><i>↘</i></li>
        <li><b>04</b><div><h3>Test and launch</h3><p>Check navigation, forms, responsive behaviour, accessibility basics, metadata, crawlability, performance issues, and the production domain before handover.</p></div><i>↘</i></li>
      </ol>
    </section>

    <section className="landing-integrations"><span>TYPICAL INTEGRATIONS</span><p>Depending on the project, websites can connect with WhatsApp, Google Analytics, Google Search Console, Google Maps, calendars, email, enquiry forms, CRMs, and lightweight lead tracking.</p></section>

    <section className="landing-example"><span>THE RESULT</span><div><h2>A website with a clear next step.</h2><p>Visitors understand the offer, find the right service, see relevant proof, and reach the business through a tested enquiry path. The business receives a site that is deployable, maintainable, crawlable, and ready to support future SEO work.</p><Link href="/work">View selected work ↗</Link></div></section>

    <section className="landing-faq"><div><span>COMMON QUESTIONS</span><h2>Clear answers before development.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<i>+</i></summary><p>{a}</p></details>)}</div></section>

    <section className="landing-related"><span>KEEP EXPLORING</span><div><Link href="/website-design">Website design<i>↗</i></Link><Link href="/wedding-event-websites">Wedding & event websites<i>↗</i></Link><Link href="/work">Selected work<i>↗</i></Link></div></section>
    <section className="next-service"><span>READY TO BUILD?</span><h2>Take the site<br/><em>from idea to live.</em></h2><Link href="/contact">Start a project ↗</Link></section>
    <SiteFooter />
  </main>;
}

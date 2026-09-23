import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Explore Copywrk website design and development services for service businesses, including responsive websites, conversion-focused builds, and industry-specific website projects.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Website Design & Development Services | Copywrk",
    description:
      "Website design and development services for service businesses, built around credibility, mobile experience, and enquiries.",
    url: "/services",
    type: "website",
  },
};

const services = [
  {
    id: "01",
    title: "Website Design",
    href: "/website-design",
    copy: "Distinctive, mobile-first website design built around positioning, visual hierarchy, credibility, and a clear next step.",
  },
  {
    id: "02",
    title: "Website Development",
    href: "/website-development",
    copy: "Responsive website development with strong performance, clean structure, technical SEO foundations, and practical integrations.",
  },
  {
    id: "03",
    title: "Wedding & Event Websites",
    href: "/wedding-event-websites",
    copy: "Premium website design and development for wedding planners and event businesses that depend on presentation, trust, and enquiries.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="landing-hero coral">
        <span>SERVICES</span>
        <h1>Website design and development built around the business.</h1>
        <div>
          <p>
            Copywrk helps service businesses improve how they look, explain what they do, and turn website visitors into real enquiries through focused design and development.
          </p>
          <Link href="/contact">Discuss your website ↗</Link>
        </div>
      </section>

      <section className="landing-pains">
        <div>
          <span>CORE SERVICES</span>
          <h2>Design, development,<br/>and focused industry work.</h2>
        </div>
        <div>
          {services.map((service) => (
            <article key={service.href}>
              <b>{service.id}</b>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Explore service ↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-audience">
        <span>HOW WE WORK</span>
        <p>
          We start with the offer, audience, content, proof, and conversion goal. From there we shape the structure, design the responsive experience, build the site, test it across devices, and launch it with the technical SEO foundation in place.
        </p>
      </section>

      <section className="landing-related">
        <span>SEE THE WORK</span>
        <div>
          <Link href="/work">Selected work<i>↗</i></Link>
          <Link href="/work/wingscraft">WingsCraft case study<i>↗</i></Link>
          <Link href="/work/trinity-wraps">Trinity Wraps case study<i>↗</i></Link>
        </div>
      </section>

      <section className="next-service">
        <span>READY TO START?</span>
        <h2>Make the first<br/><em>impression count.</em></h2>
        <Link href="/contact">Start a project ↗</Link>
      </section>

      <SiteFooter />
    </main>
  );
}

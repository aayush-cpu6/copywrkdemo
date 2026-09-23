import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-chrome";
import { serviceData, type ServiceKey } from "../../site-data";

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug as ServiceKey];
  if (!service) return {};
  const isPrimaryWebsiteService = slug === "websites";
  return {
    title: service.seoTitle,
    description: service.intro,
    alternates: { canonical: `/services/${slug}` },
    robots: isPrimaryWebsiteService ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: `${service.seoTitle} | Copywrk`, description: service.intro, url: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceKey];
  if (!service) notFound();

  return <main>
    <SiteHeader />
    <section className={`detail-hero ${service.color}`}>
      <div className="detail-meta"><span>{service.number} / SERVICE</span><b>{service.eyebrow}</b></div>
      <h1>{service.title}</h1>
      <p>{service.intro}</p>
      <Link href="/contact">Discuss this service ↗</Link>
      <div className="detail-shape"><i/><i/><i/></div>
    </section>

    <section className="detail-outcome"><span>THE OUTCOME</span><h2>{service.outcome}</h2></section>

    <section className="detail-audience">
      <span>WHO IT IS FOR</span>
      <div><h2>A focused system for a real operational problem.</h2><p>{service.audience}</p></div>
    </section>

    <section className="detail-problems">
      <div className="detail-title"><span>PROBLEMS IT SOLVES</span><h2>Fix the friction<br/>before adding complexity.</h2></div>
      <div>{service.problems.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="detail-features">
      <div className="detail-title"><span>WHAT IT INCLUDES</span><h2>Focused on what<br/>actually needs to work.</h2></div>
      <div>{service.features.map(([title, copy], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="detail-process"><span>HOW WE BUILD IT</span><ol>{service.steps.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2,"0")}</b><strong>{step}</strong><i>↘</i></li>)}</ol></section>

    <section className="detail-integrations">
      <div><span>TYPICAL INTEGRATIONS</span><h2>Designed around the tools your team actually uses.</h2></div>
      <ul>{service.integrations.map((item) => <li key={item}>{item}<i>↗</i></li>)}</ul>
    </section>

    <section className="detail-example">
      <span>EXAMPLE WORKFLOW</span>
      <div><h2>{service.example.title}</h2><p>{service.example.copy}</p><Link href={service.related.href}>Explore: {service.related.label} ↗</Link></div>
    </section>

    <section className="detail-faq">
      <div><span>COMMON QUESTIONS</span><h2>Useful answers,<br/>before we start.</h2></div>
      <div>{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="next-service"><span>READY TO START?</span><h2>Build the smallest<br/><em>useful version.</em></h2><Link href="/contact">Book a strategy call ↗</Link></section>
    <SiteFooter />
  </main>;
}

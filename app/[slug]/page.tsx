import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { landingData, type LandingKey } from "../landing-data";

const noindexLandingPages = new Set(["ai-automation-for-clinics", "lead-follow-up-automation"]);

export function generateStaticParams() {
  return Object.keys(landingData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landingData[slug as LandingKey];
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    robots: noindexLandingPages.has(slug) ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title: `${page.seoTitle} | Copywrk`, description: page.description, url: `/${slug}` },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landingData[slug as LandingKey];
  if (!page) notFound();

  return <main>
    <SiteHeader />
    <section className={`landing-hero ${page.accent}`}>
      <span>{page.eyebrow}</span>
      <h1>{page.title}</h1>
      <div><p>{page.intro}</p><Link href="/contact">Discuss your project ↗</Link></div>
    </section>

    <section className="landing-audience"><span>WHO THIS IS FOR</span><p>{page.audience}</p></section>

    <section className="landing-pains">
      <div><span>WHERE VALUE IS LOST</span><h2>Start with the friction customers and teams already feel.</h2></div>
      <div>{page.pains.map(([title, copy], i) => <article key={title}><b>{String(i + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="landing-system">
      <div><span>THE WORKING SYSTEM</span><h2>Four connected moves.<br/>One clear outcome.</h2></div>
      <ol>{page.system.map(([title, copy], i) => <li key={title}><b>{String(i + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div><i>↘</i></li>)}</ol>
    </section>

    <section className="landing-integrations"><span>TOOLS + INTEGRATIONS</span><p>{page.integrations}</p></section>

    <section className="landing-example"><span>EXAMPLE</span><div><h2>{page.exampleTitle}</h2><p>{page.example}</p></div></section>

    <section className="landing-faq">
      <div><span>COMMON QUESTIONS</span><h2>Clear answers before complexity.</h2></div>
      <div>{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}<i>+</i></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="landing-related"><span>KEEP EXPLORING</span><div>{page.related.map((item) => <Link href={item.href} key={item.href}>{item.label}<i>↗</i></Link>)}</div></section>

    <section className="next-service"><span>READY TO START?</span><h2>Make the next<br/><em>move useful.</em></h2><Link href="/contact">Book a strategy call ↗</Link></section>
    <SiteFooter />
  </main>;
}

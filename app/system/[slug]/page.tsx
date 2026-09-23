import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../../site-chrome";
import { systemData, type SystemKey } from "../system-data";

export function generateStaticParams() {
  return Object.keys(systemData).map(slug => ({ slug }));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params;
  const page=systemData[slug as SystemKey];
  if(!page) return {};
  return {title:page.eyebrow,description:page.description,alternates:{canonical:`/system/${slug}`},openGraph:{title:`${page.eyebrow} | Copywrk`,description:page.description,url:`/system/${slug}`}};
}

export default async function SystemDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const page=systemData[slug as SystemKey];
  if(!page) notFound();
  return <main><SiteHeader/>
    <section className={`system-detail-hero ${page.accent}`}><div><span>{page.number} / {page.eyebrow}</span><Link href="/system">All systems ↗</Link></div><h1>{page.title}</h1><p>{page.description}</p></section>
    <section className="system-trigger"><span>THE TRIGGER</span><p>{page.trigger}</p></section>
    <section className="system-stages"><div><span>THE FLOW</span><h2>Four connected moves.<br/>No mystery in the middle.</h2></div><ol>{page.stages.map(([title,copy],i)=><li key={title}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{title}</h3><p>{copy}</p></div><i>↘</i></li>)}</ol></section>
    <section className="system-stack"><span>POSSIBLE CONNECTIONS</span><div>{page.stack.map(item=><b key={item}>{item}</b>)}</div></section>
    <section className="system-boundaries"><span>BOUNDARIES + CONTROL</span><div><h2>Useful automation has limits.</h2><p>{page.boundaries}</p></div></section>
    <section className="system-next"><span>CONTINUE THROUGH THE SYSTEM</span><Link href={page.related.href}>{page.related.label}<i>↗</i></Link><Link href="/contact">Discuss your workflow<i>↗</i></Link></section>
    <SiteFooter/>
  </main>;
}

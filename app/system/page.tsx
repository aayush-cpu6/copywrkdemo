import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";
import { systemData } from "./system-data";

export const metadata: Metadata = {
  title: "Connected Business Systems",
  description: "Explore Copywrk systems for website lead conversion, AI receptionist call handling, and practical workflow automation.",
  alternates: { canonical: "/system" },
};

export default function SystemPage() {
  return <main><SiteHeader/>
    <section className="system-hub-hero"><span>THE COPYWRK SYSTEM</span><h1>Attention becomes<br/><em>action.</em></h1><p>Attention becomes action when every enquiry has a clear route forward. Copywrk connects your website, calls, forms, calendars, messages, and team handoffs so customer interest does not disappear between disconnected tools.</p></section>
    <section className="system-overview"><span>WHAT A CONNECTED SYSTEM DOES</span><div><h2>Built around the journey after someone shows interest.</h2><p>A strong website can attract the right visitor and explain the offer clearly. The connected business system begins at the moment that visitor calls, submits a form, requests an appointment, or becomes a new lead. It acknowledges the enquiry and moves it toward an appropriate next step.</p><p>Instead of adding automation everywhere, we identify one valuable trigger and one useful outcome. That may mean qualifying a clinic enquiry, booking a discovery call, notifying the correct team member, updating a lead record, or arranging a human callback.</p><p>Each workflow is designed around the tools your team already uses. Depending on the project, that can include a website form, WhatsApp, email, Google Calendar, a spreadsheet, a CRM, Vapi, Twilio, or n8n. Connections are selected because they remove friction—not because a longer technology list looks impressive.</p><p>Human control remains part of the design. Sensitive, urgent, unusual, uncertain, or explicitly requested situations are handed to a person. Clear ownership, business hours, consent, opt-outs, failure behaviour, and escalation rules are defined before the system goes live.</p></div></section>
    <section className="system-principle"><span>THE PRINCIPLE</span><div><h2>One clear trigger.<br/>One useful outcome.<br/>Humans stay in control.</h2><p>The result is a practical system your team can understand, test, and improve. Start with the bottleneck costing the most attention, time, or opportunity. Build the smallest reliable version, observe how it performs in real use, and expand only when the next connection has a clear purpose.</p></div></section>
    <section className="system-directory"><span>CHOOSE A FLOW</span><div>{Object.entries(systemData).map(([slug,item])=><article className={item.accent} key={slug}><span>{item.number}</span><div><small>{item.eyebrow}</small><h2>{item.title}</h2><p>{item.outcome}</p><Link href={`/system/${slug}`}>Explore {slug.replaceAll("-"," ")} <i>↗</i></Link></div></article>)}</div></section>
    <section className="next-service"><span>NOT SURE WHICH FLOW FITS?</span><h2>Start with the<br/><em>bottleneck.</em></h2><Link href="/contact">Talk to Copywrk ↗</Link></section>
    <SiteFooter/>
  </main>;
}

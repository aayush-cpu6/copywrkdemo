import type { Metadata } from "next";
import { SiteHeader, SiteFooter, whatsappUrl } from "../site-chrome";
import ContactForm from "./contact-form";
import LocalStartingPrice from "../local-starting-price";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Talk to Copywrk about a website, AI receptionist, lead follow-up system, or business automation project.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <main><SiteHeader/><section className="contact-page"><div><span>START A PROJECT</span><h1>Tell us what should <em>move.</em></h1><p>Share the bottleneck. We’ll help determine whether the sensible first step is a better website, AI receptionist, follow-up system, or focused automation.</p><div className="contact-facts"><span>REMOTE · WORLDWIDE</span><a href="mailto:copywrk0@gmail.com">copywrk0@gmail.com</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp · +91 97111 70297 ↗</a><LocalStartingPrice contact/><span>STARTING PRICE · FINAL QUOTE MAY VARY</span><span>REPLY TARGET · 1 BUSINESS DAY</span></div></div><ContactForm/></section><SiteFooter/></main>;
}

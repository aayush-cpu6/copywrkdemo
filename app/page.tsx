import type { Metadata } from "next";
import MotionSite from "./motion-site";

export const metadata: Metadata = {
  title: { absolute: "Website Design for Service Businesses | Copywrk" },
  description: "Copywrk designs and develops fast, mobile-first websites for service businesses, built for credibility, enquiries, and growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Website Design for Service Businesses | Copywrk",
    description: "Premium, mobile-first websites for service businesses—designed to look sharp, load fast, and generate enquiries.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Website Design for Service Businesses | Copywrk",
    description: "Premium, mobile-first websites for service businesses built to generate enquiries.",
  },
};

export default function Home() {
  return <MotionSite />;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./work.css";
import "./homepage-v2.css";
import InstagramBrowserGate from "./instagram-browser-gate";
import { WhatsAppCta } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.copywrk.website"),
  title: {
    default: "Copywrk | Website Design & Development for Service Businesses",
    template: "%s | Copywrk",
  },
  description: "Copywrk designs and develops premium, fast, mobile-first websites for service businesses, built to turn visitors into enquiries, calls, and customers.",
  applicationName: "Copywrk",
  keywords: [
    "website design agency",
    "website development",
    "web development India",
    "website design for service businesses",
    "business website development",
    "mobile-first website design",
    "conversion focused websites",
  ],
  authors: [{ name: "Copywrk" }],
  creator: "Copywrk",
  publisher: "Copywrk",
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Copywrk",
    title: "Copywrk | Website Design & Development for Service Businesses",
    description: "Premium, mobile-first websites for service businesses—designed to look sharp, load fast, and generate enquiries.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Copywrk | Website Design & Development",
    description: "Premium, mobile-first websites for service businesses built to generate enquiries.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Copywrk",
              url: "https://www.copywrk.website",
              email: "copywrk0@gmail.com",
              sameAs: ["https://www.instagram.com/copywrk/"],
              description:
                "A web design and development studio creating premium, mobile-first websites for service businesses.",
              areaServed: ["India", "Worldwide"],
              serviceType: [
                "Website design",
                "Website development",
                "Responsive web design",
                "Conversion-focused business websites",
              ],
            }),
          }}
        />
        <script dangerouslySetInnerHTML={{__html:`try{if(/Instagram/i.test(navigator.userAgent)&&sessionStorage.getItem('copywrk-ig-continue')!=='1'){document.documentElement.classList.add('instagram-inapp')}}catch(e){if(/Instagram/i.test(navigator.userAgent)){document.documentElement.classList.add('instagram-inapp')}}`}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppCta />
        <InstagramBrowserGate />
      </body>
    </html>
  );
}

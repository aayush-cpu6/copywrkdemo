import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";

export const metadata: Metadata = {
  title: "Copywrk — Websites worth remembering",
  description:
    "Copywrk designs and develops premium, mobile-first websites for service businesses and ambitious brands.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Copywrk — Websites worth remembering",
    description: "Design, development and motion for brands that refuse to blend in.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

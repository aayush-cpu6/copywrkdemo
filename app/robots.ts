import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.copywrk.website/sitemap.xml",
    host: "https://www.copywrk.website",
  };
}

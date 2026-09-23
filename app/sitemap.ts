import type { MetadataRoute } from "next";
import { landingData } from "./landing-data";

const baseUrl = "https://www.copywrk.website";
const excludedLandingRoutes = new Set(["ai-automation-for-clinics", "lead-follow-up-automation"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/work/wingscraft",
    "/work/trinity-wraps",
    "/work/gb-motors",
    "/about",
    "/contact",
    "/website-design",
    "/website-development",
    "/wedding-event-websites",
    "/privacy",
    "/terms",
    "/security",
  ];
  const serviceRoutes = ["/services/websites"];
  const landingRoutes = Object.keys(landingData)
    .filter((slug) => !excludedLandingRoutes.has(slug) && slug !== "website-development")
    .map((slug) => `/${slug}`);

  const routes = [...new Set([...staticRoutes, ...serviceRoutes, ...landingRoutes])];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-09-08"),
    changeFrequency: route === "" || route === "/work" || route === "/services" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : [
            "/services",
            "/website-design",
            "/website-development",
            "/wedding-event-websites",
            "/work",
            "/work/wingscraft",
            "/work/trinity-wraps",
            "/work/gb-motors",
            "/services/websites",
          ].includes(route)
          ? 0.8
          : 0.5,
  }));
}

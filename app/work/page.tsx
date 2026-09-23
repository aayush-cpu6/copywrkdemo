import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Selected Website Work",
  description: "Explore selected Copywrk website design and development work for wedding, automotive, and service businesses.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Website Work | Copywrk",
    description: "Selected website design and development work by Copywrk across service-business industries.",
    url: "/work",
    type: "website",
  },
};

const projects = [
  {
    id: "01",
    name: "WingsCraft",
    href: "/work/wingscraft",
    category: "Wedding & Events",
    type: "Concept / demo build",
    image: "https://images.unsplash.com/photo-1773745060497-4cc1df774c72?auto=format&fit=crop&fm=webp&q=82&w=1600",
    alt: "WingsCraft luxury wedding website concept",
    summary: "A premium website direction for a wedding and event brand, built around visual storytelling, service clarity, mobile presentation, and enquiry-focused calls to action.",
  },
  {
    id: "02",
    name: "Trinity Wraps",
    href: "/work/trinity-wraps",
    category: "Automotive",
    type: "Concept / demo build",
    image: "https://raw.githubusercontent.com/copywrk0-lgtm/trinitywraps/main/public/images/trinity_wraps_01_ktm.jpg",
    alt: "Trinity Wraps automotive website concept featuring a custom KTM motorcycle",
    summary: "A sharper digital presence for an automotive wrapping business, designed to showcase services, build trust quickly, and make contacting the workshop straightforward on mobile.",
  },
  {
    id: "03",
    name: "GB Motors",
    href: "/work/gb-motors",
    category: "Automotive",
    type: "Concept / demo build",
    image: "https://raw.githubusercontent.com/copywrk0-lgtm/GB-Motors-Personalized-Demo-/main/public/gb-motors/work-1.jpg",
    alt: "GB Motors automotive detailing website concept",
    summary: "A service-business website concept focused on strong visual hierarchy, clearer service presentation, responsive design, and a more credible first impression.",
  },
];

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />

      <section className="landing-hero coral">
        <span>SELECTED WORK</span>
        <h1>Website design built around the business—not a recycled template.</h1>
        <div>
          <p>Explore selected Copywrk website concepts and builds across service-business industries. Demo and concept projects are labeled clearly.</p>
          <Link href="/contact">Discuss your website ↗</Link>
        </div>
      </section>

      <section className="work-showcase">
        <div className="work-showcase-head">
          <span>PROJECTS</span>
          <h2>Different industries.<br/>Different design problems.</h2>
        </div>

        <div className="work-project-list">
          {projects.map((project) => (
            <article className="work-project" key={project.name}>
              <Link className="work-project-image" href={project.href} aria-label={`View ${project.name} case study`}>
                <img src={project.image} alt={project.alt} loading={project.id === "01" ? "eager" : "lazy"} />
                <span>VIEW PROJECT ↗</span>
              </Link>

              <div className="work-project-copy">
                <div className="work-project-meta">
                  <b>{project.id}</b>
                  <span>{project.category} · {project.type}</span>
                </div>
                <h3><Link href={project.href}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <Link className="work-project-link" href={project.href}>View case study ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-audience">
        <span>HOW WE APPROACH THE WORK</span>
        <p>Each website starts with the offer, audience, content, conversion goal, and brand context. The visual direction and page structure follow those inputs instead of forcing every business into the same layout.</p>
      </section>

      <section className="next-service">
        <span>HAVE A WEBSITE PROJECT?</span>
        <h2>Let’s make the<br/><em>first impression count.</em></h2>
        <Link href="/contact">Start a project ↗</Link>
      </section>

      <SiteFooter />
    </main>
  );
}

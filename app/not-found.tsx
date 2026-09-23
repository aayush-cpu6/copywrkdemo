import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found on Copywrk.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <SiteHeader />

      <section className="not-found-hero" aria-labelledby="not-found-title">
        <div className="not-found-kicker">
          <span>ERROR / 404</span>
          <span>COPYWRK DIGITAL STUDIO</span>
        </div>

        <div className="not-found-grid">
          <div className="not-found-copy">
            <div className="not-found-number" aria-hidden="true">404</div>

            <h1 id="not-found-title">
              THIS PAGE
              <br />
              <em>DOESN&apos;T EXIST.</em>
            </h1>

            <p>
              The link may be broken, the page may have moved, or the URL may
              have been typed incorrectly. Let&apos;s get you back to something
              useful.
            </p>

            <div className="not-found-actions">
              <Link href="/">Back to home <b>↗</b></Link>
              <Link href="/#services">Explore services <b>↓</b></Link>
            </div>
          </div>

          <div className="not-found-signal" aria-hidden="true">
            <div className="not-found-crosshair">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span>NO SIGNAL</span>
            <strong>PAGE NOT FOUND</strong>
            <small>STATUS · 404</small>
          </div>
        </div>
      </section>

      <div className="not-found-ticker" aria-hidden="true">
        <div>
          COPYWRK <i>✦</i> WEBSITE DESIGN <i>✦</i> AI AUTOMATION <i>✦</i> LEAD
          FOLLOW-UP <i>✦</i> COPYWRK <i>✦</i> WEBSITE DESIGN <i>✦</i> AI
          AUTOMATION <i>✦</i>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

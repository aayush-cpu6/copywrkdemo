"use client";

import { useEffect, useMemo, useState } from "react";

export default function InstagramBrowserGate() {
  const [isInstagram, setIsInstagram] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const instagram = /Instagram/i.test(userAgent);
    let continuing = false;
    try { continuing = window.sessionStorage.getItem("copywrk-ig-continue") === "1"; } catch {}
    setIsInstagram(instagram && !continuing);
    setIsAndroid(/Android/i.test(userAgent));
    if (instagram && !continuing) document.body.style.overflow = "hidden";
    if (continuing) document.documentElement.classList.remove("instagram-inapp");
    return () => { document.body.style.overflow = ""; };
  }, []);

  const pageUrl = useMemo(() => typeof window === "undefined" ? "" : window.location.href, [isInstagram]);
  const chromeIntent = useMemo(() => {
    if (!pageUrl) return "";
    const url = new URL(pageUrl);
    const target = `${url.host}${url.pathname}${url.search}`;
    return `intent://${target}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(pageUrl)};end`;
  }, [pageUrl]);

  if (!isInstagram) return null;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link and open it in your browser:", pageUrl);
    }
  }

  function continueInInstagram() {
    try { window.sessionStorage.setItem("copywrk-ig-continue", "1"); } catch {}
    document.documentElement.classList.remove("instagram-inapp");
    document.body.style.overflow = "";
    setIsInstagram(false);
  }

  return (
    <div className="instagram-gate" role="dialog" aria-modal="true" aria-labelledby="instagram-gate-title">
      <div className="ig-grid" aria-hidden="true">{Array.from({length:36},(_,index)=><i key={index}/>)}</div>
      <div className="ig-gate-card">
        <div className="ig-gate-brand"><span>cw</span><strong>Copywrk</strong></div>
        <p className="ig-eyebrow">BETTER VIEWING EXPERIENCE</p>
        <h1 id="instagram-gate-title">Open Copywrk in your browser.</h1>
        <p className="ig-copy">Instagram’s built-in browser can limit voice, animation, forms, and navigation. Continue in your regular browser for the complete experience.</p>
        {isAndroid ? (
          <a className="ig-primary" href={chromeIntent}>Open in Chrome <b>↗</b></a>
        ) : (
          <div className="ig-instructions"><b>On iPhone</b><span>Tap <strong>•••</strong> above, then choose <strong>Open in Safari</strong>.</span></div>
        )}
        <button className="ig-continue" type="button" onClick={continueInInstagram}>Continue here anyway <b>→</b></button>
        <button className="ig-copy-button" type="button" onClick={copyLink}>{copied ? "Link copied ✓" : "Copy website link"}</button>
        <small>Your current page will be preserved when possible.</small>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const scripts = {
  clinic: [
    "Hi, thanks for calling Sunrise Clinic. How can I help you today?",
    "I need to book a consultation for tomorrow.",
    "Of course. I have 11:30 AM and 4:00 PM available. Which works better?",
  ],
  gym: [
    "Hi, thanks for calling Pulse Fitness. Are you looking for membership information or a free trial?",
    "I want to try the gym before joining.",
    "Perfect. I can book a complimentary trial. Would tomorrow evening work?",
  ],
  property: [
    "Hi, thanks for calling. I can help shortlist properties and arrange a visit. What are you looking for?",
    "A two-bedroom flat near the metro.",
    "Got it. What budget range and move-in timeline should I use for the shortlist?",
  ],
};

type DemoKey = keyof typeof scripts;

export default function AiDemo() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<DemoKey | null>(null);
  const [step, setStep] = useState(0);
  const [voiceOn, setVoiceOn] = useState(true);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.speechSynthesis?.cancel();
    };
  }, [open]);

  const speak = (text: string) => {
    if (!voiceOn || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice =
      voices.find((voice) =>
        /female|zira|samantha|google uk english female/i.test(voice.name),
      ) ||
      voices.find((voice) => /en-IN|en-GB|en-US/.test(voice.lang)) ||
      null;
    utterance.rate = 0.94;
    utterance.pitch = 1.08;
    window.speechSynthesis.speak(utterance);
  };

  const choose = (key: DemoKey) => {
    setType(key);
    setStep(1);
    setTimeout(() => speak(scripts[key][0]), 180);
  };

  const next = () => {
    if (!type) return;
    const nextStep = Math.min(step + 1, 3);
    setStep(nextStep);
    if (nextStep === 3) setTimeout(() => speak(scripts[type][2]), 120);
  };

  const close = () => {
    setOpen(false);
    setType(null);
    setStep(0);
    window.speechSynthesis?.cancel();
  };

  const modal = (
    <div
      className="demo-shell"
      role="dialog"
      aria-modal="true"
      aria-label="AI receptionist demo"
    >
      <button
        className="demo-backdrop"
        onClick={close}
        aria-label="Close demo"
      />
      <div className="demo-panel">
        <div className="demo-head">
          <div>
            <span>LIVE BROWSER DEMO</span>
            <strong>Copywrk AI receptionist</strong>
          </div>
          <button onClick={close} aria-label="Close demo">
            ×
          </button>
        </div>

        {!type ? (
          <>
            <p>
              Choose a business. The demo uses your browser&apos;s available
              female voice and does not store the conversation.
            </p>
            <div className="demo-choices">
              <button onClick={() => choose("clinic")}>
                Clinic <span>↗</span>
              </button>
              <button onClick={() => choose("gym")}>
                Gym <span>↗</span>
              </button>
              <button onClick={() => choose("property")}>
                Real estate <span>↗</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="call-status">
              <span>● CALL CONNECTED</span>
              <button onClick={() => setVoiceOn(!voiceOn)}>
                {voiceOn ? "VOICE ON" : "VOICE OFF"}
              </button>
            </div>
            <div className="messages">
              <div className="ai-msg">
                <small>COPYWRK AI</small>
                {scripts[type][0]}
              </div>
              {step >= 2 && (
                <div className="human-msg">
                  <small>CALLER</small>
                  {scripts[type][1]}
                </div>
              )}
              {step >= 3 && (
                <div className="ai-msg">
                  <small>COPYWRK AI</small>
                  {scripts[type][2]}
                </div>
              )}
            </div>
            {step < 3 ? (
              <button className="demo-next" onClick={next}>
                {step === 1 ? "Answer as customer" : "Continue conversation"} →
              </button>
            ) : (
              <div className="demo-success">
                ✓ Qualification flow completed
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button className="demo-open" onClick={() => setOpen(true)}>
        Try the AI receptionist <b>▶</b>
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(modal, document.body)
        : null}
    </>
  );
}

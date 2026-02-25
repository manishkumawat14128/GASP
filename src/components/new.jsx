import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { title: "Efficiency",  rate: "Optimal", percentage: 98,  color: "#f59e0b" },
  { title: "Performance", rate: "Ultra",   percentage: 94,  color: "#e11d48" },
  { title: "Stability",   rate: "Solid",   percentage: 100, color: "#10b981" },
];

const HEADLINE = "WELCOME ITZFIZZ".split("");

function StatCard({ title, rate, percentage, color, cardRef }) {
  const circ = 2 * Math.PI * 24;
  return (
    <div ref={cardRef} className="sh-card" style={{ "--accent": color }}>
      <svg width="54" height="54" viewBox="0 0 56 56" style={{ transform: "rotate(-90deg)", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
        <circle
          cx="28" cy="28" r="24" fill="none"
          stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - percentage / 100)}
          style={{ filter: `drop-shadow(0 0 5px ${color})` }}
        />
        <text
          x="28" y="33" fill="#e8e0d0"
          fontFamily="'DM Mono', monospace" fontSize="10" fontWeight="500"
          textAnchor="middle" dominantBaseline="middle"
          style={{ transform: "rotate(90deg)", transformOrigin: "28px 28px" }}
        >{percentage}%</text>
      </svg>
      <span className="sh-card-label">{title}</span>
      <span className="sh-card-rate">{rate}</span>
      <div className="sh-card-glow" />
    </div>
  );
}

function BgTextLayer() {
  const text = "CORE ENGINE / V.4029-B";
  const repeated = Array(60).fill(text).join("   ");
  return (
    <div className="sh-bgtxt-wrap">
      <div className="sh-bgtxt-band">
        {Array(16).fill(0).map((_, i) => (
          <p key={i} className="sh-bgtxt-row">{repeated}</p>
        ))}
      </div>
    </div>
  );
}

export default function ScrollHero() {
  const sectionRef  = useRef();
  const pinRef      = useRef();
  const lettersRef  = useRef([]);
  const cardsRef    = useRef([]);
  const hudRef      = useRef();
  const subtitleRef = useRef();
  const orbRef      = useRef();
  const floorRef    = useRef();
  const scanRef     = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── ENTRANCE ──────────────────────────────────────────────────────────
      const enter = gsap.timeline({ defaults: { ease: "power4.out" } });

      enter.from(hudRef.current, { opacity: 0, y: -24, duration: 0.7 }, 0);

      enter.from(
        lettersRef.current.filter(Boolean),
        { y: 110, opacity: 0, rotateX: -55, stagger: 0.045, duration: 1.1, ease: "power3.out" },
        0.2
      );

      enter.from(subtitleRef.current, { opacity: 0, y: 30, duration: 0.9 }, 0.7);

      enter.from(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 60, scale: 0.88, stagger: 0.12, duration: 0.9, ease: "back.out(1.4)" },
        0.65
      );

      // ─── SCROLL ────────────────────────────────────────────────────────────
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.8,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Phase 1 (0 → 1.5): letters scatter up, subtitle + HUD fade
      scrollTl.to(
        lettersRef.current.filter(Boolean),
        { opacity: 0, y: -90, stagger: { amount: 0.5, from: "center" }, ease: "power2.in", duration: 1.5 },
        0
      );
      scrollTl.to(subtitleRef.current, { opacity: 0, y: -40, ease: "power2.in", duration: 1 }, 0.1);
      scrollTl.to(hudRef.current, { opacity: 0, y: -20, ease: "power2.in", duration: 0.8 }, 0.1);

      // Phase 1: cards spread apart & scale up
      scrollTl.to(cardsRef.current[0], { x: "-36vw", y: "10vh", scale: 1.2, rotateZ: -5, ease: "power1.inOut", duration: 2 }, 0);
      scrollTl.to(cardsRef.current[1], { y: "28vh", scale: 1.3, ease: "power1.inOut", duration: 2 }, 0);
      scrollTl.to(cardsRef.current[2], { x: "36vw", y: "10vh", scale: 1.2, rotateZ: 5, ease: "power1.inOut", duration: 2 }, 0);

      // Phase 1: orb swells
      scrollTl.to(orbRef.current, { scale: 2.0, opacity: 0.85, ease: "power1.inOut", duration: 2 }, 0);
      scrollTl.to(floorRef.current, { opacity: 0.55, y: "6vh", ease: "power1.inOut", duration: 2 }, 0);

      // Phase 2 (1.6 → 3): cards blast off
      scrollTl.to(cardsRef.current[0], { x: "-115vw", y: "-50vh", opacity: 0, scale: 0.4, ease: "power3.in", duration: 1.8 }, 1.6);
      scrollTl.to(cardsRef.current[1], { y: "115vh",  opacity: 0, scale: 0.4, ease: "power3.in", duration: 1.8 }, 1.6);
      scrollTl.to(cardsRef.current[2], { x: "115vw",  y: "-50vh", opacity: 0, scale: 0.4, ease: "power3.in", duration: 1.8 }, 1.6);

      // Phase 3: full fade
      scrollTl.to(orbRef.current,  { opacity: 0, duration: 1.2 }, 2.2);
      scrollTl.to(floorRef.current,{ opacity: 0, duration: 1.0 }, 2.4);
      scrollTl.to(scanRef.current, { opacity: 0, duration: 0.8 }, 2.6);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@300;600;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:    #0c0b09;
          --amber: #f59e0b;
          --bone:  #e8e0d0;
          --muted: #6b6560;
          --dim:   #2a2722;
        }

        /* ── Section provides scroll height ── */
        .sh-section {
          position: relative;
          height: 300vh;
          background: var(--bg);
        }

        /* ── Sticky pinned viewport ── */
        .sh-pin {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* ── Background scrolling text ── */
        .sh-bgtxt-wrap {
          position: absolute; inset: 0;
          overflow: hidden;
          pointer-events: none;
          user-select: none;
          opacity: 0.035;
        }
        @keyframes bgScroll {
          from { transform: translateX(0) rotate(-40deg); }
          to   { transform: translateX(-50%) rotate(-40deg); }
        }
        .sh-bgtxt-band {
          position: absolute;
          width: 220%; height: 220%;
          top: -60%; left: -60%;
          animation: bgScroll 55s linear infinite;
        }
        .sh-bgtxt-row {
          white-space: nowrap;
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px,1.2vw,13px);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #e8e0d0;
          margin-bottom: clamp(48px,6vw,80px);
          font-weight: 300;
        }

        /* ── Nebula orb ── */
        .sh-nebula {
          position: absolute;
          width: 100%; height: 100%;
          background:
            radial-gradient(circle at 20% 30%, rgba(245,158,11,0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(225,29,72,0.09) 0%, transparent 40%);
          filter: blur(80px);
          pointer-events: none;
          will-change: transform, opacity;
          animation: nebulaDrift 20s ease-in-out infinite alternate;
        }
        @keyframes nebulaDrift {
          from { transform: scale(1) translate(0,0); }
          to   { transform: scale(1.2) translate(5%,5%); }
        }

        /* ── Floor grid ── */
        .sh-floor {
          position: absolute;
          width: 200%; height: 100%;
          bottom: -20%; left: -50%;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          transform: rotateX(75deg);
          transform-origin: center bottom;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%);
          animation: floorMove 10s linear infinite;
          pointer-events: none;
          will-change: transform, opacity;
        }
        @keyframes floorMove {
          from { background-position: 0 0; }
          to   { background-position: 0 60px; }
        }

        /* ── Scanlines ── */
        .sh-scan {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            180deg, transparent, transparent 3px,
            rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
          opacity: 0.4;
          will-change: opacity;
        }

        /* ── Corner ticks ── */
        .sh-corner {
          position: absolute;
          width: 16px; height: 16px;
          pointer-events: none;
        }
        .sh-corner.tl { top:20px; left:20px; border-top:1px solid rgba(245,158,11,0.3); border-left:1px solid rgba(245,158,11,0.3); }
        .sh-corner.tr { top:20px; right:20px; border-top:1px solid rgba(245,158,11,0.3); border-right:1px solid rgba(245,158,11,0.3); }
        .sh-corner.bl { bottom:20px; left:20px; border-bottom:1px solid rgba(245,158,11,0.3); border-left:1px solid rgba(245,158,11,0.3); }
        .sh-corner.br { bottom:20px; right:20px; border-bottom:1px solid rgba(245,158,11,0.3); border-right:1px solid rgba(245,158,11,0.3); }

        /* ── HUD bar ── */
        .sh-hud {
          position: absolute;
          top: clamp(20px,4vw,36px);
          left: 0; right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px,5vw,56px);
          z-index: 20;
          will-change: transform, opacity;
        }
        .sh-pill {
          display: flex; align-items: center; gap: 10px;
          border: 1px solid rgba(245,158,11,0.18);
          border-radius: 100px;
          padding: 6px 16px;
          background: rgba(12,11,9,0.55);
          backdrop-filter: blur(10px);
        }
        .sh-pulse-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--amber); box-shadow: 0 0 8px var(--amber);
          flex-shrink: 0;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; box-shadow:0 0 8px var(--amber); }
          50%      { opacity:0.4; box-shadow:0 0 3px var(--amber); }
        }
        .sh-hud-txt {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px,1.2vw,10px);
          font-weight: 300; text-transform: uppercase;
          letter-spacing: 0.35em; color: var(--muted);
        }
        .sh-secbar-wrap { display:flex; flex-direction:column; align-items:flex-end; gap:5px; }
        .sh-secbar { width:clamp(60px,10vw,100px); height:2px; background:var(--dim); border-radius:2px; overflow:hidden; }
        .sh-secbar-fill { height:100%; width:75%; background:var(--amber); box-shadow:0 0 6px var(--amber); }

        /* ── Headline ── */
        .sh-headline {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(4px,1.2vw,14px);
          z-index: 10;
          perspective: 900px;
          white-space: nowrap;
          width: 100%;
          padding: 0 clamp(16px,4vw,48px);
          pointer-events: none;
        }
        .sh-letter {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 5.5vw, 6.5rem);
          line-height: 1; color: var(--bone);
          text-shadow: 0 0 40px rgba(245,158,11,0.15);
          display: inline-block;
          will-change: transform, opacity;
        }
        .sh-letter.sp { width: clamp(10px,2vw,30px); }

        /* ── Subtitle ── */
        .sh-subtitle {
          position: absolute;
          top: calc(50% + clamp(2.2rem,5.8vw,7rem));
          left: 50%; transform: translateX(-50%);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 300;
          font-size: clamp(10px,2vw,14px);
          letter-spacing: clamp(0.3em,3vw,0.8em);
          color: var(--muted);
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 10;
          will-change: transform, opacity;
        }
        .sh-subtitle em { color: var(--bone); font-style: normal; font-weight: 600; }

        /* ── Cards row ── */
        .sh-cards-row {
          position: absolute;
          bottom: clamp(56px,10vh,110px);
          left: 50%; transform: translateX(-50%);
          display: flex;
          gap: clamp(10px,2vw,20px);
          z-index: 15;
        }

        /* ── Card ── */
        .sh-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: clamp(14px,2.2vw,24px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          width: clamp(130px,17vw,200px);
          overflow: hidden;
          will-change: transform, opacity;
          transition: border-color 0.4s ease;
        }
        .sh-card:hover { border-color: rgba(245,158,11,0.35); }
        .sh-card:hover .sh-card-glow { opacity: 1; }
        .sh-card-glow {
          position: absolute; inset: 0; border-radius: 20px;
          background: radial-gradient(circle at 50% 0%, var(--accent), transparent 60%);
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none; mix-blend-mode: screen; filter: blur(18px);
        }
        .sh-card-label {
          font-family: 'DM Mono', monospace;
          font-size: clamp(7px,1.1vw,9px); font-weight: 300;
          text-transform: uppercase; letter-spacing: 0.35em;
          color: var(--muted); position: relative; z-index: 1;
        }
        .sh-card-rate {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(18px,3vw,28px);
          color: var(--bone); letter-spacing: 0.06em; line-height: 1;
          position: relative; z-index: 1;
          transition: color 0.3s ease;
        }
        .sh-card:hover .sh-card-rate { color: var(--accent); }

        /* ── Bottom meta ── */
        .sh-meta-left {
          position: absolute;
          bottom: clamp(14px,2.5vw,28px); left: clamp(20px,4vw,40px);
          z-index: 20;
        }
        .sh-meta-right {
          position: absolute;
          bottom: clamp(14px,2.5vw,28px); right: clamp(20px,4vw,40px);
          z-index: 20; text-align: right;
        }
        .sh-meta-txt {
          font-family: 'DM Mono', monospace;
          font-size: clamp(7px,1vw,9px); font-weight: 300;
          color: #3d3a35; text-transform: uppercase;
          letter-spacing: 0.15em; line-height: 1.9;
        }

        /* ── Scroll indicator ── */
        .sh-scroll-hint {
          position: absolute;
          bottom: clamp(14px,2.5vw,28px); left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 7px;
          z-index: 20;
          animation: hintBob 2.2s ease-in-out infinite;
        }
        @keyframes hintBob {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(7px); }
        }
        .sh-scroll-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 8px; text-transform: uppercase;
          letter-spacing: 0.45em; color: var(--muted);
        }
        .sh-scroll-line {
          width: 1px; height: clamp(26px,4vw,38px);
          background: linear-gradient(to bottom, rgba(245,158,11,0.6), transparent);
        }

        @media (max-width: 580px) {
          .sh-cards-row { gap: 8px; bottom: 44px; }
          .sh-card { width: clamp(96px,27vw,136px); padding: 12px; }
          .sh-letter { font-size: clamp(1.3rem,7.5vw,2.8rem); }
        }
      `}</style>

      <div ref={sectionRef} className="sh-section">
        <div ref={pinRef} className="sh-pin">

          {/* Layers */}
          <BgTextLayer />
          <div ref={orbRef} className="sh-nebula" />
          <div ref={floorRef} className="sh-floor" />
          <div ref={scanRef} className="sh-scan" />

          {/* Corners */}
          <div className="sh-corner tl" /><div className="sh-corner tr" />
          <div className="sh-corner bl" /><div className="sh-corner br" />

          {/* HUD */}
          <div ref={hudRef} className="sh-hud">
            <div className="sh-pill">
              <div className="sh-pulse-dot" />
              <span className="sh-hud-txt">Protocol Active</span>
            </div>
            <div className="sh-secbar-wrap">
              <span className="sh-hud-txt">Security: High</span>
              <div className="sh-secbar"><div className="sh-secbar-fill" /></div>
            </div>
          </div>

          {/* Headline */}
          <div className="sh-headline">
            {HEADLINE.map((char, i) =>
              char === " " ? (
                <span key={i} className="sh-letter sp" />
              ) : (
                <span key={i} className="sh-letter" ref={el => (lettersRef.current[i] = el)}>
                  {char}
                </span>
              )
            )}
          </div>

          {/* Subtitle */}
          <p ref={subtitleRef} className="sh-subtitle">
            Engineering <em>Superior</em> Intelligence
          </p>

          {/* Stat cards */}
          <div className="sh-cards-row">
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} cardRef={el => (cardsRef.current[i] = el)} />
            ))}
          </div>

          {/* Bottom meta */}
          <div className="sh-meta-left">
            <p className="sh-meta-txt">Process ID: #7729-00<br />Status: Synced</p>
          </div>
          <div className="sh-meta-right">
            <p className="sh-meta-txt">Core Engine<br />v.4029-B</p>
          </div>

          {/* Scroll hint */}
          <div className="sh-scroll-hint">
            <span className="sh-scroll-lbl">Scroll</span>
            <div className="sh-scroll-line" />
          </div>

        </div>
      </div>
    </>
  );
}
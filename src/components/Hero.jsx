
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BackgroundTextLayer({ text = "CORE ENGINE / V.4029-B", opacity = 0.04, speed = 55 }) {
  const repeatedText = Array(60).fill(text).join("   ");
  const [rows, setRows] = useState(18);
  const bgRef = useRef(null);
  
  useEffect(() => {
    const update = () => setRows(window.innerWidth < 640 ? 8 : 18);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  
  return (
    <div ref={bgRef} style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", userSelect:"none", opacity }}>
      <div style={{ position:"absolute", width:"220%", height:"220%", top:"-60%", left:"-60%", animation:`scrollText ${speed}s linear infinite` }}>
        {Array(rows).fill(0).map((_, i) => (
          <p key={i} style={{ whiteSpace:"nowrap", textTransform:"uppercase", fontFamily:"'DM Mono', monospace", fontSize:"clamp(9px,1.2vw,13px)", letterSpacing:"0.4em", color:"#e8e0d0", marginBottom:"clamp(48px,6vw,80px)", fontWeight:300 }}>
            {repeatedText}
          </p>
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, rate, percentage, color, index }) {
  const circ = 2 * Math.PI * 24;
  return (
    <div
      className="stat-card"
      style={{ "--accent": color, animationDelay: `${0.6 + index * 0.15}s` }}
    >
      <div style={{ position:"relative", zIndex:1, display:"flex", flexDirection:"column", alignItems:"flex-start", gap:10 }}>
        <svg width="54" height="54" viewBox="0 0 56 56" style={{ transform:"rotate(-90deg)", overflow:"visible", flexShrink:0 }}>
          <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
          <circle
            cx="28" cy="28" r="24" fill="none"
            stroke={color} strokeWidth="3" strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - percentage / 100)}
            style={{ filter:`drop-shadow(0 0 5px ${color})` }}
          />
          <text
            x="28" y="33"
            fill="#e8e0d0"
            fontFamily="'DM Mono', monospace"
            fontSize="10"
            fontWeight="500"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ transform:"rotate(90deg)", transformOrigin:"28px 28px" }}
          >{percentage}%</text>
        </svg>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(8px,1.3vw,10px)", textTransform:"uppercase", letterSpacing:"0.35em", color:"#6b6560" }}>{title}</span>
        <span className="stat-rate">{rate}</span>
      </div>
      <div className="card-glow" />
    </div>
  );
}

export default function HeroV2() {
  const cards = [
    { title: "Efficiency",  rate: "Optimal", percentage: 98,  color: "#f59e0b" },
    { title: "Performance", rate: "Ultra",   percentage: 94,  color: "#e11d48" },
    { title: "Stability",   rate: "Solid",   percentage: 100, color: "#10b981" },
  ];

  const heroRef = useRef(null);
  const hudRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 🔥 PAGE LOAD ANIMATIONS (staggered reveal)
    
    // 1. Hero container fade-in
    gsap.fromTo(heroRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // 2. HUD elements stagger (0.5s delay)
    gsap.fromTo(".hud-pill, .version-badge",
      { opacity: 0, y: 40, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)", delay: 0.5 }
    );

    // 3. Main title stagger reveal (1.2s delay)
    gsap.fromTo(titleRef.current || ".main-title",
      { opacity: 0, y: 60, rotationX: -45 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.2, ease: "back.out(1.7)", delay: 1.2 }
    );

    // 4. Stats cards bounce in one-by-one (2s delay)
    gsap.fromTo(".stat-card",
      { opacity: 0, scale: 0.3, y: 80 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "elastic.out(1, 0.4)", delay: 2.0 }
    );

    // 🔥 SCROLL TRIGGER ANIMATIONS (CORE ASSIGNMENT FEATURE)
    
    // Title parallax scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      animation: gsap.to(".main-title", {
        yPercent: -30,
        scale: 0.92,
        ease: "none"
      })
    });

    // Cards scroll animation
    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      animation: gsap.to(".stat-card", {
        scale: 1.15,
        rotateX: 8,
        y: -20,
        stagger: 0.05,
        ease: "power2.out"
      })
    });

    // Orbs parallax
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      animation: gsap.to(".orb-left", { scale: 1.4, xPercent: -15 }),
      animation2: gsap.to(".orb-right", { scale: 1.3, xPercent: 12 })
    });

    // Floor parallax
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      animation: gsap.to(".floor", { yPercent: 40, rotation: 1 })
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,500;1,300&family=Barlow+Condensed:wght@300;600;900&display=swap');

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

        :root{
          --bg:#0c0b09;
          --border:rgba(255,255,255,0.07);
          --amber:#f59e0b;
          --bone:#e8e0d0;
          --muted:#6b6560;
          --dim:#2a2722;
        }

        @keyframes scrollText{
          from{transform:translateX(0) rotate(-40deg);}
          to{transform:translateX(-50%) rotate(-40deg);}
        }
        @keyframes driftL{
          from{transform:translate(0,0) scale(1);}
          to{transform:translate(6%,8%) scale(1.15);}
        }
        @keyframes driftR{
          from{transform:translate(0,0) scale(1);}
          to{transform:translate(-5%,-6%) scale(1.2);}
        }
        @keyframes floorDrift{
          from{background-position:0 0;}
          to{background-position:0 60px;}
        }
        @keyframes throb{
          0%,100%{opacity:1;box-shadow:0 0 8px var(--amber);}
          50%{opacity:0.5;box-shadow:0 0 3px var(--amber);}
        }
        @keyframes rise{
          from{opacity:0;transform:translateY(60px) scaleY(1.05);filter:blur(12px);}
          to{opacity:1;transform:translateY(0) scaleY(1);filter:blur(0);}
        }
        @keyframes scanlines{to{background-position:0 8px;}}

        .hero-root{
          background:var(--bg);
          min-height:100svh;
          width:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          position:relative;
          overflow:hidden;
          padding:clamp(80px,12vw,140px) clamp(16px,5vw,60px) clamp(60px,8vw,100px);
          font-family:'Barlow Condensed',sans-serif;
        }

        .orb-left{
          position:absolute;
          width:clamp(280px,50vw,600px);
          height:clamp(280px,50vw,600px);
          border-radius:50%;
          background:radial-gradient(circle,rgba(245,158,11,0.13) 0%,transparent 70%);
          top:-10%;left:-10%;
          filter:blur(70px);
          animation:driftL 18s ease-in-out infinite alternate;
          pointer-events:none;
        }
        .orb-right{
          position:absolute;
          width:clamp(200px,40vw,500px);
          height:clamp(200px,40vw,500px);
          border-radius:50%;
          background:radial-gradient(circle,rgba(225,29,72,0.1) 0%,transparent 70%);
          bottom:-5%;right:-8%;
          filter:blur(80px);
          animation:driftR 22s ease-in-out infinite alternate;
          pointer-events:none;
        }

        .floor{
          position:absolute;
          width:200%;height:70%;
          bottom:-10%;left:-50%;
          background-image:
            linear-gradient(to right,rgba(255,255,255,0.025) 1px,transparent 1px),
            linear-gradient(to bottom,rgba(255,255,255,0.025) 1px,transparent 1px);
          background-size:60px 60px;
          transform:rotateX(72deg);
          transform-origin:center bottom;
          mask-image:linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%);
          animation:floorDrift 12s linear infinite;
          pointer-events:none;
        }

        .scan{
          position:absolute;inset:0;
          background:linear-gradient(180deg,transparent 0%,rgba(245,158,11,0.03) 49%,rgba(245,158,11,0.055) 50%,transparent 100%);
          background-size:100% 8px;
          animation:scanlines 0.3s steps(1) infinite;
          pointer-events:none;opacity:0.5;
        }

        .corner{position:absolute;width:18px;height:18px;pointer-events:none;}
        .corner.tl{top:16px;left:16px;border-top:1px solid rgba(245,158,11,0.35);border-left:1px solid rgba(245,158,11,0.35);}
        .corner.tr{top:16px;right:16px;border-top:1px solid rgba(245,158,11,0.35);border-right:1px solid rgba(245,158,11,0.35);}
        .corner.bl{bottom:16px;left:16px;border-bottom:1px solid rgba(245,158,11,0.35);border-left:1px solid rgba(245,158,11,0.35);}
        .corner.br{bottom:16px;right:16px;border-bottom:1px solid rgba(245,158,11,0.35);border-right:1px solid rgba(245,158,11,0.35);}

        .side-rail{
          position:absolute;top:50%;
          font-family:'DM Mono',monospace;
          font-size:8px;letter-spacing:0.5em;
          text-transform:uppercase;color:#2e2b27;white-space:nowrap;
        }
        .side-rail.left{left:-40px;transform:translateY(-50%) rotate(-90deg);transform-origin:center;}
        .side-rail.right{right:-40px;transform:translateY(-50%) rotate(90deg);transform-origin:center;}
        @media(max-width:900px){.side-rail{display:none;}}

        .content{
          position:relative;z-index:10;
          width:100%;max-width:1000px;
          display:flex;flex-direction:column;align-items:center;
        }

        .hud-bar{
          width:100%;display:flex;align-items:center;
          justify-content:space-between;
          margin-bottom:clamp(24px,5vw,48px);gap:12px;
        }
        .hud-pill{
          display:flex;align-items:center;gap:10px;
          border:1px solid var(--border);border-radius:100px;
          padding:7px 16px;background:rgba(255,255,255,0.02);
        }
        .pulse-dot{
          width:7px;height:7px;border-radius:50%;
          background:var(--amber);box-shadow:0 0 8px var(--amber);
          animation:throb 2s ease-in-out infinite;flex-shrink:0;
        }
        .hud-text{
          font-size:clamp(8px,1.3vw,10px);
          text-transform:uppercase;letter-spacing:0.3em;
          color:var(--muted);font-family:'DM Mono',monospace;font-weight:300;
        }
        .sec-bar-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:5px;}
        .sec-bar{width:clamp(60px,10vw,100px);height:2px;background:var(--dim);border-radius:2px;overflow:hidden;}
        .sec-bar-fill{height:100%;width:75%;background:var(--amber);box-shadow:0 0 6px var(--amber);}

        .version-badge{
          display:inline-flex;align-items:center;gap:8px;
          border:1px solid rgba(245,158,11,0.3);border-radius:4px;
          padding:4px 12px;margin-bottom:clamp(16px,3vw,28px);
        }
        .version-badge span{
          font-size:clamp(8px,1.2vw,10px);
          text-transform:uppercase;letter-spacing:0.4em;
          color:var(--amber);font-family:'DM Mono',monospace;
        }
        .badge-dot{width:5px;height:5px;border-radius:50%;background:var(--amber);}

        .main-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(5rem,22vw,18rem);
          line-height:0.85;letter-spacing:0.02em;
          text-align:center;color:var(--bone);
          text-shadow:0 0 80px rgba(245,158,11,0.18),0 2px 0 rgba(0,0,0,0.9);
          animation:rise 1.2s cubic-bezier(0.16,1,0.3,1) both;
          word-break:break-word;
        }

        .divider{
          width:100%;height:1px;
          background:linear-gradient(90deg,transparent,var(--amber),transparent);
          margin:clamp(12px,3vw,24px) 0;
          opacity:0.3;animation:rise 1.2s 0.3s both;
        }

        .subtitle{
          font-family:'Barlow Condensed',sans-serif;font-weight:300;
          font-size:clamp(11px,2.5vw,16px);
          letter-spacing:clamp(0.3em,3vw,0.9em);
          color:var(--muted);text-transform:uppercase;
          text-align:center;animation:rise 1.2s 0.4s both;
        }
        .subtitle em{color:var(--bone);font-style:normal;font-weight:600;}

        .cards-row{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:clamp(8px,2vw,20px);
          width:100%;
          margin-top:clamp(32px,6vw,64px);
        }
        @media(max-width:520px){
          .cards-row{grid-template-columns:1fr;max-width:280px;}
        }

        .stat-card{
          position:relative;
          border:1px solid var(--border);
          border-radius:16px;
          background:rgba(255,255,255,0.02);
          padding:clamp(16px,3vw,28px);
          transition:transform 0.35s ease,border-color 0.35s ease,background 0.35s ease;
          overflow:hidden;
          animation:rise 1s both;
        }
        .stat-card:hover{
          transform:translateY(-8px);
          border-color:var(--accent);
          background:rgba(255,255,255,0.04);
        }
        .stat-card:hover .card-glow{opacity:1;}
        .stat-card:hover .stat-rate{color:var(--accent);}

        .card-glow{
          position:absolute;inset:0;border-radius:16px;
          background:radial-gradient(circle at 50% 0%,var(--accent),transparent 60%);
          opacity:0;transition:opacity 0.4s ease;
          pointer-events:none;mix-blend-mode:screen;filter:blur(20px);
        }

        .stat-rate{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(22px,4vw,34px);
          color:var(--bone);letter-spacing:0.08em;line-height:1;
          transition:color 0.3s ease;
        }

        .bottom-meta{
          position:absolute;
          bottom:clamp(12px,3vw,32px);
          left:clamp(12px,3vw,32px);
        }
        .bottom-meta p,.bottom-right p{
          font-family:'DM Mono',monospace;
          font-size:clamp(7px,1vw,9px);
          color:#3d3a35;text-transform:uppercase;
          letter-spacing:0.15em;line-height:2;
        }
        .bottom-right{
          position:absolute;
          bottom:clamp(12px,3vw,32px);
          right:clamp(12px,3vw,32px);
          text-align:right;
        }
      `}</style>

      <section className="hero-root" ref={heroRef}>
        {/* YOUR EXACT SAME CONTENT - NO CHANGES */}
        <div className="orb-left" />
        <div className="orb-right" />
        <div className="floor" />
        <div className="scan" />
        <BackgroundTextLayer />

        <div className="corner tl" /><div className="corner tr" />
        <div className="corner bl" /><div className="corner br" />

        <span className="side-rail left">Core Engine / v.4029-B</span>
        <span className="side-rail right">Neural Network Synchronized</span>

        <div className="content" ref={contentRef}>
          <div className="hud-bar" ref={hudRef}>
            <div className="hud-pill">
              <div className="pulse-dot" />
              <span className="hud-text">Protocol Active</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div className="sec-bar-wrap">
                <span className="hud-text">Security: High</span>
                <div className="sec-bar"><div className="sec-bar-fill" /></div>
              </div>
            </div>
          </div>

          <div className="version-badge">
            <div className="badge-dot" />
            <span>v.4029-B · System Online</span>
          </div>

          <h1 className="main-title" ref={titleRef}>
            ITZFIZZ
          </h1>

          <div className="divider" />

          <p className="subtitle">
            Engineering <em>Superior</em> Intelligence
          </p>

          <div className="cards-row" ref={cardsRef}>
            {cards.map(({ title, rate, percentage, color }, i) => (
              <StatCard key={title} title={title} rate={rate} percentage={percentage} color={color} index={i} />
            ))}
          </div>
        </div>

        <div className="bottom-meta"><p>Process ID: #7729-00<br />Status: Synced</p></div>
        <div className="bottom-right"><p>Lat 00°00′N<br />Lon 00°00′E</p></div>
      </section>
    </>
  );
}

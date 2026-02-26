
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function SwipeCard({ title, description, subText, btnText, gradient, accentColor, icon, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,500;1,300&family=Instrument+Serif:ital@0;1&family=Barlow+Condensed:wght@200;300;400;600;800;900&display=swap');

        .sc-card {
          position: relative;
          flex-shrink: 0;
          width: min(82vw, 860px);
          height: min(72vh, 540px);
          background: #0a0908;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 2rem;
          padding: clamp(32px, 5vw, 72px);
          display: flex;
          flex-direction: row;
          align-items: stretch;
          overflow: hidden;
          transition: border-color 0.5s ease, transform 0.5s ease;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset;
          cursor: pointer;
          will-change: transform;
        }
        @media (max-width: 900px) {
          .sc-card {
            width: min(88vw, 480px);
            height: auto;
            min-height: 560px;
            flex-direction: column;
          }
        }
        @media (max-width: 480px) {
          .sc-card {
            width: 90vw;
            padding: 28px;
            min-height: 500px;
            border-radius: 1.5rem;
          }
        }

        .sc-card:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-3px);
        }

        .sc-blob {
          position: absolute;
          right: -60px;
          top: -80px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          opacity: 0.07;
          transition: opacity 0.6s ease, transform 0.6s ease;
          pointer-events: none;
          z-index: 0;
        }
        .sc-card:hover .sc-blob {
          opacity: 0.14;
          transform: scale(1.1) translate(-10px, 10px);
        }

        .sc-grain {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          pointer-events: none;
          z-index: 1;
        }

        .sc-num {
          position: absolute;
          bottom: -30px;
          right: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(140px, 22vw, 260px);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.04);
          user-select: none;
          pointer-events: none;
          z-index: 1;
          letter-spacing: -0.06em;
        }

        .sc-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          pointer-events: none;
          z-index: 3;
          transition: opacity 0.4s;
          opacity: 0.4;
        }
        .sc-card:hover .sc-corner { opacity: 1; }
        .sc-corner.tl { top: 18px; left: 18px; border-top: 1px solid; border-left: 1px solid; }
        .sc-corner.tr { top: 18px; right: 18px; border-top: 1px solid; border-right: 1px solid; }
        .sc-corner.bl { bottom: 18px; left: 18px; border-bottom: 1px solid; border-left: 1px solid; }
        .sc-corner.br { bottom: 18px; right: 18px; border-bottom: 1px solid; border-right: 1px solid; }

        .sc-left {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2;
          position: relative;
        }

        .sc-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }
        .sc-eyebrow-line {
          width: 28px;
          height: 1px;
          background: currentColor;
          flex-shrink: 0;
          transition: width 0.4s ease;
        }
        .sc-card:hover .sc-eyebrow-line { width: 40px; }
        .sc-eyebrow-text {
          font-family: 'DM Mono', monospace;
          font-size: clamp(7.5px, 1vw, 9.5px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.45em;
        }

        .sc-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(20px, 3vh, 40px) 0;
        }

        .sc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.2rem, 8vw, 7rem);
          line-height: 0.85;
          letter-spacing: 0.025em;
          color: #ede8df;
          margin-bottom: clamp(14px, 2.5vh, 24px);
          text-shadow: 0 0 80px rgba(255,255,255,0.05);
        }

        .sc-desc {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(13px, 1.7vw, 16.5px);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(220, 210, 195, 0.42);
          max-width: 380px;
          letter-spacing: 0.03em;
        }

        .sc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .sc-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: clamp(8.5px, 1.1vw, 10.5px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: #0a0908;
          border: none;
          padding: clamp(11px, 1.5vw, 15px) clamp(22px, 3vw, 36px);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .sc-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .sc-btn:hover::after { opacity: 1; }
        .sc-btn:hover { transform: scale(1.04); letter-spacing: 0.45em; }
        .sc-btn-arrow {
          font-size: 1.1em;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sc-btn:hover .sc-btn-arrow { transform: translateX(5px); }

        .sc-status {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .sc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        .sc-right {
          flex: 0.9;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
          padding-left: clamp(20px, 4vw, 56px);
        }
        @media (max-width: 900px) {
          .sc-right {
            padding-left: 0;
            padding-top: 24px;
            flex: 0 0 auto;
            min-height: 220px;
          }
        }

        .sc-visual {
          position: relative;
          width: 100%;
          max-width: 300px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sc-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.6s ease;
        }
        .sc-ring-1 { inset: -20px; animation: orbitSpin 20s linear infinite; }
        .sc-ring-2 { inset: -44px; border-style: dashed; animation: orbitSpin 30s linear infinite reverse; opacity: 0.5; }
        .sc-ring-3 { inset: -70px; animation: orbitSpin 40s linear infinite; opacity: 0.25; }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sc-card:hover .sc-ring { border-color: rgba(255,255,255,0.12); }

        .sc-orbit-dot {
          position: absolute;
          top: -22px;
          left: 50%;
          margin-left: -4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          transform-origin: center 22px;
          box-shadow: 0 0 12px currentColor;
        }

        .sc-img-frame {
          position: relative;
          width: 68%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
        }
        .sc-img-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          z-index: 3;
          mix-blend-mode: overlay;
        }
        .sc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease;
          filter: saturate(0.5) brightness(0.8) contrast(1.1);
        }
        .sc-card:hover .sc-img {
          transform: scale(1.08);
          filter: saturate(0.75) brightness(0.9) contrast(1.05);
        }

        .sc-icon-badge {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #0a0908;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          z-index: 4;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sc-card:hover .sc-icon-badge { transform: scale(1.15) rotate(10deg); }

        .sc-scanlines {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          background: repeating-linear-gradient(
            180deg,
            transparent 0px,
            transparent 3px,
            rgba(0,0,0,0.04) 3px,
            rgba(0,0,0,0.04) 4px
          );
          pointer-events: none;
          opacity: 0.6;
          z-index: 1;
        }

        .sc-divider {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(255,255,255,0.06) 30%,
            rgba(255,255,255,0.06) 70%,
            transparent
          );
          z-index: 2;
        }
      `}</style>

      <div
        className="sc-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="sc-blob" style={{ background: gradient }} />
        <div className="sc-grain" />
        <div className="sc-num">0{index + 1}</div>
        <div className="sc-scanlines" />

        <div className="sc-corner tl" style={{ borderColor: accentColor + '60' }} />
        <div className="sc-corner tr" style={{ borderColor: accentColor + '60' }} />
        <div className="sc-corner bl" style={{ borderColor: accentColor + '60' }} />
        <div className="sc-corner br" style={{ borderColor: accentColor + '60' }} />

        <div className="sc-left">
          <div className="sc-eyebrow" style={{ color: accentColor }}>
            <div className="sc-eyebrow-line" />
            <span className="sc-eyebrow-text">{subText}</span>
          </div>

          <div className="sc-main">
            <h2 className="sc-title">{title}</h2>
            <p className="sc-desc">{description}</p>
          </div>

          <div className="sc-footer">
            <button className="sc-btn" style={{ background: accentColor }}>
              {btnText}
              <span className="sc-btn-arrow">→</span>
            </button>
            <div className="sc-status">
              <span className="sc-dot" />
              Active
            </div>
          </div>
        </div>

        <div className="sc-divider" />

        <div className="sc-right">
          <div className="sc-visual">
            <div className="sc-ring sc-ring-1">
              <div className="sc-orbit-dot" style={{ color: accentColor }} />
            </div>
            <div className="sc-ring sc-ring-2" />
            <div className="sc-ring sc-ring-3" />

            <div className="sc-img-frame" style={{ 
              boxShadow: `0 0 30px ${accentColor}25, 0 0 120px ${accentColor}10` 
            }}>
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%', zIndex: 3,
                background: `radial-gradient(circle at 30% 30%, ${accentColor}20 0%, transparent 60%)`,
                mixBlendMode: 'screen'
              }} />
              <img 
                src={`https://images.unsplash.com/photo-${['1551650975-87deedd944c3', '1518770660439-4636190af475', '1489389944381-3471b5b30f04'][index]}?w=550&h=500&fit=crop&q=80`} 
                className="sc-img" 
                alt={title} 
              />
            </div>

            <div className="sc-icon-badge" style={{ 
              boxShadow: `0 8px 20px rgba(0,0,0,0.6), 0 0 20px ${accentColor}30` 
            }}>
              {icon}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function SwipeCardsContainer() {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const el = scrollRef.current;
    if (!el || !triggerRef.current) return;

    const totalWidth = el.scrollWidth - window.innerWidth + 100;

    // Main horizontal scroll
    const mainTl = gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: .7,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Background text parallax
    gsap.to(".sc-bg-word", {
      xPercent: -15,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      }
    });

    // Cards entrance animation
    const cards = gsap.utils.toArray('.sc-card');
    if (cards.length > 0) {
      gsap.fromTo(cards,
        { opacity: 0, scale: 0.92, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: .4,
          }
        }
      );
    }

    return () => {
      mainTl.scrollTrigger?.kill();
    };
  }, { scope: [triggerRef, scrollRef] });

  const services = [
    {
      title: 'UI/UX Design',
      description: 'We craft high-performance interfaces that bridge the gap between human intent and machine precision. Every pixel earns its place.',
      subText: 'Phase 01 · Visual Engineering',
      btnText: 'Explore Design',
      gradient: 'radial-gradient(circle, #f59e0b, #ef4444)',
      accentColor: '#f59e0b',
      icon: '✦',
    },
    {
      title: 'Motion Ops',
      description: 'Bringing digital spaces to life with fluid scroll-driven narratives, GSAP engines, and interaction choreography that feels inevitable.',
      subText: 'Phase 02 · Dynamic Interaction',
      btnText: 'View Motion',
      gradient: 'radial-gradient(circle, #6366f1, #ec4899)',
      accentColor: '#818cf8',
      icon: '◈',
    },
    {
      title: 'Full Stack',
      description: 'Scalable React and Next.js architectures forged for performance, global reach, and teams that ship fast without breaking things.',
      subText: 'Phase 03 · Core Development',
      btnText: 'Check Stack',
      gradient: 'radial-gradient(circle, #10b981, #0ea5e9)',
      accentColor: '#34d399',
      icon: '⬡',
    },
        {
      title: 'UI/UX Design',
      description: 'We craft high-performance interfaces that bridge the gap between human intent and machine precision. Every pixel earns its place.',
      subText: 'Phase 01 · Visual Engineering',
      btnText: 'Explore Design',
      gradient: 'radial-gradient(circle, #f59e0b, #ef4444)',
      accentColor: '#f59e0b',
      icon: '✦',
    },
    {
      title: 'Motion Ops',
      description: 'Bringing digital spaces to life with fluid scroll-driven narratives, GSAP engines, and interaction choreography that feels inevitable.',
      subText: 'Phase 02 · Dynamic Interaction',
      btnText: 'View Motion',
      gradient: 'radial-gradient(circle, #6366f1, #ec4899)',
      accentColor: '#818cf8',
      icon: '◈',
    },
    {
      title: 'Full Stack',
      description: 'Scalable React and Next.js architectures forged for performance, global reach, and teams that ship fast without breaking things.',
      subText: 'Phase 03 · Core Development',
      btnText: 'Check Stack',
      gradient: 'radial-gradient(circle, #10b981, #0ea5e9)',
      accentColor: '#34d399',
      icon: '⬡',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@200;300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .sc-section {
          background: #080706;
          overflow: hidden;
          position: relative;
        }

        .sc-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          pointer-events: none;
          z-index: 10;
        }

        .sc-ambient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 10% 50%, rgba(245,158,11,0.025) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 90% 30%, rgba(99,102,241,0.02) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .sc-bg-text {
          position: absolute;
          top: 50%;
          left: -2%;
          transform: translateY(-50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .sc-bg-word {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(180px, 28vw, 340px);
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.028);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .sc-sticky {
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .sc-track {
          display: flex;
          align-items: center;
          gap: clamp(20px, 3vw, 44px);
          padding: 0 6vw;
          will-change: transform;
        }

        .sc-intro {
          flex-shrink: 0;
          width: clamp(260px, 30vw, 400px);
          padding-right: clamp(24px, 4vw, 56px);
          position: relative;
        }
        .sc-intro-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(16px, 2.5vw, 28px);
        }
        .sc-intro-tick {
          width: 22px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        .sc-intro-tag {
          font-family: 'DM Mono', monospace;
          font-size: clamp(7.5px, 1vw, 9px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          color: rgba(255,255,255,0.25);
        }
        .sc-intro-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.4rem, 6.5vw, 6.2rem);
          line-height: 0.87;
          letter-spacing: 0.03em;
          color: #ede8df;
        }
        .sc-intro-heading em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px rgba(237, 232, 223, 0.28);
        }
        .sc-intro-sub {
          margin-top: clamp(18px, 3vh, 32px);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(12px, 1.5vw, 14.5px);
          font-weight: 200;
          line-height: 1.7;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
          max-width: 280px;
        }

        .sc-progress {
          position: absolute;
          bottom: -5vh;
          left: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sc-prog-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }
        .sc-prog-dot.active {
          width: 20px;
          border-radius: 2px;
          background: rgba(255,255,255,0.4);
        }

        .sc-end { flex-shrink: 0; width: 8vw; }

        .sc-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          opacity: 0.3;
          animation: hintFloat 2.5s ease-in-out infinite;
        }
        .sc-hint-text {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: white;
        }
        .sc-hint-arrow {
          font-size: 16px;
          color: white;
          transform: rotate(90deg);
          display: block;
        }
        @keyframes hintFloat {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.6; transform: translateX(-50%) translateY(4px); }
        }
      `}</style>

      <section ref={triggerRef} className="sc-section">
        <div className="sc-ambient" />

        <div className="sc-bg-text">
          <span className="sc-bg-word">SERVICES SERVICES SERVICES</span>
        </div>

        <div className="sc-hint">
          <span className="sc-hint-text">Scroll</span>
          <span className="sc-hint-arrow">→</span>
        </div>

        <div className="sc-sticky">
          <div ref={scrollRef} className="sc-track">
            <div className="sc-intro">
              <div className="sc-intro-label">
                <div className="sc-intro-tick" />
                <span className="sc-intro-tag">What we do</span>
              </div>
              <h2 className="sc-intro-heading">
                Premium<br />
                Solutions<br />
                for <em>Leaders</em>.
              </h2>
              <p className="sc-intro-sub">
                We build digital products that set the standard. Three disciplines, one obsession: excellence.
              </p>
              <div className="sc-progress">
                {[0, 1, 2].map(i => (
                  <div key={i} className={`sc-prog-dot ${i === 0 ? 'active' : ''}`} />
                ))}
              </div>
            </div>

            {services.map((service, index) => (
              <SwipeCard key={index} index={index} {...service} />
            ))}

            <div className="sc-end" />
          </div>
        </div>
      </section>
    </>
  );
}




import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function CardGrid({ imglink, title, category, index }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@300;600;900&display=swap');

        .portfolio-item {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto 64px;
          cursor: pointer;
        }

        /* Glow shadow layer */
        .portfolio-shadow {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          background: rgba(245,158,11,0.08);
          transform: translate(8px, 8px);
          filter: blur(12px);
          transition: transform 0.5s ease, opacity 0.5s ease;
          pointer-events: none;
        }
        .portfolio-item:hover .portfolio-shadow {
          transform: translate(4px, 4px);
          opacity: 0.6;
        }

        /* Amber offset border layer */
        .portfolio-border-layer {
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          border: 1px solid rgba(245,158,11,0.25);
          transform: translate(5px, 5px);
          transition: transform 0.5s ease 0.05s;
          pointer-events: none;
        }
        .portfolio-item:hover .portfolio-border-layer {
          transform: translate(2px, 2px);
        }

        /* Main card */
        .portfolio-card {
          position: relative;
          background: #0f0e0c;
          border: 1px solid rgba(245,158,11,0.15);
          border-radius: 2rem;
          padding: clamp(14px, 2.5vw, 20px);
          overflow: hidden;
          transition: border-color 0.4s ease;
          box-shadow: 0 0 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .portfolio-item:hover .portfolio-card {
          border-color: rgba(245,158,11,0.4);
        }

        /* Scanline texture */
        .portfolio-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          background: repeating-linear-gradient(
            180deg, transparent, transparent 3px,
            rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          opacity: 0.5;
          z-index: 1;
        }

        /* Corner ticks */
        .p-corner {
          position: absolute;
          width: 12px; height: 12px;
          pointer-events: none;
          z-index: 5;
        }
        .p-corner.tl { top: 14px; left: 14px; border-top: 1px solid rgba(245,158,11,0.4); border-left: 1px solid rgba(245,158,11,0.4); }
        .p-corner.tr { top: 14px; right: 14px; border-top: 1px solid rgba(245,158,11,0.4); border-right: 1px solid rgba(245,158,11,0.4); }
        .p-corner.bl { bottom: 14px; left: 14px; border-bottom: 1px solid rgba(245,158,11,0.4); border-left: 1px solid rgba(245,158,11,0.4); }
        .p-corner.br { bottom: 14px; right: 14px; border-bottom: 1px solid rgba(245,158,11,0.4); border-right: 1px solid rgba(245,158,11,0.4); }

        /* Image container */
        .portfolio-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 1.4rem;
          aspect-ratio: 16/9;
          z-index: 2;
        }
        .portfolio-img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(60%) sepia(15%);
          transform: scale(1);
          transition: transform 0.7s ease, filter 0.5s ease;
        }
        .portfolio-item:hover .portfolio-img {
          filter: grayscale(20%) sepia(10%);
          transform: scale(1.04);
        }

        /* Hover overlay */
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(12,11,9,0.72);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.35s ease;
          z-index: 3;
        }
        .portfolio-item:hover .portfolio-overlay { opacity: 1; }

        .view-btn {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: #0c0b09;
          background: #f59e0b;
          border: none;
          padding: clamp(10px, 1.5vw, 14px) clamp(24px, 3vw, 36px);
          border-radius: 100px;
          cursor: pointer;
          transform: translateY(16px);
          transition: transform 0.4s ease, background 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 0 20px rgba(245,158,11,0.4);
        }
        .portfolio-item:hover .view-btn {
          transform: translateY(0);
        }
        .view-btn:hover {
          background: #e8e0d0;
          box-shadow: 0 0 28px rgba(232,224,208,0.25);
        }

        /* Card footer */
        .portfolio-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(14px, 2vw, 20px) clamp(10px, 1.5vw, 16px) clamp(6px, 1vw, 10px);
          position: relative;
          z-index: 2;
        }
        .portfolio-meta { display: flex; flex-direction: column; gap: 4px; }

        .portfolio-category {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px, 1.2vw, 10px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cat-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #f59e0b;
          flex-shrink: 0;
        }

        .portfolio-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          letter-spacing: 0.03em;
          color: #e8e0d0;
          line-height: 1;
          text-shadow: 0 0 30px rgba(245,158,11,0.1);
        }

        .portfolio-arrow {
          width: clamp(40px, 5vw, 52px);
          height: clamp(40px, 5vw, 52px);
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #6b6560;
          flex-shrink: 0;
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .portfolio-item:hover .portfolio-arrow {
          background: #f59e0b;
          border-color: #f59e0b;
          color: #0c0b09;
        }

        /* Index watermark */
        .portfolio-index {
          position: absolute;
          bottom: 16px;
          right: 72px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 10vw, 100px);
          color: transparent;
          -webkit-text-stroke: 1px rgba(245,158,11,0.05);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="portfolio-item">
        <div className="portfolio-shadow" />
        <div className="portfolio-border-layer" />

        <div className="portfolio-card">
          {/* Corner ticks */}
          <div className="p-corner tl" /><div className="p-corner tr" />
          <div className="p-corner bl" /><div className="p-corner br" />

          {/* Index watermark */}
          <span className="portfolio-index">0{index + 1}</span>

          {/* Image */}
          <div className="portfolio-img-wrap">
            <img src={imglink} className="portfolio-img" alt={title} />
            <div className="portfolio-overlay">
              <button className="view-btn">View Project ↗</button>
            </div>
          </div>

          {/* Footer */}
          <div className="portfolio-footer">
            <div className="portfolio-meta">
              <span className="portfolio-category">
                <span className="cat-dot" />
                {category}
              </span>
              <h3 className="portfolio-title">{title}</h3>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CardGridContainer() {
  const containerRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    gsap.to(textRef.current, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.from(".portfolio-item", {
      y: 120,
      opacity: 0,
      stagger: 0.25,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  const projects = [
    { title: "Lama Designs",  category: "Interior · 2024", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
    { title: "Cyber Engine",  category: "Web3 · 2024",     img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" },
    { title: "Neon Velocity", category: "App · 2023",      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" },
  ];

  return (
    <>
      <style>{`
        .cardgrid-section {
          background: #0c0b09;
          padding: clamp(64px, 10vw, 140px) clamp(20px, 5vw, 48px);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(245,158,11,0.12);
        }

        /* Top glow line */
        .cardgrid-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.45), transparent);
          pointer-events: none;
        }

        /* Ambient orb */
        .cg-orb {
          position: absolute;
          width: clamp(300px, 50vw, 700px);
          height: clamp(300px, 50vw, 700px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%);
          top: 10%;
          right: -15%;
          filter: blur(100px);
          pointer-events: none;
        }

        /* Scrolling bg text */
        .cg-bg-text {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
        .cg-bg-text h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(140px, 22vw, 260px);
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px rgba(245,158,11,0.04);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        /* Scanlines */
        .cg-scan {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            180deg, transparent, transparent 3px,
            rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          opacity: 0.35;
          z-index: 0;
        }

        .cg-inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Section header */
        .cg-header {
          margin-bottom: clamp(48px, 7vw, 96px);
        }
        .cg-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(14px, 2vw, 22px);
        }
        .cg-tick {
          width: 20px; height: 1px;
          background: #f59e0b;
          flex-shrink: 0;
        }
        .cg-label {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px, 1.2vw, 10px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.45em;
          color: #f59e0b;
        }
        .cg-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 9vw, 7rem);
          line-height: 0.85;
          letter-spacing: 0.02em;
          color: #e8e0d0;
          text-shadow: 0 0 80px rgba(245,158,11,0.1);
        }
        .cg-heading em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,224,208,0.3);
        }

        /* View all button */
        .cg-footer {
          text-align: center;
          margin-top: clamp(8px, 2vw, 16px);
        }
        .cg-view-all {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: #e8e0d0;
          background: transparent;
          border: 1px solid rgba(245,158,11,0.3);
          padding: clamp(12px, 1.8vw, 18px) clamp(32px, 5vw, 56px);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cg-view-all:hover {
          background: #f59e0b;
          border-color: #f59e0b;
          color: #0c0b09;
          box-shadow: 0 0 24px rgba(245,158,11,0.35);
        }
      `}</style>

      <section ref={containerRef} className="cardgrid-section">
        <div className="cg-orb" />
        <div className="cg-scan" />

        {/* Parallax bg text */}
        <div className="cg-bg-text">
          <h2 ref={textRef}>SELECTED WORK SELECTED WORK SELECTED WORK</h2>
        </div>

        <div className="cg-inner">

          {/* Header */}
          <div className="cg-header">
            <div className="cg-eyebrow">
              <div className="cg-tick" />
              <span className="cg-label">The Portfolio</span>
            </div>
            <h2 className="cg-heading">
              Proving Our<br /><em>Impact</em>.
            </h2>
          </div>

          {/* Cards */}
          <div>
            {projects.map((p, i) => (
              <CardGrid key={i} index={i} title={p.title} category={p.category} imglink={p.img} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="cg-footer">
            <button className="cg-view-all">View All Projects (12) ↗</button>
          </div>

        </div>
      </section>
    </>
  );
}
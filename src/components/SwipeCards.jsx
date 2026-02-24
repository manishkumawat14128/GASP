
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function SwipeCard({ title, description, subText, btnText, imglink, index }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@300;600;900&display=swap');

        .swipe-card {
          position: relative;
          flex-shrink: 0;
          width: 85vw;
          height: 70vh;
          background: #0f0e0c;
          border: 1px solid rgba(245,158,11,0.15);
          border-radius: 2.5rem;
          padding: clamp(28px, 5vw, 64px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: clamp(20px, 4vw, 48px);
          overflow: hidden;
          transition: border-color 0.4s ease;
          box-shadow: 0 0 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03);
        }
        @media (max-width: 768px) {
          .swipe-card {
            width: 88vw;
            flex-direction: column;
            height: auto;
            min-height: 70vh;
          }
        }
        .swipe-card:hover {
          border-color: rgba(245,158,11,0.4);
        }

        /* Ambient glow on hover */
        .swipe-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          background: radial-gradient(circle at 30% 50%, rgba(245,158,11,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .swipe-card:hover::before { opacity: 1; }

        /* Scanline overlay */
        .swipe-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          background: repeating-linear-gradient(
            180deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.06) 3px,
            rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          opacity: 0.5;
        }

        /* Ornament number */
        .card-ornament {
          position: absolute;
          top: -20px;
          right: 24px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(120px, 20vw, 220px);
          color: rgba(245,158,11,0.04);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.05em;
        }

        /* Corner ticks */
        .card-corner {
          position: absolute;
          width: 14px; height: 14px;
          pointer-events: none;
        }
        .card-corner.tl { top: 20px; left: 20px; border-top: 1px solid rgba(245,158,11,0.3); border-left: 1px solid rgba(245,158,11,0.3); border-radius: 2px 0 0 0; }
        .card-corner.tr { top: 20px; right: 20px; border-top: 1px solid rgba(245,158,11,0.3); border-right: 1px solid rgba(245,158,11,0.3); border-radius: 0 2px 0 0; }
        .card-corner.bl { bottom: 20px; left: 20px; border-bottom: 1px solid rgba(245,158,11,0.3); border-left: 1px solid rgba(245,158,11,0.3); border-radius: 0 0 0 2px; }
        .card-corner.br { bottom: 20px; right: 20px; border-bottom: 1px solid rgba(245,158,11,0.3); border-right: 1px solid rgba(245,158,11,0.3); border-radius: 0 0 2px 0; }

        /* Left content */
        .card-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }

        /* Phase label */
        .card-phase {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(16px, 2.5vw, 28px);
        }
        .phase-line {
          width: 24px;
          height: 1px;
          background: #f59e0b;
          flex-shrink: 0;
        }
        .phase-text {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px, 1.2vw, 10px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #f59e0b;
        }

        /* Title */
        .card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 7vw, 6rem);
          line-height: 0.88;
          letter-spacing: 0.02em;
          color: #e8e0d0;
          text-shadow: 0 0 40px rgba(245,158,11,0.12);
          margin-bottom: clamp(14px, 2vw, 22px);
        }

        /* Description */
        .card-desc {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(13px, 1.8vw, 17px);
          font-weight: 300;
          line-height: 1.65;
          color: #6b6560;
          max-width: 420px;
          margin-bottom: clamp(24px, 3.5vw, 40px);
          letter-spacing: 0.02em;
        }

        /* CTA button */
        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #0c0b09;
          background: #f59e0b;
          border: none;
          padding: clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 32px);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(245,158,11,0.3);
        }
        .card-btn:hover {
          background: #e8e0d0;
          box-shadow: 0 0 30px rgba(232,224,208,0.25);
          gap: 20px;
        }
        .btn-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .card-btn:hover .btn-arrow { transform: translateX(4px); }

        /* Right image area */
        .card-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
        }
        .card-img-wrap {
          position: relative;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* Ring behind image */
        .card-img-ring {
          position: absolute;
          inset: -16px;
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.1);
          animation: ringPulse 3s ease-in-out infinite;
        }
        .card-img-ring2 {
          position: absolute;
          inset: -32px;
          border-radius: 50%;
          border: 1px solid rgba(245,158,11,0.05);
          animation: ringPulse 3s ease-in-out infinite 1s;
        }
        @keyframes ringPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.03); }
        }
        .card-img {
          width: 100%;
          max-height: 280px;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(245,158,11,0.15)) saturate(0.7) sepia(0.2);
          transition: transform 0.7s ease, filter 0.4s ease;
          position: relative;
          z-index: 1;
        }
        .swipe-card:hover .card-img {
          transform: scale(1.06) translateY(-4px);
          filter: drop-shadow(0 0 40px rgba(245,158,11,0.25)) saturate(0.8) sepia(0.15);
        }
      `}</style>

      <div className="swipe-card">
        {/* Decorative layers */}
        <div className="card-ornament">0{index + 1}</div>
        <div className="card-corner tl" /><div className="card-corner tr" />
        <div className="card-corner bl" /><div className="card-corner br" />

        {/* Left */}
        <div className="card-left">
          <div className="card-phase">
            <div className="phase-line" />
            <span className="phase-text">{subText}</span>
          </div>

          <h2 className="card-title">{title}</h2>
          <p className="card-desc">{description}</p>

          <button className="card-btn">
            {btnText}
            <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* Right */}
        <div className="card-right">
          <div className="card-img-wrap">
            <div className="card-img-ring" />
            <div className="card-img-ring2" />
            <img src={imglink} className="card-img" alt={title} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function SwipeCardsContainer() {
  const scrollRef = useRef();
  const triggerRef = useRef();

  useGSAP(() => {
    const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

    gsap.to(scrollRef.current, {
      x: -totalWidth - 100,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    gsap.to(".swipe-bg-text", {
      x: -200,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });
  }, { scope: triggerRef });

  const services = [
    {
      title: "UI/UX Design",
      description: "We craft high-performance interfaces that bridge the gap between human and machine.",
      subText: "Phase 01 · Visual Engineering",
      btnText: "Explore Design",
      imglink: "https://ouch-cdn2.icons8.com/6Uq6e7_j1z7T4K5g9T5m3fF3h7_F3y8hY7v3Z3-4-0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzI3/LzYyZGYwYjM0LTgx/YjMtNDM0Yy04YjZk/LTc0NDYyMGI0YjZk/NC5zdmc.png"
    },
    {
      title: "Motion Ops",
      description: "Bringing websites to life with fluid GSAP engines and scroll-driven storytelling.",
      subText: "Phase 02 · Dynamic Interaction",
      btnText: "View Motion",
      imglink: "https://ouch-cdn2.icons8.com/mS9xT-T_z77m_Y_t7F7-C1K-vN4oY8p_B6Y_n_9_Y/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUv/YjFkMGY5ZGYtN2Y0/Mi00N2I5LThmNDUt/ZmE5MGE5YjYyZDUz/LnN2Zw.png"
    },
    {
      title: "Full Stack",
      description: "Scalable React architectures built for speed, SEO, and massive user growth.",
      subText: "Phase 03 · Core Development",
      btnText: "Check Stack",
      imglink: "https://ouch-cdn2.icons8.com/mH_5-Xn4vF8r0TzDq6zH8V7Z_p_pU_v_v_v_v_v_v_v_v/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODgx/LzM1ZDk5ZGY0LWE3/NjctNDQ5My1hN2Vl/LTU1ZDk5ZGY0Yjc3/Ny5zdmc.png"
    }
  ];

  return (
    <>
      <style>{`
        .swipe-section {
          background: #0c0b09;
          overflow: hidden;
          position: relative;
        }

        /* Ambient top border */
        .swipe-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.4), transparent);
          pointer-events: none;
        }

        .swipe-bg-text {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .swipe-bg-text h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(160px, 25vw, 300px);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(245,158,11,0.04);
          line-height: 1;
        }

        .swipe-sticky {
          height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 5vw;
        }

        .swipe-track {
          display: flex;
          gap: clamp(16px, 3vw, 40px);
          align-items: center;
        }

        /* Intro panel */
        .swipe-intro {
          flex-shrink: 0;
          width: clamp(240px, 32vw, 420px);
          padding-right: clamp(20px, 3vw, 48px);
        }
        .intro-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(14px, 2vw, 24px);
        }
        .intro-tick {
          width: 20px; height: 1px;
          background: #f59e0b;
        }
        .intro-label {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px, 1.2vw, 10px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.45em;
          color: #f59e0b;
        }
        .intro-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 0.88;
          letter-spacing: 0.02em;
          color: #e8e0d0;
          text-shadow: 0 0 60px rgba(245,158,11,0.1);
        }
        .intro-heading em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,224,208,0.35);
        }

        /* End spacer */
        .swipe-end { flex-shrink: 0; width: 10vw; }
      `}</style>

      <section ref={triggerRef} className="swipe-section">
        {/* Moving background text */}
        <div className="swipe-bg-text">
          <h2>EXPERIENCE EXPERIENCE EXPERIENCE</h2>
        </div>

        <div className="swipe-sticky">
          <div ref={scrollRef} className="swipe-track">

            {/* Intro */}
            <div className="swipe-intro">
              <div className="intro-eyebrow">
                <div className="intro-tick" />
                <span className="intro-label">What we do</span>
              </div>
              <h2 className="intro-heading">
                Premium<br />Solutions<br />for <em>Leaders</em>.
              </h2>
            </div>

            {/* Cards */}
            {services.map((service, index) => (
              <SwipeCard key={index} index={index} {...service} />
            ))}

            <div className="swipe-end" />
          </div>
        </div>
      </section>
    </>
  );
}
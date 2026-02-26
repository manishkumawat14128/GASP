

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Lama Designs",
    category: "Interior · 2024",
    tag: "01",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&q=70",
    accent: "#f59e0b",
  },
  {
    title: "Cyber Engine",
    category: "Web3 · 2024",
    tag: "02",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800&q=70",
    accent: "#818cf8",
  },
  {
    title: "Neon Velocity",
    category: "App Design · 2023",
    tag: "03",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&q=70",
    accent: "#34d399",
  },

];

// ADJUSTMENTS FOR BETTER SPACING
const CARD_HEIGHT_VH = 48; // Percentage of viewport height
// const STACK_OFFSET = window.innerWidth < 768 ? 40 : 60;  // Pixels visible at the top when cards stack

export default function CardGridContainer() {
  const sectionRef = useRef();
  const wrapperRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const total = cards.length;
    const STACK_OFFSET = window.innerWidth < 768 ? 40 : 60;
    // Total scroll length relative to number of cards
    const scrollDistance = window.innerHeight * 0.8;
    const totalScroll = scrollDistance * total;
    wrapperRef.current.style.height = `calc(${totalScroll}px + 100vh)`;

    // Pin the visual area
    const pinTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${totalScroll}`,
      pin: true,
      pinSpacing: false,
    });

    // Animate cards sliding in
    cards.forEach((card, i) => {
      // Start cards hidden below the screen
      gsap.set(card, { y: window.innerHeight, zIndex: i });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: () => `top+=${i * scrollDistance} top`,
        end: () => `top+=${(i + 1) * scrollDistance} top`,
        scrub: .5,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate final resting position in the stack
          const finalY = i * STACK_OFFSET;
          const startY = window.innerHeight;
          const currentY = gsap.utils.interpolate(startY, finalY, progress);

          gsap.set(card, { y: currentY });

          // Background cards depth effect (scale and darken)
          for (let j = 0; j < i; j++) {
            const depth = i - j + progress - 1;
            const scale = 1 - (depth * 0.04);
            const brightness = 1 - (depth * 0.3);
            gsap.set(cards[j], {
              scale: Math.max(scale, 0.85),
              filter: `brightness(${Math.max(brightness, 0.3)})`
            });
          }
        }
      });
    });

    return () => {
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

        .cg-wrapper {
          background: #090909;
          position: relative;
          width: 100%;
        }

        .cg-section {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          background: #090909;
        }

        /* HEADER - Adjusted padding to fit below your sticky navbar */
        .cg-header {
          width: 100%;
          max-width: 1000px;
          padding: clamp(80px, 15vh, 140px) 40px 30px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          z-index: 100;
        }

        .cg-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 0.85;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
        }

        .cg-title em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.25);
        }

        .cg-info {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          text-align: right;
        }

        /* CARD STAGE */
        .cg-stage {
          position: relative;
          width: 100%;
          max-width: 1000px;
          flex: 1;
          margin-top: 10px;
        }

        /* INDIVIDUAL CARD */
        .p-card {
          position: absolute;
          top: 0;
          left: 40px;
          right: 40px;
          height: ${CARD_HEIGHT_VH}vh;
          background: #121212;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
          transform-origin: top center;
        }

        .p-img-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .p-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5);
          transition: transform 1.2s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .p-card:hover .p-img {
          transform: scale(1.08);
          filter: brightness(0.65);
        }

        .p-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, 
            rgba(0,0,0,0.9) 0%, 
            rgba(0,0,0,0.1) 50%, 
            rgba(0,0,0,0.4) 100%);
          z-index: 2;
        }

        /* CONTENT: CATEGORY & TITLE */
        .p-content {
          position: absolute;
          bottom: 35px;
          left: 40px;
          z-index: 3;
        }

        .p-category {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          margin-bottom: 6px;
          display: block;
        }

        .p-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          color: #fff;
          margin: 0;
          line-height: 0.9;
        }

        /* NUMBER WATERMARK */
        .p-tag {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 120px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.05);
          position: absolute;
          top: 10px;
          right: 30px;
          line-height: 1;
          z-index: 2;
          user-select: none;
        }

        /* INTERACTION ARROW */
        .p-arrow {
          position: absolute;
          bottom: 35px;
          right: 40px;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          z-index: 3;
          background: rgba(255,255,255,0.03);
          will-change: transform;
          transition: all 0.4s cubic-bezier(0.2, 0, 0.2, 1);
        }

        .p-card:hover .p-arrow {
          background: #fff;
          color: #000;
          transform: scale(1.1) rotate(-45deg);
          border-color: #fff;
        }

        /* FOOTER */
        .cg-footer {
          padding: 100px 20px;
          text-align: center;
          background: #090909;
        }

        .view-all-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          padding: 18px 45px;
          border-radius: 100px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 10px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .view-all-btn:hover {
          background: #fff;
          color: #000;
          border-color: #fff;
        }
      `}</style>

      <div className="cg-wrapper" ref={wrapperRef}>
        <section className="cg-section" ref={sectionRef}>

          <header className="cg-header">
            <h2 className="cg-title">Selected<br /><em>Impact</em>.</h2>
            <div className="cg-info">
              Portfolio Index<br />
              01 — 03
            </div>
          </header>

          <div className="cg-stage">
            {projects.map((p, i) => (
              <div
                key={i}
                className="p-card"
                ref={el => cardRefs.current[i] = el}
              >
                <div className="p-img-container">
                  <img src={p.img} alt={p.title} className="p-img" />
                </div>
                <div className="p-overlay" />

                <div className="p-tag">{p.tag}</div>

                <div className="p-content">
                  <span className="p-category" style={{ color: p.accent }}>{p.category}</span>
                  <h3 className="p-card-title">{p.title}</h3>
                </div>

                <div className="p-arrow">→</div>
              </div>
            ))}
          </div>

        </section>
      </div>

      <div className="cg-footer">
        <button className="view-all-btn">View All Projects ↗</button>
      </div>
    </>
  );
}
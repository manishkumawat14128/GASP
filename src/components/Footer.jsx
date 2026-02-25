

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerTitleRef = useRef(null);
  const containerRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    // Parallax effect for the massive footer text
    gsap.fromTo(footerTitleRef.current, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&display=swap');

        .footer-root {
          background: #090909;
          border-top: 1px solid rgba(245,158,11,0.1);
          position: relative;
          overflow: hidden;
          padding-top: 100px;
        }

        /* Digital Noise Texture */
        .footer-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.03;
          pointer-events: none;
          z-index: 1;
        }

        /* Ambient Glow */
        .footer-orb {
          position: absolute;
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%);
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(80px);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px 40px;
          position: relative;
          z-index: 2;
        }

        /* ── TOP GRID ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 60px;
          padding-bottom: 80px;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        .brand-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.05em;
          color: #eee;
          margin-bottom: 15px;
          display: block;
        }
        .brand-logo span { color: #f59e0b; }
        
        .brand-desc {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          line-height: 1.8;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          max-width: 250px;
        }

        /* LINKS */
        .link-col-title {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: #f59e0b;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .link-col-title::before {
          content: "";
          width: 15px;
          height: 1px;
          background: #f59e0b;
        }

        .footer-nav { display: flex; flex-direction: column; gap: 12px; }
        
        .footer-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: #888;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .footer-link:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .footer-email {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.1em;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 4px;
          transition: 0.3s;
        }
        .footer-email:hover { border-color: #f59e0b; color: #f59e0b; }

        /* ── MASSIVE TITLE ── */
        .footer-big-title-container {
          padding: 60px 0;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 40px;
          overflow: hidden;
        }
        
        .footer-big-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 18vw, 15rem);
          line-height: 0.8;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.06);
          letter-spacing: -0.02em;
          user-select: none;
          display: inline-block;
        }

        /* ── BOTTOM BAR ── */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(245,158,11,0.05);
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid rgba(245,158,11,0.1);
        }
        .status-dot {
          width: 6px; height: 6px;
          background: #f59e0b;
          border-radius: 50%;
          box-shadow: 0 0 10px #f59e0b;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        .status-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .back-to-top {
          background: none;
          border: none;
          color: #666;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: 0.3s;
        }
        .back-to-top:hover { color: #fff; }

        .copyright {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: #444;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
      `}</style>

      <footer className="footer-root" ref={containerRef}>
        <div className="footer-orb" />
        
        <div className="footer-inner">
          <div className="footer-grid">
            
            {/* Brand */}
            <div>
              <span className="brand-logo">iTZFi<span>ZZ</span></span>
              <p className="brand-desc">
                Pioneering the digital frontier with high-performance interfaces and creative engineering.
              </p>
            </div>

            {/* Nav */}
            <div className="footer-nav">
              <span className="link-col-title">Explore</span>
              <a className="footer-link">Projects</a>
              <a className="footer-link">Services</a>
              <a className="footer-link">Experience</a>
              <a className="footer-link">Labs</a>
            </div>

            {/* Social */}
            <div className="footer-nav">
              <span className="link-col-title">Social</span>
              <a className="footer-link">Instagram</a>
              <a className="footer-link">LinkedIn</a>
              <a className="footer-link">Twitter</a>
              <a className="footer-link">Github</a>
            </div>

            {/* Contact */}
            <div className="footer-nav">
              <span className="link-col-title">Contact</span>
              <a href="mailto:hello@itzfizz.com" className="footer-email">hello@itzfizz.com</a>
              <p style={{marginTop: '15px', color: '#444', fontFamily: 'DM Mono', fontSize: '10px'}}>
                EST. 2024<br />
                GLOBAL OPERATIONS
              </p>
            </div>
          </div>

          {/* Massive Outlined Title */}
          <div className="footer-big-title-container">
            <h2 className="footer-big-title" ref={footerTitleRef}>
              ITZFIZZ
            </h2>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="status-indicator">
              <div className="status-dot" />
              <span className="status-text">All systems active</span>
            </div>

            <span className="copyright">© 2024 itzfizz studio</span>

            <button className="back-to-top" onClick={scrollToTop}>
              Top ↑
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
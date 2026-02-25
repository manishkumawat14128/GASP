
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // GSAP loading animation - staggered reveal
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.8
      }
    );

    // Logo staggered letter animation - WHITE & YELLOW groups
    gsap.fromTo(
      logoRef.current.children,
      { 
        opacity: 0, 
        y: 30,
        rotationX: -90 
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.7)",
        delay: 1.2
      }
    );

    // Nav links stagger
    gsap.fromTo(
      navRef.current.children,
      { 
        opacity: 0, 
        scale: 0.8,
        y: 20 
      },
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.6
      }
    );

    // CTA button bounce-in
    gsap.fromTo(
      ctaRef.current,
      { 
        opacity: 0, 
        scale: 0.5,
        rotation: -180 
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
        delay: 2.0
      }
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@300;600;900&display=swap');

        .header-root {
          opacity: 0;
          transform: translateY(-40px);
          position: fixed;
          top: 16px;
          left: 0;
          width: 100%;
          z-index: 50;
          padding: 0 16px;
        }

        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          background: rgba(12, 11, 9, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(245, 158, 11, 0.15);
          border-radius: 100px;
          box-shadow: 0 0 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: border-color 0.3s ease;
          will-change: transform;
        }
        .header-inner:hover {
          border-color: rgba(245, 158, 11, 0.28);
        }

        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          padding: 0 28px;
        }

        /* Logo - PERFECT spacing & colors */
        .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.15em;
          color: #e8e0d0; /* WHITE base */
          cursor: pointer;
          text-shadow: 0 0 20px rgba(245,158,11,0.25);
          transition: text-shadow 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.1em;
          will-change: transform;
        }
        .logo:hover {
          text-shadow: 0 0 30px rgba(245,158,11,0.5);
        }
        .logo span.yellow { color: #f59e0b !important; } /* YELLOW highlights */

        /* Desktop nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        @media (max-width: 768px) { .desktop-nav { display: none; } }

        .nav-link-active {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #0c0b09;
          background: #f59e0b;
          padding: 7px 20px;
          border-radius: 100px;
          cursor: pointer;
          box-shadow: 0 0 16px rgba(245,158,11,0.35);
          transition: box-shadow 0.3s ease, background 0.3s ease;
          text-decoration: none;
          will-change: transform;
        }
        .nav-link-active:hover {
          background: #e8e0d0;
          box-shadow: 0 0 24px rgba(232,224,208,0.3);
        }

        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: #6b6560;
          cursor: pointer;
          transition: color 0.25s ease;
          text-decoration: none;
          position: relative;
          will-change: transform;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #e8e0d0; }
        .nav-link:hover::after { width: 100%; }

        .desktop-cta {
          flex-shrink: 0;
        }
        @media (max-width: 768px) { .desktop-cta { display: none; } }

        .btn-cta {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #e8e0d0;
          background: transparent;
          border: 1px solid rgba(245,158,11,0.4);
          padding: 9px 22px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          will-change: transform;
        }
        .btn-cta:hover {
          background: #f59e0b;
          border-color: #f59e0b;
          color: #0c0b09;
          box-shadow: 0 0 20px rgba(245,158,11,0.4);
        }

        /* Mobile styles */
        .mobile-controls {
          display: none;
          align-items: center;
          gap: 12px;
        }
        @media (max-width: 768px) { .mobile-controls { display: flex; } }

        .btn-cta-mobile, .menu-toggle {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #0c0b09;
          background: #f59e0b;
          border: none;
          padding: 8px 18px;
          border-radius: 100px;
          cursor: pointer;
          box-shadow: 0 0 14px rgba(245,158,11,0.35);
          transition: all 0.3s ease;
        }
        .btn-cta-mobile:hover, .menu-toggle:hover { 
          background: #e8e0d0; 
          color: #f59e0b;
        }
        .menu-toggle {
          background: none;
          color: #6b6560;
          padding: 4px;
          display: flex;
          align-items: center;
        }

        .mobile-menu {
          border-top: 1px solid rgba(245,158,11,0.12);
          background: rgba(12,11,9,0.92);
          backdrop-filter: blur(20px);
          border-radius: 0 0 32px 32px;
          padding: 28px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .mobile-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: #6b6560;
          cursor: pointer;
          transition: color 0.25s ease;
          text-decoration: none;
        }
        .mobile-link:hover { color: #f59e0b; }

        .logo-dot {
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
          margin-left: 4px;
          vertical-align: middle;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; box-shadow:0 0 8px #f59e0b; }
          50%      { opacity:0.4; box-shadow:0 0 3px #f59e0b; }
        }
      `}</style>

      <header className="header-root" ref={headerRef}>
        <div className="header-inner">
          <div className="header-bar">
            {/* 🎨 PERFECT WHITE/YELLOW LOGO - ANIMATES EVERY LETTER */}
            <div className="logo" ref={logoRef}>
              <span>W</span><span>E</span><span>L</span>  {/* WHITE */}
              <span className="yellow">C</span><span>O</span><span>M</span><span>E</span>  {/* YELLOW → WHITE */}
              {/* <span className="yellow">i</span><span>T</span><span>Z</span>  {/* YELLOW → WHITE */}
              {/* <span className="yellow">F</span><span>i</span><span>Z</span><span>Z</span>  YELLOW → WHITE */} 
              <span className="logo-dot" />
            </div>

            <nav className="desktop-nav" ref={navRef}>
              <a className="nav-link-active">Home</a>
              {["Services", "Resources", "Contact"].map((link) => (
                <a key={link} className="nav-link">{link}</a>
              ))}
            </nav>

            <div className="desktop-cta" ref={ctaRef}>
              <button className="btn-cta">Get Started</button>
            </div>

            <div className="mobile-controls">
              <button className="btn-cta-mobile">Get Started</button>
              <button className="menu-toggle" onClick={() => setOpen(!open)}>
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="mobile-menu">
              {["Home", "Services", "Resources", "Contact"].map((link) => (
                <a key={link} className="mobile-link">{link}</a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}

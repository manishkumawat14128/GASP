export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;500&family=Barlow+Condensed:wght@300;600;900&display=swap');

        :root {
          --bg:     #0c0b09;
          --amber:  #f59e0b;
          --bone:   #e8e0d0;
          --muted:  #6b6560;
          --dim:    #2a2722;
          --border: rgba(255,255,255,0.06);
        }

        .footer-root {
          background: var(--bg);
          border-top: 1px solid rgba(245,158,11,0.12);
          position: relative;
          overflow: hidden;
          font-family: 'Barlow Condensed', sans-serif;
        }

        /* Top amber glow line */
        .footer-glow-line {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent);
          pointer-events: none;
        }

        /* Ambient orb */
        .footer-orb {
          position: absolute;
          width: clamp(300px, 50vw, 600px);
          height: clamp(300px, 50vw, 600px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%);
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(80px);
          pointer-events: none;
        }

        /* Scanlines */
        .footer-scan {
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            180deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.08) 3px,
            rgba(0,0,0,0.08) 4px
          );
          pointer-events: none;
          opacity: 0.4;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(48px, 8vw, 96px) clamp(20px, 5vw, 48px) clamp(28px, 4vw, 48px);
          position: relative;
          z-index: 10;
        }

        /* ── Top grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: clamp(24px, 4vw, 56px);
          padding-bottom: clamp(40px, 6vw, 72px);
          border-bottom: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; row-gap: 36px; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* Brand col */
        .brand-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 0.06em;
          color: var(--bone);
          text-shadow: 0 0 20px rgba(245,158,11,0.2);
          margin-bottom: 14px;
          display: block;
        }
        .brand-logo span { color: var(--amber); }
        .brand-tagline {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px, 1.2vw, 10px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--muted);
          line-height: 1.9;
        }

        /* Link columns */
        .link-col h4 {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          color: var(--dim);
          margin-bottom: 18px;
        }
        .link-col {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .footer-link {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--muted);
          text-decoration: none;
          padding: 7px 0;
          border-bottom: 1px solid transparent;
          transition: color 0.25s ease, border-color 0.25s ease, padding-left 0.25s ease;
          display: inline-block;
          cursor: pointer;
        }
        .footer-link:hover {
          color: var(--amber);
          padding-left: 6px;
          border-bottom-color: rgba(245,158,11,0.2);
        }

        /* Email link special */
        .footer-email {
          font-family: 'DM Mono', monospace;
          font-size: clamp(9px, 1.3vw, 11px);
          font-weight: 300;
          letter-spacing: 0.15em;
          color: var(--muted);
          text-decoration: none;
          display: inline-block;
          padding: 7px 0;
          transition: color 0.25s ease;
          cursor: pointer;
        }
        .footer-email:hover { color: var(--amber); }

        .footer-coords {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 300;
          color: #3d3a35;
          letter-spacing: 0.1em;
          margin-top: 16px;
          line-height: 1.8;
        }

        /* ── Big title ── */
        .footer-title-wrap {
          padding: clamp(32px, 5vw, 56px) 0 clamp(24px, 4vw, 40px);
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .footer-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 20vw, 16rem);
          line-height: 0.82;
          letter-spacing: 0.02em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,224,208,0.08);
          position: relative;
          user-select: none;
        }
        .footer-title-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.06) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: sweep 8s linear infinite;
          pointer-events: none;
        }
        @keyframes sweep {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: clamp(20px, 3vw, 32px);
          gap: 16px;
          flex-wrap: wrap;
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(245,158,11,0.15);
          border-radius: 100px;
          padding: 6px 14px;
          background: rgba(245,158,11,0.04);
        }
        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--amber);
          box-shadow: 0 0 8px var(--amber);
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; box-shadow:0 0 8px var(--amber); }
          50%      { opacity:0.4; box-shadow:0 0 3px var(--amber); }
        }
        .status-text {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px,1.2vw,9px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: var(--muted);
        }

        .bottom-right {
          display: flex;
          align-items: center;
          gap: clamp(16px, 3vw, 36px);
        }
        .bottom-copy {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px,1.2vw,9px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #3d3a35;
        }
        .back-top {
          font-family: 'DM Mono', monospace;
          font-size: clamp(8px,1.2vw,9px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--muted);
          cursor: pointer;
          transition: color 0.25s ease;
          background: none;
          border: none;
          padding: 0;
        }
        .back-top:hover { color: var(--amber); }

        /* Divider tick */
        .col-tick {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .tick-line {
          width: 20px;
          height: 1px;
          background: rgba(245,158,11,0.35);
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-glow-line" />
        <div className="footer-orb" />
        <div className="footer-scan" />

        <div className="footer-inner">

          {/* Grid */}
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <span className="brand-logo">iTZFi<span>ZZ</span></span>
              <p className="brand-tagline">
                Engineering digital<br />supremacy since 2024.
              </p>
            </div>

            {/* Navigation */}
            <div className="link-col">
              <div className="col-tick">
                <div className="tick-line" />
                <h4>Navigation</h4>
              </div>
              {["Engine", "Interface", "Security", "Services"].map(l => (
                <a key={l} className="footer-link">{l}</a>
              ))}
            </div>

            {/* Connect */}
            <div className="link-col">
              <div className="col-tick">
                <div className="tick-line" />
                <h4>Connect</h4>
              </div>
              {["Instagram", "LinkedIn", "Twitter / X", "Dribbble"].map(l => (
                <a key={l} className="footer-link">{l}</a>
              ))}
            </div>

            {/* Inquiries */}
            <div className="link-col">
              <div className="col-tick">
                <div className="tick-line" />
                <h4>Inquiries</h4>
              </div>
              <a href="mailto:hello@itzfizz.com" className="footer-email">
                hello@itzfizz.com
              </a>
              <p className="footer-coords">
                N 40.7128°<br />W 74.0060°
              </p>
            </div>

          </div>

          {/* Big title */}
          <div className="footer-title-wrap">
            <h2 className="footer-title">ITZFIZZ</h2>
            <div className="footer-title-overlay" />
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="status-pill">
              <div className="status-dot" />
              <span className="status-text">All Systems Operational</span>
            </div>

            <div className="bottom-right">
              <span className="bottom-copy">© 2024 ITZFIZZ Labs</span>
              <button className="back-top" onClick={scrollToTop}>
                Back to top ↑
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
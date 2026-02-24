export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background-color: #020205;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-title {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(1rem, 5vw, 12rem);
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 0.8;
          /* Shiny metal effect */
          background: linear-gradient(180deg, #fff 0%, #333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        /* Light sweep effect across the big text */
        .footer-title::after {
          content: 'ITZFIZZ';
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,242,255,0.2), transparent);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          animation: sweep 6s linear infinite;
        }

        @keyframes sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .link-group a {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #555;
          transition: all 0.3s ease;
        }

        .link-group a:hover {
          color: #00f2ff;
          letter-spacing: 0.4em;
          transform: translateX(5px);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #00f2ff;
          border-radius: 50%;
          box-shadow: 0 0 10px #00f2ff;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>

      <footer className="footer-root relative pt-32 pb-12 px-10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-1">
              <p className="text-white font-black text-xl mb-4 italic">iF.</p>
              <p className="text-zinc-600 text-[10px] leading-relaxed tracking-widest uppercase">
                Engineering digital <br/> supremacy since 2024.
              </p>
            </div>

            <div className="link-group flex flex-col gap-4">
              <h4 className="text-[9px] text-zinc-800 font-bold uppercase tracking-[0.5em] mb-2">Navigation</h4>
              <a href="#">Engine</a>
              <a href="#">Interface</a>
              <a href="#">Security</a>
            </div>

            <div className="link-group flex flex-col gap-4">
              <h4 className="text-[9px] text-zinc-800 font-bold uppercase tracking-[0.5em] mb-2">Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter/X</a>
            </div>

            <div className="link-group flex flex-col gap-4 md:items-end">
              <h4 className="text-[9px] text-zinc-800 font-bold uppercase tracking-[0.5em] mb-2 text-right">Inquiries</h4>
              <a href="mailto:hello@itzfizz.com">hello@itzfizz.com</a>
              <p className="text-[10px] text-zinc-700 font-mono mt-4">N 40.7128 / W 74.0060</p>
            </div>
          </div>

          {/* Large Hero Title */}
          <div className="mb-12">
            <h2 className="footer-title">ITZFIZZ</h2>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="status-dot" />
              <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500">
                All Systems Operational
              </span>
            </div>

            <div className="flex gap-10">
              <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-bold">
                © 2024 ITZFIZZ Labs
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 font-bold hover:text-white cursor-pointer transition-colors">
                Back to top ↑
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// export default function HeroV2() {
//   const cards = [
//     { title: "Efficiency", rate: "High", percentage: 98 },
//     { title: "Performance", rate: "Elite", percentage: 90 },
//     { title: "Safety", rate: "5 Star", percentage: 100 },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap');

//         :root {
//           --accent: #ff3c00;
//           --bg: #050505;
//         }
//         .hero-root {
//           font-family: 'DM Sans', sans-serif;
//           background-color: var(--bg);
//           color: white;
//           overflow: hidden;
//         }
//         /* Perspective Grid Animation */
//         .grid-bg {
//           position: absolute;
//           width: 200%;
//           height: 100%;
//           bottom: -50%;
//           left: -50%;
//           background-image: 
//             linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
//           background-size: 60px 60px;
//           transform: perspective(500px) rotateX(60deg);
//           animation: gridMove 20s linear infinite;
//         }

//         @keyframes gridMove {
//           0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
//           100% { transform: perspective(500px) rotateX(60deg) translateY(60px); }
//         }

//         /* Cinematic Glow */
//         .main-glow {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 80vw;
//           height: 50vh;
//           background: radial-gradient(circle, rgba(255,60,0,0.1) 0%, transparent 70%);
//           filter: blur(80px);
//           animation: pulseGlow 8s ease-in-out infinite;
//         }

//         @keyframes pulseGlow {
//           0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
//           50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
//         }

//         .hero-title {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: clamp(6rem, 18vw, 18rem);
//           line-height: 0.8;
//           letter-spacing: -0.02em;
//           text-align: center;
//           margin: 0;
//           background: linear-gradient(to bottom, #fff 40%, #333 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: titleFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
//         }

//         @keyframes titleFade {
//           from { opacity: 0; transform: scale(0.9) translateY(40px); filter: blur(10px); }
//           to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
//         }

//         /* Abstract Corner Brackets */
//         .bracket {
//           position: absolute;
//           width: 40px;
//           height: 40px;
//           border: 1px solid rgba(255,255,255,0.2);
//           transition: all 0.5s ease;
//         }
//         .b-tl { top: 40px; left: 40px; border-right: none; border-bottom: none; }
//         .b-tr { top: 40px; right: 40px; border-left: none; border-bottom: none; }
//         .b-bl { bottom: 40px; left: 40px; border-right: none; border-top: none; }
//         .b-br { bottom: 40px; right: 40px; border-left: none; border-top: none; }

//         /* Scanning Line */
//         .scan {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(to bottom, transparent, rgba(255,60,0,0.05) 50%, transparent 51%);
//           background-size: 100% 4px;
//           z-index: 10;
//           pointer-events: none;
//           opacity: 0.3;
//         }

//         .stat-group {
//           display: flex;
//           gap: 60px;
//           margin-top: 40px;
//           animation: fadeUp 1s ease 0.8s both;
//         }

//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .stat-item {
//           text-align: center;
//           position: relative;
//         }

//         .stat-value {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: 4rem;
//           color: white;
//           line-height: 1;
//         }

//         .stat-label {
//           font-size: 0.7rem;
//           text-transform: uppercase;
//           letter-spacing: 0.4em;
//           color: #666;
//           margin-top: 10px;
//         }

//         .accent-line {
//           height: 2px;
//           background: var(--accent);
//           width: 0;
//           margin: 10px auto;
//           box-shadow: 0 0 10px var(--accent);
//           animation: lineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both;
//         }

//         @keyframes lineGrow {
//           to { width: 100%; }
//         }

//         .btn-kickstart {
//           margin-top: 50px;
//           padding: 15px 40px;
//           background: transparent;
//           border: 1px solid white;
//           color: white;
//           text-transform: uppercase;
//           letter-spacing: 0.5em;
//           font-size: 0.7rem;
//           font-weight: bold;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .btn-kickstart:hover {
//           background: white;
//           color: black;
//           box-shadow: 0 0 30px rgba(255,255,255,0.2);
//         }
//       `}</style>

//       <section className="hero-root relative h-screen">
//         {/* Background Visuals */}
//         <div className="grid-bg" />
//         <div className="main-glow" />
//         <div className="scan" />

//         {/* UI Decorative Brackets */}
//         <div className="bracket b-tl" />
//         <div className="bracket b-tr" />
//         <div className="bracket b-bl" />
//         <div className="bracket b-br" />

//         <div className="relative z-20 h-full flex flex-col items-center justify-center px-10">
          
//           {/* Top Label */}
//           <div className="mb-8 flex items-center gap-4">
//              <div className="h-px w-12 bg-zinc-800"></div>
//              <span className="text-[10px] tracking-[0.8em] text-zinc-500 uppercase">System Active</span>
//              <div className="h-px w-12 bg-zinc-800"></div>
//           </div>

//           {/* Title */}
//           <h1 className="hero-title">ITZFIZZ</h1>
          
//           <p className="tracking-[0.6em] text-zinc-400 text-[10px] uppercase mt-4 mb-8">
//             The New Standard of Performance
//           </p>

//           {/* Stats Section */}
//           <div className="stat-group">
//             {cards.map(({ title, percentage }) => (
//               <div key={title} className="stat-item">
//                 <div className="stat-value">{percentage}%</div>
//                 <div className="accent-line"></div>
//                 <div className="stat-label">{title}</div>
//               </div>
//             ))}
//           </div>

//           {/* Action */}
//           <button className="btn-kickstart">
//             Explore Engineering
//           </button>

//           {/* Bottom Data Labels */}
//           <div className="absolute bottom-12 left-12 flex flex-col gap-2">
//             <span className="text-[8px] text-zinc-600 tracking-widest uppercase italic">Lat: 40.7128° N</span>
//             <span className="text-[8px] text-zinc-600 tracking-widest uppercase italic">Lon: 74.0060° W</span>
//           </div>

//           <div className="absolute bottom-12 right-12">
//             <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-bold">
//               v4.0.2 / 2026
//             </span>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

export default function HeroV2() {
  const cards = [
    { title: "Efficiency", rate: "Optimal", percentage: 98, color: "#00f2ff" },
    { title: "Performance", rate: "Ultra", percentage: 94, color: "#7000ff" },
    { title: "Stability", rate: "Solid", percentage: 100, color: "#ffcc00" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;600;900&display=swap');

        :root {
          --primary: #00f2ff;
          --secondary: #7000ff;
          --accent: #ffcc00;
          --bg: #020205;
        }

        .hero-container {
          background-color: var(--bg);
          font-family: 'Inter', sans-serif;
          color: white;
          perspective: 1000px;
        }

        /* Animated Nebula Background */
        .nebula {
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 242, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(112, 0, 255, 0.15) 0%, transparent 40%);
          filter: blur(100px);
          animation: floatNebula 20s ease-in-out infinite alternate;
        }

        @keyframes floatNebula {
          from { transform: scale(1) translate(0, 0); }
          to { transform: scale(1.2) translate(5%, 5%); }
        }

        /* 3D Moving Floor */
        .floor {
          position: absolute;
          width: 200%;
          height: 100%;
          bottom: -20%;
          left: -50%;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          transform: rotateX(75deg);
          mask-image: linear-gradient(to top, rgba(0,0,0,1), transparent);
          animation: floorMove 10s linear infinite;
        }

        @keyframes floorMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 80px; }
        }

        /* Title Styling with Gradient Mask */
        .main-title {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(4rem, 15vw, 15rem);
          font-weight: 700;
          text-align: center;
          line-height: 0.9;
          letter-spacing: -0.05em;
          background: linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 30px rgba(0, 242, 255, 0.3));
          animation: titleEntrance 1.5s cubic-bezier(0.2, 0, 0.2, 1) both;
        }

        @keyframes titleEntrance {
          0% { opacity: 0; transform: translateY(100px) rotateX(-30deg); filter: blur(20px); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); filter: blur(0); }
        }

        /* Glassmorphism Stat Cards */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 24px;
          min-width: 220px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--primary);
          transform: translateY(-10px) scale(1.02);
        }

        .progress-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 900;
          margin-bottom: 20px;
          position: relative;
        }

        .progress-circle::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid var(--clr);
          clip-path: polygon(0 0, 100% 0, 100% var(--p), 0 var(--p));
        }

        .btn-modern {
          background: white;
          color: black;
          padding: 18px 45px;
          border-radius: 100px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          margin-top: 50px;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .btn-modern:hover {
          gap: 25px;
          background: var(--primary);
          box-shadow: 0 0 40px rgba(0, 242, 255, 0.5);
        }

        .scanning-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          top: 0;
          animation: scanMove 4s linear infinite;
          opacity: 0.5;
        }

        @keyframes scanMove {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>

      <section className="hero-container relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="nebula" />
        <div className="floor" />
        <div className="scanning-line" />

        {/* HUD Elements (Top) */}
        <div className="absolute top-10 left-10 flex items-center gap-4">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Protocol Active</span>
        </div>

        <div className="absolute top-10 right-10 flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Security Level: High</span>
          <div className="w-32 h-px bg-zinc-800 mt-2">
             <div className="w-3/4 h-full bg-cyan-500 shadow-[0_0_5px_#22d3ee]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="main-title">ITZFIZZ</h1>
          
          <p className="mt-6 text-zinc-400 uppercase tracking-[0.8em] text-[11px] font-medium">
            Engineering <span className="text-cyan-400">Superior</span> Intelligence
          </p>

          {/* Stat Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {cards.map(({ title, rate, percentage, color }) => (
              <div key={title} className="glass-card group" style={{ "--clr": color, "--p": `${percentage}%` }}>
                <div className="progress-circle" style={{ color: color }}>
                  {percentage}%
                </div>
                <h3 className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-1">
                  {title}
                </h3>
                <p className="text-xl font-black uppercase italic group-hover:text-cyan-400 transition-colors">
                  {rate}
                </p>
              </div>
            ))}
          </div>

          <button className="btn-modern">
            Initialize System 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Side Text Decors */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
           <span className="text-[9px] uppercase tracking-[1em] text-zinc-700 font-bold">
             Core Engine / v.4029-B
           </span>
        </div>

        <div className="absolute right-6 top-1/2 translate-y-1/2 rotate-90 origin-right">
           <span className="text-[9px] uppercase tracking-[1em] text-zinc-700 font-bold">
             Neural Network Synchronized
           </span>
        </div>

        {/* Bottom Corner Info */}
        <div className="absolute bottom-10 left-10 text-left">
           <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed">
             Process ID: #7729-00<br/>
             Status: Synced
           </p>
        </div>
      </section>
    </>
  );
}
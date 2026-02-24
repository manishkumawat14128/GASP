// function BackgroundTextLayer({
//   text = "CORE ENGINE / V.4029-B",
//   opacity = 0.05,
//   rotate = -45,
//   fontSize = "14px",
//   gap = "60px",
//   speed = 40, // seconds
// }) {
//   const repeatedText = Array(100).fill(text).join("   ");

//   return (
//     <div
//       className="absolute inset-0 overflow-hidden pointer-events-none select-none"
//       style={{ opacity }}
//     >
//       <div
//         className="absolute w-[200%] h-[200%] animate-scrollText"
//         style={{
//           transform: `rotate(${rotate}deg)`,
//           top: "-50%",
//           left: "-50%",
//           animationDuration: `${speed}s`,
//         }}
//       >
//         {Array(window.innerWidth < 640 ? 10 : 20).fill(0).map((_, i) => (
//           <p
//             key={i}
//             className="whitespace-nowrap uppercase font-bold text-white"
//             style={{
//               fontSize,
//               marginBottom: gap,
//               letterSpacing: "0.5em",
//             }}
//           >
//             {repeatedText}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }



// export default function HeroV2() {
//   const cards = [
//     { title: "Efficiency", rate: "Optimal", percentage: 98, color: "#00f2ff" },
//     { title: "Performance", rate: "Ultra", percentage: 94, color: "#7000ff" },
//     { title: "Stability", rate: "Solid", percentage: 100, color: "#ffcc00" },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;600;900&display=swap');

//         :root {
//           --primary: #00f2ff;
//           --secondary: #7000ff;
//           --accent: #ffcc00;
//           --bg: #020205;
//         }

//         .hero-container {
//           background-color: var(--bg);
//           font-family: 'Inter', sans-serif;
//           color: white;
//           perspective: 1000px;
//         }

//         /* Animated Nebula Background */
//         .nebula {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: 
//             radial-gradient(circle at 20% 30%, rgba(0, 242, 255, 0.15) 0%, transparent 40%),
//             radial-gradient(circle at 80% 70%, rgba(112, 0, 255, 0.15) 0%, transparent 40%);
//           filter: blur(100px);
//           animation: floatNebula 20s ease-in-out infinite alternate;
//         }

//         @keyframes floatNebula {
//           from { transform: scale(1) translate(0, 0); }
//           to { transform: scale(1.2) translate(5%, 5%); }
//         }


// @keyframes scrollText {
//   from {
//     transform: translateX(0) rotate(-45deg);
//   }
//   to {
//     transform: translateX(-50%) rotate(-45deg);
//   }

// }

// .animate-scrollText {
//   animation: scrollText linear infinite;
// }

//         /* 3D Moving Floor */
//         .floor {
//           position: absolute;
//           width: 200%;
//           height: 100%;
//           bottom: -20%;
//           left: -50%;
//           background-image: 
//             linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
//           background-size: 80px 80px;
//           transform: rotateX(75deg);
//           mask-image: linear-gradient(to top, rgba(0,0,0,1), transparent);
//           animation: floorMove 10s linear infinite;
//         }

//         @keyframes floorMove {
//           0% { background-position: 0 0; }
//           100% { background-position: 0 80px; }
//         }

//         /* Title Styling with Gradient Mask */
//         .main-title {
//           font-family: 'Syncopate', sans-serif;
//           font-size: clamp(2rem, 12vw, 10rem);
//           font-weight: 700;
//           text-align: center;
//           line-height: 0.9;
//           letter-spacing: -0.05em;
//           background: linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.1) 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           filter: drop-shadow(0 0 30px rgba(0, 242, 255, 0.3));
//           animation: titleEntrance 1.5s cubic-bezier(0.2, 0, 0.2, 1) both;
//         }

//         @keyframes titleEntrance {
//           0% { opacity: 0; transform: translateY(100px) rotateX(-30deg); filter: blur(20px); }
//           100% { opacity: 1; transform: translateY(0) rotateX(0); filter: blur(0); }
//         }

//         /* Glassmorphism Stat Cards */
//         .glass-card {
//           background: rgba(255, 255, 255, 0.03);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           padding: 30px;
//           border-radius: 24px;
//           width: 100%;
//           min-width: 260px;
//           transition: all 0.4s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .glass-card:hover {
//           background: rgba(255, 255, 255, 0.06);
//           border-color: var(--primary);
//           transform: translateY(-10px) scale(1.02);
//         }

//         .progress-circle {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           border: 2px solid rgba(255,255,255,0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.7rem;
//           font-weight: 900;
//           margin-bottom: 20px;
//           position: relative;
//         }

//         .progress-circle::after {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           border-radius: 50%;
//           border: 2px solid var(--clr);
//           clip-path: polygon(0 0, 100% 0, 100% var(--p), 0 var(--p));
//         }

//         .btn-modern {
//           background: white;
//           color: black;
//           padding: 18px 45px;
//           border-radius: 100px;
//           font-weight: 900;
//           text-transform: uppercase;
//           letter-spacing: 0.2em;
//           font-size: 0.75rem;
//           margin-top: 50px;
//           cursor: pointer;
//           border: none;
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           transition: all 0.3s ease;
//         }

//         .btn-modern:hover {
//           gap: 25px;
//           background: var(--primary);
//           box-shadow: 0 0 40px rgba(0, 242, 255, 0.5);
//         }

//         .scanning-line {
//           position: absolute;
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, var(--primary), transparent);
//           top: 0;
//           animation: scanMove 4s linear infinite;
//           opacity: 0.5;
//         }

//         @keyframes scanMove {
//           0% { top: 0; }
//           100% { top: 100%; }
//         }
//       `}</style>

//       {/* <section className="hero-container relative min-h-screen pt-40 md w-full flex flex-col items-center justify-center overflow-hidden"> */}
//       <section className="hero-container relative min-h-screen w-full flex flex-col items-center justify-center px-3 pt-32 md:pt-70 overflow-hidden">
//         {/* Background Layers */}
//         <div className="nebula" />
//         <div className="floor" />
//         <div className="scanning-line" />

//         <BackgroundTextLayer
//           text="CORE ENGINE / V.4029-B"
//           opacity={0.04}
//           rotate={-45}
//           fontSize="12px"
//           gap="80px"
//         />

//         {/* Main Content */}
//         <div className="relative z-20 flex flex-col items">
//           {/* HUD Elements (Top) */}
//           <div className="flex items-center justify-start gap-4 z-20 mb-10">
//             <div className=" flex items-center gap-4">
//               <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
//               <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Protocol Active</span>
//             </div>
//           </div>
//           <h1 className="main-title">ITZFIZZ</h1>

//           <p className="mt-6 text-zinc-400 uppercase tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-[11px] font-medium text-center">
//             {/* <p className="mt-6 text-zinc-400 uppercase tracking-[0.8em] text-[11px] font-medium"> */}
//             Engineering <span className="text-cyan-400">Superior</span> Intelligence
//           </p>

//           {/* HUD Elements (Top) */}
//           <div className="flex items-end justify-end pt-10 gap-4 z-20 mb-10">

//             <div className="flex flex-col items-end align-sub ">
//               <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Security Level: High</span>
//               <div className="w-32 h-px bg-zinc-800 mt-2">
//                 <div className="w-3/4 h-full bg-cyan-500 shadow-[0_0_5px_#22d3ee]" />
//               </div>
//             </div>
//           </div>

//           {/* Stat Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-6 mt-12 md:mt-16 px-4">
//             {/* <div className="flex flex-wrap justify-center gap-6 mt-16 px-6"> */}
//             {cards.map(({ title, rate, percentage, color }) => (
//               <div key={title} className="glass-card group" style={{ "--clr": color, "--p": `${percentage}%` }}>
//                 <div className="progress-circle" style={{ color: color }}>
//                   {percentage}%
//                 </div>
//                 <h3 className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-1">
//                   {title}
//                 </h3>
//                 <p className="text-xl font-black uppercase italic group-hover:text-cyan-400 transition-colors">
//                   {rate}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* Side Text Decors */}
//         <div className="absolute left-6 top-120 -translate-y-1/2 -rotate-90 origin-left">
//           <span className="text-[9px] uppercase tracking-[1em] text-zinc-700 font-bold">
//             Core Engine / v.4029-B
//           </span>
//         </div>

//         <div className="absolute right-6 top-140 translate-y-1/2 rotate-90 origin-right">
//           <span className="text-[9px] uppercase tracking-[1em] text-zinc-700 font-bold">
//             Neural Network Synchronized
//           </span>
//         </div>

//         {/* Bottom Corner Info */}
//         <div className="absolute bottom-10 left-10 text-left">
//           <p className="text-[9px] text-zinc-600 uppercase tracking-widest leading-relaxed">
//             Process ID: #7729-00<br />
//             Status: Synced
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }\\

import { useEffect, useState } from "react";

function BackgroundTextLayer({ text = "CORE ENGINE / V.4029-B", opacity = 0.04, speed = 55 }) {
  const repeatedText = Array(60).fill(text).join("   ");
  const [rows, setRows] = useState(18);
  useEffect(() => {
    const update = () => setRows(window.innerWidth < 640 ? 8 : 18);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", userSelect:"none", opacity }}>
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

      <section className="hero-root">
        {/* Atmosphere */}
        <div className="orb-left" />
        <div className="orb-right" />
        <div className="floor" />
        <div className="scan" />
        <BackgroundTextLayer />

        {/* Corner ticks */}
        <div className="corner tl" /><div className="corner tr" />
        <div className="corner bl" /><div className="corner br" />

        {/* Side rails */}
        <span className="side-rail left">Core Engine / v.4029-B</span>
        <span className="side-rail right">Neural Network Synchronized</span>

        {/* Content */}
        <div className="content">

          {/* HUD bar */}
          <div className="hud-bar">
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

          {/* Version badge */}
          <div className="version-badge">
            <div className="badge-dot" />
            <span>v.4029-B · System Online</span>
          </div>

          {/* Title */}
          <h1 className="main-title">ITZFIZZ</h1>

          {/* Divider */}
          <div className="divider" />

          {/* Subtitle */}
          <p className="subtitle">
            Engineering <em>Superior</em> Intelligence
          </p>

          {/* Cards */}
          <div className="cards-row">
            {cards.map(({ title, rate, percentage, color }, i) => (
              <StatCard key={title} title={title} rate={rate} percentage={percentage} color={color} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom meta */}
        <div className="bottom-meta"><p>Process ID: #7729-00<br />Status: Synced</p></div>
        <div className="bottom-right"><p>Lat 00°00′N<br />Lon 00°00′E</p></div>
      </section>
    </>
  );
}
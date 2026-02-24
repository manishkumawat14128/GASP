import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function CardGrid({ imglink, title, category }) {
  const cardRef = useRef();

  return (
    <div 
      ref={cardRef}
      className="portfolio-item relative group w-full max-w-5xl mx-auto mb-40 cursor-pointer"
    >
      {/* Layer 1: Deep Black Shadow (Bottom) */}
      <div className="absolute inset-0 bg-black rounded-[3rem] translate-x-6 translate-y-6 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out" />
      
      {/* Layer 2: White Border Frame (Middle) */}
      <div className="absolute inset-0 bg-white border-4 border-black rounded-[3rem] translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500 ease-out delay-75" />
      
      {/* Layer 3: Main Content (Top) */}
      <div className="relative bg-white p-4 md:p-6 rounded-[3rem] border-4 border-black overflow-hidden shadow-2xl">
        <div className="relative overflow-hidden rounded-[2rem] aspect-[16/9]">
          <img 
            src={imglink} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            alt="portfolio" 
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <button className="bg-[#F9E44C] text-black font-black px-8 py-4 rounded-full border-2 border-black -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
               VIEW PROJECT ↗
             </button>
          </div>
        </div>

        {/* Footer info inside card */}
        <div className="flex justify-between items-center mt-6 px-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{category}</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">{title}</h3>
          </div>
          <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-[#F9E44C] transition-colors">
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardGridContainer() {
  const containerRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    // 1. Marquee Background Text Animation
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

    // 2. Staggered Card Entrance
    gsap.from(".portfolio-item", {
      y: 150,
      opacity: 0,
      rotate: 5,
      stagger: 0.3,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  const projects = [
    { title: "Lama Designs", category: "Interior / 2024", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
    { title: "Cyber Engine", category: "Web3 / 2024", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" },
    { title: "Neon Velocity", category: "App / 2023", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <section 
      ref={containerRef} 
      className="bg-[#F9E44C] py-40 px-6 relative overflow-hidden border-t-8 border-black"
    >
      {/* Parallax Background Text */}
      <div className="absolute top-20 left-0 w-full opacity-20 pointer-events-none select-none">
        <h2 
          ref={textRef}
          className="text-[30vw] font-black whitespace-nowrap leading-none text-black/20 italic"
          style={{ WebkitTextStroke: '2px black', color: 'transparent' }}
        >
          SELECTED WORK SELECTED WORK SELECTED WORK
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <h4 className="text-black font-bold uppercase tracking-[0.5em] text-xs mb-4">The Portfolio</h4>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] text-black tracking-tighter">
            PROVING OUR <br/> <span className="text-white">IMPACT</span>.
          </h2>
        </div>

        {/* The Grid */}
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <CardGrid 
              key={i} 
              title={p.title} 
              category={p.category} 
              imglink={p.img} 
            />
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center mt-10">
          <button className="bg-black text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-black">
            VIEW ALL PROJECTS (12)
          </button>
        </div>
      </div>
    </section>
  );
}
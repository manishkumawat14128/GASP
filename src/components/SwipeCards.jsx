import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function SwipeCard({ title, description, subText, btnText, imglink, index }) {
  return (
    <div className="card-item shrink-0 w-[85vw] md:w-[75vw] h-[70vh] bg-white border-2 border-black rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      
      {/* Background Number Ornament */}
      <span className="absolute -top-10 -right-5 text-[20rem] font-black text-zinc-50 opacity-[0.03] select-none pointer-events-none">
        0{index + 1}
      </span>

      <div className="flex-1 flex flex-col justify-center text-left z-10">
        <h2 className="text-4xl md:text-7xl font-black uppercase text-black mb-6 leading-none tracking-tighter">
          {title}
        </h2>
        <p className="text-zinc-500 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col items-start">
          <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 border-l-2 border-[#F9E44C] pl-4">
            {subText}
          </p>
          <button className="group relative px-10 py-5 bg-[#F9E44C] text-black font-black uppercase tracking-widest rounded-full border-2 border-black transition-all hover:bg-black hover:text-white active:scale-95">
            {btnText}
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>

      <div className="flex-1 w-full h-full flex items-center justify-center z-10">
        <img 
          src={imglink} 
          className="w-full max-h-100 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700" 
          alt="service" 
        />
      </div>
    </div>
  );
}

export default function SwipeCardsContainer() {
  const scrollRef = useRef();
  const triggerRef = useRef();

  useGSAP(() => {
    // HORIZONTAL SCROLL LOGIC
    // As the user scrolls vertically (down), the cards move horizontally (left)
    const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

    gsap.to(scrollRef.current, {
      x: -totalWidth - 100, // Move left
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1.5, // Smooth interpolation like the Hero car
        pin: true,  // Keeps the section on screen
        anticipatePin: 1,
      }
    });

    // Animate the "EXPERIENCE" background text
    gsap.to(".bg-text", {
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
      subText: "Phase 01: Visual Engineering",
      btnText: "Explore Design",
      imglink: "https://ouch-cdn2.icons8.com/6Uq6e7_j1z7T4K5g9T5m3fF3h7_F3y8hY7v3Z3-4-0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzI3/LzYyZGYwYjM0LTgx/YjMtNDM0Yy04YjZk/LTc0NDYyMGI0YjZk/NC5zdmc.png"
    },
    {
      title: "Motion Ops",
      description: "Bringing websites to life with fluid GSAP engines and scroll-driven storytelling.",
      subText: "Phase 02: Dynamic Interaction",
      btnText: "View Motion",
      imglink: "https://ouch-cdn2.icons8.com/mS9xT-T_z77m_Y_t7F7-C1K-vN4oY8p_B6Y_n_9_Y/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUv/YjFkMGY5ZGYtN2Y0/Mi00N2I5LThmNDUt/ZmE5MGE5YjYyZDUz/LnN2Zw.png"
    },
    {
      title: "Full Stack",
      description: "Scalable React architectures built for speed, SEO, and massive user growth.",
      subText: "Phase 03: Core Development",
      btnText: "Check Stack",
      imglink: "https://ouch-cdn2.icons8.com/mH_5-Xn4vF8r0TzDq6zH8V7Z_p_pU_v_v_v_v_v_v_v_v/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODgx/LzM1ZDk5ZGY0LWE3/NjctNDQ5My1hN2Vl/LTU1ZDk5ZGY0Yjc3/Ny5zdmc.png"
    }
  ];

  return (
    <section ref={triggerRef} className="bg-[#F8F8F8] overflow-hidden relative">
      
      {/* Moving Background Text */}
      <div className="bg-text absolute top-20 left-10 opacity-[0.03] whitespace-nowrap pointer-events-none">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter">EXPERIENCE EXPERIENCE</h2>
      </div>

      {/* The Sticky Container */}
      <div className="h-screen flex items-center px-[5vw]">
        <div ref={scrollRef} className="flex gap-20 items-center">
          
          {/* Section Introduction */}
          <div className="shrink-0 w-[40vw] pr-20">
            <h3 className="text-zinc-400 font-bold uppercase tracking-[0.5em] text-xs mb-4">What we do</h3>
            <h2 className="text-6xl font-black uppercase leading-none text-black">
              Premium <br/> Solutions <br/> for <span className="text-[#F9E44C] outline-text">Leaders</span>.
            </h2>
          </div>

          {/* Map through Service Cards */}
          {services.map((service, index) => (
            <SwipeCard key={index} index={index} {...service} />
          ))}

          {/* End Spacing */}
          <div className="shrink-0 w-[10vw]"></div>
        </div>
      </div>
    </section>
  );
}
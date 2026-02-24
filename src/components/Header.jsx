import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-6 left-0 w-full z-100 px-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex items-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] h-16 overflow-hidden">
        
        {/* Logo Section */}
        <div className="flex items-center px-8 h-full border-r border-white/5">
          <span className="text-white font-black text-2xl tracking-tighter hover:text-cyan-400 transition-colors cursor-pointer">
            iTZFiZZ
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center h-full grow">
          <a href="#" className="bg-white text-black h-full flex items-center px-8 font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all">
            Home
          </a>
          
          <div className="flex items-center gap-8 px-10">
            {["Services", "Resources", "Contact"].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-white hover:tracking-[0.4em] transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </nav>

        {/* Action Button */}
        <div className="flex items-center px-6">
          <button className="bg-cyan-500 hover:bg-white text-black px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-white">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
"use client";
import React, { useState, useEffect } from "react";

export default function PremiumPortfolio() {
  const [time, setTime] = useState("");

  // Running Clock Logic like Huly Dashboard Footer
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050508] text-neutral-200 overflow-hidden huly-grid antialiased">
      
      {/* Dynamic Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Moving Light Beam Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-beam" />
      </div>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-[#050508]/70 backdrop-blur-md px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-wider text-white">
          HAXIZ<span className="text-cyan-400">.DEV</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Stack</a>
          <a href="#contact" className="hover:text-white transition">Connect</a>
        </nav>
        <a href="#contact" className="px-4 py-1.5 rounded-full border border-neutral-800 text-xs bg-neutral-900/50 hover:border-cyan-500/50 text-neutral-300 hover:text-white transition duration-300">
          Get in Touch
        </a>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 px-6 text-center max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Available for High-Tier Deployments
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
          Hi, I am <span className="text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">Haxiz Dev</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          I architecture production-ready Web Platforms, optimized Python Applications, and robust local deployment management layouts.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Explore Work Dashboard
          </a>
        </div>
      </section>

      {/* --- INTERACTIVE PROJECT SHOWCASE (BENTO PREVIEW GRID) --- */}
      <section id="projects" className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white tracking-wide">Featured Implementations</h2>
          <p className="text-neutral-500 text-sm mt-1">Live embedded application layouts and state views.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Card: MilkPapsi Core Management System */}
          <div className="md:col-span-2 group relative rounded-2xl border border-neutral-800/60 bg-[#0b0b10]/60 p-6 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400">SYSTEM APP // ACTIVE</span>
                <h3 className="text-xl font-bold text-white mt-1">MilkPapsi Business Engine</h3>
              </div>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-800" />
                <span className="w-3 h-3 rounded-full bg-neutral-800" />
                <span className="w-3 h-3 rounded-full bg-cyan-500/40" />
              </div>
            </div>
            
            {/* IN-SITE INTERACTIVE CONTAINER PREVIEW (Huly Style) */}
            <div className="w-full bg-[#050508] border border-neutral-900 rounded-xl p-4 font-mono text-xs text-neutral-400 shadow-inner">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-2 mb-3 text-neutral-500">
                <span>📦 System Dashboard</span>
                <span className="text-emerald-400">● Live Connection</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-neutral-900/50 pb-1">
                  <span>Current Business Operations Node:</span>
                  <span className="text-white font-bold">Domestic Inventory System</span>
                </div>
                <div className="flex justify-between border-b border-neutral-900/50 pb-1">
                  <span>Ledger State Management:</span>
                  <span className="text-cyan-400 font-semibold">Automatic Update Protocol Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span>Core Architecture Layout:</span>
                  <span className="text-purple-400">Tailwind Hybrid Framework Module</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Custom-engineered system layout to optimize processing speed and transaction ledgers for family business workflows.
            </p>
          </div>

          {/* Card 2: E-Commerce Store Module */}
          <div className="group relative rounded-2xl border border-neutral-800/60 bg-[#0b0b10]/60 p-6 backdrop-blur-sm overflow-hidden hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
            <span className="text-xs font-mono text-indigo-400">E-COMMERCE UTILITY</span>
            <h3 className="text-lg font-bold text-white mt-1">Shopping Platform UI</h3>
            
            <div className="my-5 p-4 bg-gradient-to-br from-neutral-900 to-[#0c0c14] rounded-xl border border-neutral-900 text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-2 text-white font-bold">🛒</div>
              <span className="text-xs text-white block font-medium">Digital Hub Checkout</span>
              <span className="text-[10px] text-neutral-500 block mt-1">Stripe Mocked Node Setup</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              High-fidelity prototype mapping asynchronous state workflows and complete transaction management frameworks.
            </p>
          </div>

          {/* Card 3: School Computer Lab Quiz System */}
          <div className="md:col-span-3 group relative rounded-2xl border border-neutral-800/60 bg-[#0b0b10]/60 p-6 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400">HYBRID LOGIC ARCHITECTURE (PYTHON & WEB)</span>
                <h3 className="text-xl font-bold text-white mt-1">Multi-Environment Quiz Infrastructure</h3>
                <p className="text-sm text-neutral-400 mt-2 max-w-2xl">
                  Dual-tier layout built intentionally for school computer networks. Features a standard native local Python processing console alongside an accessible responsive web application layout interface.
                </p>
              </div>
              
              {/* Terminal View Component */}
              <div className="w-full md:w-64 bg-black rounded-lg p-3 border border-neutral-900 font-mono text-[11px] shrink-0 text-emerald-500 shadow-2xl">
                <div className="text-neutral-600 mb-1">$ python3 quiz_system.py</div>
                <div>[✔] Fetching Evaluation Nodes...</div>
                <div>[✔] School Client Socket Connected</div>
                <div className="text-white mt-1">Score Engine Status: 100% OK</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER & HULY CUSTOM RUNNING CLOCK --- */}
      <footer id="contact" className="border-t border-neutral-900 bg-[#030305]/80 py-12 px-6 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-lg font-bold text-white mb-2">HAXIZ DEV ARCHIVE</div>
            <p className="text-xs text-neutral-500">Designed with modern visual aesthetics inspired by Huly layouts.</p>
          </div>
          
          {/* Dynamic Modern Clock System Module */}
          <div className="flex items-center gap-4 bg-[#0a0a0f] border border-neutral-800 px-6 py-3 rounded-xl shadow-2xl">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </div>
            <div className="font-mono text-sm tracking-widest text-neutral-300">
              UTC NODE TIME: <span className="text-white font-bold">{time || "00:00:00"}</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

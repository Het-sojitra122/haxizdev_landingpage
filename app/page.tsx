"use client";
import React, { useState, useEffect } from "react";

export default function UltimateHulyPortfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [angles, setAngles] = useState({ hour: 0, minute: 0, second: 0 });

  // Mechanical Core Live Sync
  useEffect(() => {
    const runClockEngine = () => {
      const now = new Date();
      const s = now.getSeconds();
      const m = now.getMinutes();
      const h = now.getHours();

      setAngles({
        second: s * 6,
        minute: m * 6 + s * 0.1,
        hour: (h % 12) * 30 + m * 0.5,
      });
    };

    runClockEngine();
    const interval = setInterval(runClockEngine, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleGatewayConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setIsSubmitted(true);
    
    // Direct Secure Client Mail Tunnel Launch
    window.location.href = `mailto:haxizdev@gmail.com?subject=Workspace Collaboration&body=Client Node: ${email}%0AMessage Stream: ${msg}`;
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setMsg("");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#020204] text-[#f1f5f9] overflow-x-hidden font-sans antialiased selection:bg-cyan-500/40 pb-12">
      
      {/* --- INDUSTRIAL HIGH-DENSITY RADAR GRID MESH --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d0d14_1px,transparent_1px),linear-gradient(to_bottom,#0d0d14_1px,transparent_1px)] bg-[size:40px_40px] opacity-90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_10%,#020204_80%)] z-0 pointer-events-none" />

      {/* --- 3D AMBIENT LIQUID NEON GRADIENT GLOWS --- */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-cyan-500/15 via-purple-500/10 to-indigo-500/15 blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[-20%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-20%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* --- APPLICATION CONTROL BAR (NAV) --- */}
      <header className="sticky top-0 z-50 border-b border-[#12121a] bg-[#020204]/70 backdrop-blur-2xl px-6 py-3.5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center font-black text-xs text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            H
          </div>
          <span className="text-sm font-black tracking-widest text-white">HAXIZ<span className="text-cyan-400">.DEV</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-1.5 bg-[#07070b] border border-[#14141f] px-2 py-1 rounded-lg font-mono text-[10px] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>SERVER NODE: ONLINE</span>
          <span className="text-[#333] mx-1">|</span>
          <span className="text-indigo-400">v1.2.0 stable</span>
        </div>

        <a href="#secure-contact-gate" className="px-4 py-1.5 rounded-lg border border-[#1c1c2b] bg-[#07070b] hover:border-cyan-400/50 text-xs font-mono font-medium tracking-wide transition duration-300 shadow-md">
          INITIALIZE_COMM
        </a>
      </header>

      {/* --- CINEMATIC HERO HERO INTERFACE --- */}
      <section className="relative pt-24 pb-20 px-4 text-center max-w-5xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[10px] font-mono tracking-widest mb-8 uppercase">
          ✦ System Architecture Dashboard Layer ✦
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[0.95]">
          DIGITAL ARCHITECT <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            WEB & PYTHON UTILITIES
          </span>
        </h1>
        
        <p className="mt-8 text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Hi, I am <span className="text-white font-semibold">Haxiz Dev</span>. I prototype industrial system environments, secure automation engines, and construct modular layout wrappers using high-fidelity code matrices.
        </p>

        {/* Dynamic Navigation Filter Tabs like Huly Workspace */}
        <div className="mt-12 flex justify-center gap-1.5 max-w-md mx-auto p-1 bg-[#06060a] border border-[#12121a] rounded-xl font-mono text-[11px] shadow-2xl">
          <button onClick={() => setActiveTab("all")} className={`flex-1 py-2 rounded-lg transition-all duration-300 ${activeTab === "all" ? "bg-[#11111a] text-cyan-400 border border-[#1c1c2b] shadow-md" : "text-neutral-500 hover:text-neutral-300"}`}>ALL_ENGINES</button>
          <button onClick={() => setActiveTab("web")} className={`flex-1 py-2 rounded-lg transition-all duration-300 ${activeTab === "web" ? "bg-[#11111a] text-cyan-400 border border-[#1c1c2b] shadow-md" : "text-neutral-500 hover:text-neutral-300"}`}>WEB_APPS</button>
          <button onClick={() => setActiveTab("python")} className={`flex-1 py-2 rounded-lg transition-all duration-300 ${activeTab === "python" ? "bg-[#11111a] text-cyan-400 border border-[#1c1c2b] shadow-md" : "text-neutral-500 hover:text-neutral-300"}`}>PYTHON_SYSTEMS</button>
        </div>
      </section>

      {/* --- HIGH-END GLASSMORPHISM BENTO SHOWCASE --- */}
      <section id="workspace-grid" className="py-8 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: MILK PAPSI CORE (Enterprise Glass Look) */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="md:col-span-2 group relative rounded-2xl border border-[#14141f] bg-[#07070c]/50 p-6 md:p-8 backdrop-blur-md overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.06)] transition-all duration-500">
              <div className="flex items-center justify-between border-b border-[#12121a] pb-4 mb-5">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">Active Node // Enterprise</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2">MilkPapsi Business Engine</h3>
                </div>
              </div>

              {/* Embedded UI Terminal Screen */}
              <div className="w-full bg-black/60 border border-[#12121a] rounded-xl p-4 font-mono text-xs text-neutral-400 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[#0d0d14] pb-2 mb-3 text-[10px] text-neutral-500">
                  <span>📊 INVENTORY_CONTROLLER_SYSTEM</span>
                  <span className="text-cyan-400 font-bold animate-pulse">● FEED_LIVE</span>
                </div>
                <div className="space-y-1.5 text-[11px] sm:text-xs">
                  <div className="flex justify-between border-b border-neutral-900/40 pb-1">
                    <span className="text-neutral-500">Core Node Target:</span>
                    <span className="text-white">Domestic Commercial Ledger</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-900/40 pb-1">
                    <span className="text-neutral-500">Processing State:</span>
                    <span className="text-emerald-400">Automated Asynchronous Storage Sync</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                A custom-built business operations interface designed to map delivery patterns, audit ledger data streams, and stabilize transactional inventory logs for home-business scale logistics.
              </p>
            </div>
          )}

          {/* CARD 2: E-COMMERCE TECH GATE */}
          {(activeTab === "all" || activeTab === "web") && (
            <div className="group relative rounded-2xl border border-[#14141f] bg-[#07070c]/50 p-6 backdrop-blur-md overflow-hidden hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.06)] transition-all duration-500">
              <span className="text-[9px] font-mono tracking-widest text-indigo-400 uppercase bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20">Architecture Suite</span>
              <h3 className="text-xl font-bold text-white mt-2 tracking-tight">Shopping UI Matrix</h3>
              
              <div className="my-5 p-5 bg-black/40 rounded-xl border border-[#12121a] text-center relative group-hover:border-indigo-500/20 transition duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-2 shadow-xl">
                  <span className="text-base">🛍️</span>
                </div>
                <span className="text-xs text-white block font-mono">Checkout State Node</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-fidelity full-stack e-commerce architecture wrapper mapping synchronous state pipelines, multi-layer card data filters, and smooth visual animations.
              </p>
            </div>
          )}

          {/* CARD 3: HIGH-SCHOOL LAB UTILITY INFRASTRUCTURE */}
          {(activeTab === "all" || activeTab === "python" || activeTab === "web") && (
            <div className="md:col-span-3 group relative rounded-2xl border border-[#14141f] bg-[#07070c]/50 p-6 md:p-8 backdrop-blur-md overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] transition-all duration-500">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">Lab Automation Suite</span>
                  <h3 className="text-2xl font-bold text-white mt-2 tracking-tight">Multi-Platform Evaluation Suite</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed max-w-2xl">
                    Dual-tier custom network setup engineered and fully deployed across institutional terminal hardware. Merges a native system Python computational backend console with an interactive client web view layer.
                  </p>
                </div>
                
                {/* Simulated Linux Terminal */}
                <div className="w-full lg:w-80 bg-black/80 rounded-xl p-4 border border-[#12121a] font-mono text-[11px] text-emerald-400 shadow-2xl shrink-0">
                  <div className="text-neutral-600 mb-1">$ python3 laboratory_quiz.py</div>
                  <div>[SYS] Scanning Network Nodes...</div>
                  <div className="text-white font-bold mt-1">[OK] Sockets Operational: 100% Valid</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* --- INDUSTRIAL RADAR FOOTER INTERACTIVE CONTROL --- */}
      <footer id="secure-contact-gate" className="border-t border-[#12121a] bg-[#040407]/90 py-16 px-4 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-6">
            <div>
              <div className="text-base font-black text-white tracking-widest uppercase font-mono">
                HAXIZ DEV ARCHIVE CONTROL LAYER
              </div>
              <p className="text-xs text-neutral-500 mt-2 font-mono max-w-md leading-relaxed">
                Telemetry node connection portal mapped deliberately to integrate glass textures and complex 3D minimal mechanical components.
              </p>
            </div>
            
            {/* --- VIDEO LEVEL: ADVANCED INDUSTRIAL ANIMATED ANALOG WATCH WIDGET --- */}
            <div className="flex items-center gap-6 bg-gradient-to-br from-[#0c0c14] to-[#06060a] border border-[#1c1c2b] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
              {/* Internal Cyan Linear Track Stripe */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-indigo-500" />
              
              {/* Glassmorphic Mechanical Watch Dial face */}
              <div className="relative w-16 h-16 rounded-full border border-neutral-800/80 bg-black/40 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500">
                {/* Premium Glass reflection glaze */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
                
                {/* Radial Micro ticks markings inside clock */}
                <div className="absolute inset-1 rounded-full border border-dashed border-neutral-900 opacity-60 pointer-events-none" />
                
                {/* Central Copper core dot anchor */}
                <div className="w-2 h-2 rounded-full bg-white border border-cyan-400 z-30 shadow-[0_0_8px_rgba(34,211,238,1)]" />
                
                {/* Hour Hand Stick */}
                <div 
                  className="absolute w-0.5 h-4 bg-neutral-400 origin-bottom rounded-full"
                  style={{ transform: `rotate(${angles.hour}deg)`, bottom: "50%", transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 1)" }}
                />
                {/* Minute Hand Stick */}
                <div 
                  className="absolute w-0.5 h-6 bg-neutral-200 origin-bottom rounded-full"
                  style={{ transform: `rotate(${angles.minute}deg)`, bottom: "50%", transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 1)" }}
                />
                {/* Second Sweeper Needle (Electric neon glow action) */}
                <div 
                  className="absolute w-[1px] h-7 bg-cyan-400 origin-bottom shadow-[0_0_10px_rgba(34,211,238,1)]"
                  style={{ transform: `rotate(${angles.second}deg)`, bottom: "50%" }}
                />
              </div>

              {/* Readout Data Terminal panel */}
              <div className="font-mono">
                <span className="text-[9px] text-neutral-600 block tracking-widest uppercase font-bold">Chronograph Status</span>
                <span className="text-neutral-300 font-extrabold tracking-wider text-sm sm:text-base block">
                  UTC SYNC // <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    {angles.hour ? `${Math.floor(angles.hour/30).toString().padStart(2, '0')}:${Math.floor(angles.minute/6).toString().padStart(2, '0')}` : "CALIBRATING"}
                  </span>
                </span>
                <span className="text-[9px] text-emerald-400 block mt-0.5 tracking-wide">SYSTEM_CLOCK_SYNCHRONIZED</span>
              </div>
            </div>
          </div>

          {/* --- ADVANCED TWO-FIELD CONTACT TERMINAL PIPELINE --- */}
          <form onSubmit={handleGatewayConnect} className="w-full lg:w-[460px] bg-[#07070c]/90 border border-[#14141f] rounded-2xl p-6 md:p-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-4 hover:border-indigo-500/20 transition-all duration-300">
            <div>
              <span className="font-mono text-[9px] text-cyan-400 block tracking-widest">// COMPUTE_COMM_TUNNEL</span>
              <h4 className="text-lg font-black text-white tracking-tight mt-1">Open Connection Channel</h4>
            </div>
            
            <div className="space-y-3">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter connection gateway: client@domain.com" 
                className="w-full bg-black/50 border border-[#14141f] rounded-xl px-4 py-3 font-mono text-xs text-neutral-200 outline-none focus:border-cyan-400 focus:bg-black transition-all duration-300"
              />
              
              <textarea 
                required
                rows={3}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Describe deployment parameters or collaboration details..." 
                className="w-full bg-black/50 border border-[#14141f] rounded-xl px-4 py-3 font-mono text-xs text-neutral-200 outline-none focus:border-cyan-400 focus:bg-black transition-all duration-300 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-mono font-black text-xs tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >
              {isSubmitted ? "ROUTING DATA LOGS..." : "INITIALIZE_SECURE_CONNECT"}
            </button>
            
            <span className="text-[10px] font-mono text-neutral-600 block text-center leading-tight">
              Data packages are safely structured and piped into direct mail network arrays.
            </span>
          </form>

        </div>
      </footer>

    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioOwner } from '../data/portfolioData';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background Elliptical Orbit Line (from inspiration video) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-40">
        <div className="w-[1200px] h-[650px] rounded-[100%] border border-[#6A3279]/15 -rotate-6 transform scale-110" />
      </div>

      {/* Top Orbit Pill Indicator */}
      <div className="relative z-10 w-full flex justify-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 border border-[#1E1026]/10 text-[#6A3279] font-mono text-[11px] uppercase tracking-widest shadow-xs backdrop-blur-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          AI Automation Systems & Pipelines with Ukezi Ebenezer
        </motion.div>
      </div>

      {/* Giant Ghosted Name Watermark Spanning Background Canvas */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <span 
          className="font-drama font-bold text-[18vw] leading-none text-[#1E1026]/[0.035] tracking-tight whitespace-nowrap italic"
        >
          Ukezi Ebenezer
        </span>
      </div>

      {/* Main Hero Grid Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
        
        {/* Left Editorial Text Column (desktop: 4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col items-start text-left order-2 lg:order-1"
        >
          <span className="font-mono text-[11px] text-[#6A3279] uppercase tracking-[0.2em] font-semibold mb-3">
            PRACTICAL AI. MEASURABLE OUTCOMES.
          </span>

          <h1 className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-[1.05] tracking-tight">
            I Engineer & Automate <span className="italic text-[#6A3279]">Intelligent Systems.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#1E1026]/75 mt-4 leading-relaxed max-w-md">
            Connecting CRMs, AI models, and communication platforms into self-running business processes. I replace manual bottlenecks with scalable, production-ready workflows in days, not weeks.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={() => onScrollToSection('projects')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E1026] text-[#FAF7F2] font-sans text-[13px] font-semibold tracking-wide hover:bg-[#321740] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer"
            >
              Explore Automations
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onScrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1E1026]/20 hover:border-[#6A3279] text-[#1E1026] hover:text-[#6A3279] font-sans text-[13px] font-semibold tracking-wide transition-all duration-300 hover:bg-black/[0.02] cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </motion.div>

        {/* Centerpiece: Framed Luxury Portrait with Overlapping Tilted Cards (desktop: 5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0">
          
          {/* Main Portrait Card (with dark luxury plum vignette) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] rounded-[2.5rem] p-3 luxury-card-dark overflow-hidden flex flex-col justify-end group shadow-[0_30px_70px_-20px_rgba(30,16,38,0.35)]"
          >
            {/* Portrait Image (Using supplied personal photograph without alteration) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2.2rem]">
              <img
                src="/ukezi-photo.png"
                alt="Ukezi Ebenezer — AI Automation Specialist"
                loading="eager"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtle gradient vignette to blend portrait seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D23] via-[#1A0D23]/30 to-transparent opacity-85" />
            </div>

            {/* Bottom Corner Overlays on Portrait */}
            <div className="relative z-10 w-full flex items-end justify-between p-4 bg-gradient-to-t from-[#160B1C]/90 to-transparent rounded-b-[2rem]">
              <div className="flex flex-col text-left">
                <span className="font-drama text-xl font-bold text-[#FAF7F2] tracking-wide">
                  Ukezi Ebenezer
                </span>
                <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase">
                  AI Automation Specialist
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#FAF7F2]/60 uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                B.Sc. CompSci
              </span>
            </div>
          </motion.div>

          {/* Floating Tilted Micro-Card 01 (Top-Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -20, rotate: -8 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -4 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="hidden sm:flex absolute -top-4 -left-8 md:-left-12 z-20 w-44 p-2.5 bg-white rounded-2xl shadow-xl border border-[#1E1026]/08 flex-col cursor-pointer transition-shadow"
            onClick={() => onScrollToSection('projects')}
          >
            <div className="w-full h-24 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                alt="n8n Pipeline preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1026]/10" />
            </div>
            <div className="flex items-center justify-between mt-2 px-1">
              <span className="font-mono text-[10px] font-semibold text-[#1E1026] tracking-wider uppercase">
                01 / PIPELINES
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6A3279]" />
            </div>
          </motion.div>

          {/* Floating Tilted Micro-Card 02 (Bottom-Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 30, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="hidden sm:flex absolute -bottom-6 -right-6 md:-right-10 z-20 w-44 p-2.5 bg-white rounded-2xl shadow-xl border border-[#1E1026]/08 flex-col cursor-pointer transition-shadow"
            onClick={() => onScrollToSection('projects')}
          >
            <div className="w-full h-24 rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400"
                alt="AI Agent preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1026]/10" />
            </div>
            <div className="flex items-center justify-between mt-2 px-1">
              <span className="font-mono text-[10px] font-semibold text-[#1E1026] tracking-wider uppercase">
                02 / AI AGENTS
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6A3279]" />
            </div>
          </motion.div>

          {/* Small Arched Pill Badge (Bottom-Center Starburst) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -bottom-5 left-8 z-30 px-3.5 py-2 bg-[#FAF7F2] rounded-full border border-[#1E1026]/12 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            </div>
            <span className="font-mono text-[10px] font-bold text-[#1E1026] tracking-wide uppercase">
              03 / 80% TIME SAVED ↗
            </span>
          </motion.div>

        </div>

        {/* Right Editorial Column (desktop: 3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right order-3"
        >
          <span className="font-mono text-[11px] text-[#6A3279] uppercase tracking-[0.2em] font-semibold mb-2">
            YOUR NEXT CHAPTER.
          </span>
          
          <h2 className="font-drama text-3xl sm:text-4xl text-[#1E1026] leading-tight">
            Systems that <span className="italic text-[#6A3279]">Scale.</span>
          </h2>

          <p className="font-sans text-xs sm:text-[13px] text-[#1E1026]/70 mt-3 leading-relaxed max-w-xs">
            Startups and enterprises trust my pipelines to eliminate manual triage, synchronize CRM data, and deploy autonomous customer agents.
          </p>
        </motion.div>

      </div>

      {/* Bottom Scroll Prompt (from inspiration video) */}
      <div className="relative z-10 w-full flex justify-between items-center text-[#1E1026]/50 pt-6 border-t border-[#1E1026]/08 max-w-7xl mx-auto text-xs">
        <button
          onClick={() => onScrollToSection('projects')}
          className="hover:text-[#6A3279] transition-colors flex items-center gap-1 font-mono text-[11px] cursor-pointer"
        >
          Explore the Automations ↗
        </button>

        <button
          onClick={() => onScrollToSection('about')}
          className="flex flex-col items-center gap-1 hover:text-[#1E1026] transition-colors group cursor-pointer"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#1E1026]/60 group-hover:text-[#6A3279]">
            Scroll. Step into possibility.
          </span>
          <div className="w-[1px] h-4 bg-[#1E1026]/30 group-hover:bg-[#6A3279] group-hover:h-6 transition-all" />
        </button>

        <span className="font-mono text-[11px] hidden sm:block">
          Ukezi Ebenezer • 2026
        </span>
      </div>
    </section>
  );
}

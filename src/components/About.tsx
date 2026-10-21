import { motion } from 'motion/react';
import { portfolioOwner } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Workflow } from 'lucide-react';

interface AboutProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function About({ onScrollToSection }: AboutProps = {}) {
  return (
    <section
      id="about"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Index Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // 02 • THE AI AUTOMATION SPECIALIST
        </motion.span>

        {/* Section Headline & Editorial Contrast Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-[1.08] tracking-tight"
          >
            Two ways to <br />
            <span className="italic text-[#6A3279]">scale forward.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-4 text-[#1E1026]/80 text-sm sm:text-base leading-relaxed"
          >
            <p>
              {portfolioOwner.summary}
            </p>
            <p className="text-xs sm:text-sm text-[#1E1026]/70 italic border-l-2 border-[#6A3279]/30 pl-4 py-1">
              "My design background means every workflow I build is informed by how people actually use systems, not just how they're supposed to."
            </p>
          </motion.div>
        </div>

        {/* Two Featured Offerings Cards (Inspired by Frame 4 in Inspiration Video) */}
        <div id="services" className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
          
          {/* Card 1: Dark Velvet Plum Luxury Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="luxury-card-dark p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between text-left group"
          >
            <div>
              <div className="w-full flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#C9A84C]">
                  01 / BESPOKE INTELLIGENCE
                </span>
                <span className="font-sans text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full border border-white/10">
                  Custom Agents
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C9A84C] mb-6">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="font-drama text-3xl sm:text-4xl text-[#FAF7F2] tracking-tight leading-tight mb-4">
                Autonomous AI Agents & <span className="italic text-[#C9A84C]">LLM Systems</span>
              </h3>

              <p className="font-sans text-sm text-[#FAF7F2]/75 leading-relaxed mb-8">
                Deploying context-aware AI agents across Telegram, webhooks, and customer messaging. Configured with strict system prompts, conversation memory handling, and escalation routing enabling them to resolve 80% of queries autonomously and flag complex issues to human agents via Gmail.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
              {["OpenAI API", "Google AI Studio", "Claude", "Telegram", "Context Memory"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-[#C9A84C] bg-black/20 border border-[#C9A84C]/30 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Crisp Ivory Luxury Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            whileHover={{ y: -6 }}
            className="luxury-card-light p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between text-left group border border-[#1E1026]/12"
          >
            <div>
              <div className="w-full flex items-center justify-between pb-6 border-b border-[#1E1026]/08 mb-8">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#6A3279] font-semibold">
                  02 / PIPELINE OVERHAUL
                </span>
                <span className="font-sans text-xs bg-[#1E1026]/05 text-[#1E1026] px-3 py-1 rounded-full border border-[#1E1026]/10">
                  Full Automation
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#6A3279]/10 flex items-center justify-center text-[#6A3279] mb-6">
                <Workflow className="w-6 h-6" />
              </div>

              <h3 className="font-drama text-3xl sm:text-4xl text-[#1E1026] tracking-tight leading-tight mb-4">
                End-to-End Enterprise <span className="italic text-[#6A3279]">Workflow Orchestration</span>
              </h3>

              <p className="font-sans text-sm text-[#1E1026]/75 leading-relaxed mb-8">
                Production-grade n8n and Make.com workflows that connect your CRM, email sequences, project workspaces, and internal tools. Collapsing multi-step client onboarding, duplicate detection, and lead qualification from days to seconds with sub-minute response latency.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-[#1E1026]/08">
              {["n8n", "Make.com", "HubSpot CRM", "Asana", "Slack", "REST APIs"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-[#1E1026] bg-[#1E1026]/05 border border-[#1E1026]/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

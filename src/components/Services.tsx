import { motion } from 'motion/react';

export default function Services() {
  const card1Tags = ["Claude / Anthropic", "OpenAI", "LangChain", "RAG Systems", "Vector DBs", "Python"];
  const card2Tags = ["n8n", "Make.com", "Zapier", "HubSpot", "Webhooks", "REST APIs"];

  return (
    <section
      id="services"
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="services-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // Core Services
        </motion.span>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="services-headline font-sans font-bold text-[#FAF8F5] leading-tight max-w-[700px] mb-12"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          High-impact AI. Seamless automations. Zero operational friction.
        </motion.h2>

        {/* Services 2-Column Grid */}
        <div
          className="services-cards-grid w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-4"
        >
          
          {/* Card 1: Autonomous AI Agents & LLMs */}
          <motion.div
            id="service-card-ai-agents"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.45)" }}
            className="service-card p-10 max-sm:p-6 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] rounded-[2rem] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Custom SVG AI Brain / Agent Node icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-6 text-[#C9A84C]">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
                  <path d="M18 8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3" />
                  <path d="M6 8a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3" />
                  <path d="M12 11v11" />
                  <path d="m8 18 4 4 4-4" />
                </svg>
              </div>

              <h3 className="font-sans text-2xl font-bold text-[#FAF8F5] mb-4">
                Autonomous AI Agents & LLMs
              </h3>
              
              <p className="font-sans text-base text-[#888794] leading-relaxed mb-8">
                Custom AI agents, LLM integrations (Claude & OpenAI), and intelligent RAG systems tailored to your business knowledge base. From 24/7 autonomous support to smart lead qualification, I build agents that think, decide, and execute.
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {card1Tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] text-[#C9A84C] border border-[#C9A84C]/35 px-3 py-1 rounded-full bg-[#0D0D12]/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: AI Workflow Automation */}
          <motion.div
            id="service-card-ai-automation"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.45)" }}
            className="service-card p-10 max-sm:p-6 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.2)] rounded-[2rem] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Custom SVG Workflow/Node node icon */}
              <div className="w-10 h-10 flex items-center justify-center mb-6 text-[#C9A84C]">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="5" r="3" />
                  <circle cx="5" cy="19" r="3" />
                  <circle cx="19" cy="19" r="3" />
                  <path d="M5 16V10a4 4 0 0 1 4-4h6" />
                  <path d="M19 16v-3a4 4 0 0 0-4-4" />
                  <path d="m11 8 1 1-1 1" />
                </svg>
              </div>

              <h3 className="font-sans text-2xl font-bold text-[#FAF8F5] mb-4">
                End-to-End Workflow Automation
              </h3>
              
              <p className="font-sans text-base text-[#888794] leading-relaxed mb-8">
                I build production-grade n8n and Make.com workflows that connect your CRM, email sequences, databases, and internal tools — eliminating manual data entry and saving teams 20–80 hours every single month.
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {card2Tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[12px] text-[#C9A84C] border border-[#C9A84C]/35 px-3 py-1 rounded-full bg-[#0D0D12]/40"
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

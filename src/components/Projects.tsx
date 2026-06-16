import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "AI Lead Capture & Automation System",
    category: "Automation · AI Workflow",
    tools: ["Make.com", "Lovable", "Google Sheets", "Gmail"],
    result: "Processes 200+ leads/month automatically — zero manual follow-up",
    description: "Validates incoming leads, scores them by budget and company size, routes to Hot/Warm/Cold pipelines, logs to Sheets, and triggers follow-up emails.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    accent: "#C9A84C"
  },
  {
    id: 2,
    title: "Automated Client Onboarding using n8n",
    category: "Automation · AI Workflow",
    tools: ["n8n", "HubSpot", "Asana", "Google Workspace", "Slack"],
    result: "Reduced client onboarding time from 2 days to under 20 minutes",
    description: "Receives client submissions, validates duplicates, creates CRM records, generates onboarding tasks, sends welcome emails, and notifies the internal team automatically.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    accent: "#C9A84C"
  },
  {
    id: 3,
    title: "AI Customer Support Agent using n8n",
    category: "Automation · AI Agent",
    tools: ["n8n", "OpenAI", "Telegram", "Gmail", "Webhooks"],
    result: "Handles 80% of support inquiries without human intervention",
    description: "An AI-powered support agent that receives inquiries, processes them with an LLM, and sends intelligent responses through Telegram — 24/7, no sleep needed.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80",
    accent: "#C9A84C"
  },
  {
    id: 4,
    title: "Lead Capture & Enrichment using n8n",
    category: "Automation · AI Workflow",
    tools: ["n8n", "HubSpot CRM", "OpenAI", "Slack", "Email Automation"],
    result: "Sales team notified in real-time — 3x faster lead response",
    description: "Captures leads from a landing page, enriches company data with AI, stores in HubSpot CRM, sends welcome emails, and pings Slack instantly for hot leads.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80",
    accent: "#C9A84C"
  },
  {
    id: 5,
    title: "NevTech — Web Design & E-commerce",
    category: "Web Design · E-commerce",
    tools: ["Figma", "Framer", "Lovable"],
    result: "Full brand identity and storefront live in under 2 weeks",
    description: "Designed and built the NevTech brand identity, landing page, and e-commerce product flow from scratch. Dark aesthetic, fast load, mobile-first.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=80",
    accent: "#C9A84C",
    link: "https://nevtech.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0D0D12] py-24 px-16 max-md:py-16 max-md:px-8 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="projects-eyebrow font-mono text-[13px] text-[#C9A84C] tracking-[0.1em] mb-4 block"
        >
          // Projects
        </motion.span>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="projects-headline font-sans font-bold text-[#FAF8F5] leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Real work. Real results.
        </motion.h2>

        {/* Horizontal Projects List Stack */}
        <div id="projects-list-stack" className="w-full flex flex-col gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              id={`project-card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.85, 
                ease: [0.16, 1, 0.3, 1], // premium custom easeOutQuint curve
                delay: index * 0.05
              }}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(201,168,76,0.35)",
                boxShadow: "0 20px 40px -20px rgba(201,168,76,0.15)"
              }}
              className="group flex flex-col md:flex-row w-full border border-[rgba(201,168,76,0.15)] rounded-[2rem] overflow-hidden bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.03]"
            >
              {/* Product Showcase Visual Element on the Left (40% width on desktop) */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-[40%] h-[240px] md:h-[320px] overflow-hidden relative block cursor-pointer group/img-link"
                  id={`project-image-box-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0D0D12]/60 to-transparent group-hover/img-link:bg-black/10 transition-colors duration-300" />
                </a>
              ) : (
                <div 
                  className="w-full md:w-[40%] h-[240px] md:h-[320px] overflow-hidden relative"
                  id={`project-image-box-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0D0D12]/60 to-transparent" />
                </div>
              )}

              {/* Product Specifications and Narration on the Right (60% width on desktop) */}
              <div 
                className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-between"
                id={`project-content-box-${project.id}`}
              >
                <div>
                  {/* Category Tag */}
                  <span className="font-mono text-[12px] text-[#C9A84C] border border-[#C9A84C]/35 px-3.5 py-1 rounded-full bg-[#0D0D12]/40 inline-block">
                    {project.category}
                  </span>

                  {/* Showcase Title */}
                  <h3 className="font-sans text-2xl font-bold text-[#FAF8F5] mt-3 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Quantitative Result Callout */}
                  <div className="mt-4 p-3.5 rounded-r-xl border-l-3 border-[#C9A84C] bg-[#C9A84C]/10 text-sm font-sans font-medium text-[#FAF8F5]">
                    📈 Result: {project.result}
                  </div>

                  {/* Descriptive text */}
                  <p className="font-sans text-[15px] text-[#888794] mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Built with Specification tools list */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tools.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] text-[#FAF8F5] bg-white/5 border border-white/5 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View More Projects Action Area */}
        <div className="w-full flex justify-center mt-14" id="view-more-projects-wrapper">
          <motion.a
            id="view-more-projects-btn"
            href="https://www.upwork.com/freelancers/~01e9b7aead8e9f31f9?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn px-8 h-[54px] inline-flex items-center justify-center border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/5 text-[15px] font-semibold rounded-full duration-300 transition-all gap-2 cursor-pointer"
          >
            View More Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-300" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}

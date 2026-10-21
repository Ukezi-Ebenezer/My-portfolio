import { useState } from 'react';
import { motion } from 'motion/react';
import { gitHubReposData, portfolioOwner } from '../data/portfolioData';
import { Star, ArrowUpRight, Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { GitHubRepo } from '../types';

export default function GitHubProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('AI & Automation');

  const categories = ['AI & Automation', 'Web Apps', 'Backend & APIs'];

  const filteredRepos = gitHubReposData.filter(repo => repo.category === activeCategory);

  return (
    <section
      id="github"
      className="relative bg-[#FAF7F2] py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-t border-[#1E1026]/08 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        
        {/* Section Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#6A3279] font-semibold mb-3 block"
        >
          // 07 • GITHUB PROJECTS & CODE REPOSITORIES
        </motion.span>

        {/* Section Heading & GitHub Profile Action */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-drama text-4xl sm:text-5xl md:text-6xl text-[#1E1026] leading-tight tracking-tight">
              Open blueprints. <br />
              <span className="italic text-[#6A3279]">Production-ready code.</span>
            </h2>
          </motion.div>

          <a
            href={portfolioOwner.links.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1E1026] hover:bg-[#6A3279] text-[#FAF7F2] font-mono text-xs font-semibold tracking-wide transition-all self-start lg:self-auto cursor-pointer shadow-sm hover:shadow-md"
          >
            <Github className="w-4 h-4" />
            <span>Visit Profile @Ukezi-Ebenezer</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1E1026] text-[#FAF7F2] font-semibold shadow-xs'
                  : 'bg-white border border-[#1E1026]/10 text-[#1E1026]/75 hover:border-[#6A3279] hover:text-[#1E1026]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Repositories Responsive Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredRepos.map((repo: GitHubRepo, index: number) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="rounded-[2.5rem] bg-white border border-[#1E1026]/08 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group text-left"
            >
              <div>
                {/* Project Screenshot / Visual Header */}
                {repo.screenshotUrl ? (
                  <div className="w-full h-52 relative overflow-hidden bg-[#1E1026]">
                    <img
                      src={repo.screenshotUrl}
                      alt={repo.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1026]/80 via-transparent to-transparent" />
                    
                    {/* Top Left Category Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#FAF7F2] bg-[#1E1026]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {repo.category}
                      </span>
                    </div>

                    {/* Top Right Language & Star Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      {repo.stars !== undefined && repo.stars > 0 && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md font-mono text-[10px] text-[#FAF7F2] border border-white/10">
                          <Star className="w-3 h-3 text-[#C9A84C]" fill="currentColor" />
                          {repo.stars}
                        </span>
                      )}
                      <span className="font-mono text-[10px] font-semibold text-[#C9A84C] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {repo.language}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#6A3279] font-bold">
                      {repo.category}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-[#1E1026]/70 bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#1E1026]/08">
                      {repo.language}
                    </span>
                  </div>
                )}

                {/* Project Details */}
                <div className="p-7 sm:p-8 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-[#6A3279]" />
                    <h3 className="font-drama text-2xl sm:text-3xl font-bold text-[#1E1026] group-hover:text-[#6A3279] transition-colors leading-tight">
                      {repo.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#1E1026]/75 leading-relaxed mb-6">
                    {repo.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {repo.tech.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[10px] text-[#1E1026]/75 bg-[#FAF7F2] border border-[#1E1026]/08 px-2.5 py-0.5 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-7 sm:p-8 pt-4 border-t border-[#1E1026]/06 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1026] hover:bg-[#6A3279] text-[#FAF7F2] font-mono text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Live Demo Link (only rendered when verified working) */}
                {repo.liveDemoUrl && (
                  <a
                    href={repo.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#6A3279] text-[#6A3279] hover:bg-[#6A3279] hover:text-[#FAF7F2] font-mono text-xs font-semibold tracking-wide transition-all cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: GitHub Overview & Repositories Archive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="w-full p-8 rounded-[2.5rem] bg-white border border-[#1E1026]/10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-13 h-13 rounded-2xl bg-[#6A3279]/10 text-[#6A3279] flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6A3279] font-bold block mb-1">
                // VERIFIED GITHUB PROFILE
              </span>
              <h3 className="font-drama text-2xl font-bold text-[#1E1026]">
                Explore All Repositories on GitHub
              </h3>
              <p className="font-sans text-xs text-[#1E1026]/70 mt-0.5 max-w-xl">
                Inspect source code, microservice APIs, automation scripts, and experiments directly at github.com/Ukezi-Ebenezer.
              </p>
            </div>
          </div>

          <a
            href={portfolioOwner.links.github}
            target="_blank"
            rel="noreferrer"
            className="group px-6 py-3.5 rounded-full bg-[#1E1026] hover:bg-[#6A3279] text-[#FAF7F2] font-mono text-xs font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap self-stretch sm:self-auto justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <Github className="w-4 h-4" />
            <span>Open @Ukezi-Ebenezer</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

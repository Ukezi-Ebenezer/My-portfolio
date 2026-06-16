import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code, Shield, Palette, Zap, Server, Database, Cpu,
  Workflow, Move, Flame, Activity, Compass, Layers, Gauge,
  CloudLightning, Waves
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon name string to rendering component to prevent dynamic lookup errors
const iconMap: { [key: string]: React.ReactNode } = {
  Code: <Code className="w-5 h-5 text-[#00FF66]" />,
  Shield: <Shield className="w-5 h-5 text-[#00FF66]" />,
  Palette: <Palette className="w-5 h-5 text-[#00FF66]" />,
  Zap: <Zap className="w-5 h-5 text-[#00FF66]" />,
  Server: <Server className="w-5 h-5 text-[#00FF66]" />,
  Database: <Database className="w-5 h-5 text-[#00FF66]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#00FF66]" />,
  Workflow: <Workflow className="w-5 h-5 text-[#00FF66]" />,
  Move: <Move className="w-5 h-5 text-[#00FF66]" />,
  Flame: <Flame className="w-5 h-5 text-[#00FF66]" />,
  Activity: <Activity className="w-5 h-5 text-[#00FF66]" />,
  Compass: <Compass className="w-5 h-5 text-[#00FF66]" />,
  Layers: <Layers className="w-5 h-5 text-[#00FF66]" />,
  Gauge: <Gauge className="w-5 h-5 text-[#00FF66]" />,
  CloudLightning: <CloudLightning className="w-5 h-5 text-[#00FF66]" />,
  Waves: <Waves className="w-5 h-5 text-[#00FF66]" />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(skillsData.map(s => s.category)))];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 relative border-t border-white/10">
      {/* Background neon light orb */}
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#00FF66]/5 blur-[120px] rounded-full pointing-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00FF66] font-semibold mb-2">
              [ Tech Matrix ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Formulated Skill Vectors
            </h2>
            <div className="h-1 w-12 bg-[#00FF66]/75 rounded mt-4" />
          </div>

          {/* Inline Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-900/40 border border-white/10 rounded-xl backdrop-blur-sm self-start">
            {categories.map((cat) => (
              <button
                id={`skill-category-${cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg font-display text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#00FF66]/15 border border-[#00FF66]/25 text-[#00FF66]'
                    : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills List Rendering */}
        <div id="skills-layout-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              id={`skill-node-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              key={skill.name}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-4 text-left border border-white/10"
            >
              {/* Header inside specific card */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    {iconMap[skill.iconName] || <Code className="w-5 h-5 text-[#00FF66]" />}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-white leading-none">
                      {skill.name}
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-1.5 inline-block">
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                {/* Visual Level indicator percentage in textual format */}
                <span className="font-mono text-xs font-semibold text-zinc-400">
                  {skill.level}%
                </span>
              </div>

              {/* Graphical level gauge bar */}
              <div className="flex flex-col gap-1.5 mt-1">
                <div className="h-1 bg-zinc-800/60 rounded-full overflow-hidden relative border border-black/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00FF66] to-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.02 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Grid Summary footer */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/10 border border-white/10 flex flex-col sm:flex-row items-center gap-4 text-left glass-panel">
          <div className="text-[#00FF66] bg-[#00FF66]/10 p-3 rounded-xl border border-[#00FF66]/20">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Ongoing Architectural Adaptations
            </h4>
            <p className="text-zinc-500 text-xs leading-relaxed mt-1 max-w-xl">
              I consistently audit and supplement my stack as tooling and platform runtimes mature. Every skill noted is backed by practical application deployment cycles, clean git branching histories, and direct systems performance profiling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

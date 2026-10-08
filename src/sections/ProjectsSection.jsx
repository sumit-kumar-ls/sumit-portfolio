import React from 'react';
import { Terminal, Database, Code2, Globe, Clock, Layers, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

const projectIcons = {
  "java-projects": <Code2 className="w-6 h-6 text-indigo-400" />,
  "python-automation": <Terminal className="w-6 h-6 text-indigo-400" />,
  "sql-workbench": <Database className="w-6 h-6 text-indigo-400" />,
  "web-exploration": <Globe className="w-6 h-6 text-indigo-400" />
};

export const ProjectsSection = () => {
  const { badge, heading, subheading, projects } = profileData.projectsSection;

  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              04 // {badge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{heading}</h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0 max-w-xs text-left md:text-right">
            Active Mini-Projects & Practical Applications
          </p>
        </div>

        {/* Intro Subheading banner */}
        <div className="mb-10 p-6 rounded-2xl bg-indigo-500/[0.03] border border-indigo-500/20 text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-4">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-semibold text-white block mb-1">Authentic Portfolio Commitment</span>
            {subheading}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Abstract Visual Header Frame */}
              <div className="relative h-44 bg-[#0e1015] border-b border-white/5 p-6 flex flex-col justify-between overflow-hidden">
                {/* Background Geometric Grid Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-105 transition-transform">
                    {projectIcons[proj.id] || <Code2 className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                    <Clock className="w-3 h-3 animate-spin" />
                    <span>{proj.status}</span>
                  </div>
                </div>

                <div className="relative z-10 font-mono text-xs text-gray-500">
                  // {proj.type}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {proj.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {proj.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-gray-300">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-gray-500">BCA 1st Year</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

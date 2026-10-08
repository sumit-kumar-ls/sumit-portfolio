import React from 'react';
import { Sparkles, Code2, Terminal, Database, Globe, Clock } from 'lucide-react';
import { profileData } from '../data/profileData';

const projectIcons = {
  "java-projects": <Code2 className="w-6 h-6 text-[#4A5D2E]" />,
  "python-automation": <Terminal className="w-6 h-6 text-[#4A5D2E]" />,
  "sql-workbench": <Database className="w-6 h-6 text-[#4A5D2E]" />,
  "web-exploration": <Globe className="w-6 h-6 text-[#4A5D2E]" />
};

export const ProjectsSection = () => {
  const { heading, subheading, projects } = profileData.projectsSection;

  return (
    <section id="projects" className="py-24 relative border-t border-[#E8E2D5] bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2]/70 text-xs font-mono font-medium text-[#4A5D2E]">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>ACTIVE EXPLORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1A1918] tracking-tight">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-[#5A5750] leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Asymmetric Product-Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => {
            const isFeatured = idx === 0;

            return (
              <div
                key={proj.id}
                className={`group relative p-8 rounded-3xl bg-white border border-[#E8E2D5] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white via-[#FAF8F3] to-[#F4F0E8]/50' : ''
                }`}
              >
                {/* Abstract Stylized Graphic Top Accent */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0EBE1]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F0E8] flex items-center justify-center border border-[#E6DFC7]">
                      {projectIcons[proj.id] || <Code2 className="w-6 h-6 text-[#4A5D2E]" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#8A857B] block">{proj.tag}</span>
                      <span className="text-sm font-semibold text-[#1A1918]">Mini-Project Suite</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A5D2E]/10 border border-[#4A5D2E]/20 text-xs font-mono text-[#4A5D2E] font-medium">
                    <Clock className="w-3.5 h-3.5 animate-spin" />
                    <span>{proj.status}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-heading font-bold text-[#1A1918] group-hover:text-[#4A5D2E] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A5750] leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Focus Highlights */}
                <div className="pt-4 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {proj.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="px-3 py-1 rounded-xl bg-[#FAF8F3] border border-[#E8E2D5] text-xs font-medium text-[#2C2B29]">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-xl bg-[#4A5D2E] text-white text-xs font-mono font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

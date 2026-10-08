import React from 'react';
import { Code2, Database, Wrench, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

const categoryIcons = {
  "Programming Languages": <Code2 className="w-5 h-5 text-indigo-400" />,
  "Database": <Database className="w-5 h-5 text-indigo-400" />,
  "Development Tools": <Wrench className="w-5 h-5 text-indigo-400" />,
  "Web Capability": <Globe className="w-5 h-5 text-indigo-400" />
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              02 // Verified Skills & Tools
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Technical Capability</h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Strictly Verified Stack • No Fake Metrics
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.skillsCategory.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/20 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                    {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{cat.category}</h3>
                    <p className="text-xs text-gray-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skills Cards Grid inside Category */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`relative flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                        skill.isLearning
                          ? 'bg-indigo-500/[0.08] border-indigo-500/30 text-indigo-200 shadow-sm shadow-indigo-500/10'
                          : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20 text-gray-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${skill.isLearning ? 'text-indigo-400' : 'text-gray-400'}`} />
                      <span className="font-semibold tracking-tight">{skill.name}</span>
                      
                      {/* Learning Badge if C */}
                      {skill.isLearning && (
                        <span className="inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                          <Sparkles className="w-3 h-3 text-indigo-300 animate-pulse" />
                          Learning
                        </span>
                      )}

                      {!skill.isLearning && skill.tag && (
                        <span className="text-[11px] font-mono text-gray-400 ml-1">
                          ({skill.tag})
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.01] border border-white/[0.05] flex items-center justify-between text-xs text-gray-500 font-mono">
          <span>* Only verified skills are displayed. Zero arbitrary percentage bars or fabricated ratings.</span>
          <span className="hidden sm:inline-block text-gray-400">Authentic Developer Profile</span>
        </div>
      </div>
    </section>
  );
};

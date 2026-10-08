import React from 'react';
import { Code2, Database, Wrench, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profileData';

const categoryIcons = {
  "PROGRAMMING": <Code2 className="w-5 h-5 text-[#4A5D2E]" />,
  "DATA": <Database className="w-5 h-5 text-[#4A5D2E]" />,
  "TOOLS": <Wrench className="w-5 h-5 text-[#4A5D2E]" />,
  "EXPLORING": <Globe className="w-5 h-5 text-[#4A5D2E]" />
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative border-t border-[#E8E2D5] bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2]/70 text-xs font-mono font-medium text-[#4A5D2E]">
            <Sparkles className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>VERIFIED CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1A1918] tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-base text-[#5A5750]">
            Strictly verified languages, database technologies, and developer tools.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {profileData.skillsCategories.map((cat, idx) => {
            const isLarge = cat.title === "PROGRAMMING" || cat.title === "TOOLS";
            const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div
                key={idx}
                className={`${colSpan} p-7 rounded-3xl bg-white border border-[#E8E2D5] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#F0EBE1]">
                    <div className="w-10 h-10 rounded-2xl bg-[#F4F0E8] flex items-center justify-center">
                      {categoryIcons[cat.title] || <Code2 className="w-5 h-5 text-[#4A5D2E]" />}
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#8A857B] font-semibold">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#5A5750]">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-medium border transition-all duration-200 ${
                          skill.isLearning
                            ? 'bg-[#4A5D2E]/[0.08] border-[#4A5D2E]/30 text-[#384722] shadow-warm-sm'
                            : 'bg-[#FAF8F3] border-[#E8E2D5] text-[#2C2B29] hover:border-[#4A5D2E]/40'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${skill.isLearning ? 'text-[#4A5D2E]' : 'text-[#8A857B]'}`} />
                        <span className="font-semibold text-sm">{skill.name}</span>

                        {skill.isLearning ? (
                          <span className="inline-flex items-center gap-1 ml-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#4A5D2E] text-white">
                            Learning
                          </span>
                        ) : (
                          <span className="text-xs text-[#8A857B] font-mono font-normal">
                            ({skill.tag})
                          </span>
                        )}
                      </div>
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

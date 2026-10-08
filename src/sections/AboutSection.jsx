import React from 'react';
import { Compass, Code2, Database, Cpu, Globe, Users } from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutSection = () => {
  const { heading, intro, paragraphs, pillars } = profileData.aboutEditorial;

  return (
    <section id="about" className="py-24 relative border-t border-[#E8E2D5] bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2]/70 text-xs font-mono font-medium text-[#4A5D2E]">
            <Compass className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>ABOUT SUMIT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1A1918] tracking-tight leading-tight">
            Curious by nature. <br />
            <span className="font-serif italic font-normal text-[#4A5D2E]">Building with purpose.</span>
          </h2>

          <p className="text-lg text-[#5A5750] leading-relaxed font-medium">
            {intro}
          </p>
        </div>

        {/* Spacious 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-[#4A4741] text-base leading-relaxed font-normal">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="bg-white/60 p-6 rounded-2xl border border-[#E8E2D5] shadow-warm-sm">
                {paragraph}
              </p>
            ))}

            {/* Quick Profile Summary Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EAE3D2]/40 via-[#FAF8F3] to-[#E4DCCF]/50 border border-[#E2DAA8] space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#4A5D2E] font-semibold">
                Core Mindset & Focus
              </h3>
              <p className="text-sm text-[#2C2B29] leading-relaxed italic">
                "Focused on strengthening core Computer Science fundamentals, writing clean logic, and making steady daily progress toward backend software development."
              </p>
            </div>
          </div>

          {/* Pillars Cards Grid Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#4A5D2E]/40 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-[#F4F0E8] flex items-center justify-center text-[#4A5D2E] group-hover:bg-[#4A5D2E] group-hover:text-white transition-colors">
                    {pIdx === 0 && <Cpu className="w-4 h-4" />}
                    {pIdx === 1 && <Code2 className="w-4 h-4" />}
                    {pIdx === 2 && <Database className="w-4 h-4" />}
                    {pIdx === 3 && <Globe className="w-4 h-4" />}
                  </div>
                  <h4 className="text-base font-heading font-bold text-[#1A1918]">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5A5750] pl-11 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

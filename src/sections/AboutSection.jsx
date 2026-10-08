import React from 'react';
import { BookOpen, Code2, Database, Globe, Users, Cpu } from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative border-t border-white/5 bg-[#0d0e12]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              01 // Background & Identity
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">About Sumit</h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            1st Year BCA • Software Developer Aspirant
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
              {profileData.aboutDetailed.headline}
            </h3>
            
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              {profileData.aboutDetailed.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars / Mindset Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Logic & Algorithms</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal">
                  Building clean programming logic in Java and Python while mastering fundamental execution in C.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Databases & Data</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal">
                  Working with SQL and relational databases to model schemas and write structured queries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Website Building</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal">
                  Building websites and exploring web development concepts alongside backend progression.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Networking & Growth</h4>
                </div>
                <p className="text-xs text-gray-400 leading-normal">
                  Connecting with fellow tech enthusiasts, seeking mentorship, and collaborating on code.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Profile Highlights */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">Quick Profile</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Verified</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-500">Education</span>
                  <span className="text-gray-200 font-sans font-medium text-right">1st Year BCA</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-500">Direction</span>
                  <span className="text-gray-200 font-sans font-medium text-right">Backend & Software Dev</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-500">Primary Languages</span>
                  <span className="text-gray-200 font-sans font-medium text-right">Java, Python</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-500">Current Target</span>
                  <span className="text-indigo-400 font-sans font-semibold text-right">C (Learning)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-500">Database</span>
                  <span className="text-gray-200 font-sans font-medium text-right">SQL</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-500">Tools</span>
                  <span className="text-gray-200 font-sans font-medium text-right">Git, GitHub, VS Code</span>
                </div>
              </div>

              {/* Callout Quote */}
              <div className="p-4 rounded-xl bg-indigo-500/[0.04] border border-indigo-500/20 text-xs text-indigo-200 italic leading-relaxed">
                "Focused on building clean logic, mastering core computer science concepts, and taking consistent steps toward software engineering."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

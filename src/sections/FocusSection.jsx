import React from 'react';
import { Compass, Terminal, Layers, Database, Globe, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export const FocusSection = () => {
  return (
    <section id="focus" className="py-20 relative border-t border-white/5 bg-[#0d0e12]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              03 // Active Learning Journey
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Current Focus</h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Student Progression & Learning Roadmap
          </p>
        </div>

        {/* Focus Steps / Progression Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.currentFocus.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle Step Number in Background */}
              <div className="absolute top-4 right-6 text-4xl font-mono font-bold text-white/[0.03] group-hover:text-indigo-500/10 transition-colors pointer-events-none">
                {item.number}
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-400 group-hover:text-indigo-400 transition-colors">
                  <span>Active Progression</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Activities Bullet List */}
        <div className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-400" />
            Key Activities & Curriculum Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.learningActivities.map((act, aIdx) => (
              <div key={aIdx} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <h4 className="text-sm font-semibold text-gray-200">{act.title}</h4>
                </div>
                <p className="text-xs text-gray-400 pl-3.5 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

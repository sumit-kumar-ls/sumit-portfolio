import React from 'react';
import { Route, CheckCircle2, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-[#E8E2D5] bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE3D2]/70 text-xs font-mono font-medium text-[#4A5D2E]">
            <Route className="w-3.5 h-3.5 text-[#C86D51]" />
            <span>PROGRESSION ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1A1918] tracking-tight">
            Learning Journey
          </h2>
          <p className="text-base text-[#5A5750]">
            The continuous steps I am taking from foundational academics to software engineering.
          </p>
        </div>

        {/* Visual Journey Roadmap Flow */}
        <div className="relative">
          {/* Vertical Connecting Line for Mobile/Desktop */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-[#E8E2D5] -translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-8 relative z-10">
            {profileData.journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="p-6 rounded-3xl bg-white border border-[#E8E2D5] shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-[#C86D51] bg-[#C86D51]/10 px-2.5 py-1 rounded-lg">
                          STEP {item.step}
                        </span>
                        <span className="text-xs font-mono text-[#4A5D2E] bg-[#4A5D2E]/10 px-2.5 py-1 rounded-full font-medium">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-[#1A1918] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#5A5750] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Badge Node */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#FAF8F3] border-2 border-[#4A5D2E] items-center justify-center text-[#4A5D2E] font-bold text-xs shadow-warm-sm shrink-0 z-10">
                    {item.step}
                  </div>

                  {/* Spacer for 2-column balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

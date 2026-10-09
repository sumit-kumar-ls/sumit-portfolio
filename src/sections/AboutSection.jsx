import React from 'react';
import { Compass } from 'lucide-react';
import { profileData } from '../data/profileData';

const focusTags = [
  'Java',
  'Python',
  'C — Learning',
  'Backend Development',
  'Databases & SQL',
  'Web Development',
  'Programming Fundamentals',
];

export const AboutSection = () => {
  const { intro } = profileData.aboutEditorial;

  return (
    <section
      id="about"
      className="relative border-t border-[#E8E2D5] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAE3D2]/70 px-3 py-1 text-xs font-mono font-medium text-[#4A5D2E] mb-5">
              <Compass className="h-3.5 w-3.5 text-[#C86D51]" />
              <span>ABOUT SUMIT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-[#1A1918] tracking-tight leading-tight">
              Curious by nature.
              <br />
              <span className="font-serif italic font-normal text-[#4A5D2E]">
                Building with purpose.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-lg sm:text-xl text-[#5A5750] leading-relaxed">
              {intro}
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#7A7469] leading-relaxed">
              Currently focused on strengthening programming fundamentals
              and learning through practical web and backend projects.
            </p>
          </div>
        </div>

        {/* Focus tags */}
        <div className="mt-12 sm:mt-16 border-t border-[#E6DFC7] pt-7">
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 sm:gap-8">
            <h3 className="pt-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#8A857B]">
              Areas of Focus
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {focusTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[#DCD2BD] bg-white/70 px-4 py-2 text-sm text-[#5A5750] transition-colors hover:border-[#4A5D2E]/50 hover:text-[#4A5D2E]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

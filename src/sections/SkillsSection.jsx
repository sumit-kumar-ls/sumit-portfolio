import React from 'react';
import {
  Code2,
  Database,
  Wrench,
  Globe,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { profileData } from '../data/profileData';

const categoryIcons = {
  PROGRAMMING: Code2,
  DATA: Database,
  TOOLS: Wrench,
  EXPLORING: Globe,
};

const categoryLabels = {
  PROGRAMMING: 'Programming Languages',
  DATA: 'Databases',
  TOOLS: 'Developer Tools',
  EXPLORING: 'Web Development',
};

const SkillChip = ({ skill, compact = false }) => (
  <div
    className={`inline-flex max-w-full items-center gap-2 rounded-xl border ${
      compact ? 'px-3 py-2' : 'px-3.5 py-3'
    } ${
      skill.isLearning
        ? 'border-[#4A5D2E]/30 bg-[#4A5D2E]/[0.07] text-[#384722]'
        : 'border-[#E8E2D5] bg-[#FAF8F3] text-[#2C2B29]'
    }`}
  >
    <CheckCircle2
      className={`h-4 w-4 shrink-0 ${
        skill.isLearning ? 'text-[#4A5D2E]' : 'text-[#8A857B]'
      }`}
    />

    <span className="text-sm font-semibold">{skill.name}</span>

    {skill.isLearning ? (
      <span className="rounded-full bg-[#4A5D2E] px-2 py-0.5 text-[10px] font-bold text-white">
        Learning
      </span>
    ) : skill.tag ? (
      <span className="text-xs text-[#8A857B]">
        {compact ? `· ${skill.tag}` : `(${skill.tag})`}
      </span>
    ) : null}
  </div>
);

const CategoryHeader = ({ category, featured = false }) => {
  const Icon = categoryIcons[category.title] || Code2;

  return (
    <div className={`flex items-center gap-3 ${featured ? 'mb-5' : 'mb-3'}`}>
      <div
        className={`flex shrink-0 items-center justify-center rounded-2xl bg-[#F4F0E8] text-[#4A5D2E] ${
          featured ? 'h-12 w-12' : 'h-10 w-10'
        }`}
      >
        <Icon className={featured ? 'h-5 w-5' : 'h-4 w-4'} />
      </div>

      <div>
        <h3 className="font-heading font-bold text-[#1A1918]">
          {categoryLabels[category.title] || category.title}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-[#5A5750]">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const categories = profileData.skillsCategories || [];
  const programming = categories.find(
    (category) => category.title === 'PROGRAMMING'
  );
  const supportingCategories = categories.filter(
    (category) => category.title !== 'PROGRAMMING'
  );

  return (
    <section
      id="skills"
      className="relative border-t border-[#E8E2D5] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl space-y-3 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAE3D2]/70 px-3 py-1 text-xs font-mono font-medium text-[#4A5D2E]">
            <Sparkles className="h-3.5 w-3.5 text-[#C86D51]" />
            <span>SKILLS & CAPABILITIES</span>
          </div>

          <h2 className="text-3xl font-heading font-bold tracking-tight text-[#1A1918] sm:text-5xl">
            Skills & Tools
          </h2>

          <p className="text-base leading-relaxed text-[#5A5750]">
            Technologies I use and skills I am actively developing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Featured Programming Card */}
          {programming && (
            <article className="relative overflow-hidden rounded-3xl border border-[#E2DAA8] bg-gradient-to-br from-white via-white to-[#EAE3D2]/45 p-6 shadow-warm-sm transition-shadow duration-300 hover:shadow-warm-md sm:p-8 lg:col-span-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#EAE3D2]/45 blur-3xl"
              />

              <div className="relative">
                <span className="mb-4 inline-block rounded-full bg-[#EAE3D2]/70 px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#4A5D2E]">
                  Core Skills
                </span>

                <CategoryHeader category={programming} featured />

                <div className="my-5 border-t border-[#E8E2D5]" />

                <div className="flex flex-wrap gap-2.5">
                  {programming.skills.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </div>

                <p className="mt-7 max-w-sm text-sm leading-relaxed text-[#7A7469]">
                  Building a strong foundation in programming, structured
                  logic, and problem-solving.
                </p>
              </div>
            </article>
          )}

          {/* Supporting Cards */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-5">
            {supportingCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-[#E8E2D5] bg-white p-5 shadow-warm-sm transition-all duration-300 hover:border-[#4A5D2E]/30 hover:shadow-warm-md sm:p-6"
              >
                <CategoryHeader category={category} />

                <div className="mb-3 border-t border-[#F0EBE1]" />

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillChip
                      key={skill.name}
                      skill={skill}
                      compact
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Sparkles,
  Code2,
  Terminal,
  Database,
  Globe,
  Layers,
  ArrowUpRight,
  Github,
} from 'lucide-react';
import { profileData } from '../data/profileData';

const iconRegistry = {
  code: Code2,
  terminal: Terminal,
  database: Database,
  globe: Globe,
  layers: Layers,
};

const getProjectIcon = (project) => {
  if (typeof project.icon === 'string' && iconRegistry[project.icon.toLowerCase()]) {
    return iconRegistry[project.icon.toLowerCase()];
  }

  const label = `${project.id || ''} ${project.tag || ''} ${project.title || ''}`.toLowerCase();

  if (/\b(sql|database|data)\b/.test(label)) return Database;
  if (/\b(python|terminal|automation|script)\b/.test(label)) return Terminal;
  if (/\b(web|website|frontend|portfolio|site)\b/.test(label)) return Globe;

  return Code2;
};

const resolveProjectImage = (image) => {
  if (!image) return '';
  if (/^(https?:\/\/|data:)/i.test(image)) return image;

  return `${import.meta.env.BASE_URL}${image.replace(/^\/+/, '')}`;
};

const ProjectCard = ({ project }) => {
  const Icon = getProjectIcon(project);
  const imageSrc = resolveProjectImage(project.image);
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E8E2D5] bg-white shadow-warm-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4A5D2E]/35 hover:shadow-warm-md">
      {/* Optional image preview; clean visual fallback when no image exists */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[#E8E2D5] bg-gradient-to-br from-[#EAE3D2]/80 via-[#F4F0E8] to-[#E8EBDD]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-[#D8DCC7]/75 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-8 h-56 w-56 rounded-full bg-[#E8CDB8]/70 blur-3xl"
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[26px] border border-white/80 bg-white/75 text-[#4A5D2E] shadow-warm-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-9 w-9" strokeWidth={1.6} />
            </div>
          </div>
        )}

        {project.status && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#4A5D2E] shadow-warm-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C86D51]" />
            {project.status}
          </span>
        )}
      </div>

      {/* Project details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {project.tag && (
          <p className="mb-2 text-xs font-mono font-medium uppercase tracking-wider text-[#8A857B]">
            {project.tag}
          </p>
        )}

        <h3 className="text-xl font-heading font-bold leading-snug text-[#1A1918] transition-colors group-hover:text-[#4A5D2E]">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5A5750]">
          {project.description}
        </p>

        {technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#E8E2D5] bg-[#FAF8F3] px-3 py-1.5 text-xs font-medium text-[#4A4741]"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-[#F0EBE1] pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A5D2E] transition-colors hover:text-[#C86D51]"
              >
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A5D2E] transition-colors hover:text-[#C86D51]"
              >
                <Github className="h-4 w-4" /> GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export const ProjectsSection = () => {
  const { heading, subheading, projects = [] } = profileData.projectsSection;

  return (
    <section
      id="projects"
      className="relative border-t border-[#E8E2D5] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl space-y-4 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAE3D2]/70 px-3 py-1 text-xs font-mono font-medium text-[#4A5D2E]">
            <Sparkles className="h-3.5 w-3.5 text-[#C86D51]" />
            <span>PROJECT GALLERY</span>
          </div>

          <h2 className="text-3xl font-heading font-bold tracking-tight text-[#1A1918] sm:text-5xl">
            {heading}
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-[#5A5750] sm:text-lg">
            {subheading}
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id || `${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

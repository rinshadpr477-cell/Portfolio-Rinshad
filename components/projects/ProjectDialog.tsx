'use client';

import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ExternalLink, ArrowLeft } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project, PROJECTS } from '@/lib/projects';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export function ProjectDialog({ project, onClose, onSelectProject }: ProjectDialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/60 dark:bg-black/80 backdrop-blur-xl overflow-y-auto flex justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-apple-float overflow-hidden my-auto flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/80 dark:bg-[#171719]/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 sm:gap-3 truncate pr-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-apple-indigo/10 text-apple-indigo font-bold border border-apple-indigo/20 shrink-0">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary truncate">
              Role: <strong className="text-apple-text dark:text-apple-darkText font-medium">{project.role}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 md:p-10 space-y-8 sm:space-y-10 overflow-y-auto max-h-[82vh]">
          {/* Header Title & Metrics */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText">
              {project.title}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
              {project.subtitle}
            </p>

            {/* Verified Metrics Cards */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 pt-2 sm:pt-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 sm:p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-apple-indigo font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary mt-1 uppercase">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-apple-indigo text-white font-semibold text-xs flex items-center gap-2 hover:opacity-90 shadow-md shadow-apple-indigo/20 transition cursor-pointer"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#1f1f22] text-apple-text dark:text-apple-darkText hover:bg-black/[0.03] dark:hover:bg-white/[0.05] font-medium text-xs flex items-center gap-2 transition cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <hr className="border-black/[0.06] dark:border-white/[0.08]" />

          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3 p-5 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <span className="text-xs font-mono text-apple-indigo uppercase tracking-wider font-semibold">01 / Overview</span>
              <h3 className="text-base sm:text-lg font-bold text-apple-text dark:text-apple-darkText">System Overview</h3>
              <p className="text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            <div className="space-y-3 p-5 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              <span className="text-xs font-mono text-amber-500 uppercase tracking-wider font-semibold">02 / Engineering Challenge</span>
              <h3 className="text-base sm:text-lg font-bold text-apple-text dark:text-apple-darkText">The Problem</h3>
              <p className="text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Architecture & Engineering Decisions */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-apple-indigo uppercase tracking-wider font-semibold">03 / Architecture & Implementation</span>
            <h3 className="text-lg sm:text-xl font-bold text-apple-text dark:text-apple-darkText">Technical Architecture & Solution</h3>
            <p className="text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary leading-relaxed p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08]">
              {project.caseStudy.architecture}
            </p>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs sm:text-sm font-semibold text-apple-text dark:text-apple-darkText uppercase tracking-wider font-mono">
                Key Engineering Decisions
              </h4>
              <ul className="space-y-2.5">
                {project.caseStudy.keyDecisions.map((decision, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-apple-indigo shrink-0 mt-0.5" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Breakdown */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider font-semibold">04 / Stack Breakdown</span>
            <h3 className="text-lg sm:text-xl font-bold text-apple-text dark:text-apple-darkText">Technologies & Operational Roles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.caseStudy.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3 sm:p-3.5 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-bold text-apple-text dark:text-apple-darkText">{tech.name}</div>
                  <div className="text-xs text-apple-secondary dark:text-apple-darkSecondary mt-1 leading-relaxed">{tech.purpose}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Verification */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-emerald-500/30 space-y-3">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">05 / Production Impact</span>
            <h3 className="text-base sm:text-lg font-bold text-apple-text dark:text-apple-darkText">Measured Results & Reliability</h3>
            <ul className="space-y-2">
              {project.caseStudy.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-apple-text dark:text-apple-darkText">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 sm:mt-2 shrink-0" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation to Next / Previous Project */}
          <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="flex items-center justify-center sm:justify-start gap-2 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-black/[0.02] sm:bg-transparent text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span className="truncate">Previous: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="flex items-center justify-center sm:justify-end gap-2 p-2.5 sm:p-0 rounded-xl sm:rounded-none bg-apple-indigo/10 sm:bg-transparent text-xs font-mono text-apple-indigo hover:underline transition font-bold cursor-pointer"
            >
              <span className="truncate">Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

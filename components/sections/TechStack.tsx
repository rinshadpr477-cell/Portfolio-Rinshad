'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES, Technology, TechCategory } from '@/lib/technologies';
import { PROJECTS } from '@/lib/projects';
import { Layers, Server, Database, Cloud, Zap, RotateCcw, ArrowUpRight } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';

interface TechStackProps {
  onOpenProject?: (projectId: string) => void;
}

export function TechStack({ onOpenProject }: TechStackProps) {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(
    TECHNOLOGIES.find((t) => t.id === 'nextjs') || TECHNOLOGIES[0]
  );
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');

  const categories: { id: TechCategory | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend & TypeScript', icon: Layers },
    { id: 'backend', label: 'Backend & Java', icon: Server },
    { id: 'distributed', label: 'Queues & Kafka', icon: Zap },
    { id: 'database', label: 'Databases & ORMs', icon: Database },
    { id: 'devops', label: 'Cloud & DevOps', icon: Cloud },
  ];

  const filteredTechs = TECHNOLOGIES.filter((t) => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  const relatedProjects = selectedTech
    ? PROJECTS.filter((p) => selectedTech.relatedProjectIds.includes(p.id))
    : [];

  return (
    <section id="stack" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
              05 / Technology Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
              Tools of the craft.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
              Every tool chosen for reliability, deterministic execution, and developer velocity. Click or hover any technology to inspect production implementation details.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl sm:rounded-full apple-glass shrink-0 shadow-apple-subtle overflow-x-auto scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-apple-indigo text-white font-bold shadow-md shadow-apple-indigo/20'
                    : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-8 sm:mt-12 items-start">
        {/* Left: Structured Grid of Technologies */}
        <div className="lg:col-span-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {filteredTechs.map((tech) => {
            const isSelected = selectedTech?.id === tech.id;

            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                onMouseEnter={() => setSelectedTech(tech)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[105px] sm:min-h-[110px] ${
                  isSelected
                    ? 'apple-glass-pill border-apple-indigo/60 shadow-apple-float bg-apple-indigo/[0.04] scale-[1.02]'
                    : 'apple-glass border-black/[0.05] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.2] hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase truncate">
                      {tech.category}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.06] text-apple-indigo font-medium shrink-0">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-apple-text dark:text-apple-darkText mt-1.5 sm:mt-2 font-mono truncate">
                    {tech.name}
                  </h3>
                </div>

                <div className="mt-2.5 sm:mt-3 flex items-center justify-between text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">
                  <span>{tech.relatedProjectIds.length} projects</span>
                  {isSelected && <span className="text-apple-indigo font-bold">Selected</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Selected Technology Detail & Connected Projects */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 w-full">
          <div className="p-5 sm:p-7 rounded-3xl apple-glass shadow-apple-card border border-black/[0.08] dark:border-white/[0.12]">
            {selectedTech ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div>
                    <span className="text-xs font-mono text-apple-indigo uppercase tracking-wider font-semibold">
                      {selectedTech.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-1 font-mono">
                      {selectedTech.name}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.05] text-apple-secondary dark:text-apple-darkSecondary">
                    {selectedTech.level}
                  </span>
                </div>

                {/* Practical application */}
                <div>
                  <h4 className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider mb-2">
                    Production Implementation
                  </h4>
                  <p className="text-sm text-apple-text dark:text-apple-darkText leading-relaxed p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.08] font-sans">
                    {selectedTech.howIUseIt}
                  </p>
                </div>

                {/* Connected Projects */}
                <div>
                  <h4 className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider mb-3">
                    Connected Projects ({relatedProjects.length})
                  </h4>

                  <div className="space-y-2">
                    {relatedProjects.length > 0 ? (
                      relatedProjects.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => onOpenProject && onOpenProject(p.id)}
                          className="p-3 rounded-xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#1a1a1c] hover:border-apple-indigo/60 cursor-pointer transition flex items-center justify-between group shadow-sm"
                        >
                          <div>
                            <div className="font-semibold text-xs text-apple-text dark:text-apple-darkText group-hover:text-apple-indigo">
                              {p.title}
                            </div>
                            <div className="text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary mt-0.5">
                              {p.badge}
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-apple-secondary dark:text-apple-darkSecondary group-hover:text-apple-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-apple-secondary dark:text-apple-darkSecondary font-mono">
                        Applied across internal automations and tooling.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center space-y-3">
                <Layers className="w-8 h-8 text-apple-secondary dark:text-apple-darkSecondary mx-auto opacity-50" />
                <h3 className="text-base font-semibold text-apple-text dark:text-apple-darkText font-mono">
                  Select a technology
                </h3>
                <p className="text-xs text-apple-secondary dark:text-apple-darkSecondary max-w-xs mx-auto leading-relaxed">
                  Click or hover any technology on the left to inspect how it is applied in production systems.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

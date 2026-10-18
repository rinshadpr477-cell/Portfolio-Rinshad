'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/lib/projects';
import { TiltProjectCard } from '@/components/projects/TiltProjectCard';
import { MotionReveal } from '@/components/ui/MotionReveal';

interface SelectedWorkProps {
  onOpenProject: (projectId: string) => void;
}

export function SelectedWork({ onOpenProject }: SelectedWorkProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'projects'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Editorial Header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
              01 / Selected Work
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
              Engineered with purpose.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
              Production telephony bridges, message automation pipelines, and full-stack marketplaces. Every product engineered from interface to database.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl sm:rounded-full apple-glass shrink-0 self-start md:self-auto shadow-apple-subtle overflow-x-auto scrollbar-none max-w-full">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'featured', label: 'Featured Systems' },
              { id: 'projects', label: 'Full-Stack Apps' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-apple-indigo text-white font-bold shadow-md shadow-apple-indigo/20'
                    : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Grid of Apple Pro Project Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {filteredProjects.map((project, idx) => {
          const isWide = idx % 3 === 0;
          const colSpan = isWide ? 'lg:col-span-12' : 'lg:col-span-6';

          return (
            <TiltProjectCard
              key={project.id}
              project={project}
              idx={idx}
              colSpan={colSpan}
              onOpenProject={onOpenProject}
            />
          );
        })}
      </div>
    </section>
  );
}

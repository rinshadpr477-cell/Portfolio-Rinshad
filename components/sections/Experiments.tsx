'use client';

import React, { useState } from 'react';
import { EXPERIMENTS_META } from '@/lib/experiments';
import { ProximityType } from '@/components/experiments/ProximityType';
import { MagneticToolbar } from '@/components/experiments/MagneticToolbar';
import { DonutProgress } from '@/components/experiments/DonutProgress';
import { DitherGenerator } from '@/components/experiments/DitherGenerator';
import { MagneticButton } from '@/components/experiments/MagneticButton';
import { ReorderList } from '@/components/experiments/ReorderList';
import { CopyCoupon } from '@/components/experiments/CopyCoupon';
import { QueueVisualizer } from '@/components/experiments/QueueVisualizer';
import { Code2, Sparkles } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';

export function Experiments() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interaction' | 'visual' | 'systems' | 'motion'>('all');
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});

  const toggleCode = (id: string) => {
    setShowCode((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredExperiments = EXPERIMENTS_META.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.category === activeFilter;
  });

  const renderExperimentComponent = (id: string) => {
    switch (id) {
      case 'proximity-type':
        return <ProximityType />;
      case 'magnetic-toolbar':
        return <MagneticToolbar />;
      case 'donut-progress':
        return <DonutProgress />;
      case 'dither-generator':
        return <DitherGenerator />;
      case 'magnetic-button':
        return <MagneticButton />;
      case 'reorder-list':
        return <ReorderList />;
      case 'copy-coupon':
        return <CopyCoupon />;
      case 'queue-visualizer':
        return <QueueVisualizer />;
      default:
        return null;
    }
  };

  return (
    <section id="experiments" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
              02 / Engineering Playground
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
              Interactive experiments.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
              Eight working interface prototypes demonstrating frontend engineering craft, vector geometry, spring physics, and queue state machines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl sm:rounded-full apple-glass shrink-0 shadow-apple-subtle overflow-x-auto scrollbar-none max-w-full">
            {[
              { id: 'all', label: 'All Demos (8)' },
              { id: 'interaction', label: 'Interaction' },
              { id: 'visual', label: 'Visual & SVG' },
              { id: 'systems', label: 'Systems & Queues' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  activeFilter === tab.id
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

      {/* Grid of 8 Live Experiments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {filteredExperiments.map((exp) => {
          const isCodeVisible = !!showCode[exp.id];

          return (
            <div
              key={exp.id}
              className="rounded-3xl apple-glass p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-apple-card hover:shadow-apple-float transition-all duration-300"
            >
              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div className="flex items-center gap-2 font-mono text-xs text-apple-secondary dark:text-apple-darkSecondary">
                    <span className="font-bold text-apple-indigo">{exp.number}</span>
                    <span className="opacity-40">/</span>
                    <span className="uppercase tracking-wider">{exp.category}</span>
                  </div>

                  {/* Code Toggle Button */}
                  <button
                    onClick={() => toggleCode(exp.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition ${
                      isCodeVisible
                        ? 'bg-apple-indigo text-white border-apple-indigo font-bold shadow-sm'
                        : 'bg-black/[0.03] dark:bg-white/[0.04] border-black/[0.06] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{isCodeVisible ? 'View Demo' : 'View Code'}</span>
                  </button>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-4">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary mt-1.5 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Dynamic Interactive Stage or Code Viewer */}
              <div className="my-6 min-w-0 overflow-hidden">
                {isCodeVisible ? (
                  <div className="p-4 rounded-2xl bg-black/[0.04] dark:bg-black/40 border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs text-apple-secondary dark:text-apple-darkSecondary overflow-x-auto max-h-[220px]">
                    <pre className="text-apple-text dark:text-apple-darkText leading-relaxed">
                      <code>{exp.codeSnippet}</code>
                    </pre>
                  </div>
                ) : (
                  renderExperimentComponent(exp.id)
                )}
              </div>

              {/* Technologies Bottom Tags */}
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

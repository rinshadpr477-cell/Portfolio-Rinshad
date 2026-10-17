'use client';

import React from 'react';
import { Compass, GitBranch, TerminalSquare, Rocket, ShieldCheck, Cpu, RefreshCw, MessageSquare } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { motion } from 'framer-motion';

export function Process() {
  const stages = [
    {
      step: '01',
      title: 'Discovery',
      icon: Compass,
      tagline: 'Understand the business problem, failure points, and measurable outcomes.',
      points: [
        'Deconstruct user workflows and edge cases before writing code.',
        'Define clear success criteria (latency thresholds, concurrency, SLA).',
        'Identify external dependencies and API rate limits.'
      ]
    },
    {
      step: '02',
      title: 'Architecture & Planning',
      icon: GitBranch,
      tagline: 'Define database schemas, queue lifecycles, and risk mitigation strategies.',
      points: [
        'Design relational/document data models with explicit indexing.',
        'Select optimal patterns (synchronous vs event-driven queue).',
        'Establish security controls, authentication scopes, and RBAC tiers.'
      ]
    },
    {
      step: '03',
      title: 'Build with Demonstrations',
      icon: TerminalSquare,
      tagline: 'Focused development cycles with functional milestone demos.',
      points: [
        'Strict TypeScript type systems eliminating boundary bugs.',
        'Deterministic idempotency checks on all financial or queue operations.',
        'Continuous staging preview deployments for transparent reviews.'
      ]
    },
    {
      step: '04',
      title: 'Launch & Agreed Support',
      icon: Rocket,
      tagline: 'Production containerization, reverse proxying, monitoring, and handoff.',
      points: [
        'Docker packaging with NGINX SSL configuration and automated CI/CD.',
        'Comprehensive README, API documentation, and env specifications.',
        'Structured error telemetry and post-launch stability support.'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
            04 / Engineering Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
            Structured for predictable delivery.
          </h2>
          <p className="mt-3 text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
            A disciplined four-stage cycle that balances architectural rigor with rapid, functional iterations.
          </p>
        </div>
      </MotionReveal>

      {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl apple-glass shadow-apple-card hover:shadow-apple-float transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-2xl font-bold font-mono text-apple-indigo">
                    {stage.step}
                  </span>
                  <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-apple-secondary dark:text-apple-darkSecondary group-hover:text-apple-indigo transition">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-5">
                  {stage.title}
                </h3>
                <p className="text-xs text-apple-secondary dark:text-apple-darkSecondary font-mono mt-1">
                  {stage.tagline}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {stage.points.map((pt, i) => (
                    <li key={i} className="text-xs text-apple-secondary dark:text-apple-darkSecondary leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-apple-indigo mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

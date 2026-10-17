'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Server, Cpu, Database, Activity, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';

export function ScrollStory() {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      num: 1,
      name: 'Idea',
      tagline: 'From Concept to Product Blueprint',
      headline: 'Every great system begins with an uncompromising architecture.',
      description: 'Before writing lines of code, workflows are mapped, edge cases analyzed, and data consistency models established to prevent systemic vulnerabilities.',
      visual: (
        <div className="p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-apple-indigo/10 text-apple-indigo flex items-center justify-center mx-auto border border-apple-indigo/20">
            <Layers className="w-8 h-8" />
          </div>
          <div className="text-sm font-semibold text-apple-text dark:text-apple-darkText font-mono">
            spec_document_v1.0.md
          </div>
          <p className="text-xs text-apple-secondary dark:text-apple-darkSecondary max-w-sm mx-auto leading-relaxed">
            API contracts, schema definitions, latency budgets, and security threat modeling documented with mathematical clarity.
          </p>
        </div>
      )
    },
    {
      num: 2,
      name: 'Architecture',
      tagline: 'Distributed Foundation & Data Models',
      headline: 'Components decoupled for infinite scale and zero single points of failure.',
      description: 'Separating real-time streaming gateways from heavy background task workers ensures zero UI thread starvation under peak enterprise traffic.',
      visual: (
        <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-apple-secondary dark:text-apple-darkSecondary pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
            <span>DISTRIBUTED TOPOLOGY</span>
            <span className="text-apple-indigo font-bold">DECOUPLED TIERS</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">FRONTEND</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText mt-1">Next.js 16</div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">BACKEND</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText mt-1">Spring Boot 3</div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">EVENT BUS</div>
              <div className="font-bold text-apple-indigo mt-1">Kafka (KRaft)</div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">STORAGE</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText mt-1">PostgreSQL 16</div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: 3,
      name: 'Execution',
      tagline: 'Asynchronous Queues & Live Ingestion',
      headline: 'Real-time telemetry and idempotent pipelines running without duplicate events.',
      description: 'Distributed BullMQ workers and Kafka consumers process 15,000+ records with exponential backoff and cryptographic deduplication keys.',
      visual: (
        <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-apple-indigo font-bold">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>LIVE PIPELINE PROCESSING</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">98.5% Delivery</span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="p-2.5 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px]">
              <span>BATCH_01: 500 contacts</span>
              <span className="text-emerald-500 font-semibold">Processed (0 errs)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-[#1a1a1c] border border-apple-indigo/30 flex items-center justify-between text-[11px]">
              <span>BATCH_02: 500 contacts</span>
              <span className="text-apple-indigo font-semibold animate-pulse">Streaming audio...</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[11px] opacity-60">
              <span>BATCH_03: 500 contacts</span>
              <span>Queued in Redis</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: 4,
      name: 'Production',
      tagline: 'Hardened Deployments & Real SLA',
      headline: 'Engineered for resilience, high availability, and measurable business impact.',
      description: 'Containerized with Docker on AWS EC2 behind NGINX SSL reverse proxies with automated GitHub Actions CI/CD pipelines and zero-downtime rolling updates.',
      visual: (
        <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>PRODUCTION HEALTH: HEALTHY</span>
            </span>
            <span className="text-apple-secondary dark:text-apple-darkSecondary">SLA: 99.98%</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-lg font-bold text-apple-indigo">2.9s</div>
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary mt-0.5">Call Latency</div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-lg font-bold text-apple-text dark:text-apple-darkText">15k+</div>
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary mt-0.5">SMS / Campaign</div>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-lg font-bold text-emerald-500">Zero</div>
              <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary mt-0.5">Duplicates</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const current = stages.find((s) => s.num === activeStage) || stages[0];

  return (
    <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <MotionReveal>
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText">
            How systems come to life.
          </h2>
          <p className="text-base text-apple-secondary dark:text-apple-darkSecondary font-normal">
            A continuous progression from architectural discovery to hardened production execution.
          </p>
        </div>
      </MotionReveal>

      {/* Stage Selector Tabs */}
      <div className="flex items-center justify-center gap-2 p-1.5 rounded-full apple-glass max-w-xl mx-auto shadow-apple-subtle mb-10 overflow-x-auto">
        {stages.map((stage) => {
          const isSelected = activeStage === stage.num;
          return (
            <button
              key={stage.num}
              onClick={() => setActiveStage(stage.num)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all flex items-center gap-2 shrink-0 ${
                isSelected
                  ? 'bg-apple-indigo text-white font-bold shadow-md shadow-apple-indigo/20'
                  : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
              }`}
            >
              <span>0{stage.num}</span>
              <span>{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Stage Showcase */}
      <div className="apple-glass-pill rounded-3xl p-8 sm:p-12 shadow-apple-float border border-black/[0.08] dark:border-white/[0.12] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-apple-indigo/10 text-apple-indigo border border-apple-indigo/20">
              Stage 0{current.num}
            </span>
            <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">
              {current.tagline}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-text dark:text-apple-darkText leading-snug">
                {current.headline}
              </h3>
              <p className="text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => setActiveStage((prev) => (prev < 4 ? prev + 1 : 1))}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-apple-indigo hover:underline"
            >
              <span>{current.num < 4 ? 'Next Stage: ' + stages[current.num].name : 'Restart Sequence'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Animated Visual Stage */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

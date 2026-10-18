'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Activity, Terminal, ShieldCheck, Cpu, Radio, Sparkles, Play, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'voice' | 'outbox' | 'terminal'>('voice');
  const [terminalLine, setTerminalLine] = useState('pnpm build --release');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '● twilio-media-bridge: initialized [8kHz full-duplex]',
    '● gemini-live: bi-directional session open (latency 2.9s)',
    '● kafka-kraft: outbox consumer polled 1,000+ events with zero loss',
    '✓ status: production ready | all systems operational'
  ]);

  // Restrained cursor parallax for physical keynote product feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const rotateX = useTransform(springY, [-300, 300], [4, -4]);
  const rotateY = useTransform(springX, [-500, 500], [-4, 4]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center"
    >
      {/* 1. Location & Professional Title Pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] text-[11px] sm:text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary shadow-apple-subtle mb-6 max-w-full"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="font-medium text-apple-text dark:text-apple-darkText">RINSHAD PR</span>
        <span className="opacity-40">·</span>
        <span className="hidden sm:inline">Software Engineer · Full-Stack Developer</span>
        <span className="sm:hidden truncate">Software Engineer</span>
      </motion.div>

      {/* 2. Main Apple Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-text dark:text-apple-darkText max-w-4xl mx-auto leading-[1.15] sm:leading-[1.08]"
      >
        Thoughtfully engineered.{' '}
        <span className="text-apple-indigo inline-block">
          Beautifully delivered.
        </span>
      </motion.h1>

      {/* 3. Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-apple-secondary dark:text-apple-darkSecondary max-w-2xl mx-auto leading-relaxed font-normal px-2"
      >
        I build modern web products, real-time systems, and intelligent automation—from the first interface to production.
      </motion.p>

      {/* Location meta note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-2.5 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary"
      >
        Calicut, Kerala, India · Available for remote opportunities.
      </motion.div>

      {/* 4. Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 sm:mt-8 flex flex-col xs:flex-row items-center justify-center gap-3 w-full sm:w-auto"
      >
        <a
          href="#work"
          className="w-full xs:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-apple-indigo text-white hover:opacity-90 active:scale-95 transition-all shadow-md shadow-apple-indigo/20 flex items-center justify-center gap-2 group"
        >
          <span>Explore my work</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          href="#contact"
          className="w-full xs:w-auto px-6 py-3 rounded-full text-sm font-semibold bg-white dark:bg-[#171719] text-apple-text dark:text-apple-darkText border border-black/[0.08] dark:border-white/[0.12] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] active:scale-95 transition-all shadow-apple-subtle flex items-center justify-center gap-1.5"
        >
          <span>Start a project</span>
          <ArrowUpRight className="w-4 h-4 opacity-70" />
        </a>
      </motion.div>

      {/* 5. Keynote Floating Hardware/Interface Presentation */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 sm:mt-14 w-full max-w-4xl rounded-3xl apple-glass shadow-apple-float border border-black/[0.08] dark:border-white/[0.12] p-4 sm:p-6 md:p-8 text-left relative overflow-hidden"
      >
        {/* Specular sheen reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none rounded-3xl" />

        {/* Top Product Hardware Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08] gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
            <span className="ml-1.5 sm:ml-2 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary font-medium truncate">
              rinshad_engineering_core.sys
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08] overflow-x-auto scrollbar-none self-start sm:self-auto max-w-full">
            {[
              { id: 'voice', label: 'Audio Stream', icon: Activity },
              { id: 'outbox', label: 'Outbox Node', icon: Radio },
              { id: 'terminal', label: 'Live Console', icon: Terminal },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-white dark:bg-[#222225] text-apple-indigo font-semibold shadow-apple-subtle'
                      : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Panel View */}
        <div className="py-5 sm:py-6 min-h-[190px] flex flex-col justify-center">
          {activeTab === 'voice' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-xs font-mono">
                <span className="text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span className="truncate">TWILIO MEDIA STREAMS ↔ GEMINI LIVE</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-apple-indigo/10 text-apple-indigo font-bold border border-apple-indigo/20 self-start sm:self-auto text-[11px]">
                  2.9s Connect Latency
                </span>
              </div>

              {/* Restrained Apple Audio Waveform */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 h-12 sm:h-14 bg-black/[0.02] dark:bg-white/[0.02] rounded-2xl border border-black/[0.04] dark:border-white/[0.06] px-3 sm:px-4 overflow-hidden">
                {[15, 45, 30, 80, 25, 95, 60, 85, 40, 75, 30, 90, 50, 70, 35, 60, 20, 80, 45, 65, 30, 50, 25, 40].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: [`${h * 0.25}%`, `${h}%`, `${h * 0.35}%`],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                    className="w-1 sm:w-1.5 rounded-full bg-apple-indigo/80 inline-block shadow-sm shrink-0"
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary pt-1 gap-1">
                <span>Format: 8kHz μ-law raw chunks</span>
                <span>Workload: 300+ calls/day (82% answer rate)</span>
              </div>
            </div>
          )}

          {activeTab === 'outbox' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-apple-secondary dark:text-apple-darkSecondary">
                  TRANSACTIONAL OUTBOX PATTERN · KAFKA (KRaft)
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1,000+ Events Exactly-Once</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-white/70 dark:bg-[#1f1f22] border border-black/[0.06] dark:border-white/[0.08]">
                  <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">01 / ATOMIC COMMIT</div>
                  <div className="font-bold text-apple-text dark:text-apple-darkText mt-0.5">PostgreSQL 16</div>
                  <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary mt-1">Single ACID transaction</div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 dark:bg-[#1f1f22] border border-apple-indigo/30 text-apple-indigo">
                  <div className="text-[10px] opacity-75">02 / SKIP LOCKED</div>
                  <div className="font-bold mt-0.5">Outbox Poller</div>
                  <div className="text-[10px] opacity-75 mt-1">Lock-free publisher</div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 dark:bg-[#1f1f22] border border-black/[0.06] dark:border-white/[0.08]">
                  <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary">03 / CONSUMER IDEMPOTENCY</div>
                  <div className="font-bold text-apple-text dark:text-apple-darkText mt-0.5">Kafka Consumer DLQ</div>
                  <div className="text-[10px] text-apple-secondary dark:text-apple-darkSecondary mt-1">Zero duplicate dispatches</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/50 border border-black/[0.05] dark:border-white/[0.08] font-mono text-xs space-y-1.5 overflow-x-auto">
              <div className="flex items-center gap-2 text-apple-secondary dark:text-apple-darkSecondary">
                <span className="text-apple-indigo font-bold">$</span>
                <span className="text-apple-text dark:text-apple-darkText font-medium">{terminalLine}</span>
              </div>
              <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.06] space-y-1 text-apple-secondary dark:text-apple-darkSecondary text-[10px] sm:text-[11px]">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={`truncate ${i === terminalLogs.length - 1 ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}`}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Ribbon */}
        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">Architecture: Microservices · KRaft · Qdrant RAG · Next.js</span>
          </div>
          <span className="text-apple-indigo font-medium shrink-0">99.98% Telemetry Stability</span>
        </div>
      </motion.div>
    </section>
  );
}

'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/lib/projects';
import { ArrowUpRight, ExternalLink, Activity, Radio, Cpu, Database, CheckCircle2, ShieldCheck, ShoppingBag, Send } from 'lucide-react';

interface TiltProjectCardProps {
  project: Project;
  idx: number;
  colSpan: string;
  onOpenProject: (projectId: string) => void;
}

export function TiltProjectCard({ project, idx, colSpan, onOpenProject }: TiltProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4deg', '4deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  // Apple-grade Custom Animated Interface Visualizations
  const renderProjectVisual = () => {
    // 1. Bank AI Calling Agent
    if (project.id === 'bank-ai-calling') {
      return (
        <div className="my-5 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-apple-indigo font-bold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>TWILIO MEDIA STREAMS ↔ GEMINI LIVE</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-apple-indigo/10 text-apple-indigo font-bold border border-apple-indigo/20">
              Latency: 2.9s (down from 5.0s)
            </span>
          </div>

          {/* Audio Waveform & Conversation State */}
          <div className="flex items-center justify-center gap-1 h-9 bg-white dark:bg-[#1a1a1c] rounded-xl border border-black/[0.05] dark:border-white/[0.08] px-3">
            {[20, 50, 30, 80, 45, 95, 60, 85, 35, 75, 40, 90, 55, 65, 30, 45, 20].map((h, i) => (
              <motion.span
                key={i}
                animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.05 }}
                className="w-1.5 rounded-full bg-apple-indigo inline-block"
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-apple-secondary dark:text-apple-darkSecondary">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>State: Bi-directional Full Duplex</span>
            </span>
            <span>300+ calls/day · 82% answer rate</span>
          </div>
        </div>
      );
    }

    // 2. Infinity Fleet Bulk SMS
    if (project.id === 'infinity-fleet') {
      return (
        <div className="my-5 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-apple-text dark:text-apple-darkText font-bold">
              <Send className="w-3.5 h-3.5 text-apple-indigo" />
              <span>BATCH DISPATCH ORCHESTRATION</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">98.5% Delivery Success</span>
          </div>

          {/* Visual Message Units Moving Through Stages */}
          <div className="grid grid-cols-4 gap-2 text-[10px] text-center pt-1">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">STAGE 1</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">CSV Stream</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-apple-indigo/30 text-apple-indigo">
              <div className="text-[9px] opacity-75">STAGE 2</div>
              <div className="font-bold">BullMQ Queue</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">STAGE 3</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">Telecom API</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold">
              <div className="text-[9px] opacity-75">IDEMPOTENT</div>
              <div>0 Duplicates</div>
            </div>
          </div>
        </div>
      );
    }

    // 3. Laundry Near Marketplace
    if (project.id === 'laundry-near') {
      return (
        <div className="my-5 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-apple-text dark:text-apple-darkText font-bold">
              <ShoppingBag className="w-3.5 h-3.5 text-apple-indigo" />
              <span>TWO-SIDED MARKETPLACE & PAYMENTS</span>
            </span>
            <span className="text-apple-indigo font-bold">500+ Registered Users</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-1">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">CUSTOMER</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">Pickup Booking</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">VENDOR / DRIVER</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">Order Pipeline</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
              <div className="text-[9px] opacity-75">RAZORPAY</div>
              <div className="font-bold">Webhook Verified</div>
            </div>
          </div>
        </div>
      );
    }

    // 4. Enterprise Bank Platform
    if (project.id === 'enterprise-bank-platform') {
      return (
        <div className="my-5 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-apple-text dark:text-apple-darkText font-bold">
              <Radio className="w-3.5 h-3.5 text-apple-indigo animate-pulse" />
              <span>TRANSACTIONAL OUTBOX & KAFKA</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">1,000+ Events Exactly-Once</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-1">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">ATOMIC COMMIT</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">PostgreSQL 16</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-apple-indigo/30 text-apple-indigo">
              <div className="text-[9px] opacity-75">POLL SKIP LOCKED</div>
              <div className="font-bold">Outbox Worker</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
              <div className="text-[9px] opacity-75">IDEMPOTENT</div>
              <div className="font-bold">Consumer DLQ</div>
            </div>
          </div>
        </div>
      );
    }

    // 5. Groundcrew RAG
    if (project.id === 'groundcrew-rag-agent') {
      return (
        <div className="my-5 p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-apple-text dark:text-apple-darkText font-bold">
              <Cpu className="w-3.5 h-3.5 text-apple-indigo" />
              <span>AUTONOMOUS MULTI-AGENT RAG</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">96.7% Critic Approval</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] text-center pt-1">
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08]">
              <div className="text-apple-secondary dark:text-apple-darkSecondary text-[9px]">QDRANT VECTOR</div>
              <div className="font-bold text-apple-text dark:text-apple-darkText">3,181 Issues</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-apple-indigo/30 text-apple-indigo">
              <div className="text-[9px] opacity-75">DENSE RETRIEVAL</div>
              <div className="font-bold">Transformers</div>
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-[#1a1a1c] border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
              <div className="text-[9px] opacity-75">CRITIC GUARD</div>
              <div className="font-bold">29/30 Verified</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenProject(project.id)}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      className={`${colSpan} group relative rounded-3xl apple-glass p-7 sm:p-9 cursor-pointer flex flex-col justify-between overflow-hidden shadow-apple-card hover:shadow-apple-float transition-all duration-300`}
    >
      <div>
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-apple-secondary dark:text-apple-darkSecondary">
            <span className="font-bold text-apple-indigo">0{idx + 1}</span>
            <span className="opacity-40">/</span>
            <span className="uppercase tracking-wider">{project.badge}</span>
          </div>

          {project.featuredMetric && (
            <div className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-apple-indigo/10 text-apple-indigo border border-apple-indigo/20">
              {project.featuredMetric.value} {project.featuredMetric.label}
            </div>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-5 group-hover:text-apple-indigo transition-colors duration-200">
          {project.title}
        </h3>

        {/* Role */}
        <p className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary mt-1.5 font-medium">
          Role: <span className="text-apple-text dark:text-apple-darkText">{project.role}</span>
        </p>

        {/* Description */}
        <p className="mt-3.5 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
          {project.description}
        </p>

        {/* Custom Visual Demo */}
        {renderProjectVisual()}

        {/* Key Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-apple-text dark:text-apple-darkText"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-2 py-1 rounded-lg text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary bg-black/[0.02] dark:bg-white/[0.02]">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-apple-indigo group-hover:underline">
          <span>Explore Case Study</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 rounded-full text-xs font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText flex items-center gap-1.5 transition"
            >
              <span>Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1 rounded-full text-xs font-mono bg-apple-indigo text-white font-semibold flex items-center gap-1.5 shadow-sm hover:opacity-90 transition"
            >
              <span>Live App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

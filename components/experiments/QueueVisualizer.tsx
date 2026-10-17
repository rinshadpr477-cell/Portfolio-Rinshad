'use client';

import React, { useState } from 'react';
import { Play, Plus, RefreshCw, AlertTriangle, RotateCcw } from 'lucide-react';

interface Job {
  id: string;
  name: string;
  status: 'waiting' | 'active' | 'completed' | 'failed';
  attempts: number;
}

export function QueueVisualizer() {
  const initialJobs: Job[] = [
    { id: 'job-101', name: 'Twilio Media Stream Chunk #1', status: 'waiting', attempts: 0 },
    { id: 'job-102', name: 'Gemini Live Speech Audio #2', status: 'waiting', attempts: 0 },
    { id: 'job-103', name: 'Campaign SMS Batch #3', status: 'waiting', attempts: 0 },
  ];

  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const waitingCount = jobs.filter((j) => j.status === 'waiting').length;
  const activeCount = jobs.filter((j) => j.status === 'active').length;
  const completedCount = jobs.filter((j) => j.status === 'completed').length;
  const failedCount = jobs.filter((j) => j.status === 'failed').length;

  const addJob = () => {
    const nextNum = jobs.length + 101;
    const newJob: Job = {
      id: `job-${nextNum}`,
      name: `Call Packet #${nextNum}`,
      status: 'waiting',
      attempts: 0,
    };
    setJobs((prev) => [...prev, newJob]);
  };

  const processJob = (shouldFail = false) => {
    const waitingIdx = jobs.findIndex((j) => j.status === 'waiting');
    if (waitingIdx === -1) return;

    setJobs((prev) => {
      const copy = [...prev];
      copy[waitingIdx] = { ...copy[waitingIdx], status: 'active', attempts: copy[waitingIdx].attempts + 1 };
      return copy;
    });

    setTimeout(() => {
      setJobs((prev) => {
        const copy = [...prev];
        if (copy[waitingIdx]) {
          copy[waitingIdx] = {
            ...copy[waitingIdx],
            status: shouldFail ? 'failed' : 'completed',
          };
        }
        return copy;
      });
    }, 600);
  };

  const retryFailed = () => {
    setJobs((prev) =>
      prev.map((j) => (j.status === 'failed' ? { ...j, status: 'waiting' } : j))
    );
  };

  const resetQueue = () => {
    setJobs(initialJobs);
  };

  return (
    <div className="p-6 rounded-2xl apple-glass flex flex-col justify-between min-h-[220px]">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block font-semibold">
            BullMQ Queue Pipeline Simulator
          </span>
          <span className="text-[10px] font-mono text-apple-indigo">
            Functional local queue state machine
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={addJob}
            className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-apple-text dark:text-apple-darkText hover:border-apple-indigo text-xs font-mono flex items-center gap-1 transition"
          >
            <Plus className="w-3 h-3 text-apple-indigo" />
            <span>Add</span>
          </button>
          <button
            onClick={() => processJob(false)}
            disabled={waitingCount === 0}
            className="px-2.5 py-1 rounded-lg bg-apple-indigo text-white font-semibold text-xs font-mono flex items-center gap-1 disabled:opacity-40 transition shadow-sm"
          >
            <Play className="w-3 h-3" />
            <span>Process</span>
          </button>
          <button
            onClick={() => processJob(true)}
            disabled={waitingCount === 0}
            className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono flex items-center gap-1 disabled:opacity-40 transition"
          >
            <AlertTriangle className="w-3 h-3" />
            <span>Fail</span>
          </button>
          {failedCount > 0 && (
            <button
              onClick={retryFailed}
              className="px-2.5 py-1 rounded-lg bg-apple-indigo/15 text-apple-indigo border border-apple-indigo/30 text-xs font-mono flex items-center gap-1 transition"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          )}
          <button
            onClick={resetQueue}
            className="p-1.5 rounded-lg text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition"
            title="Reset simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Queue State Counters */}
      <div className="grid grid-cols-4 gap-2 mb-4 font-mono text-xs">
        <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
          <div className="text-apple-secondary dark:text-apple-darkSecondary text-[10px] uppercase">Waiting</div>
          <div className="text-lg font-bold text-apple-text dark:text-apple-darkText">{waitingCount}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div className="text-blue-500 text-[10px] uppercase font-medium">Active</div>
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{activeCount}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <div className="text-emerald-600 dark:text-emerald-400 text-[10px] uppercase font-medium">Completed</div>
          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{completedCount}</div>
        </div>
        <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
          <div className="text-rose-500 text-[10px] uppercase font-medium">Failed</div>
          <div className="text-lg font-bold text-rose-600 dark:text-rose-400">{failedCount}</div>
        </div>
      </div>

      {/* Live Job Tiles */}
      <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
        {jobs.slice(-5).map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.07] text-xs font-mono"
          >
            <span className="text-apple-text dark:text-apple-darkText truncate mr-2">{job.name}</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold shrink-0 ${
                job.status === 'completed'
                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                  : job.status === 'failed'
                  ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                  : job.status === 'active'
                  ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 animate-pulse'
                  : 'bg-black/[0.05] dark:bg-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary'
              }`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

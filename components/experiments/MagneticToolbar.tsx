'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Zap, RefreshCw, Cpu } from 'lucide-react';

interface ToolItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function MagneticToolbar() {
  const tools: ToolItem[] = [
    { id: 'cli', label: 'Terminal', icon: Terminal },
    { id: 'sec', label: 'Security', icon: Shield },
    { id: 'perf', label: 'Latency', icon: Zap },
    { id: 'loop', label: 'Sync', icon: RefreshCw },
    { id: 'proc', label: 'Compute', icon: Cpu },
  ];

  const [activeTool, setActiveTool] = useState<string>('Terminal');
  const [offsets, setOffsets] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    setOffsets((prev) => ({
      ...prev,
      [id]: { x: dx * 0.28, y: dy * 0.28 },
    }));
  };

  const handlePointerLeave = (id: string) => {
    setOffsets((prev) => ({
      ...prev,
      [id]: { x: 0, y: 0 },
    }));
  };

  return (
    <div className="p-4 sm:p-8 rounded-2xl apple-glass flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px]">
      <div className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary mb-4 sm:mb-6 uppercase tracking-wider text-center">
        Magnetic Attraction Dock (Move cursor near buttons)
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] shadow-inner max-w-full overflow-x-auto scrollbar-none">
        {tools.map((t) => {
          const Icon = t.icon;
          const offset = offsets[t.id] || { x: 0, y: 0 };
          const isSelected = activeTool === t.label;

          return (
            <button
              key={t.id}
              onClick={() => setActiveTool(t.label)}
              onPointerMove={(e) => handlePointerMove(e, t.id)}
              onPointerLeave={() => handlePointerLeave(t.id)}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: 'transform 0.15s cubic-bezier(0.2, 0.9, 0.3, 1), background-color 0.2s',
              }}
              className={`p-2.5 sm:p-3 rounded-xl flex items-center justify-center relative transition-all cursor-pointer ${
                isSelected
                  ? 'bg-apple-indigo text-white shadow-md shadow-apple-indigo/25'
                  : 'bg-white dark:bg-[#1f1f22] text-apple-text dark:text-apple-darkText hover:text-apple-indigo border border-black/[0.05] dark:border-white/[0.08]'
              }`}
              aria-label={t.label}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">
        Selected Action: <span className="text-apple-indigo font-semibold">{activeTool}</span>
      </div>
    </div>
  );
}

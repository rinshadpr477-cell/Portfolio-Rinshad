'use client';

import React, { useState } from 'react';

export function DonutProgress() {
  const [percent, setPercent] = useState<number>(78);

  const radius = 54;
  const strokeWidth = 9;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="p-8 rounded-2xl apple-glass flex flex-col items-center justify-center min-h-[220px]">
      <div className="text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary mb-4 uppercase tracking-wider">
        Interactive Circular Gauge
      </div>

      <div className="relative flex items-center justify-center">
        <svg width="140" height="140" className="transform -rotate-90">
          {/* Track */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            className="text-black/[0.08] dark:text-white/[0.1]"
            strokeWidth={strokeWidth}
          />
          {/* Animated Indicator */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="transparent"
            stroke="#5E5CE6"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
          />
        </svg>

        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold font-mono text-apple-text dark:text-apple-darkText">{percent}%</span>
          <span className="text-[10px] font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase">Delivery</span>
        </div>
      </div>

      {/* Preset Controls */}
      <div className="flex items-center gap-2 mt-5">
        {[25, 50, 78, 98.5].map((val) => (
          <button
            key={val}
            onClick={() => setPercent(val)}
            className={`px-3 py-1 rounded-full text-xs font-mono border transition ${
              percent === val
                ? 'bg-apple-indigo text-white border-apple-indigo font-bold shadow-sm'
                : 'bg-black/[0.03] dark:bg-white/[0.04] border-black/[0.06] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
            }`}
          >
            {val}%
          </button>
        ))}
      </div>
    </div>
  );
}

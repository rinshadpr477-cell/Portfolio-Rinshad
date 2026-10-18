'use client';

import React, { useState, useRef, useEffect } from 'react';

export function ProximityType() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "ENGINEERING·AT·SCALE";
  const [charWeights, setCharWeights] = useState<number[]>(text.split('').map(() => 400));
  const [charScales, setCharScales] = useState<number[]>(text.split('').map(() => 1));

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const charElements = containerRef.current.querySelectorAll<HTMLSpanElement>('[data-char-idx]');
    const newWeights: number[] = [];
    const newScales: number[] = [];

    charElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const maxRadius = 130;
      const proximity = Math.max(0, 1 - distance / maxRadius);

      newWeights.push(Math.round(400 + proximity * 450));
      newScales.push(+(1 + proximity * 0.35).toFixed(2));
    });

    setCharWeights(newWeights);
    setCharScales(newScales);
  };

  const handlePointerLeave = () => {
    setCharWeights(text.split('').map(() => 400));
    setCharScales(text.split('').map(() => 1));
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="p-4 sm:p-8 rounded-2xl bg-studio-surface border border-studio-border flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] select-none cursor-crosshair overflow-hidden relative"
    >
      <div className="text-[10px] sm:text-[11px] font-mono text-studio-muted mb-3 sm:mb-4 uppercase tracking-wider text-center">
        Hover / touch across letters to displace font weight & scale
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[1px] sm:gap-1 max-w-full">
        {text.split('').map((char, i) => (
          <span
            key={i}
            data-char-idx={i}
            style={{
              fontWeight: charWeights[i],
              transform: `scale(${charScales[i]})`,
              color: charWeights[i] > 550 ? '#8B91FF' : 'inherit',
              transition: 'transform 0.15s ease-out, font-weight 0.12s ease-out, color 0.15s ease',
            }}
            className="inline-block text-sm xs:text-base sm:text-2xl md:text-3xl font-mono tracking-tight"
          >
            {char === '·' ? ' • ' : char}
          </span>
        ))}
      </div>

      <div className="mt-4 text-[11px] font-mono text-studio-muted">
        Active Weight Avg: {Math.round(charWeights.reduce((a, b) => a + b, 0) / charWeights.length)}
      </div>
    </div>
  );
}

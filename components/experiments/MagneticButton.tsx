'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function MagneticButton() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    setOffset({ x: dx * 0.35, y: dy * 0.35 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
    setPressed(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-8 rounded-2xl apple-glass flex flex-col items-center justify-center min-h-[220px]"
    >
      <div className="text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary mb-6 uppercase tracking-wider">
        Spring-Tethered Magnetic Button
      </div>

      <motion.button
        animate={{
          x: offset.x,
          y: offset.y,
          scale: pressed ? 0.94 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        className="px-7 py-3.5 rounded-full font-semibold text-sm bg-apple-indigo text-white shadow-lg shadow-apple-indigo/25 flex items-center gap-2 cursor-pointer select-none active:opacity-90"
      >
        <Sparkles className="w-4 h-4" />
        <span>Execute Transaction</span>
      </motion.button>

      <div className="mt-5 text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">
        Spring Vector: [{Math.round(offset.x)}px, {Math.round(offset.y)}px]
      </div>
    </div>
  );
}

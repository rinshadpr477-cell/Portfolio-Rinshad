'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DitherGenerator() {
  const [colorA, setColorA] = useState<string>('#0D111B');
  const [colorB, setColorB] = useState<string>('#8B91FF');
  const [density, setDensity] = useState<number>(65);
  const [copied, setCopied] = useState<boolean>(false);

  const cssSnippet = `background: radial-gradient(circle at 50% 50%, ${colorB} 0%, ${colorA} 100%);
filter: contrast(${density}%);`;

  const copyCSS = async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <div className="p-6 rounded-2xl bg-studio-surface border border-studio-border flex flex-col justify-between min-h-[220px]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-mono text-studio-muted uppercase tracking-wider">
          Procedural Dither & Gradient Canvas
        </span>
        <button
          onClick={copyCSS}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border border-studio-border bg-studio-elevated text-studio-text hover:border-studio-accent transition"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'Copy CSS'}</span>
        </button>
      </div>

      {/* Live Preview Area */}
      <div
        className="h-28 rounded-xl border border-studio-border overflow-hidden relative flex items-center justify-center shadow-inner"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorB} 0%, ${colorA} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: `${Math.max(4, Math.round(20 - density * 0.15))}px ${Math.max(4, Math.round(20 - density * 0.15))}px`,
          }}
        />
        <span className="relative z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-white border border-white/20">
          Dither Matrix Density: {density}%
        </span>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-3 mt-4 items-center">
        <div>
          <label className="text-[10px] font-mono text-studio-muted block mb-1">Color 1</label>
          <input
            type="color"
            value={colorA}
            onChange={(e) => setColorA(e.target.value)}
            className="w-full h-8 bg-studio-elevated border border-studio-border rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono text-studio-muted block mb-1">Color 2</label>
          <input
            type="color"
            value={colorB}
            onChange={(e) => setColorB(e.target.value)}
            className="w-full h-8 bg-studio-elevated border border-studio-border rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <label className="text-[10px] font-mono text-studio-muted block mb-1">Density</label>
          <input
            type="range"
            min="20"
            max="100"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-full accent-studio-accent cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

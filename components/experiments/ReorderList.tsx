'use client';

import React, { useState } from 'react';
import { GripVertical, ChevronUp, ChevronDown } from 'lucide-react';

export function ReorderList() {
  const [items, setItems] = useState([
    { id: '1', title: 'Parse CSV Chunk (500 records)' },
    { id: '2', title: 'Generate Cryptographic Idempotency Key' },
    { id: '3', title: 'Enqueue Job in BullMQ Redis' },
    { id: '4', title: 'Stream Outbound Call via Twilio Media' },
  ]);

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const move = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const updated = [...items];
    const [item] = updated.splice(from, 1);
    updated.splice(to, 0, item);
    setItems(updated);
  };

  const handleDragStart = (idx: number) => {
    setDraggedIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    move(draggedIdx, idx);
    setDraggedIdx(idx);
  };

  return (
    <div className="p-4 sm:p-6 rounded-2xl apple-glass flex flex-col justify-between min-h-[220px]">
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-3">
        <span className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider">
          Task Pipeline Reordering (Drag or Keyboard)
        </span>
        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">Order: Synchronized</span>
      </div>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragOver={(e) => handleDragOver(e, idx)}
            onDragEnd={() => setDraggedIdx(null)}
            className={`flex items-center justify-between px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border transition-all ${
              draggedIdx === idx
                ? 'bg-apple-indigo/10 border-apple-indigo scale-[1.02] shadow-sm'
                : 'bg-white/80 dark:bg-[#1a1a1c] border-black/[0.06] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.2]'
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
              <GripVertical className="w-4 h-4 text-apple-secondary dark:text-apple-darkSecondary cursor-grab shrink-0" />
              <span className="text-xs font-mono text-apple-indigo font-semibold shrink-0">0{idx + 1}</span>
              <span className="text-xs font-medium text-apple-text dark:text-apple-darkText truncate">{item.title}</span>
            </div>

            {/* Keyboard-accessible Up/Down controls */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                disabled={idx === 0}
                onClick={() => move(idx, idx - 1)}
                aria-label={`Move ${item.title} up`}
                className="p-1 rounded text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText disabled:opacity-30 cursor-pointer"
              >
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
              <button
                disabled={idx === items.length - 1}
                onClick={() => move(idx, idx + 1)}
                aria-label={`Move ${item.title} down`}
                className="p-1 rounded text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText disabled:opacity-30 cursor-pointer"
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text' | 'action'>('default');
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer (mouse/trackpad), not touch devices
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor]');
      if (interactive) {
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorType('action');
          setCursorLabel(customText);
        } else if (interactive.tagName === 'INPUT' || interactive.tagName === 'TEXTAREA') {
          setCursorType('text');
          setCursorLabel('');
        } else {
          setCursorType('pointer');
          setCursorLabel('');
        }
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (!enabled || !visible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-apple-indigo pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorType === 'text' ? 0 : 1,
        }}
      />
      {/* iPadOS-style reactive subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: cursorType === 'action' ? 68 : cursorType === 'pointer' ? 38 : 24,
          height: cursorType === 'action' ? 68 : cursorType === 'pointer' ? 38 : 24,
          backgroundColor:
            cursorType === 'action'
              ? 'rgba(94, 92, 230, 0.12)'
              : cursorType === 'pointer'
              ? 'rgba(94, 92, 230, 0.06)'
              : 'transparent',
          borderColor:
            cursorType === 'action'
              ? 'rgba(94, 92, 230, 0.5)'
              : cursorType === 'pointer'
              ? 'rgba(94, 92, 230, 0.25)'
              : 'rgba(142, 142, 147, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorLabel && (
          <span className="text-[9px] font-mono tracking-wider font-semibold text-apple-indigo uppercase text-center px-1">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroLoader({ onComplete }: { onComplete?: () => void }) {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If user prefers reduced motion or already loaded once, skip
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setShow(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            onComplete?.();
          }, 180);
          return 100;
        }
        return prev + 25;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-white dark:bg-[#08080A] flex flex-col items-center justify-center p-6 select-none pointer-events-none"
        >
          <div className="flex flex-col items-center space-y-4 max-w-xs text-center">
            {/* Apple Minimal Wordmark */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-apple-text dark:text-apple-darkText">
              <span className="w-2 h-2 rounded-full bg-apple-indigo animate-pulse" />
              <span>RINSHAD.PR</span>
            </div>

            {/* Restrained Progress Indicator */}
            <div className="w-32 h-1 bg-black/[0.06] dark:bg-white/[0.1] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-apple-indigo rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

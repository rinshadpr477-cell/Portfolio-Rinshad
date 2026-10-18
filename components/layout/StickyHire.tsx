'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function StickyHire() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const contact = document.getElementById('contact');

      if (!hero || !contact) return;

      const heroRect = hero.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();

      // Show after hero is scrolled past, hide when reaching contact
      const pastHero = heroRect.bottom < 100;
      const beforeContact = contactRect.top > window.innerHeight - 100;

      setVisible(pastHero && beforeContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href="#contact"
        aria-label="Available for hire - contact Rinshad"
        className="px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full font-mono text-xs font-semibold apple-glass-pill shadow-apple-float text-apple-text dark:text-apple-darkText hover:text-apple-indigo active:scale-95 transition-all flex items-center gap-2 group border border-black/[0.08] dark:border-white/[0.14]"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <span className="hidden xs:inline">Available for Hire</span>
        <span className="xs:hidden font-medium">Hire</span>
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>
    </div>
  );
}

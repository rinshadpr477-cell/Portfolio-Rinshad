'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Command, Clock, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { formatTimeInCalicut } from '@/lib/utils';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function Navbar({ onOpenCommandPalette, soundEnabled, onToggleSound }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calicutTime, setCalicutTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'experiments', 'services', 'about', 'contact'];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveSection(s);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    setCalicutTime(formatTimeInCalicut());
    const interval = setInterval(() => {
      setCalicutTime(formatTimeInCalicut());
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Experiments', href: '#experiments', id: 'experiments' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* iOS-Inspired Liquid Glass Floating Navigation Bar */}
        <div
          className={`w-full pointer-events-auto rounded-full transition-all duration-500 flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 ${
            scrolled
              ? 'apple-glass-pill border border-black/[0.08] dark:border-white/[0.12] shadow-apple-float bg-white/80 dark:bg-[#171719]/80 backdrop-blur-2xl'
              : 'bg-white/60 dark:bg-[#171719]/60 backdrop-blur-xl border border-black/[0.04] dark:border-white/[0.06] shadow-apple-subtle'
          }`}
        >
          {/* Brand Wordmark & Calicut Local Time */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="group flex items-center gap-2 font-semibold text-sm tracking-tight text-apple-text dark:text-apple-darkText hover:text-apple-indigo transition"
            >
              <span className="w-2 h-2 rounded-full bg-apple-indigo group-hover:scale-125 transition-transform duration-300" />
              <span className="tracking-wider text-xs font-mono font-bold">RINSHAD.PR</span>
            </a>

            {/* Calicut Live Time Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.08] text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Calicut:</span>
              <span className="text-apple-text dark:text-apple-darkText font-medium">{calicutTime || '11:12 PM'}</span>
            </div>
          </div>

          {/* Desktop Navigation Links with Animated Pill Indicator */}
          <nav className="hidden md:flex items-center gap-1 relative px-1 py-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-colors duration-200 z-10 ${
                    isActive
                      ? 'text-apple-text dark:text-apple-darkText font-semibold'
                      : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/[0.12] -z-10 shadow-sm"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Utilities & CTA */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Cmd+K Quick Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary text-[11px] font-mono transition"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              aria-label={soundEnabled ? 'Disable UI sound' : 'Enable UI sound'}
              className="p-1.5 sm:p-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.05] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText transition"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-apple-indigo" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 sm:p-2 rounded-full bg-black/[0.03] dark:bg-white/[0.04] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.05] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-apple-indigo" />
              )}
            </button>

            {/* Restrained Apple "Let's talk" Pill Action - Visible on tablets and desktops */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-apple-text dark:bg-apple-darkText text-apple-bg dark:text-apple-darkBg hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <span>Let&apos;s talk</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden p-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-apple-text dark:text-apple-darkText border border-black/[0.06] dark:border-white/[0.08]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Touch-Friendly Mobile Drawer with High-Opacity Apple Glass */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto max-w-5xl mx-auto mt-2.5 p-5 rounded-3xl bg-[#F6F6F9]/96 dark:bg-[#171719]/96 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.14] shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3.5 rounded-xl transition flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-black/[0.06] dark:bg-white/[0.12] text-apple-text dark:text-apple-darkText font-semibold'
                      : 'text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] font-mono text-apple-secondary dark:text-apple-darkSecondary opacity-60">#{link.id}</span>
                </a>
              ))}

              {/* Mobile Command Palette trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full text-left py-2.5 px-3.5 rounded-xl border border-dashed border-black/[0.1] dark:border-white/[0.12] text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText flex items-center justify-between mt-1"
              >
                <span className="flex items-center gap-2">
                  <Command className="w-3.5 h-3.5 text-apple-indigo" />
                  <span>Search & Commands</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.08]">⌘K</span>
              </button>

              <div className="pt-3.5 mt-1 border-t border-black/[0.08] dark:border-white/[0.1] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">
                  <Clock className="w-3.5 h-3.5 text-apple-indigo" />
                  <span>Calicut: {calicutTime}</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-apple-indigo text-white shadow-md active:scale-95 transition-transform"
                >
                  Start a project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

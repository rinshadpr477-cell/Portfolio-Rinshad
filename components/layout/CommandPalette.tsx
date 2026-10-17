'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Search, FolderGit2, Sparkles, Sun, Moon, Copy, Check, ArrowRight, CornerDownLeft, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { PROJECTS } from '@/lib/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectProject }: CommandPaletteProps) {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const navActions = [
    { id: 'nav-work', title: 'Selected Work', category: 'Navigation', icon: FolderGit2, action: () => scrollTo('#work') },
    { id: 'nav-experiments', title: 'Interactive Experiments', category: 'Navigation', icon: Sparkles, action: () => scrollTo('#experiments') },
    { id: 'nav-services', title: 'Engineering Services', category: 'Navigation', icon: ArrowRight, action: () => scrollTo('#services') },
    { id: 'nav-process', title: 'Process & Timeline', category: 'Navigation', icon: ArrowRight, action: () => scrollTo('#process') },
    { id: 'nav-stack', title: 'Technology Map', category: 'Navigation', icon: ArrowRight, action: () => scrollTo('#stack') },
    { id: 'nav-about', title: 'About Rinshad', category: 'Navigation', icon: ArrowRight, action: () => scrollTo('#about') },
    { id: 'nav-contact', title: 'Contact & Hire', category: 'Navigation', icon: ArrowRight, action: () => scrollTo('#contact') },
  ];

  const projectActions = PROJECTS.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: p.subtitle,
    category: 'Projects',
    icon: FolderGit2,
    action: () => {
      if (onSelectProject) {
        onSelectProject(p.id);
      } else {
        scrollTo('#work');
      }
    },
  }));

  const systemActions = [
    {
      id: 'sys-theme',
      title: theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
      category: 'System',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => toggleTheme(),
    },
    {
      id: 'sys-copy-email',
      title: 'Copy Email Address (rinshadpr477@gmail.com)',
      category: 'System',
      icon: copied ? Check : Copy,
      action: async () => {
        try {
          await navigator.clipboard.writeText('rinshadpr477@gmail.com');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {}
      },
    },
  ];

  const allActions = [...navActions, ...projectActions, ...systemActions];

  const filtered = allActions.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      ('subtitle' in item && (item.subtitle as string).toLowerCase().includes(q))
    );
  });

  const scrollTo = (hash: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        onClose();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/50 dark:bg-black/70 backdrop-blur-xl flex items-start justify-center pt-24 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#1c1c1e] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-apple-float overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.08]">
          <Search className="w-5 h-5 text-apple-secondary dark:text-apple-darkSecondary mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, sections, or switch theme..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-apple-text dark:text-apple-darkText placeholder-apple-secondary dark:placeholder-apple-darkSecondary focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-apple-secondary dark:text-apple-darkSecondary">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl cursor-pointer text-sm transition-all ${
                    isSelected
                      ? 'bg-apple-indigo text-white shadow-sm'
                      : 'text-apple-text dark:text-apple-darkText hover:bg-black/[0.03] dark:hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-apple-secondary dark:text-apple-darkSecondary'}`} />
                    <span className="truncate font-medium">{item.title}</span>
                    <span className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-black/[0.04] dark:bg-white/[0.06] text-apple-secondary dark:text-apple-darkSecondary'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  {isSelected && (
                    <CornerDownLeft className="w-3.5 h-3.5 text-white shrink-0 ml-2" />
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between px-5 py-2.5 border-t border-black/[0.06] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.02] text-[11px] text-apple-secondary dark:text-apple-darkSecondary font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div>⌘ / Ctrl + K</div>
        </div>
      </div>
    </div>
  );
}

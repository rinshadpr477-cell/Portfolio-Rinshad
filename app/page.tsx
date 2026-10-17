'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/layout/CommandPalette';
import { StickyHire } from '@/components/layout/StickyHire';
import { IntroLoader } from '@/components/layout/IntroLoader';
import { TelemetryTicker } from '@/components/layout/TelemetryTicker';
import { LivingBackground } from '@/components/background/LivingBackground';
import { Hero } from '@/components/sections/Hero';
import { ScrollStory } from '@/components/sections/ScrollStory';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Experiments } from '@/components/sections/Experiments';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { TechStack } from '@/components/sections/TechStack';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { ProjectDialog } from '@/components/projects/ProjectDialog';
import { PROJECTS } from '@/lib/projects';
import { sound } from '@/lib/sound';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('mvp');

  const toggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    sound.setEnabled(nextVal);
    if (nextVal) {
      sound.playClick();
    }
  };

  const handleOpenProject = (id: string) => {
    if (soundEnabled) sound.playClick();
    setActiveProjectId(id);
  };

  const handlePreselectService = (svc: string) => {
    if (soundEnabled) sound.playClick();
    setPreselectedService(svc);
  };

  const activeProject = activeProjectId
    ? PROJECTS.find((p) => p.id === activeProjectId) || null
    : null;

  return (
    <div className="relative min-h-screen bg-apple-bg dark:bg-apple-darkBg text-apple-text dark:text-apple-darkText transition-colors duration-300 overflow-x-hidden">
      {/* Apple Keynote Ambient Illumination */}
      <LivingBackground />

      {/* Minimalist Entrance Splash */}
      <IntroLoader />

      {/* iOS Floating Liquid Glass Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Editorial Content Stream */}
      <main className="relative z-10">
        <Hero />
        <TelemetryTicker />
        <ScrollStory />
        <SelectedWork onOpenProject={handleOpenProject} />
        <Experiments />
        <Services onPreselectService={handlePreselectService} />
        <Process />
        <TechStack onOpenProject={handleOpenProject} />
        <About />
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Hire Action */}
      <StickyHire />

      {/* Spotlight Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(id) => {
          setActiveProjectId(id);
        }}
      />

      {/* Apple Pro Full-Screen Case Study Modal */}
      <ProjectDialog
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
        onSelectProject={(id) => setActiveProjectId(id)}
      />
    </div>
  );
}

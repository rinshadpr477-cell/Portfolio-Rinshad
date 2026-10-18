'use client';

import React from 'react';
import { SERVICES } from '@/lib/services';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { motion } from 'framer-motion';

interface ServicesProps {
  onPreselectService?: (serviceType: string) => void;
}

export function Services({ onPreselectService }: ServicesProps) {
  const handleSelectService = (preselect: string) => {
    if (onPreselectService) {
      onPreselectService(preselect);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="pb-8 sm:pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
            03 / Services
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
            Tailored engineering capabilities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
            Focused engineering partnerships for founders and engineering teams. Clear technical scope, weekly demonstrations, and production-ready handoff.
          </p>
        </div>
      </MotionReveal>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-3xl apple-glass p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-apple-card hover:shadow-apple-float transition-all relative group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-xs font-mono text-apple-indigo font-bold">
                  {service.code}
                </span>
                <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.typicalTimeline}</span>
                </span>
              </div>

              {/* Title & Best For */}
              <h3 className="text-2xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-6 group-hover:text-apple-indigo transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary mt-2">
                {service.bestFor}
              </p>
              <p className="text-sm text-apple-secondary dark:text-apple-darkSecondary mt-4 leading-relaxed font-sans">
                {service.tagline}
              </p>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-6 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
                <div className="text-xs font-mono text-apple-text dark:text-apple-darkText uppercase tracking-wider font-semibold">
                  Scope & Deliverables
                </div>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary">
                      <Check className="w-4 h-4 text-apple-indigo shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA to preselect service in contact form */}
            <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
              <button
                onClick={() => handleSelectService(service.contactPreselect)}
                className="w-full py-3 px-4 rounded-full font-mono text-xs font-semibold bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] hover:bg-apple-indigo hover:text-white hover:border-apple-indigo text-apple-text dark:text-apple-darkText transition-all flex items-center justify-center gap-2 group-hover:shadow-sm cursor-pointer"
              >
                <span>Select for Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scope Disclaimer */}
      <MotionReveal delay={0.2} className="mt-10">
        <div className="p-4 rounded-2xl apple-glass text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary text-center max-w-2xl mx-auto shadow-apple-subtle">
          * Final scope, milestones, and timeline are formally agreed upon after discovery and technical specification.
        </div>
      </MotionReveal>
    </section>
  );
}

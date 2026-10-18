'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Calendar, Send, CheckCircle2, ArrowRight, ExternalLink, AlertCircle } from 'lucide-react';
import { PortfolioAssistant } from '@/components/chat/PortfolioAssistant';
import { MotionReveal } from '@/components/ui/MotionReveal';

interface ContactProps {
  preselectedService?: string;
}

export function Contact({ preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'mvp',
    budget: '$1,000 – $3,000',
    timeline: '2–4 weeks',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'delivered' | 'fallback' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fallbackMailtoUrl, setFallbackMailtoUrl] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in your name, email, and project details.');
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      if (data.delivered) {
        setStatus('delivered');
        setStatusMessage(data.message || 'Thank you! Your message was sent directly to Rinshad.');
      } else {
        setStatus('fallback');
        setStatusMessage(data.message);
        setFallbackMailtoUrl(data.fallbackMailto);
      }
    } catch (err: any) {
      setStatus('error');
      setStatusMessage(err.message || 'An unexpected error occurred. Please contact via email.');
    } finally {
      setLoading(false);
    }
  };

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="pb-8 sm:pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
            07 / Contact
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
            Whether you are building an MVP from zero, optimizing real-time queues, or looking for an engineer to join your team.
          </p>
        </div>
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-8 sm:mt-12 items-start">
        {/* Left Column: Direct Links & AI Assistant */}
        <div className="lg:col-span-5 space-y-6 w-full">
          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:rinshadpr477@gmail.com"
              className="p-3.5 sm:p-4 rounded-2xl apple-glass shadow-apple-subtle hover:border-apple-indigo transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0 mr-2">
                <div className="p-2 rounded-xl bg-apple-indigo/10 text-apple-indigo group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">Direct Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-apple-text dark:text-apple-darkText font-mono truncate">rinshadpr477@gmail.com</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-apple-secondary dark:text-apple-darkSecondary group-hover:text-apple-indigo group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918593923135"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 sm:p-4 rounded-2xl apple-glass shadow-apple-subtle hover:border-emerald-500/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0 mr-2">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">WhatsApp</div>
                  <div className="text-xs sm:text-sm font-semibold text-apple-text dark:text-apple-darkText font-mono truncate">+91 8593923135</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-apple-secondary dark:text-apple-darkSecondary group-hover:text-emerald-500 transition-colors shrink-0" />
            </a>

            {/* Intro Call */}
            <div className="p-3.5 sm:p-4 rounded-2xl apple-glass shadow-apple-subtle flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0 mr-2">
                <div className="p-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-apple-secondary dark:text-apple-darkSecondary shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">Discovery Call</div>
                  <div className="text-xs sm:text-sm font-semibold text-apple-text dark:text-apple-darkText font-mono truncate">15-Minute Intro</div>
                </div>
              </div>
              {bookingUrl ? (
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-apple-indigo text-white font-mono text-xs font-semibold hover:opacity-90 transition shrink-0"
                >
                  Schedule
                </a>
              ) : (
                <a
                  href="mailto:rinshadpr477@gmail.com?subject=Intro%20Call%20Request%20-%20Rinshad%20PR&body=Hi%20Rinshad,%0A%0AI'd%20like%20to%20schedule%20a%20brief%20call%20to%20discuss%20an%20engineering%20opportunity.%0A%0AAvailable%20times:"
                  className="px-3 sm:px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-apple-text dark:text-apple-darkText hover:bg-apple-indigo hover:text-white font-mono text-xs transition shrink-0"
                >
                  Request Time
                </a>
              )}
            </div>
          </div>

          {/* AI Portfolio Assistant in Apple Glass Enclosure */}
          <div className="rounded-3xl apple-glass p-0.5 sm:p-1 shadow-apple-subtle">
            <PortfolioAssistant />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 w-full">
          <div className="p-5 sm:p-8 md:p-10 rounded-3xl apple-glass shadow-apple-float">
            <h3 className="text-2xl font-bold tracking-tight text-apple-text dark:text-apple-darkText">
              Project Specification
            </h3>
            <p className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary mt-1">
              Share details below for direct response within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                    Name <span className="text-apple-indigo">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText placeholder-apple-secondary focus:outline-none focus:border-apple-indigo transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                    Email <span className="text-apple-indigo">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText placeholder-apple-secondary focus:outline-none focus:border-apple-indigo transition"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                  Project Engagement Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText focus:outline-none focus:border-apple-indigo transition"
                >
                  <option value="mvp">Full-Stack Product Development (MVP)</option>
                  <option value="backend">Backend & Automation Engineering (APIs, Queues)</option>
                  <option value="integrations">Payments & AI Integrations (Razorpay, Twilio, Gemini)</option>
                  <option value="remote-role">Full-Time Software Engineer Role</option>
                  <option value="consultation">Technical Consultation / Architecture Review</option>
                </select>
              </div>

              {/* Budget Range & Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText focus:outline-none focus:border-apple-indigo transition"
                  >
                    <option value="< $1,000">&lt; $1,000</option>
                    <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                    <option value="$3,000 – $7,000">$3,000 – $7,000</option>
                    <option value="$7,000+">$7,000+</option>
                    <option value="Flexible / Salary">Flexible / Salary / Open to discuss</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText focus:outline-none focus:border-apple-indigo transition"
                  >
                    <option value="Immediate (< 2 weeks)">Immediate (&lt; 2 weeks)</option>
                    <option value="2–4 weeks">2–4 weeks</option>
                    <option value="1–2 months">1–2 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider block mb-2">
                  Message & Scope Outline <span className="text-apple-indigo">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Outline key workflows, goals, APIs, or engineering challenges..."
                  className="w-full bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-apple-text dark:text-apple-darkText placeholder-apple-secondary focus:outline-none focus:border-apple-indigo resize-none transition"
                />
              </div>

              {/* Feedback States */}
              {status === 'delivered' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-mono flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'fallback' && (
                <div className="p-4 rounded-xl apple-glass border border-apple-indigo/40 text-xs font-mono space-y-3">
                  <div className="text-apple-text dark:text-apple-darkText font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-apple-indigo" />
                    <span>Inquiry Ready to Send:</span>
                  </div>
                  <p className="text-apple-secondary dark:text-apple-darkSecondary">{statusMessage}</p>
                  <a
                    href={fallbackMailtoUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-indigo text-white font-semibold hover:opacity-90 shadow-sm transition"
                  >
                    <span>Send via Email Client</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs font-mono flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold bg-apple-text dark:bg-apple-darkText text-apple-bg dark:text-apple-darkBg hover:opacity-90 shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Processing Transmission...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

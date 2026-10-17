'use client';

import React from 'react';
import { Mail, MapPin, CheckCircle2, ArrowUpRight, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { MotionReveal } from '@/components/ui/MotionReveal';
import { motion } from 'framer-motion';

export function About() {
  const experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'AIKING Software Solutions',
      period: 'June 2026 – Present',
      location: 'Pune, India',
      highlights: [
        'Engineered two production platforms: an AI voice calling platform (banking) and a bulk SMS platform (logistics) with a team of 5 developers and 2 DevOps engineers.',
        'Contributed to a real-time voice pipeline (Twilio Media Streams + Gemini Live API) serving 300+ calls/day at ~2.9s connect latency with 82% answer rate.',
        'Developed backend for a CSV-driven bulk SMS platform handling 15,000+ messages/campaign at 98.5% delivery success with zero duplicate messages.',
        'Built Redis/BullMQ job queues, RBAC authentication, Razorpay subscription billing, and Dockerized microservices deployed to AWS EC2 behind NGINX.'
      ]
    },
    {
      role: 'Full Stack Developer (MERN)',
      company: 'Luminar Technolab',
      period: 'September 2025 – June 2026',
      location: 'Kerala, India',
      highlights: [
        'Shipped full-stack web applications incorporating real-time communication and clean architecture.',
        'Designed RESTful APIs and normalized schemas for LaundryNear, a service marketplace supporting 500+ registered users with Razorpay checkout.',
        'Engineered JWT/OAuth authentication with granular role-based access control (RBAC).',
        'Deployed production services using Docker, NGINX SSL/TLS termination, and CI/CD automation pipelines.'
      ]
    }
  ];

  const education = {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Visvesvaraya Technological University',
    period: '2021 – 2025',
    location: 'Bangalore, India',
    coursework: 'Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems (RDBMS/SQL, Distributed DBs), Operating Systems.'
  };

  const capabilities = [
    'Full-stack product development',
    'Real-time streaming & WebSockets',
    'Background queue processing',
    'Idempotent API & schema design',
    'Applied AI & voice telephony',
    'Containerized production deployment'
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-apple-indigo font-semibold">
            06 / About Rinshad
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-apple-text dark:text-apple-darkText mt-3">
            Engineered for longevity.
          </h2>
          <p className="mt-3 text-base text-apple-secondary dark:text-apple-darkSecondary max-w-2xl font-normal leading-relaxed">
            I am a software engineer focused on building useful web products, reliable distributed backends, and responsive frontend experiences.
          </p>
        </div>
      </MotionReveal>

      {/* Main Grid: Photo Glass Enclosure + Engineering Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
        {/* Left: Verified Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative sticky top-28"
        >
          <div className="rounded-3xl apple-glass p-4 shadow-apple-card relative overflow-hidden group">
            {/* Real verified picture */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03]">
              <img
                src="/WhatsApp Image 2026-05-01 at 10.26.49 AM.jpeg"
                alt="Rinshad PR - Software Engineer"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl apple-glass-pill shadow-apple-subtle">
                <div className="font-bold text-base text-apple-text dark:text-apple-darkText font-mono">Rinshad PR</div>
                <div className="text-xs text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-1.5 mt-0.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-apple-indigo" />
                  <span>Calicut, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Quick Profiles links */}
            <div className="mt-4 flex items-center justify-between px-2 pt-1">
              <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">Direct Channels</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/rinshadpr477-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/rinshadpr477-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:rinshadpr477@gmail.com"
                  className="p-2 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
                  aria-label="Email Rinshad"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Core Pillars, Experience & Education */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-10"
        >
          {/* Engineering Focus Pillars */}
          <div className="p-6 rounded-3xl apple-glass shadow-apple-subtle space-y-3">
            <h3 className="text-xs font-mono text-apple-indigo uppercase tracking-wider font-semibold">
              Primary Engineering Focus
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-xs font-mono text-apple-text dark:text-apple-darkText"
                >
                  {cap}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
              <Briefcase className="w-4 h-4 text-apple-indigo" />
              <span>Production Experience</span>
            </div>

            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl apple-glass shadow-apple-card space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-base text-apple-text dark:text-apple-darkText">{exp.role}</h3>
                      <div className="text-xs text-apple-indigo font-mono font-medium">{exp.company}</div>
                    </div>
                    <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-1.5 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period} · {exp.location}</span>
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-apple-secondary dark:text-apple-darkSecondary leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-apple-indigo mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-apple-secondary dark:text-apple-darkSecondary uppercase tracking-wider pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
              <GraduationCap className="w-4 h-4 text-apple-indigo" />
              <span>Education</span>
            </div>

            <div className="p-6 rounded-3xl apple-glass shadow-apple-subtle space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-apple-text dark:text-apple-darkText">
                  {education.degree}
                </h3>
                <span className="text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">
                  {education.period}
                </span>
              </div>
              <div className="text-xs text-apple-indigo font-mono">
                {education.institution} · {education.location}
              </div>
              <p className="text-xs text-apple-secondary dark:text-apple-darkSecondary pt-2 border-t border-black/[0.04] dark:border-white/[0.06] leading-relaxed">
                <strong className="text-apple-text dark:text-apple-darkText font-normal">Relevant Coursework:</strong> {education.coursework}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-black/[0.06] dark:border-white/[0.08] bg-apple-bg dark:bg-apple-darkBg overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-apple-text dark:text-apple-darkText tracking-wider">
              <span className="w-2 h-2 rounded-full bg-apple-indigo" />
              <span>RINSHAD.PR</span>
            </div>
            <p className="mt-2 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary leading-relaxed">
              Software Engineer · Full-Stack Developer · Production Systems & Architecture
            </p>
          </div>

          {/* Quick links & Back to top */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <a
              href="https://github.com/rinshadpr477-cell"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2.5 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/rinshadpr477-cell/"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2.5 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:rinshadpr477@gmail.com"
              className="p-2 sm:p-2.5 rounded-full apple-glass text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-3.5 sm:px-4 py-2 rounded-full apple-glass text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-text dark:hover:text-apple-darkText flex items-center gap-1.5 transition ml-0 sm:ml-2 shadow-apple-subtle"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & location */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Crafted with care in</span>
            <span className="text-apple-text dark:text-apple-darkText font-medium">Calicut, Kerala, India</span>
          </div>

          <div>
            <span>© {currentYear} Rinshad PR. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

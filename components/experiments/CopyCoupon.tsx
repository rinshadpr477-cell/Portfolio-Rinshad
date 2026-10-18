'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export function CopyCoupon() {
  const token = "BULLMQ_IDEMPOTENCY_TOKEN_2026";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(token);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = token;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="p-4 sm:p-8 rounded-2xl apple-glass flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px]">
      <div className="text-[10px] sm:text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary mb-3 sm:mb-4 uppercase tracking-wider text-center">
        Cryptographic Key & Clipboard Copy
      </div>

      <div className="w-full max-w-sm flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] shadow-inner">
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-apple-text dark:text-apple-darkText truncate mr-2">
          <Terminal className="w-4 h-4 text-apple-indigo shrink-0" />
          <span className="truncate">{token}</span>
        </div>

        <button
          onClick={copyToClipboard}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-500 text-white shadow-md scale-105'
              : 'bg-apple-indigo text-white hover:opacity-90 shadow-sm'
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <div className="mt-4 text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary">
        {copied ? (
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            ✓ Copied to clipboard successfully
          </span>
        ) : (
          <span>Click button to capture verification token</span>
        )}
      </div>
    </div>
  );
}

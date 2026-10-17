'use client';

import React from 'react';

export function TelemetryTicker() {
  const items = [
    'JAVA 21 & SPRING BOOT 3',
    'APACHE KAFKA (KRaft)',
    'TRANSACTIONAL OUTBOX (FOR UPDATE SKIP LOCKED)',
    'ZERO DUAL-WRITE HAZARDS (1,000+ EVENTS)',
    'GROUNDCREW AUTONOMOUS RAG (96.7% CRITIC APPROVAL)',
    'QDRANT VECTOR EMBEDDINGS (3,181 ISSUES)',
    'TWILIO MEDIA STREAMS ↔ GEMINI LIVE (2.9s CONNECT)',
    '300+ CALLS/DAY (82% ANSWER RATE)',
    '15,000+ BULK SMS (ZERO DUPLICATES, 98.5% DELIVERY)',
    'POSTGRESQL 16 & PRISMA ORM',
    'DOCKER & AWS EC2 / NGINX REVERSE PROXY',
    'RAZORPAY VERIFIED CHECKOUT & WEBHOOKS',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-black/[0.05] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.02] py-3 select-none my-8">
      <div className="flex w-max animate-ticker">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span className="font-mono text-[11px] tracking-wider text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo transition-colors cursor-default">
              {text}
            </span>
            <span className="w-1 h-1 rounded-full bg-apple-indigo/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

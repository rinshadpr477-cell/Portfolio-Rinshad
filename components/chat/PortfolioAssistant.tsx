'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, AlertCircle, RefreshCw } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function PortfolioAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am Rinshad's AI engineering assistant. You can ask me about his Enterprise Banking platform (Spring Boot 3, Kafka, Transactional Outbox), Groundcrew (Autonomous RAG & Qdrant), production work at AIKING Software Solutions, or remote engineering availability.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'How does the Transactional Outbox eliminate dual-write hazards?',
    'How does Groundcrew achieve 96.7% critic auto-approval?',
    'What was your role at AIKING Software Solutions?',
    'What technologies do you use for distributed systems?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error('Unable to retrieve response at this moment.');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="rounded-3xl apple-glass shadow-apple-card overflow-hidden flex flex-col">
      {/* Top Header */}
      <div className="px-6 py-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-apple-indigo/10 text-apple-indigo border border-apple-indigo/20">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-apple-text dark:text-apple-darkText font-mono">
              Ask About My Engineering Work
            </h3>
            <span className="text-[11px] font-mono text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Knowledge Engine</span>
            </span>
          </div>
        </div>

        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-apple-secondary dark:text-apple-darkSecondary font-medium">
          Autonomous AI
        </span>
      </div>

      {/* Suggested Questions Quick Row */}
      <div className="px-6 py-2.5 border-b border-black/[0.05] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.015] flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono text-apple-secondary dark:text-apple-darkSecondary uppercase shrink-0">Try:</span>
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white dark:bg-[#1f1f22] border border-black/[0.06] dark:border-white/[0.08] text-apple-secondary dark:text-apple-darkSecondary hover:text-apple-indigo hover:border-apple-indigo/40 whitespace-nowrap transition cursor-pointer shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="p-6 space-y-4 max-h-80 min-h-[220px] overflow-y-auto">
        {messages.map((m, idx) => {
          const isUser = m.role === 'user';
          return (
            <div
              key={idx}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-mono ${
                  isUser
                    ? 'bg-apple-indigo text-white font-bold'
                    : 'bg-black/[0.04] dark:bg-white/[0.06] text-apple-indigo'
                }`}
              >
                {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-apple-indigo text-white font-medium shadow-sm'
                    : 'bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-apple-text dark:text-apple-darkText whitespace-pre-line'
                }`}
              >
                {m.content}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-apple-indigo flex items-center justify-center text-xs">
              <Bot className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div className="px-4 py-2 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-apple-secondary dark:text-apple-darkSecondary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-apple-indigo animate-ping" />
              <span>Analyzing engineering records...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500" />
              <span>{error}</span>
            </div>
            <button
              onClick={() => sendMessage(messages[messages.length - 1]?.content || '')}
              className="flex items-center gap-1 text-[11px] underline text-rose-500"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3.5 border-t border-black/[0.06] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015] flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Kafka outbox, Qdrant RAG, latency, or AIKING..."
          className="flex-1 bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.08] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-apple-text dark:text-apple-darkText placeholder-apple-secondary focus:outline-none focus:border-apple-indigo transition"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="px-4 py-2.5 rounded-xl bg-apple-indigo text-white font-semibold text-xs flex items-center gap-1.5 hover:opacity-90 disabled:opacity-40 transition font-mono cursor-pointer shadow-sm"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

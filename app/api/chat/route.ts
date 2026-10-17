import { NextRequest, NextResponse } from 'next/server';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Built-in intelligent local response generator based strictly on Rinshad's verified engineering facts
function generateLocalKnowledgeResponse(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();

  // 1. Enterprise Banking / Kafka / Spring Boot
  if (query.includes('bank') || query.includes('kafka') || query.includes('outbox') || query.includes('spring') || query.includes('java')) {
    return "Rinshad engineered the Enterprise Bank Communication & Collections Platform using Java 21, Spring Boot 3, Apache Kafka (KRaft), and PostgreSQL 16. Key achievements:\n• Transactional Outbox: Autonomous lock-free publisher using 'FOR UPDATE SKIP LOCKED' paired with consumer-side idempotency ('processed_events') eliminating dual-write hazards across 1,000+ simulated events.\n• Recovery Queues: Exponential-backoff retries and Dead Letter Queues (DLQ) isolating failed contact records without blocking subsequent messages.\n• Financial Precision: PII masking via CustomerMapper, immutable audit records, and strict BigDecimal / NUMERIC(19,4) precision preventing rounding errors.\n• Testing: 70%+ test coverage with JUnit 5 and Mockito.";
  }

  // 2. Groundcrew / RAG / Multi-Agent / Qdrant
  if (query.includes('groundcrew') || query.includes('rag') || query.includes('agent') || query.includes('qdrant') || query.includes('vector') || query.includes('critic')) {
    return "Groundcrew is Rinshad's autonomous RAG + multi-agent issue triage platform. Key highlights:\n• Multi-Agent Pipeline: Router, Vector Retriever, Draft Generator, and Critic agent working collaboratively.\n• High-Volume Vector Search: Embedded 3,181 historical issues across 5,318 GitHub records using Qdrant and Sentence-Transformers.\n• Self-Refining Loop: Achieved 96.7% automated critic pass rate (29/30 approved), auto-escalating ungrounded claims.\n• CI-Gated Guardrails: GitHub Actions CI assertions enforcing a 72.5% router baseline and 0.82 retrieval threshold.\n• Zero-Cost Inference: Pluggable Ollama local models or Hugging Face at $0 ongoing inference cost.";
  }

  // 3. AI Calling Platform / Twilio / Gemini Live
  if (query.includes('calling') || query.includes('voice') || query.includes('twilio') || query.includes('gemini') || query.includes('latency')) {
    return "At AIKING Software Solutions, Rinshad engineered the Bank AI Calling Platform:\n• Real-time bidirectional audio stream bridging Twilio Media Streams and Gemini Live API over WebSockets.\n• Slashed average call-connect latency from 5.0s to 2.9s.\n• Processes 300+ calls/day with an 82% answer rate for a banking client.\n• Managed Redis/BullMQ worker queues, Razorpay recurring subscriptions (1,000+ txns/month at 97%), and AWS EC2 Docker deployment.";
  }

  // 4. Infinity Fleet / Bulk SMS / Idempotency
  if (query.includes('sms') || query.includes('infinity') || query.includes('bulk') || query.includes('queue') || query.includes('redis') || query.includes('bullmq')) {
    return "Infinity Fleet is a logistics bulk messaging automation system developed by Rinshad at AIKING:\n• Dispatches 15,000+ messages per campaign with CSV streaming batching.\n• 98.5% delivery success with automated exponential backoff.\n• Guaranteed zero duplicate messages across all production workloads using Redis SETNX distributed deduplication locks.";
  }

  // 5. Work Experience & Career
  if (query.includes('experience') || query.includes('company') || query.includes('aiking') || query.includes('luminar') || query.includes('background') || query.includes('career')) {
    return "Rinshad's verified professional experience:\n1. Associate Software Engineer at AIKING Software Solutions (June 2026 – Present, Pune): Delivered production AI voice telephony (300+ calls/day, 2.9s latency) and bulk SMS dispatch (15,000+ messages, 98.5% success).\n2. Full Stack Developer (MERN) at Luminar Technolab (Sept 2025 – June 2026, Kerala): Shipped 10+ applications, including the LaundryNear marketplace (500+ users, Razorpay, RBAC).\n3. Education: B.Tech in Computer Science and Engineering from Visvesvaraya Technological University (2021–2025, Bangalore).";
  }

  // 6. Tech Stack
  if (query.includes('stack') || query.includes('tech') || query.includes('skill') || query.includes('language') || query.includes('tools')) {
    return "Rinshad's core technical stack includes:\n• Languages: Java 21, TypeScript, JavaScript (ES6+), Python, SQL\n• Distributed & Real-Time: Spring Boot 3, Apache Kafka (KRaft), Transactional Outbox, DLQ, Redis, BullMQ, Twilio Media Streams, Gemini Live API\n• Databases: PostgreSQL 16 (Flyway), MongoDB (Mongoose), Prisma ORM\n• AI & RAG: Multi-Agent Systems, Qdrant Vector DB, Sentence-Transformers, Hugging Face, Ollama\n• DevOps: Docker Compose, AWS EC2, NGINX SSL, GitHub Actions CI/CD, JUnit 5/Mockito.";
  }

  // 7. Availability / Hiring
  if (query.includes('hire') || query.includes('available') || query.includes('remote') || query.includes('contact') || query.includes('email') || query.includes('rate')) {
    return "Rinshad PR is open to full-time remote engineering roles and select contract projects worldwide. You can contact him directly at rinshadpr477@gmail.com, call/WhatsApp at +91 8593923135, or submit the project inquiry form below.";
  }

  // Default response
  return "I can answer specific questions about Rinshad PR's engineering work: his Enterprise Banking platform (Spring Boot 3, Kafka, Transactional Outbox), Groundcrew (Autonomous RAG, Qdrant, 3,181 embedded issues), Bank AI Calling platform (Twilio, Gemini Live, 2.9s latency), or his production background at AIKING Software Solutions.";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== 'string') {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    if (lastMessage.content.length > 500) {
      return NextResponse.json({ error: 'Message exceeds character limit of 500 characters' }, { status: 400 });
    }

    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (anthropicKey) {
      try {
        const systemPrompt = `You are an AI assistant for Rinshad PR, a Software Engineer specializing in Real-Time, Distributed & AI Systems.
Facts:
- Core stack: Java 21 / Spring Boot 3, Apache Kafka (KRaft), PostgreSQL 16, TypeScript, Node.js, FastAPI, Qdrant Vector DB, Redis, BullMQ, Docker, AWS EC2, NGINX.
- Real projects: Enterprise Bank Communication & Collections Platform (Transactional Outbox, Kafka, FOR UPDATE SKIP LOCKED, processed_events, DLQ, 1,000+ events exactly-once), Groundcrew (Autonomous RAG, Qdrant 3,181 issues indexed, critic loop 96.7% pass rate), Bank AI Calling (Twilio + Gemini Live, 300+ calls/day, 2.9s latency), LaundryNear (500+ users, Razorpay).
- Experience: Associate Software Engineer at AIKING Software Solutions; Full Stack Developer at Luminar Technolab; B.Tech in CSE from VTU (2021-2025).
- Email: rinshadpr477@gmail.com, Phone: +91 8593923135.
- Direct users to contact form for proposals. Do not invent metrics or pricing.`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': anthropicKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-3-haiku-20240307',
            max_tokens: 300,
            system: systemPrompt,
            messages: messages.map((m) => ({ role: m.role, content: m.content })),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const assistantReply = data.content?.[0]?.text || generateLocalKnowledgeResponse(lastMessage.content);
          return NextResponse.json({ reply: assistantReply });
        }
      } catch (err) {}
    }

    // Local knowledge generator
    const reply = generateLocalKnowledgeResponse(lastMessage.content);
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred processing your query.' },
      { status: 500 }
    );
  }
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'featured' | 'projects' | 'experiments';
  badge: string;
  role: string;
  description: string;
  featuredMetric?: {
    value: string;
    label: string;
  };
  metrics?: { value: string; label: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    role: string;
    architecture: string;
    keyDecisions: string[];
    techStack: { name: string; purpose: string }[];
    results: string[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-bank-platform',
    title: 'Enterprise Bank Communication & Collections Platform',
    subtitle: 'Distributed, event-driven banking communication and recovery platform on Spring Boot 3, Kafka, and PostgreSQL',
    category: 'featured',
    badge: 'Distributed Systems',
    role: 'Lead Systems Architect & Java Backend Engineer',
    description: 'An enterprise-grade event-driven banking communication platform engineered with Spring Boot 3, Apache Kafka, and PostgreSQL. Implements the Transactional Outbox pattern with autonomous lock-free publishers, consumer-side idempotency, and resilient Dead-Letter Queues (DLQ).',
    featuredMetric: {
      value: 'Exactly-Once',
      label: 'Zero Dual-Write Hazards Across 1,000+ Events',
    },
    metrics: [
      { value: '1,000+', label: 'Events Simulated Exactly-Once' },
      { value: '70%+', label: 'JUnit 5 & Mockito Coverage' },
      { value: 'Zero', label: 'Dual-Write Discrepancies' },
    ],
    technologies: [
      'Java 21',
      'Spring Boot 3',
      'PostgreSQL 16',
      'Apache Kafka (KRaft)',
      'Transactional Outbox',
      'Flyway Migrations',
      'Docker Compose',
      'JUnit 5 / Mockito',
      'Stateless JWT RBAC'
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/rinshadpr477-cell/Enterprise-Bank-Communication-Collections-Platform',
    caseStudy: {
      overview: 'Engineered an event-driven financial notifications and debt collections recovery system built for financial-grade resilience and zero message loss.',
      problem: 'In banking systems, updating internal ledgers while concurrently publishing messaging events risks dual-write anomalies if a database commit succeeds but network message brokers fail, causing missing collection alerts or duplicate debit notifications.',
      role: 'Designed end-to-end architecture: Transactional Outbox database publisher, Kafka consumer idempotency tracking, dead-letter recovery queues, and financial calculation precision models.',
      architecture: 'When debt events occur, business state and outbound event records are saved in the same atomic PostgreSQL transaction. An autonomous worker polls the outbox using FOR UPDATE SKIP LOCKED and publishes to Kafka. Downstream consumers record event IDs into a processed_events table before dispatching SMS/Voice notifications, ensuring idempotent delivery.',
      keyDecisions: [
        'Implemented Transactional Outbox with FOR UPDATE SKIP LOCKED to guarantee lock-free concurrent message publishing.',
        'Enforced consumer-side deduplication via processed_events table, neutralizing duplicate delivery from network retries.',
        'Configured automated Dead Letter Queues (DLQ) with exponential backoff for failed telecom dispatches.',
        'Mandated BigDecimal and NUMERIC(19,4) across all transaction calculations to avoid IEEE 754 floating-point rounding errors.',
        'Implemented PII masking in CustomerMapper and enforced immutable audit logging via audit_records.'
      ],
      techStack: [
        { name: 'Java 21 & Spring Boot 3', purpose: 'Type-safe enterprise microservice foundation with Spring Data JPA and Hibernate' },
        { name: 'Apache Kafka (KRaft mode)', purpose: 'High-throughput event streaming decoupled from ZooKeeper' },
        { name: 'PostgreSQL 16 & Flyway', purpose: 'ACID transaction storage, versioned schema migrations, and row-level locks' },
        { name: 'JUnit 5 & Mockito', purpose: 'Rigorous automated integration and unit test suite achieving 70%+ coverage' }
      ],
      results: [
        'Guaranteed zero dual-write inconsistencies across 1,000+ simulated concurrent debt notifications.',
        'Isolated malformed contact records to DLQ without blocking subsequent queue events.',
        'Passed automated CI tests with full compliance to financial precision and audit standards.'
      ]
    }
  },
  {
    id: 'groundcrew-rag-agent',
    title: 'Groundcrew — Autonomous RAG + Multi-Agent Triage',
    subtitle: 'Production RAG and multi-agent system automating GitHub issue classification and resolution drafts',
    category: 'featured',
    badge: 'Applied AI & RAG',
    role: 'AI Systems Engineer & Full-Stack Developer',
    description: 'A multi-agent RAG system featuring an orchestrated pipeline (Router, Vector Retriever, Draft Generator, and Critic) that automates GitHub issue triage with self-refining evaluation and CI-gated regression guards.',
    featuredMetric: {
      value: '96.7%',
      label: 'Critic Auto-Approval Rate (29/30 Verified)',
    },
    metrics: [
      { value: '3,181', label: 'Issues Indexed in Qdrant' },
      { value: '96.7%', label: 'Critic Auto-Approval' },
      { value: '0.82', label: 'CI Retrieval Relevance Threshold' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Qdrant Vector DB',
      'Sentence-Transformers',
      'Hugging Face',
      'Ollama',
      'Docker',
      'GitHub Actions'
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/rinshadpr477-cell/groundcrew',
    caseStudy: {
      overview: 'Built an autonomous AI support engineer that classifies incoming GitHub issues, retrieves relevant codebase documentation via dense vector embeddings, and generates grounded resolution drafts with self-critique.',
      problem: 'Open-source maintainers spend hours triaging repetitive bugs and clarifying incomplete reports. Simple LLM generation hallucinations produce invalid code suggestions or claim non-existent APIs.',
      role: 'Engineered the FastAPI multi-agent orchestration, Qdrant vector embedding indexing pipeline, critic validation agent, and automated evaluation harness in GitHub Actions CI.',
      architecture: 'User issues are classified by a Router agent. Relevant past issues and source documents are retrieved from a Qdrant vector database via dense Sentence-Transformers embeddings. A Generator drafts a response, which is scrutinized by a Critic agent. Unverifiable claims are automatically routed back for re-drafting or flagged for human review.',
      keyDecisions: [
        'Indexed 3,181 GitHub issues across 5,318 real historical issue records in Qdrant for semantic similarity retrieval.',
        'Implemented self-refining critic loop achieving 96.7% automated pass rate while escalating ungrounded claims.',
        'Configured CI-gated evaluation in GitHub Actions enforcing 72.5% router accuracy and 0.82 retrieval threshold on every commit.',
        'Designed pluggable backend supporting local Ollama or hosted Hugging Face models at $0 ongoing inference cost.'
      ],
      techStack: [
        { name: 'FastAPI & Python', purpose: 'Asynchronous multi-agent execution pipeline and evaluation harness' },
        { name: 'Qdrant Vector DB', purpose: 'High-dimensional vector storage with cosine similarity indexing' },
        { name: 'Sentence-Transformers', purpose: 'Dense embeddings generation for technical issue context' },
        { name: 'Next.js & TypeScript', purpose: 'Interactive dashboard for maintainers to monitor agent decisions and logs' }
      ],
      results: [
        'Embedded 3,181 real issues with sub-100ms vector lookup latency.',
        'Achieved 96.7% critic approval, preventing false answers from being submitted.',
        'Protected against prompt regressions with automated CI test assertions.'
      ]
    }
  },
  {
    id: 'bank-ai-calling',
    title: 'Bank AI Outbound Calling Platform',
    subtitle: 'Production outbound voice platform with real-time bi-directional audio streams',
    category: 'featured',
    badge: 'Real-Time Voice AI',
    role: 'Lead Full-Stack & Telephony Engineer (AIKING)',
    description: 'A live outbound AI-powered voice calling SaaS built for a banking client. Features full-duplex bi-directional audio streaming between Twilio Media Streams and Gemini Live API with sub-3s connect latency, distributed BullMQ worker queues, and Razorpay billing.',
    featuredMetric: {
      value: '2.9s',
      label: 'Avg Call-Connect Latency (down from 5.0s)',
    },
    metrics: [
      { value: '300+', label: 'Calls/Day (82% Answer Rate)' },
      { value: '2.9s', label: 'Audio Bridge Latency' },
      { value: '1,000+', label: 'Monthly Razorpay Txns' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Twilio Media Streams',
      'Gemini Live API',
      'Node.js WebSocket Bridge',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'BullMQ',
      'Docker',
      'AWS EC2',
      'NGINX'
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/rinshadpr477-cell',
    caseStudy: {
      overview: 'Engineered an end-to-end voice telephony application at AIKING Software Solutions serving a banking client for automated customer notifications and conversational recovery calls.',
      problem: 'Standard HTTP webhooks introduce latency spikes exceeding 5 seconds. Delivering natural conversational voice requires bridging 8kHz telephony audio to streaming LLM inference with minimal jitter and zero packet loss.',
      role: 'Built the bi-directional WebSocket media bridge, Redis/BullMQ job queues, role-based authorization, Razorpay subscription billing, and AWS EC2 production deployment.',
      architecture: 'Twilio initiates telephony audio via WebSockets. A dedicated Node.js bridge decodes raw μ-law packets and streams them into Gemini Live API. BullMQ orchestrates concurrency limits, disposition logging, and subscription billing into PostgreSQL.',
      keyDecisions: [
        'Separated audio streaming gateway from background transcription workers to eliminate event-loop latency spikes.',
        'Optimized packet chunk buffering, reducing call-connect latency from 5.0s to 2.9s.',
        'Integrated Razorpay recurring subscriptions handling 1,000+ transactions/month at 97% success rate.',
        'Containerized with Docker on AWS EC2 behind NGINX SSL reverse proxy with automated GitHub Actions CI/CD.'
      ],
      techStack: [
        { name: 'Twilio Media Streams', purpose: 'Full-duplex raw 8kHz μ-law audio streaming over WebSockets' },
        { name: 'Gemini Live API', purpose: 'Conversational voice intelligence with real-time audio generation' },
        { name: 'Redis & BullMQ', purpose: 'Distributed task queue, rate limiting, and automated retry policies' },
        { name: 'Razorpay Gateway', purpose: 'Subscription billing and webhook signature verification' }
      ],
      results: [
        'Processes 300+ calls per day at 82% answer rate with high voice clarity.',
        'Cut connection latency from 5.0 seconds down to 2.9 seconds.',
        'Zero production downtime through containerized rolling restarts.'
      ]
    }
  },
  {
    id: 'infinity-fleet',
    title: 'Infinity Fleet — Bulk SMS Automation',
    subtitle: 'High-throughput campaign orchestration with zero-duplicate idempotency',
    category: 'featured',
    badge: 'Logistics Automation',
    role: 'Backend Engineer (AIKING)',
    description: 'A bulk messaging system designed for logistics operations. Parses CSV campaigns, applies dynamic message templates, and manages rate-limited dispatches with strict Redis idempotency and automatic retry policies.',
    featuredMetric: {
      value: '98.5%',
      label: 'Delivery Success Rate (Zero Duplicates)',
    },
    metrics: [
      { value: '15,000+', label: 'Messages Per Campaign' },
      { value: '98.5%', label: 'Delivery Success' },
      { value: '0', label: 'Duplicates Across All Batches' }
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'CSV Streams',
      'Redis',
      'BullMQ',
      'Idempotency Keys',
      'PostgreSQL',
      'Docker'
    ],
    liveUrl: undefined,
    githubUrl: 'https://github.com/rinshadpr477-cell',
    caseStudy: {
      overview: 'Developed the backend dispatch pipeline for high-scale logistics campaign messaging with template personalization and strict deduplication.',
      problem: 'Sending 15,000+ messages across multiple telecom routes causes gateway rate-limit drops and duplicate SMS sends upon network timeouts.',
      role: 'Designed CSV streaming parser, Redis SETNX deduplication locks, BullMQ rate-limited workers, and delivery status webhook tracking.',
      architecture: 'CSV uploads are chunked into 500-record batches. Deterministic cryptographic hashes verify exactly-once message dispatch before queue workers submit to telecom APIs with exponential backoff.',
      keyDecisions: [
        'Used Redis distributed locks to guarantee zero duplicate messages across multi-worker concurrency.',
        'Implemented dead-letter queue (DLQ) isolation for permanently failing phone numbers.',
        'Tracked live telemetry for QUEUED, SENT, DELIVERED, and FAILED states.'
      ],
      techStack: [
        { name: 'BullMQ & Redis', purpose: 'Throttled message workers with automated retry intervals' },
        { name: 'Node.js Streams', purpose: 'Memory-safe streaming parser for large multi-megabyte CSV uploads' }
      ],
      results: [
        'Consistently delivered 15,000+ messages per campaign at 98.5% delivery success.',
        'Zero duplicate messages recorded for the entire production workload.'
      ]
    }
  },
  {
    id: 'ai-startup-guide',
    title: 'AI Startup Guide',
    subtitle: 'Full-stack AI discovery engine evaluating startup market viability and opportunities',
    category: 'projects',
    badge: 'AI Application',
    role: 'Full-Stack Developer',
    description: 'An AI-powered web platform providing structured market viability analysis, competitor evaluation, and strategic insights for founders using Next.js, Prisma, and Gemini AI.',
    metrics: [
      { value: 'Gemini AI', label: 'Structured Market Logic' },
      { value: 'Prisma ORM', label: 'Type-Safe Persistence' }
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Gemini API', 'Tailwind CSS'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/rinshadpr477-cell/AI-STARTUP-GUIDE',
    caseStudy: {
      overview: 'Created an intelligent web tool for aspiring entrepreneurs to stress-test business ideas and evaluate competitive landscapes.',
      problem: 'Founders lack structured frameworks to rapidly validate problem-solution fit, resulting in wasted development on low-demand concepts.',
      role: 'Engineered Next.js server actions, interactive chat workflows, database schemas with Prisma, and Gemini prompt engineering.',
      architecture: 'User inputs are transformed into multi-dimensional analysis prompts. Results are stored relationally in PostgreSQL and rendered dynamically with client-side caching.',
      keyDecisions: [
        'Utilized Prisma schema migrations for rapid iterative modeling of startup evaluation criteria.',
        'Implemented streaming response tokens for instantaneous interactive feedback.'
      ],
      techStack: [
        { name: 'Next.js & React', purpose: 'Server-side rendered application with dynamic evaluation forms' },
        { name: 'Gemini API', purpose: 'Analytical reasoning engine for market viability scoring' }
      ],
      results: [
        'Shipped full-stack production application on GitHub with modular, maintainable architecture.'
      ]
    }
  },
  {
    id: 'laundry-near',
    title: 'LaundryNear On-Demand Marketplace',
    subtitle: 'Two-sided service marketplace linking customers, local vendors, and logistics couriers',
    category: 'projects',
    badge: 'Full-Stack Platform',
    role: 'Full-Stack Developer (Luminar)',
    description: 'A full-stack on-demand laundry ecosystem featuring customer booking, vendor order processing, logistics driver assignment, Razorpay verified checkout, and strict role-based access control.',
    featuredMetric: {
      value: '500+',
      label: 'Registered Active Users',
    },
    metrics: [
      { value: '500+', label: 'Registered Users' },
      { value: '6+', label: 'Mongoose Collections' },
      { value: 'Razorpay', label: 'Webhook Reconciliation' }
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Razorpay', 'Tailwind CSS'],
    liveUrl: 'https://laundry-near-frontend.vercel.app',
    githubUrl: 'https://github.com/rinshadpr477-cell',
    caseStudy: {
      overview: 'Built a marketplace connecting neighborhood laundry vendors with residential customers, featuring verified payments and automated order status tracking.',
      problem: 'Local service businesses suffer from manual telephone scheduling, lost garments, and uncollected payments upon delivery.',
      role: 'Architected complete MERN stack, modeled 6+ normalized Mongoose collections, integrated Razorpay checkout, and deployed to production.',
      architecture: 'React frontend interacting with an Express REST API. Orders transition through deterministic lifecycle stages with webhook payment reconciliation.',
      keyDecisions: [
        'Designed role-based access control separating Customer, Vendor, Agent, and Admin routes.',
        'Created HMAC-SHA256 Razorpay webhook verification preventing fraudulent order status updates.'
      ],
      techStack: [
        { name: 'React.js', purpose: 'Responsive interface optimized for pickup scheduling' },
        { name: 'Node.js & MongoDB', purpose: 'REST API, schema indexing, and customer records' }
      ],
      results: [
        '500+ registered active users onboarded.',
        'Flawless transactional flow with automated receipts.'
      ]
    }
  }
];

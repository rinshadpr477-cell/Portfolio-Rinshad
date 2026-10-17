export type TechCategory = 'backend' | 'distributed' | 'ai' | 'database' | 'frontend' | 'devops';

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  categoryLabel: string;
  howIUseIt: string;
  relatedProjectIds: string[];
  level: string;
}

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'java-spring',
    name: 'Java 21 / Spring Boot 3',
    category: 'backend',
    categoryLabel: 'Enterprise Backend',
    howIUseIt: 'Building financial-grade microservices with Spring Data JPA, Hibernate, FOR UPDATE SKIP LOCKED row-locks, and strict BigDecimal precision.',
    relatedProjectIds: ['enterprise-bank-platform'],
    level: 'Core Enterprise'
  },
  {
    id: 'apache-kafka',
    name: 'Apache Kafka (KRaft)',
    category: 'distributed',
    categoryLabel: 'Event-Driven Streaming',
    howIUseIt: 'Implementing event-driven messaging, Transactional Outbox publishing, Dead-Letter Queues (DLQ), and consumer idempotency.',
    relatedProjectIds: ['enterprise-bank-platform'],
    level: 'Advanced'
  },
  {
    id: 'multi-agent-rag',
    name: 'Multi-Agent & RAG (Qdrant)',
    category: 'ai',
    categoryLabel: 'Applied AI & RAG',
    howIUseIt: 'Architecting multi-agent pipelines (router, retriever, generator, critic), dense vector search with Qdrant, and CI evaluation harnesses.',
    relatedProjectIds: ['groundcrew-rag-agent'],
    level: 'Production-Grade'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL 16 & Flyway',
    category: 'database',
    categoryLabel: 'Relational Database',
    howIUseIt: 'Designing normalized schemas, versioned Flyway migrations, row-level locks, outbox tables, and avoiding N+1 query bottlenecks.',
    relatedProjectIds: ['enterprise-bank-platform', 'groundcrew-rag-agent', 'bank-ai-calling'],
    level: 'Advanced'
  },
  {
    id: 'node-typescript',
    name: 'TypeScript & Node.js',
    category: 'backend',
    categoryLabel: 'Real-Time Backend',
    howIUseIt: 'Full-duplex WebSocket streaming bridges, asynchronous background workers, RESTful APIs, and strict end-to-end type safety.',
    relatedProjectIds: ['bank-ai-calling', 'infinity-fleet', 'groundcrew-rag-agent'],
    level: 'Advanced'
  },
  {
    id: 'redis-bullmq',
    name: 'Redis & BullMQ',
    category: 'distributed',
    categoryLabel: 'Queue & In-Memory Store',
    howIUseIt: 'Distributed worker queues, SETNX locks for exactly-once processing, rate-limit throttling, and delayed job retries.',
    relatedProjectIds: ['bank-ai-calling', 'infinity-fleet'],
    level: 'Advanced'
  },
  {
    id: 'twilio-gemini',
    name: 'Twilio Streams & Gemini Live',
    category: 'ai',
    categoryLabel: 'Real-Time Voice AI',
    howIUseIt: 'Bridging 8kHz μ-law audio over WebSockets directly to streaming LLM inference with sub-3s connect latency for 300+ calls/day.',
    relatedProjectIds: ['bank-ai-calling'],
    level: 'Specialized'
  },
  {
    id: 'fastapi-python',
    name: 'FastAPI & Python',
    category: 'ai',
    categoryLabel: 'AI Microservices',
    howIUseIt: 'Building high-performance async API services for Sentence-Transformers, Hugging Face, and Ollama local inference.',
    relatedProjectIds: ['groundcrew-rag-agent'],
    level: 'Proficient'
  },
  {
    id: 'docker-ec2',
    name: 'Docker & AWS EC2 / NGINX',
    category: 'devops',
    categoryLabel: 'Cloud & Infrastructure',
    howIUseIt: 'Containerizing microservices with Docker Compose, provisioning AWS EC2 instances, NGINX SSL reverse proxies, and GitHub Actions CI/CD.',
    relatedProjectIds: ['enterprise-bank-platform', 'groundcrew-rag-agent', 'bank-ai-calling'],
    level: 'Proficient'
  },
  {
    id: 'mongodb-mongoose',
    name: 'MongoDB & Mongoose',
    category: 'database',
    categoryLabel: 'Document Persistence',
    howIUseIt: 'Modeling normalized collections, compound indexing, aggregation pipelines, and document-backed web marketplaces.',
    relatedProjectIds: ['laundry-near'],
    level: 'Advanced'
  },
  {
    id: 'junit-testing',
    name: 'JUnit 5, Mockito & Jest',
    category: 'devops',
    categoryLabel: 'Automated Testing',
    howIUseIt: 'Writing comprehensive unit and integration test suites achieving 70%+ coverage, testing concurrency, outbox locks, and API resilience.',
    relatedProjectIds: ['enterprise-bank-platform', 'bank-ai-calling'],
    level: 'Advanced'
  },
  {
    id: 'react-next',
    name: 'React.js & Next.js',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    howIUseIt: 'Building responsive, stateful web platforms, server components, client hydration, and interactive technical dashboards.',
    relatedProjectIds: ['groundcrew-rag-agent', 'ai-startup-guide', 'laundry-near'],
    level: 'Advanced'
  }
];

export interface ServiceOffer {
  id: string;
  code: string;
  title: string;
  bestFor: string;
  tagline: string;
  deliverables: string[];
  typicalTimeline: string;
  contactPreselect: string;
}

export const SERVICES: ServiceOffer[] = [
  {
    id: 'fullstack-mvp',
    code: '01 / FULL-STACK',
    title: 'Full-Stack Product Development',
    bestFor: 'For founders and businesses building an MVP or new web application.',
    tagline: 'End-to-end product delivery from intuitive frontend interfaces to robust database architectures and production deployment.',
    deliverables: [
      'Responsive, high-performance web applications using Next.js, React, and TypeScript',
      'Clean relational or document database modeling with PostgreSQL or MongoDB',
      'Secure stateless authentication with role-based access control (RBAC)',
      'Automated CI/CD deployment pipelines on Docker, AWS EC2, and NGINX',
      'Comprehensive documentation and developer handoff'
    ],
    typicalTimeline: '2–6 weeks, depending on scope',
    contactPreselect: 'mvp'
  },
  {
    id: 'backend-automation',
    code: '02 / BACKEND & QUEUES',
    title: 'Backend & Automation Engineering',
    bestFor: 'For APIs, queue-based workflows, integrations, and reliable background processing.',
    tagline: 'High-throughput event-driven microservices, asynchronous task queues, and idempotent message pipelines.',
    deliverables: [
      'Robust Java 21 / Spring Boot 3 & Node.js REST and event architectures',
      'Asynchronous task processing and campaign orchestration with BullMQ & Redis',
      'Transactional Outbox patterns & Kafka streaming with exactly-once delivery guarantees',
      'Idempotent consumers and dead-letter queue (DLQ) automated retry policies',
      'Database migrations with Flyway/Prisma and transactional locking'
    ],
    typicalTimeline: '1–4 weeks, depending on complexity',
    contactPreselect: 'backend'
  },
  {
    id: 'integrations-ai',
    code: '03 / INTEGRATIONS & AI',
    title: 'Payments & AI Integrations',
    bestFor: 'For Razorpay, authentication, AI calling, and AI chat features.',
    tagline: 'Seamlessly embedding verified payments, telephony audio streaming, and conversational AI into your product stack.',
    deliverables: [
      'Razorpay payment checkout and cryptographic HMAC webhook verification',
      'Twilio Media Streams real-time audio bridges with sub-3s connect latency',
      'Gemini Live API and LLM conversational intelligence integration',
      'Autonomous multi-agent workflows and vector search with Qdrant',
      'Production logging, error boundaries, and telemetry monitoring'
    ],
    typicalTimeline: '1–3 weeks, depending on scope',
    contactPreselect: 'integrations'
  }
];

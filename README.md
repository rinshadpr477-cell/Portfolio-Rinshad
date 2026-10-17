# Rinshad PR — Apple-Inspired Premium Developer Portfolio

A production-grade digital experience designed for **Rinshad PR**, Software Engineer & Full-Stack Developer based in Calicut, Kerala, India.

Engineered with the precision and restraint of an Apple product launch page and the tactile responsiveness of modern iOS Liquid Glass interfaces. Built using **Next.js 16 App Router**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

##  Design Philosophy & Experience

1. **Apple Product-Page Editorial Layout & Typography**
   - Precise alignment, generous negative space, and curated typographic hierarchy inspired by Apple Keynotes.
   - Default **Light Theme** (`#F5F5F7` background, `#1D1D1F` text, `#6E6E73` secondary, `#5E5CE6` electric indigo accent, `#86868B` cool silver).
   - Sleek **Dark Theme** (`#08080A` background, `#F5F5F7` text, `#A1A1A6` secondary, `#171719` surface, soft luminous indigo).
   - Smooth, persistent theme switching without theme flash.

2. **iOS-Inspired Floating Liquid Glass Navbar**
   - Translucent floating pill with optical backdrop blur (`backdrop-filter: blur(24px) saturate(180%)`), fine borders, and soft shadows.
   - Shared-layout animated active pill indicator tracking page scroll position.
   - Live local time badge for Calicut (`Calicut: 11:36 PM`), Spotlight trigger (`⌘K`), sound toggle, theme switch, and restrained `"Let's talk"` action.

3. **Keynote Product-Launch Hero**
   - Editorial headline: *"Thoughtfully engineered. Beautifully delivered."*
   - Layered physical product enclosure with live bi-directional audio waveform (Twilio ↔ Gemini Live 2.9s connect latency), Transactional Outbox Kafka topology, and interactive console logs.
   - Restrained 3D spring parallax following pointer coordinates.

4. **Cinematic Scroll Storytelling**
   - Four interactive progression stages:
     - **Stage 1 — Idea**: Clean interface panel with specification contracts.
     - **Stage 2 — Architecture**: Distributed tier decoupling (Next.js, Spring Boot 3, Kafka, PostgreSQL 16).
     - **Stage 3 — Execution**: Real-time request pipeline and background BullMQ task queues.
     - **Stage 4 — Production**: Hardened production metrics (2.9s latency, 15k+ SMS, zero duplicates, 99.98% SLA).

5. **Apple Pro Selected Work & Case Studies**
   - **Bank AI Outbound Calling Platform**: Twilio Media Streams, Gemini Live API, 300+ calls/day, 2.9s connect latency.
   - **Infinity Fleet (Bulk SMS Automation)**: 15,000+ messages/campaign, 98.5% delivery success, zero duplicates.
   - **LaundryNear On-Demand Marketplace**: MERN, Razorpay checkout, 500+ registered active users.
   - **Enterprise Bank Communication Platform**: Spring Boot 3, Java 21, Kafka KRaft, Transactional Outbox, 1,000+ events exactly-once.
   - **Groundcrew Autonomous RAG**: Qdrant vector database (3,181 embedded issues), 96.7% critic auto-approval rate.
   - Full case study modal dialog with keyboard navigation (`Esc`, `Next`, `Previous`) and detailed architectural decisions.

6. **8 Functional Interactive Experiments**
   - **Proximity Typography**: Vector pointer distance displacement.
   - **Magnetic Toolbar**: Dock-inspired spring attraction physics.
   - **Animated Donut Chart**: Circular SVG gauge with animated stroke-dashoffset transitions.
   - **Gradient Studio**: Dual-stop color and intensity studio with one-click CSS export.
   - **Magnetic Button**: Spring displacement and tactile feedback.
   - **Reorderable List**: Drag-to-reorder tasks with accessible keyboard controls.
   - **Copy Interaction**: Cryptographic key copy with validation animation.
   - **Queue Visualizer**: BullMQ state machine simulator with functional job state controls.

7. **Services, Process & Technology Constellation**
   - Editorial service offerings: Full-Stack Product Development (2–6 weeks), Backend & Automation (1–4 weeks), Payments & AI Integrations (1–3 weeks).
   - Disciplined 4-stage delivery timeline (Discovery → Architecture → Build → Launch).
   - Interactive technology showcase highlighting production implementations and related projects.

8. **Contact & Autonomous AI Assistant**
   - Headline: *"Let's build something meaningful."*
   - Field-validated inquiry form with server-side validation and graceful mailto fallback.
   - Embedded autonomous AI assistant answering natural language questions using Rinshad's verified engineering knowledge base.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- Node.js `v18+` or `v20+`
- npm or pnpm

### 2. Run Locally
```bash
# In the portfolio directory:
npm run dev -- -p 3002
```
Open [http://localhost:3002](http://localhost:3002) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start -- -p 3002
```

---

## ⚙️ Environment Variables

The portfolio runs **100% out of the box with zero external paid API requirements**. All external services are optional.

```bash
cp .env.example .env.local
```

| Variable | Required? | Description |
| :--- | :--- | :--- |
| `ANTHROPIC_API_KEY` | Optional | Powers the AI assistant via Claude 3 Haiku. If omitted, the assistant seamlessly runs on the local knowledge engine for 0 cost. |
| `RESEND_API_KEY` | Optional | Sends emails directly from the server. If omitted, the contact form generates a pre-filled mail draft. |
| `CONTACT_TO_EMAIL` | Optional | Recipient address for contact submissions (`rinshadpr477@gmail.com`). |
| `NEXT_PUBLIC_SITE_URL` | Optional | Base URL for SEO canonical tags, sitemap, and Open Graph. |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Direct link to your scheduling calendar (e.g. Cal.com or Calendly). |

---

## 🚢 Deploying to Vercel

1. Commit and push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete apple-inspired premium developer portfolio"
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. If deployed from a monorepo or subfolder, set Root Directory to `portfolio`.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**.

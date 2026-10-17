import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { ScrollProgress } from '@/components/layout/ScrollProgress';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rinshad.dev'),
  title: 'Rinshad PR · Software Engineer · Full-Stack Developer',
  description:
    'Rinshad PR — Software Engineer & Full-Stack Developer based in Calicut, Kerala. Building modern web products, real-time distributed systems, and intelligent automation from interface to production.',
  keywords: [
    'Rinshad PR',
    'Software Engineer',
    'Full-Stack Developer',
    'Calicut Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Java 21',
    'Spring Boot 3',
    'Apache Kafka',
    'PostgreSQL',
    'Redis',
    'BullMQ',
    'Docker',
    'AWS EC2',
    'Twilio Media Streams',
    'Gemini Live API'
  ],
  authors: [{ name: 'Rinshad PR', url: 'https://github.com/rinshadpr477-cell' }],
  creator: 'Rinshad PR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rinshad.dev',
    title: 'Rinshad PR · Software Engineer · Full-Stack Developer',
    description:
      'Thoughtfully engineered. Beautifully delivered. Modern web products, real-time systems, and intelligent automation.',
    siteName: 'Rinshad PR Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rinshad PR · Software Engineer · Full-Stack Developer',
    description:
      'Thoughtfully engineered. Beautifully delivered. Modern web products, real-time systems, and intelligent automation.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rinshad PR',
    jobTitle: 'Software Engineer · Full-Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calicut',
      addressRegion: 'Kerala',
      addressCountry: 'India',
    },
    email: 'rinshadpr477@gmail.com',
    telephone: '+918593923135',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rinshad.dev',
    sameAs: [
      'https://github.com/rinshadpr477-cell',
      'https://www.linkedin.com/in/rinshadpr477-cell/',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Java 21',
      'Spring Boot 3',
      'Apache Kafka',
      'BullMQ',
      'Redis',
      'PostgreSQL',
      'Prisma',
      'MongoDB',
      'Docker',
      'AWS EC2',
      'NGINX',
      'Razorpay',
      'Twilio Media Streams'
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-apple-bg dark:bg-apple-darkBg text-apple-text dark:text-apple-darkText selection:bg-apple-indigo/20 transition-colors duration-300">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

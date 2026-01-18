// app/layout.tsx (SERVER COMPONENT)

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IN-TA Solutions',
  description: "IN-TA Solutions is a technology-driven IT services company focused on building reliable, scalable, and practical digital solutions for businesses of all sizes. We specialize in custom software development, web and application development, backend systems, cloud-based solutions, and secure integrations that solve real business problems.Our approach is simple — understand the client’s needs, design the right solution, and deliver it with quality and clarity. We believe technology should make businesses more efficient, not more complicated. That’s why we focus on clean architecture, performance, security, and long-term maintainability in everything we build.At IN-TA Solutions, we don’t just deliver projects — we build long-term partnerships. Whether it’s a startup looking to launch fast, or an established business aiming to scale digitally, we work closely with clients to ensure the solution aligns with their goals and grows with them."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

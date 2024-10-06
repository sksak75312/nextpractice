import { ReactNode } from 'react';
import type { Metadata } from 'next';

import MainHeader from '@/components/MainHeader';

export const metadata: Metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}

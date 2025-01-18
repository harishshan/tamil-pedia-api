// app/layout.tsx
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js App with REST API',
  description: 'A simple app demonstrating the App Router in Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#0070f3', color: '#fff' }}>
          <h1>My Next.js App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

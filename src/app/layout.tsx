// app/layout.tsx ou src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Certifique-se de que o caminho está correto

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cortex',
  description: 'System ERP',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

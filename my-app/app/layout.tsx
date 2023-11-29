import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Head from 'next/head';
import Image from 'next/image';

const InterFont = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rede Check Brasil',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <Head>
        <link rel='stylesheet' href='https://unpkg.com/aos@next/dist/aos.css' />
      </Head>
      <body className={InterFont.className}>
        <main className='m-0 flex flex-col items-center justify-center'>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from './components/ServerSide/Home/Header/Header';
import Head from 'next/head';
import { AOSInit } from '@/app/components/ServerSide/Home/AosImport/Aos';
import Footer from './components/ServerSide/Home/Footer/Footer';
import Image from 'next/image';

const Josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-Josefin-sans',
});

export const metadata: Metadata = {
  title: 'FACMAT',
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
      <AOSInit />
      <body className={Josefin_sans.className}>
        <main className='m-0'>
          <div>{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}

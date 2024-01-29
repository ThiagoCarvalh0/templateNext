import './globals.css';
import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from './components/ServerSide/Home/Header/Header';
import Head from 'next/head';
import { AOSInit } from '@/app/components/ServerSide/Home/AosImport/Aos';
import Footer from './components/ServerSide/Home/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Josefin_sans = Comfortaa({
  subsets: ['latin'],
  variable: '--font-Comfortaa',
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
          <div className='flex w-full justify-center bg-entidades_gray sm:hidden lg:flex'>
            <div className='flex w-[95vw] max-w-[95vw] justify-between py-1'>
              <div className='flex items-center justify-center gap-2'>
                <Image
                  src='/imagens/whats-icon.png'
                  width={16}
                  height={16}
                  alt='whats'
                />
                <span className='text-xs text-white underline'>
                  <Link href='https://wa.me/556533171661' target='_blank'>
                    (65) 3317-1661
                  </Link>
                </span>
              </div>
              <div className='flex gap-2'>
                <Link href={`/SegundaViaBoleto`}>
                  <span className='rounded-3xl bg-entidades_green px-2 py-1 text-xs text-white'>
                    2º Via Boleto
                  </span>
                </Link>
                <span className='rounded-3xl bg-entidades_green px-2 py-1 text-xs text-white'>
                  Cadastre seu currículo
                </span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Image
                  src='/imagens/email-icon.png'
                  width={16}
                  height={16}
                  alt='mail'
                />
                <span className='text-xs text-white underline'>
                  adm@facmat.org.br
                </span>
              </div>
            </div>
          </div>
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}

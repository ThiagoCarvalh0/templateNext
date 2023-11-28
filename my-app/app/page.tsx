'use client';
import { fetchWrapper } from '@/services/fetchService';
import SwiperBanners from './components/ServerSide/Home/Swiper/Swiper';
import Swiperperview from './components/ServerSide/Home/Parceiros_SwiperPerView/SwiperPerView';
import ServicosDestaque from './components/ServerSide/Home/ServicosDestaque/ServicosDestaque';
import QuemSomos from './components/ServerSide/Home/QuemSomos/QuemSomos';
import Newsletter from './components/ServerSide/Home/Newsletter/Newsletter';
import GaleriaDeEventos from './components/ServerSide/Home/GaleriaDeEventos/GaleriaDeEventos';
import ParceriasEConveniosSwiper from './components/ServerSide/Home/ParceriasEConvenios/ParceriasEConvenios';
import Image from 'next/image';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ConteudoHomeContext, ConteudoProvider } from './Contexts/HomeContexts';
import { useContext } from 'react';
import Header from './components/ServerSide/Home/Header/Header';
import Footer from './components/ServerSide/Home/Footer/Footer';

export default function Home() {
  const queryClientInstance = new QueryClient();
  return (
    <QueryClientProvider client={queryClientInstance}>
      <HomeComponent />
    </QueryClientProvider>
  );
}
function HomeComponent() {
  const queryClient = useQueryClient();
  return (
    <ConteudoProvider>
      <div className='flex flex-col items-center justify-center'>
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
                (65) 3317-1661
              </span>
            </div>
            <div className='flex gap-2'>
              <span className='rounded-3xl bg-entidades_green px-2 py-1 text-xs text-white'>
                2º Via Boleto
              </span>
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
        <SwiperBanners />
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          <ServicosDestaque />
        </div>
        <QuemSomos />
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          <Swiperperview />
          <Newsletter />
        </div>
        <div className='mt-8 flex w-full items-center justify-center bg-slate-100'>
          <GaleriaDeEventos />
        </div>
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          <ParceriasEConveniosSwiper />
        </div>
        <Footer />
      </div>
    </ConteudoProvider>
  );
}

'use client';
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
import Header from './components/header/header';
import SwiperBanners from './components/swiper/SwiperBanners';
import NossosServicos from './components/nossosServicos/NossosServicos';
import QuemSomos from './components/quemSomos/QuemSomos';
import TorneseCliente from './components/torneseCliente/TorneseCliente';
import Footer from './components/footer/Footer';
import EntreEmContato from './components/entreEmContato/EntreEmContato';
import NavMobile from './components/navMobile/NavMobile';

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
      {/* header */}
      <Header />
      <SwiperBanners />
      <div className='border sm:w-full custom-lg:w-[70rem] custom-lg:max-w-[70rem]'>
        <NossosServicos />
      </div>
      <QuemSomos />
      <TorneseCliente />
      <EntreEmContato />
      <Footer />
      <NavMobile />
    </ConteudoProvider>
  );
}

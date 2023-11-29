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
      <div className='w-[70rem] max-w-[70rem] border'>
        <SwiperBanners />
      </div>
      {/* footer */}
    </ConteudoProvider>
  );
}

'use client';
import { fetchWrapper } from '@/services/fetchService';
import SwiperBanners from './components/ServerSide/Home/Swiper/Swiper';
import Swiperperview from './components/ServerSide/Home/Parceiros_SwiperPerView/SwiperPerView';
import ServicosDestaque from './components/ServerSide/Home/ServicosDestaque/ServicosDestaque';
import QuemSomos from './components/ServerSide/Home/QuemSomos/QuemSomos';
import Newsletter from './components/ServerSide/Home/Newsletter/Newsletter';
import GaleriaDeEventos from './components/ServerSide/Home/GaleriaDeEventos/GaleriaDeEventos';
import ParceriasEConveniosSwiper from './components/ServerSide/Home/ParceriasEConvenios/ParceriasEConvenios';
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ConteudoProvider } from './Contexts/HomeContexts';

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
        <SwiperBanners />
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          <ServicosDestaque />
        </div>
        {/* <QuemSomos /> */}
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          <Newsletter />
        </div>
        <div className='mt-8 flex w-full items-center justify-center bg-slate-100'>
          <GaleriaDeEventos />
        </div>
        <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full sm:px-4'>
          {/* <Swiperperview /> */}
          <ParceriasEConveniosSwiper />
        </div> 
      </div>
    </ConteudoProvider>
  );
}

import { fetchWrapper } from '@/services/fetchService';
import Image from 'next/image';
import SwiperBanners from './components/ServerSide/Swiper/Swiper';
import Swiperperview from './components/ServerSide/Parceiros_SwiperPerView/SwiperPerView';
import ServicosDestaque from './components/ServerSide/ServicosDestaque/ServicosDestaque';
import QuemSomos from './components/ServerSide/QuemSomos/QuemSomos';
import Newsletter from './components/ServerSide/Newsletter/Newsletter';
import GaleriaDeEventos from './components/ServerSide/GaleriaDeEventos/GaleriaDeEventos';
import ParceriasEConveniosSwiper from './components/ServerSide/ParceriasEConvenios/ParceriasEConvenios';

// type PostProps = {
//   id: number;
//   title: string;
// };

export default async function Home() {
  // const response = await fetchWrapper<{ data: PostProps[] }>('/examples', {
  //   method: 'GET',
  // });
  // response ? console.log(response.data) : null;
  return (
    <div className='flex flex-col items-center justify-center'>
      <SwiperBanners />
      <div className='flex w-[73rem] max-w-[73rem] flex-col'>
        <ServicosDestaque />
      </div>
      <QuemSomos />
      <div className='flex w-[73rem] max-w-[73rem] flex-col'>
        <Swiperperview />
        <Newsletter />
      </div>
      <div className='mt-8 flex w-full items-center justify-center bg-slate-100'>
        <GaleriaDeEventos />
      </div>
      <div className='flex w-[73rem] max-w-[73rem] flex-col'>
        <ParceriasEConveniosSwiper />
      </div>
    </div>
  );
}

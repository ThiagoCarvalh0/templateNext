import { fetchWrapper } from '@/services/fetchService';
import Image from 'next/image';
import SwiperBanners from './components/ServerSide/Home/Swiper/Swiper';
import Swiperperview from './components/ServerSide/Home/Parceiros_SwiperPerView/SwiperPerView';
import ServicosDestaque from './components/ServerSide/Home/ServicosDestaque/ServicosDestaque';
import QuemSomos from './components/ServerSide/Home/QuemSomos/QuemSomos';
import Newsletter from './components/ServerSide/Home/Newsletter/Newsletter';
import GaleriaDeEventos from './components/ServerSide/Home/GaleriaDeEventos/GaleriaDeEventos';
import ParceriasEConveniosSwiper from './components/ServerSide/Home/ParceriasEConvenios/ParceriasEConvenios';

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

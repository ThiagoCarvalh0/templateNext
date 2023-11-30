import React, { ReactNode, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';
import './Swipper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER!;

const SwiperBanners = () => {
  const { data, getConteudoByNomeTipoConteudo } =
    useContext(ConteudoHomeContext);
  const SwipperData: Root[] = data
    ? getConteudoByNomeTipoConteudo('carrosel')
    : [];

  const BannersTopo = SwipperData?.filter((item: Root) => {
    return item.TituloConteudo == 'Banners Topo' ? item : null;
  });

  return (
    <div className='w-full'>
      <div className='z-10 w-full'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {BannersTopo[0] &&
            BannersTopo[0].Arquivos.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src + item.NomeArquivo}
                  width={500}
                  height={500}
                  alt=''
                  className='w-full sm:hidden lg:block'
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* <div className='sm:block lg:hidden'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        ></Swiper>
      </div> */}
    </div>
  );
};

export default SwiperBanners;

'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_BANNER_FOLDER;

export default function ParceriasEConveniosSwiper() {
  const [slidesPerView, setSlidesPerView] = useState(7);
  const { getBanners } = useContext(ConteudoHomeContext);
  const Parcerias: Root[] = getBanners('BANNER PARCERIAS E CONVÊNIOS', 20, 1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      // Atualize o número de slidesPerView com base na largura da tela
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Defina 1 slide por vez para telas menores que 768px (dispositivos móveis)
      } else {
        setSlidesPerView(6); // Caso contrário, defina 7 slides por vez
      }
    };
    // Adicione um listener de redimensionamento para atualizar o número de slidesPerView
    window.addEventListener('resize', updateSlidesPerView);

    // Chame a função inicial para definir o valor inicial corretamente
    updateSlidesPerView();

    // Remova o listener de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return Parcerias ? (
    <>
      <div className='flex w-full flex-col gap-10 py-10'>
        <span className='text-center text-3xl font-semibold'>
          PARCERIAS E CONVÊNIOS
        </span>
        <div className='relative px-24'>
          {/* <div className={`swiper-button-prev-per-view absolute left-0 top-11`}>
            <img src={'/imagens/LeftArrow.png'} width={24} height={24} alt='' />
          </div>
          <div
            className={`swiper-button-next-per-view absolute right-0 top-11`}
          >
            <img
              src={'/imagens/RightArrow.png'}
              width={24}
              height={24}
              alt=''
            />
          </div> */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
            delay: 800,
          }}
            pagination={{
              clickable: true,
              enabled: false
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className=''
          >
            {Parcerias &&
              Parcerias.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src + item.Arquivos[0].NomeArquivo}
                    width={1000}
                    height={1000}
                    alt=''
                    className='w-full sm:hidden lg:block'
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  ) : (
    <div className='w-full py-2'>
      <Skeleton className='h-[15rem] w-full rounded-customLg bg-slate-400' />
    </div>
  );
}

'use client';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

export default function ParceriasEConveniosSwiper() {
  const [slidesPerView, setSlidesPerView] = useState(7);

  useEffect(() => {
    const updateSlidesPerView = () => {
      // Atualize o número de slidesPerView com base na largura da tela
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Defina 1 slide por vez para telas menores que 768px (dispositivos móveis)
      } else {
        setSlidesPerView(7); // Caso contrário, defina 7 slides por vez
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
  return (
    <>
      <div className='flex w-full flex-col gap-10 py-10'>
        <span className='text-center text-3xl font-semibold'>
          PARCERIAS E CONVÊNIOS
        </span>
        <div className='relative px-24'>
          <div className={`swiper-button-prev-per-view absolute left-0 top-11`}>
            <Image
              src={'/imagens/LeftArrow.png'}
              width={24}
              height={24}
              alt=''
            />
          </div>
          <div
            className={`swiper-button-next-per-view absolute right-0 top-11`}
          >
            <Image
              src={'/imagens/RightArrow.png'}
              width={24}
              height={24}
              alt=''
            />
          </div>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-per-view',
              prevEl: '.swiper-button-prev-per-view',
            }}
            modules={[Navigation]}
            className=''
          >
            <SwiperSlide>
              <Image
                src={'/imagens/P1.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P2.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P3.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P4.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P5.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P6.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P7.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/P7.png'}
                width={1000}
                height={1000}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

'use client';
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperPerView.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_BANNER_FOLDER;

export default function App() {
  const { getBanners } = useContext(ConteudoHomeContext);
  const Parcerias: Root[] = getBanners('BANNER PARCERIAS E CONVÊNIOS', 20, 1);
  Parcerias;
  return Parcerias ? (
    <>
      <div className='flex w-full flex-col gap-10 py-10'>
        <span className='text-center text-3xl font-semibold'>
          PARCERIAS E CONVÊNIOS
        </span>
        <div className='relative w-full sm:h-10 sm:px-12 lg:h-auto lg:px-24'>
          <div
            className={`swiper-button-prev-per-view absolute left-0 sm:top-[0rem] lg:top-[3.5rem]`}
          >
            <img src={'/imagens/LeftArrow.png'} width={24} height={24} alt='' />
          </div>
          <div
            className={`swiper-button-next-per-view absolute right-0 sm:top-[0rem] lg:top-[3.5rem]`}
          >
            <img
              src={'/imagens/RightArrow.png'}
              width={24}
              height={24}
              alt=''
            />
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-per-view',
              prevEl: '.swiper-button-prev-per-view',
            }}
            modules={[Navigation]}
            className='w-full'
          >
            {Parcerias &&
              Parcerias.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src + item.Arquivos[0].NomeArquivo}
                    width={600}
                    height={600}
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
    <div className='py-2'>
      <Skeleton className='h-[30rem] w-full rounded-customLg bg-slate-400' />
    </div>
  );
}

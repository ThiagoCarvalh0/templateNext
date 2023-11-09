'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperPerView.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className='flex w-full flex-col gap-10 py-10'>
        <span className='text-center text-3xl font-semibold'>PARCERIAS</span>
        <div className='relative w-full sm:h-10 sm:px-12 lg:h-auto lg:px-24'>
          <div
            className={`swiper-button-prev-per-view absolute left-0 sm:top-[0rem] lg:top-[3.5rem]`}
          >
            <Image
              src={'/imagens/LeftArrow.png'}
              width={24}
              height={24}
              alt=''
            />
          </div>
          <div
            className={`swiper-button-next-per-view absolute right-0 sm:top-[0rem] lg:top-[3.5rem]`}
          >
            <Image
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
            <SwiperSlide>
              <Image
                src={'/imagens/CursosGraduacao.png'}
                width={600}
                height={600}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/FeiraInternacional.png'}
                width={600}
                height={600}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/FazerAcontecer.png'}
                width={600}
                height={600}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imagens/CursosGraduacao.png'}
                width={600}
                height={600}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide className='w-full'>
              <Image
                src={'/imagens/FeiraInternacional.png'}
                width={600}
                height={600}
                alt=''
                className='w-full sm:hidden lg:block'
              />
            </SwiperSlide>
            <SwiperSlide className='w-full'>
              <Image
                src={'/imagens/FazerAcontecer.png'}
                width={600}
                height={600}
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

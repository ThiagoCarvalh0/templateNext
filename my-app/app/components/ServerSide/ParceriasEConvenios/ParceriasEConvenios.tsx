'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

export default function ParceriasEConveniosSwiper() {
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
            slidesPerView={7}
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

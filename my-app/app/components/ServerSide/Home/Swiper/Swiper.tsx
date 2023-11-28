'use client';
import React, { useContext, useEffect, useState } from 'react';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';

// import { Conteudo, SessaoProps } from "@/types/Conteudo";

// const src =
//   process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const SwiperBanners: React.FC<any> = (conteudo) => {
  const { getConteudoByNomeTipoConteudo } = useContext(ConteudoHomeContext);
  const menu: Root[] = getConteudoByNomeTipoConteudo('Menu');
  return (
    <>
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
          <SwiperSlide>
            <Image
              src={'/imagens/banner-1.png'}
              width={500}
              height={500}
              alt=''
              className='w-full sm:hidden lg:block'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/imagens/banner-1.png'}
              width={500}
              height={500}
              alt=''
              className='w-full sm:hidden lg:block'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/imagens/banner-1.png'}
              width={500}
              height={500}
              alt=''
              className='w-full sm:hidden lg:block'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/imagens/banner-1.png'}
              width={500}
              height={500}
              alt=''
              className='w-full sm:hidden lg:block'
            />
          </SwiperSlide>
          {/* {conteudoSwiperDesktop?.map((item) => (
            <SwiperSlide key={item.IdConteudo}>
              <Image
                src={src + item.Arquivos![0].NomeArquivo}
                unoptimized={true}
                width={100}
                height={0}
                alt=''
                className='w-full sm:hidden lg:block'
                key={item.IdConteudo}
              />
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
      <div className='sm:block lg:hidden'>
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
          {/* {conteudoSwiperMobile?.map((item) => (
            <SwiperSlide key={item.IdConteudo}>
              <Image
                src={src + item.Arquivos![0].NomeArquivo}
                alt=''
                unoptimized={true}
                className='w-full sm:block lg:hidden'
                width={100}
                height={0}
                key={item.IdConteudo}
              />
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperBanners;

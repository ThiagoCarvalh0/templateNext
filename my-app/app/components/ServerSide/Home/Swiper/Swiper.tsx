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
import { Skeleton } from '@/components/ui/skeleton';

// import { Conteudo, SessaoProps } from "@/types/Conteudo";

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const SwiperBanners: React.FC<any> = (conteudo) => {
  const { getConteudoByNomeTipoConteudo } = useContext(ConteudoHomeContext);
  const Banners: Root[] = getConteudoByNomeTipoConteudo('Banner');
  const BannersMb: Root[] = getConteudoByNomeTipoConteudo('Banners Mobile');

  return Banners && BannersMb ? (
    <div className='w-full'>
      <div className='z-10 w-full sm:hidden lg:block'>
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
          className='mySwiper w-screen'
        >
          {Banners ? (
            Banners?.map((item) => (
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
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </div>
      <div className='w-screen sm:block lg:hidden'>
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
          {BannersMb ? (
            BannersMb?.map((item) => (
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
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </div>
    </div>
  ) : (
    <div className='w-full'>
      <Skeleton className='h-[30rem] w-full bg-slate-400' />
    </div>
  );
};

export default SwiperBanners;

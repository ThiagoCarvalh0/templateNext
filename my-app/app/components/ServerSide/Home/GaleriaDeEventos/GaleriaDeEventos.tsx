import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Skeleton } from '@/components/ui/skeleton';
import { Root } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const src = process.env.NEXT_PUBLIC_URL_CMS!;

const GaleriaDeEventos = () => {
  const { loadGaleriaData, galeriaData } = useContext(ConteudoHomeContext);

  useEffect(() => {
    loadGaleriaData(1, 4);
  }, []);
  const galeriaPrincipal = galeriaData
    ? galeriaData[galeriaData.length - 1]
    : null;
  return galeriaData ? (
    <div className='flex w-[73rem] max-w-[73rem] flex-col'>
      <span
        data-aos='fade-down'
        className='pt-4 text-center text-3xl font-semibold'
      >
        GALERIA DE EVENTOS
      </span>
      <div className='sm:flex-column gap-2 p-10 lg:flex lg:flex-row'>
        <div
          className='flex-1'
          data-aos='fade-left'
          data-aos-delay='50'
          data-aos-mirror='false'
        >
          {galeriaPrincipal && (
            <Link href={`GaleriaDeImagens/${galeriaPrincipal.IdGaleria}`}>
              <img
                src={
                  src +
                  process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                  galeriaPrincipal.IdGaleria +
                  '/IMG/' +
                  galeriaPrincipal.Arquivos![0].NomeArquivo
                }
                width={500}
                height={500}
                alt=''
                className='w-full object-cover'
              />
            </Link>
          )}
        </div>
        <div className='flex flex-1 flex-col justify-between gap-3'>
          {galeriaData[0] ? (
            <Link href={`GaleriaDeImagens/${galeriaData[1].IdGaleria}`}>
              <div
                className='flex min-h-[11rem] flex-1'
                data-aos='fade-left'
                data-aos-delay='70'
                data-aos-mirror='false'
              >
                <img
                  src={
                    src +
                    process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                    galeriaData[0].IdGaleria +
                    '/IMG/' +
                    galeriaData[0].Arquivos![0].NomeArquivo
                  }
                  width={500}
                  height={500}
                  alt=''
                  className='w-1/4 rounded-customMd object-cover'
                />
                <div className='flex w-2/4 flex-grow flex-col p-2'>
                  <span className='text-xl font-semibold'>
                    {galeriaData[0].NomeGaleria}
                  </span>
                  <span>{galeriaData[0].BreveDescricao}</span>
                </div>
              </div>
            </Link>
          ) : (
            <></>
          )}
          {galeriaData[1] ? (
            <Link href={`GaleriaDeImagens/${galeriaData[1].IdGaleria}`}>
              <div
                className='flex min-h-[11rem] flex-1'
                data-aos='fade-left'
                data-aos-delay='70'
                data-aos-mirror='false'
              >
                <img
                  src={
                    src +
                    process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                    galeriaData[1].IdGaleria +
                    '/IMG/' +
                    galeriaData[1].Arquivos![0].NomeArquivo
                  }
                  width={500}
                  height={500}
                  alt=''
                  className='w-1/4 rounded-customMd object-cover'
                />
                <div className='flex w-2/4 flex-grow flex-col p-2'>
                  <span className='text-xl font-semibold'>
                    {galeriaData[1].NomeGaleria}
                  </span>
                  <span>{galeriaData[1].BreveDescricao}</span>
                </div>
              </div>
            </Link>
          ) : (
            <></>
          )}
          {galeriaData[2] ? (
            <Link href={`GaleriaDeImagens/${galeriaData[2].IdGaleria}`}>
              <div
                className='flex min-h-[11rem] flex-1'
                data-aos='fade-left'
                data-aos-delay='70'
                data-aos-mirror='false'
              >
                <img
                  src={
                    src +
                    process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                    galeriaData[2].IdGaleria +
                    '/IMG/' +
                    galeriaData[2].Arquivos![0].NomeArquivo
                  }
                  width={500}
                  height={500}
                  alt=''
                  className='w-1/4 rounded-customMd object-cover'
                />
                <div className='flex w-2/4 flex-grow flex-col p-2'>
                  <span className='text-xl font-semibold'>
                    {galeriaData[2].NomeGaleria}
                  </span>
                  <span>{galeriaData[2].BreveDescricao}</span>
                </div>
              </div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className='flex w-full justify-center py-2'>
      <Skeleton className='h-[30rem] w-[71rem] max-w-[73rem] rounded-customLg bg-slate-400' />
    </div>
  );
};

export default GaleriaDeEventos;

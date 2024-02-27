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
          {galeriaData[0] && (
            <Link href={`GaleriaDeImagens/${galeriaData[0].IdGaleria}`}>
              {galeriaData[0].Arquivos.filter(
                (item: any) => item.IsDestaque
              ).map((item: any, index: number) => (
                <img
                  key={index} // Certifique-se de fornecer uma chave única para cada elemento na lista
                  src={
                    src +
                    process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                    galeriaData[0].IdGaleria +
                    '/IMG/' +
                    item.NomeArquivo
                  }
                  width={500}
                  height={500}
                  alt=''
                  className='w-full object-cover h-full'
                />
              ))}
            </Link>
          )}
        </div>
        <div className='flex flex-1 flex-col justify-between gap-3'>
          {galeriaData[1] ? (
            <Link href={`GaleriaDeImagens/${galeriaData[1].IdGaleria}`}>
              <div
                className='flex min-h-[11rem] flex-1'
                data-aos='fade-left'
                data-aos-delay='70'
                data-aos-mirror='false'
              >
                {galeriaData[1].Arquivos.filter(
                  (item: any) => item.IsDestaque
                ).map((item: any, index: number) => (
                  <>
                    <img
                      src={
                        src +
                        process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                        galeriaData[1].IdGaleria +
                        '/IMG/' +
                        item.NomeArquivo
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
                  </>
                ))}
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
                {galeriaData[2].Arquivos.filter(
                  (item: any) => item.IsDestaque
                ).map((item: any, index: number) => (
                  <>
                    <img
                      src={
                        src +
                        process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                        galeriaData[2].IdGaleria +
                        '/IMG/' +
                        item.NomeArquivo
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
                  </>
                ))}
              </div>
            </Link>
          ) : (
            <></>
          )}
          {galeriaData[3] ? (
            <Link href={`GaleriaDeImagens/${galeriaData[3].IdGaleria}`}>
              <div
                className='flex min-h-[11rem] flex-1'
                data-aos='fade-left'
                data-aos-delay='70'
                data-aos-mirror='false'
              >
                {galeriaData[3].Arquivos.filter(
                  (item: any) => item.IsDestaque
                ).map((item: any, index: number) => (
                  <>
                    <img
                      src={
                        src +
                        process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                        galeriaData[3].IdGaleria +
                        '/IMG/' +
                        item.NomeArquivo
                      }
                      width={500}
                      height={500}
                      alt=''
                      className='w-1/4 rounded-customMd object-cover'
                    />
                    <div className='flex w-2/4 flex-grow flex-col p-2'>
                      <span className='text-xl font-semibold'>
                        {galeriaData[3].NomeGaleria}
                      </span>
                      <span>{galeriaData[3].BreveDescricao}</span>
                    </div>
                  </>
                ))}
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

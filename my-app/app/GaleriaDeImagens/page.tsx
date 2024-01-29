'use client';
import React, { useEffect, useState } from 'react';
import { Root } from '@/types/types';
import { fetchWrapper } from '@/services/fetchService';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';

type noticia = {
  id: number;
  src?: string;
  titulo: string;
  descricao: string;
};

const page = () => {
  const [galeriasData, setgaleriasData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [pageSize, setPageSize] = useState<any>(9);
  const [total, setTotalItens] = useState<any>(1);

  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetGalerias/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}?pageSize=${pageSize}&pageNumber=${currentPage}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        return res;
      })
      .then((Data) => {
        setgaleriasData(Data);
        console.log(Data);
        if (Data.length > 0) {
          console.log(Data[0].TotalCount);
          setTotalItens(Data[0].TotalCount);
        }
      });
  }, [currentPage]);
  console.log(galeriasData);

  const pages = Math.ceil(total / pageSize);
  const src = process.env.NEXT_PUBLIC_URL_CMS!;

  return (
    <div className='flex min-h-[90vh] flex-col items-center py-4'>
      <NextBreadcrumb
        homeElement={'Início'}
        separator={<span> | </span>}
        activeClasses='text-green-600'
        containerClasses='flex pt-0 w-[80vw] max-w-[80vw] pb-3 to-blue-600'
        listClasses='hover:underline mx-2 font-bold'
        capitalizeLinks
      />
      <div className='grid gap-4 border-b-2 border-b-entidades_green sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
        {galeriasData.map((item: any, index: number) =>
          item.Arquivos.length > 0 ? (
            <Link key={index} href={`GaleriaDeImagens/${item.IdGaleria}`}>
              <div className='sm:w-full sm:p-2 lg:w-[20rem]'>
                <img
                  src={
                    src +
                    process.env.NEXT_PUBLIC_GALERIA_FOLDER +
                    item.IdGaleria +
                    '/IMG/' +
                    item.Arquivos[0]!.NomeArquivo
                  }
                  width={500}
                  height={500}
                  alt=''
                  className='w-full object-cover sm:w-full lg:h-[14rem]'
                />
                <div className='flex w-full flex-col  p-2'>
                  <span className='line-clamp-3 text-base text-zinc-900'>
                    {item.TituloConteudo}
                  </span>
                  <span className='text-xs text-zinc-500'>
                    {new Date(item.DataPublicacao).toLocaleDateString()}
                  </span>
                  <span className='line-clamp-3 text-base text-zinc-600'>
                    {item.BreveDescricao}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <></>
          )
        )}
      </div>
      <div className='flex justify-end gap-2 py-4 sm:w-full sm:px-2 lg:w-[62rem]'>
        {currentPage > 1 ? (
          <div>
            <button
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              <ArrowLeft />
            </button>
          </div>
        ) : (
          <></>
        )}
        <span>
          Página {currentPage} de {pages}
        </span>
        {currentPage == pages ? (
          <></>
        ) : (
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default page;

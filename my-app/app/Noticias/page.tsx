'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Root } from '@/types/types';
import { fetchWrapper } from '@/services/fetchService';
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

type noticia = {
  id: number;
  src?: string;
  titulo: string;
  descricao: string;
};

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const page = () => {
  const [noticiasData, setNoticiasData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [pageSize, setPageSize] = useState<any>(9);
  const [total, setTotalItens] = useState<any>(1);

  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetConteudoByTipoConteudo/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/Noticia?pageSize=${pageSize}&pageNumber=${currentPage}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        return res;
      })
      .then((Data) => {
        setNoticiasData(Data);
        if (Data.length > 0) {
          setTotalItens(Data[0].TotalCount);
        }
      });
  }, [currentPage]);

  const pages = Math.ceil(total / pageSize);

  return (
    <div className='flex min-h-[90vh] flex-col items-center py-4'>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {noticiasData.map((noticia: Root, index: number) =>
          noticia.Arquivos.length > 0 ? (
            <Link key={index} href={`Noticias/${noticia.IdConteudo}`}>
              <div className='sm:w-full sm:p-2 lg:w-[20rem]'>
                <img
                  src={src + noticia.Arquivos[0]!.NomeArquivo}
                  width={500}
                  height={500}
                  alt=''
                  className='w-full object-cover sm:w-full lg:h-[14rem]'
                />
                <div className='flex w-full flex-col p-2'>
                  <span className='line-clamp-3 text-base text-zinc-900'>
                    {noticia.TituloConteudo}
                  </span>
                  <span className='text-xs text-zinc-500'>
                    {new Date(noticia.DataPublicacao).toLocaleDateString()}
                  </span>
                  <span className='line-clamp-3 text-base text-zinc-600'>
                    {noticia.BreveDescricao}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <></>
          )
        )}
      </div>
      <div className='flex w-full justify-end gap-2 px-6 py-4'>
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
        {/* <div className='flex w-20 gap-4 overflow-hidden'>
          {Array.from({ length: pages }, (_, index) => (
            <button className='flex'>{index + 1}</button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default page;

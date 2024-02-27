import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ClientSide/ServicosDestaque/ServicosDestaqueClient';
import { Skeleton } from '@/components/ui/skeleton';
import { Root } from '@/types/types';
import Image from 'next/image';
import React, { useContext } from 'react';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_BANNER_FOLDER;

const ServicosDestaque = () => {
  const { getBanners } = useContext(ConteudoHomeContext);
  const cards: Root[] = getBanners(
    'BANNER DE PRODUTOS E SERVIÇOS',
    20,
    1,
    true
  );
  cards;

  return cards ? (
    <div className='flex w-full flex-col gap-10 pt-10'>
      <span
        data-aos='fade-down'
        className='text-center text-3xl font-semibold sm:text-2xl'
      >
        SERVIÇOS EM DESTAQUE
      </span>
      <div className='flex justify-between gap-1 sm:flex-col md:p-4 lg:flex-row'>
        {cards &&
          cards.map((card: any, index) =>
            card.Arquivos.filter((item: any) => item.IsDestaque == true).map(
              (item: any) => (
                <Card
                  key={index}
                  data-aos='fade-right'
                  className='w-full rounded-customMd shadow-xl'
                >
                  <img
                    src={src + item.NomeArquivo}
                    alt=''
                    className='h-48 w-full'
                  />
                  <CardHeader>
                    <CardTitle>{card.NomeBanner}</CardTitle>
                    <CardDescription>{card.DescricaoBanner}</CardDescription>
                  </CardHeader>
                  {/* <CardContent></CardContent> */}
                </Card>
              )
            )
          )}
      </div>
    </div>
  ) : (
    <div className='py-2'>
      <Skeleton className='h-[30rem] w-full rounded-customLg bg-slate-400' />
    </div>
  );
};

export default ServicosDestaque;
function getConteudoByNomeTipoConteudo(arg0: string): Root[] {
  throw new Error('Function not implemented.');
}

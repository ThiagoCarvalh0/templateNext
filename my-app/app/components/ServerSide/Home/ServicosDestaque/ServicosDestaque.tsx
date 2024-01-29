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
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const ServicosDestaque = () => {
  const { getConteudoByNomeTituloConteudo } = useContext(ConteudoHomeContext);
  const cards: Root[] = getConteudoByNomeTituloConteudo('SERVIÇOS EM DESTAQUE');

  return cards ? (
    <div className='flex w-full flex-col gap-10 pt-10'>
      <span
        data-aos='fade-down'
        className='text-center text-3xl font-semibold sm:text-2xl'
      >
        {cards && cards.map((item) => item.TituloConteudo)}
      </span>
      <div className='flex justify-between gap-1 sm:flex-col md:p-4 lg:flex-row'>
        {cards &&
          cards.map((item) =>
            item.ConteudoDependente.map((item, index) => (
              <Card
                key={index}
                data-aos='fade-right'
                className='w-full rounded-customMd shadow-xl'
              >
                <Image
                  src={src + item.Arquivos![0].NomeArquivo}
                  width={500}
                  height={500}
                  alt=''
                  className='w-full'
                />
                <CardHeader>
                  <CardTitle>{item.TituloConteudo}</CardTitle>
                  <CardDescription>{item.BreveDescricao}</CardDescription>
                </CardHeader>
                {/* <CardContent></CardContent> */}
              </Card>
            ))
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

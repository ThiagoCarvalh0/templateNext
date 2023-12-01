import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';
import Link from 'next/link';
import { ArrowRightSquare } from 'lucide-react';
import React, { useContext } from 'react';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER!;

const nossosServicos = () => {
  const { getConteudoByTituloConteudo } = useContext(ConteudoHomeContext);
  const ComponentData: Root[] = getConteudoByTituloConteudo('Nossos Serviços');

  return (
    <div
      className='flex w-full flex-col items-center justify-center py-12'
      id='nossosservicos'
    >
      <span className='w-full pb-12 text-center text-5xl'>
        {ComponentData && ComponentData[0].TituloConteudo}
      </span>
      <div className='flex p-4 sm:w-full sm:flex-col sm:items-center sm:justify-center sm:gap-4 custom-md:flex-row custom-md:flex-wrap custom-md:gap-2 custom-lg:justify-between'>
        {ComponentData &&
          ComponentData[0].ConteudoDependente.map((item, index) => (
            <div
              className='flex flex-col justify-between shadow-xl sm:w-80 lg:w-64'
              key={index}
            >
              <div className='flex h-40 items-center justify-center rounded-t-customLg bg-rede_check_light_blue'>
                <div className='flex items-center justify-center gap-2'>
                  <img
                    src={src + item.Arquivos[0].NomeArquivo}
                    alt=''
                    className='h-12 w-12'
                  />
                  <span
                    className='text-2xl text-white'
                    dangerouslySetInnerHTML={{ __html: item.TituloConteudo }}
                  />
                </div>
              </div>
              <div className='h-24 p-4'>
                <span>{item.BreveDescricao}</span>
              </div>
              <div className='flex gap-2 px-4 pb-2'>
                <Link
                  href='https://tagcred.com.br/'
                  target='_blank'
                  className='flex w-full flex-row-reverse justify-between gap-2'
                >
                  <ArrowRightSquare /> Saiba mais
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default nossosServicos;

import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import React, { useContext } from 'react';
const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER!;
const TorneseCliente = () => {
  const { getConteudoByTituloConteudo } = useContext(ConteudoHomeContext);
  const ComponentData = getConteudoByTituloConteudo('Torne-se Cliente');

  return (
    <div className='flex items-center justify-center border sm:w-full'>
      <div className='flex w-full items-center justify-center gap-2 py-12 sm:flex-col sm:p-2 lg:flex-row custom-lg:w-[70rem] custom-lg:max-w-[70rem]'>
        <div>
          <img
            src={
              ComponentData && src + ComponentData[0].Arquivos[0].NomeArquivo
            }
            alt=''
            className='w-[50rem]'
          />
        </div>
        <div className='flex flex-col'>
          <span className='w-full pb-12 text-center text-5xl'>
            {ComponentData && ComponentData[0].TituloConteudo}
          </span>
          <span
            dangerouslySetInnerHTML={{
              __html: ComponentData && ComponentData[0].BreveDescricao,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TorneseCliente;

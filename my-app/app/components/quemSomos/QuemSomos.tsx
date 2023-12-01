import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import React, { useContext } from 'react';

const QuemSomos = () => {
  const { getConteudoByTituloConteudo } = useContext(ConteudoHomeContext);
  const ComponentData = getConteudoByTituloConteudo('Quem Somos');

  return (
    <div
      className='flex items-center justify-center bg-rede_check_light_blue sm:w-full'
      id='quemsomos'
    >
      <div className='flex w-full flex-col items-center justify-center py-12 custom-lg:w-[70rem] custom-lg:max-w-[70rem]'>
        <span className='w-full pb-12 text-center text-5xl text-white'>
          {ComponentData && ComponentData[0].TituloConteudo}
        </span>
        <span className='text-white sm:p-2'>
          {ComponentData && ComponentData[0].BreveDescricao}
        </span>
      </div>
    </div>
  );
};

export default QuemSomos;

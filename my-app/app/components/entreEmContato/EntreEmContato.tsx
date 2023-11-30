import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import React, { useContext } from 'react';

const EntreEmContato = () => {
  const { getConteudoByTituloConteudo } = useContext(ConteudoHomeContext);
  const ComponentData = getConteudoByTituloConteudo('Entre em contato');
  return (
    <div className='flex items-center justify-center border bg-rede_check_light_blue sm:w-full'>
      <div className='custom-lg:w-[70rem] custom-lg:max-w-[70rem] flex w-full flex-col items-center justify-center py-12'>
        <div className='flex w-full gap-8 pb-12'>
          <div className='w-1/2'></div>
          <div className='flex w-1/2 flex-col gap-2 text-white'>
            <span className='text-3xl'>{ComponentData[0].TituloConteudo}</span>
            <span>{ComponentData[0].BreveDescricao}</span>
            {ComponentData[0].ConteudoDependente.map((item) => (
              <span>{item.BreveDescricao}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntreEmContato;

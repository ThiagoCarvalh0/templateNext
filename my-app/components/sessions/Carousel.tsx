'use client';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';
import { useState } from 'react';
import ItemCarousel from '../layout/ItemCarousel';

function Carousel() {
  const [index, setIndex] = useState(0);

  function nextIndex() {
    index < 1 && setIndex(index + 1);
  }

  function prevIndex() {
    index > 0 && setIndex(index - 1);
  }

  return (
    <div
      id='carousel'
      className='group relative flex h-[553px] w-full items-center justify-center bg-GrayGAC px-16 text-white '
    >
      <>
        <ArrowLeftCircleIcon
          className='absolute left-8 hidden h-14 w-14 cursor-pointer group-hover:flex group-hover:animate-fade-in'
          strokeWidth='1'
          onClick={prevIndex}
        />
        {index === 0 && (
          <ItemCarousel
            title='BEM-VINDO AO E-GAC'
            description='SISTEMA PARA AUTORIDADE CERTIFICADORA / SISTEMA PARA AUTORIDADE DE REGISTRO PLATAFORMA DIGITAL PARA GESTÃO E CONTROLE DE TODA CADEIA DE VENDAS E EMISSÃO DE CERTIFICADOS DIGITAIS.'
          />
        )}

        {index === 1 && (
          <ItemCarousel
            title='CONHEÇA MAIS'
            description='GESTÃO PARA AUTORIDADE DE REGISTRO CONHEÇA MAIS SOBRE O NOSSO PRODUTO'
          />
        )}

        <ArrowRightCircleIcon
          className='absolute right-8 hidden h-14 w-14 cursor-pointer group-hover:flex group-hover:animate-fade-in'
          strokeWidth='1'
          onClick={nextIndex}
        />
      </>
    </div>
  );
}

export default Carousel;

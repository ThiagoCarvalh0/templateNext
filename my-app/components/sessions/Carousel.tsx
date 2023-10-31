'use client';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

function Carousel() {
  const [index, setIndex] = useState(0);

  function nextIndex() {
    index < 1 && setIndex(index + 1);
  }

  function prevIndex() {
    index > 0 && setIndex(index - 1);
  }

  return (
    <div className='bg-GrayGAC flex h-[553px] w-full items-center justify-center px-16 text-white'>
      <>
        <ArrowLeftCircleIcon
          className='h-14 w-14'
          strokeWidth='1'
          onClick={prevIndex}
        />
        {index === 0 && (
          <div className='mx-24 flex flex-col items-center justify-center'>
            <Image
              width={1280}
              height={1280}
              src='/images/whiteIcon.png'
              alt={''}
              className='mb-6 h-[141px] w-[327px] object-scale-down'
            />
            <h1 className='mb-3 text-[46px] '>BEM VINDO AO E-GAC</h1>
            <p className='w-full text-center font-light'>
              SISTEMA PARA AUTORIDADE CERTIFICADORA / SISTEMA PARA AUTORIDADE DE
              REGISTRO PLATAFORMA DIGITAL PARA GESTÃO E CONTROLE DE TODA CADEIA
              DE VENDAS E EMISSÃO DE CERTIFICADOS DIGITAIS.
            </p>
          </div>
        )}

        {index === 1 && (
          <div className='mx-24 flex flex-col items-center justify-center'>
            <Image
              width={1280}
              height={1280}
              src='/images/whiteIcon.png'
              alt={''}
              className='mb-6 h-[141px] w-[327px] object-scale-down'
            />
            <h1 className='mb-3 text-[46px] '>TESTE</h1>
            <p className='w-full text-center font-light'>TESTE TESTE TESTE</p>
          </div>
        )}

        <ArrowRightCircleIcon
          className='h-14 w-14'
          strokeWidth='1'
          onClick={nextIndex}
        />
      </>
    </div>
  );
}

export default Carousel;

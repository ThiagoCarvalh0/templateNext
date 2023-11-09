import Image from 'next/image';
import React from 'react';

const GaleriaDeEventos = () => {
  return (
    <div className='flex w-[73rem] max-w-[73rem] flex-col'>
      <span
        data-aos='fade-down'
        className='pt-4 text-center text-3xl font-semibold'
      >
        GALERIA DE EVENTOS
      </span>
      <div className='sm:flex-column gap-2 p-10 lg:flex lg:flex-row'>
        <div
          className='flex-1'
          data-aos='fade-left'
          data-aos-delay='50'
          data-aos-mirror='false'
        >
          <Image
            src={'/imagens/EventoPrincipal.png'}
            width={1000}
            height={1000}
            alt=''
            className='w-full object-cover'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between gap-3'>
          <div
            className='flex min-h-[11rem] flex-1'
            data-aos='fade-left'
            data-aos-delay='70'
            data-aos-mirror='false'
          >
            <Image
              src={'/imagens/EventoUm.png'}
              width={1000}
              height={1000}
              alt=''
              className='w-2/4 rounded-customMd object-cover'
            />
            <div className='flex w-2/4 flex-grow flex-col p-2'>
              <span className='text-xl font-semibold'>
                Reunião de presidentes
              </span>
              <span>Reunião de Presidentes 26.01</span>
            </div>
          </div>
          <div
            className='flex flex-1 rounded-customMd'
            data-aos='fade-left'
            data-aos-delay='90'
            data-aos-mirror='false'
          >
            <Image
              src={'/imagens/EventoDois.png'}
              width={1000}
              height={1000}
              alt=''
              className='w-2/4 object-cover'
            />
            <div className='flex w-2/4 flex-col p-2'>
              <span className='text-xl font-semibold'>
                26.01 Cerimônia de posse
              </span>
              <span>Cerimônia de posse dos presidentes e diretores 2023</span>
            </div>
          </div>
          <div
            className='flex flex-1'
            data-aos='fade-left'
            data-aos-delay='110'
            data-aos-offset='-50'
            data-aos-mirror='false'
          >
            <Image
              src={'/imagens/EventoTres.png'}
              width={1000}
              height={1000}
              alt=''
              className='w-2/4 rounded-customMd object-cover'
            />
            <div className='flex w-2/4 flex-col p-2'>
              <span className='text-xl font-semibold'>
                Econtro Estadual das Associações{' '}
                <span className='italic'>Comerciais 2022</span>
              </span>
              <span>Encontro Estadual das Associações 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleriaDeEventos;

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';

type galeria = {
  id: number;
  src?: string;
  titulo: string;
  descricao: string;
};

// Exemplo de uso do tipo User
const galeria: galeria[] = [
  {
    id: 1,
    src: '/imagens/CrediConsult.png',
    titulo: 'Evento 1',
    descricao: 'alice@example.com',
  },
  {
    id: 2,
    src: '/imagens/Cbmae.png',
    titulo: 'Evento 2',
    descricao: 'alice@example.com',
  },
  {
    id: 3,
    src: '/imagens/CertificadoDigital.png',
    titulo: 'Evento 3',
    descricao: 'alice@example.com',
  },
  {
    id: 4,
    src: '/imagens/EventoDois.png',
    titulo: 'Evento 4',
    descricao: 'alice@example.com',
  },
  {
    id: 5,
    src: '/imagens/EventoTres.png',
    titulo: 'Evento 5',
    descricao: 'alice@example.com',
  },
  {
    id: 6,
    src: '/imagens/Cbmae.png',
    titulo: 'Evento 6',
    descricao: 'alice@example.com',
  },
  {
    id: 7,
    src: '/imagens/CertificadoDigital.png',
    titulo: 'Evento 7',
    descricao: 'alice@example.com',
  },
  {
    id: 8,
    src: '/imagens/EventoDois.png',
    titulo: 'Evento 8',
    descricao: 'alice@example.com',
  },
  {
    id: 9,
    src: '/imagens/EventoTres.png',
    titulo: 'Evento 9',
    descricao: 'alice@example.com',
  },
];

const page = () => {
  return (
    <div className='flex min-h-[90vh] flex-col items-center py-4'>
      <div className='grid grid-cols-3 gap-4'>
        {galeria.map((galeria: galeria | any) => (
          <Card
            data-aos='fade-right'
            data-aos-delay='50'
            className='w-full rounded-customMd shadow-xl'
          >
            <Image
              src={galeria.src}
              width={500}
              height={500}
              alt=''
              className='w-full'
            />
            <CardHeader>
              <CardTitle>{galeria.titulo}</CardTitle>
              <CardDescription>{galeria.descricao}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className='flex w-full justify-end px-6 py-4'>
        <span className='flex'>Pág 1 de 20</span>
      </div>
    </div>
  );
};

export default page;

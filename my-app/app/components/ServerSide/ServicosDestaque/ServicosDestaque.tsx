import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/ClientSide/ServicosDestaque/ServicosDestaqueClient';
import Image from 'next/image';
import React from 'react';

const ServicosDestaque = () => {
  return (
    <div className='flex w-full flex-col gap-10 pt-10'>
      <span data-aos='fade-down' className='text-center text-3xl font-semibold'>
        SERVIÇOS EM DESTAQUE
      </span>
      <div className='flex justify-between gap-1'>
        <Card
          data-aos='fade-right'
          data-aos-delay='50'
          className='rounded-customMd shadow-xl'
        >
          <Image
            src={'/imagens/CrediConsult.png'}
            width={500}
            height={500}
            alt=''
          />
          <CardHeader>
            <CardTitle>CREDICONSULT</CardTitle>
            <CardDescription>
              Sistema de Análise de Crédito e Informações
            </CardDescription>
          </CardHeader>
          {/* <CardContent></CardContent> */}
        </Card>
        <Card
          data-aos='fade-right'
          data-aos-delay='150'
          className='rounded-customMd shadow-xl'
        >
          <Image
            src={'/imagens/CertificadoDigital.png'}
            width={500}
            height={500}
            alt=''
          />
          <CardHeader>
            <CardTitle>CERTIFICAÇÃO DIGITAL</CardTitle>
            <CardDescription>
              Líder na América Latina em certificados digitais PF e PJ
            </CardDescription>
          </CardHeader>
          {/* <CardContent></CardContent> */}
        </Card>
        <Card
          data-aos='fade-right'
          data-aos-delay='250'
          className='rounded-customMd shadow-xl'
        >
          <Image src={'/imagens/Cbmae.png'} width={500} height={500} alt='' />
          <CardHeader>
            <CardTitle>CBMAE</CardTitle>
            <CardDescription>
              Câmara de Conciliação, Mediação e Arbitragem
            </CardDescription>
          </CardHeader>
          {/* <CardContent></CardContent> */}
        </Card>
        <Card
          data-aos='fade-right'
          data-aos-delay='350'
          className='rounded-customMd shadow-xl'
        >
          <Image
            src={'/imagens/OrientacaoJuridica.png'}
            width={500}
            height={500}
            alt=''
          />
          <CardHeader>
            <CardTitle>ORIENTAÇÃO JURÍDICA</CardTitle>
            <CardDescription>
              Consultas e informações jurídicas para os associados
            </CardDescription>
          </CardHeader>
          {/* <CardContent></CardContent> */}
        </Card>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ServicosDestaque;

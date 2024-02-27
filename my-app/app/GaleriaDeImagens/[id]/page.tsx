'use client';
import { fetchWrapper } from '@/services/fetchService';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import 'lightbox.js-react/dist/index.css';
import { Dialog, DialogContent, DialogTrigger } from '../components/modal';

const sanitizeAndRemoveAttributes = (html: string) => {
  const sanitizedHtml = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1',
      'p',
      'span',
      'a',
      'ul',
      'li',
      'h2',
      'h3',
      'h4',
      'br',
      'img',
    ], // Adicione as tags que deseja permitir
    ALLOWED_ATTR: ['style'], // Remove todos os atributos
  });
  return sanitizedHtml;
};
const src = process.env.NEXT_PUBLIC_URL_CMS!;
const page = ({ params }: { params: { id: string } }) => {
  const [componentData, setComponentData] = useState<any>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const pageId = params.id;
  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetGaleriaById/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/${pageId}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        setComponentData(res);
      })
      .catch((err) => {});
  }, []);

  const arrayWithAdjacentInfo =
    componentData &&
    componentData.Arquivos.map((image: any, index: any, array: any) => ({
      current:
        src +
        process.env.NEXT_PUBLIC_GALERIA_FOLDER +
        componentData.IdGaleria +
        '/IMG/' +
        image.NomeArquivo,
      previous:
        (array[index - 1] &&
          src +
            process.env.NEXT_PUBLIC_GALERIA_FOLDER +
            componentData.IdGaleria +
            '/IMG/' +
            array[index - 1].NomeArquivo) ||
        null,
      next:
        (array[index + 1] &&
          src +
            process.env.NEXT_PUBLIC_GALERIA_FOLDER +
            componentData.IdGaleria +
            '/IMG/' +
            array[index + 1].NomeArquivo) ||
        null,
    }));
  const modalContent =
    selectedImageIndex !== null && arrayWithAdjacentInfo[selectedImageIndex];

  return componentData ? (
    <div
      id='box'
      className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-2 p-4'
    >
      <div className='flex w-[73rem] max-w-[73rem] flex-col sm:w-full'>
        {componentData.Arquivos.map((item: any, index: any) => (
          <img
            key={index}
            src={
              src +
              process.env.NEXT_PUBLIC_GALERIA_FOLDER +
              componentData.IdGaleria +
              '/IMG/' +
              item.NomeArquivo
            }
            alt=''
          />
        ))}
      </div>
    </div>
  ) : (
    <div className='h-screen'>
      <span>Carregando...</span>
    </div>
  );
};

export default page;

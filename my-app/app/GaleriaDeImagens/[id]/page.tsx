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
      .catch((err) => {
        console.log(err);
      });
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

  return (
    <div className='min-h-screen'>
      <div className='py-2'>
        <div className='flex w-full justify-center'>
          <div className='flex w-[63rem] flex-wrap gap-4'>
            {componentData ? (
              arrayWithAdjacentInfo.map(({ current }: any, index: any) => (
                <Dialog>
                  <DialogTrigger className='flex h-60 w-60' asChild>
                    <div className='rounded-customMd'>
                      <img
                        key={index}
                        src={current}
                        alt=''
                        className='h-auto cursor-pointer rounded-customMd object-cover transition-all hover:scale-105 hover:duration-500 hover:zoom-in-90'
                        onClick={() => {
                          setSelectedImageIndex(index);
                          console.log(current);
                        }}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className='flex max-h-screen justify-center bg-white lg:max-w-fit'>
                    <img
                      key={index}
                      src={current}
                      alt=''
                      className='h-auto object-scale-down p-2'
                    />
                  </DialogContent>
                </Dialog>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* {componentData ? (
        <div
          id='box'
          className='flex min-h-[70vh] w-[100vw] flex-col gap-2 p-4'
        >
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
      ) : (
        <div className='h-screen'>
          <span>Carregando...</span>
        </div>
      )} */}
    </div>
  );
};

export default page;

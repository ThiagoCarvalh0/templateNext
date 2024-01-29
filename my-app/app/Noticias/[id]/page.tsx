'use client';
import { fetchWrapper } from '@/services/fetchService';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

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

const page = ({ params }: { params: { id: string } }) => {
  const [componentData, setComponentData] = useState<any>();
  const pageId = params.id;
  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetConteudoById/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/${pageId}`,
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

  return (
    <div className='flex items-center justify-center py-2'>
      {componentData ? (
        <div
          id='box'
          dangerouslySetInnerHTML={{
            __html: sanitizeAndRemoveAttributes(
              componentData.ConteudoHtmlEditor
            ),
          }}
          className='flex min-h-[70vh] w-[100vw] flex-col gap-2 p-4'
        ></div>
      ) : (
        <div className='h-screen'>
          <span>Carregando...</span>
        </div>
      )}
    </div>
  );
};

export default page;

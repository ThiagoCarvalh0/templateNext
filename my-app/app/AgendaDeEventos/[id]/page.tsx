'use client';
import { fetchWrapper } from '@/services/fetchService';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import FormEventoPago from './components/formEventoPago/formEventoPago';
import FormEventoGratuito from './components/formEventoGratuito/formEventoGratuito';
import { Badge } from '@/components/ui/badge';

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
    ALLOWED_ATTR: ['style', 'src'], // Remove todos os atributos
  });
  return sanitizedHtml;
};

const page = ({ params }: { params: { id: string } }) => {
  const [componentData, setComponentData] = useState<any>();
  const pageId = params.id;

  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetEventosByIdList/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
      {
        method: 'POST',
        body: JSON.stringify({
          ids: [pageId],
        }),
      }
    )
      .then((res) => {
        setComponentData(res);
        res;
      })
      .catch((err) => {
        err;
      });
  }, []);

  return (
    <div className='flex justify-center py-2'>
      {componentData ? (
        <div className='flex min-h-[70vh] w-[98vw] max-w-[98vw] flex-col gap-2 p-4 xl:max-w-[80vw]'>
          <div className='flex w-full gap-8'>
            <div className='h-fit rounded-customMd border border-b border-zinc-300 shadow-bottom'>
              {componentData[0].arquivos.map((item: any) => (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL_CMS}/${process.env.NEXT_PUBLIC_EVENTO_FOLDER}/${item.nomeArquivo}`}
                  className=''
                />
              ))}
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-2 px-4 py-2'>
                  <span className='text-xs text-slate-500'>
                    Palestrante: {componentData[0].nomePalestrante}
                  </span>
                  <span className='prose text-4xl text-slate-700'>
                    {componentData[0].tiuloEvento}
                  </span>
                  <span className='text-xs text-slate-500'>{`${componentData[0].dataEvento} - ${componentData[0].dataFim}`}</span>
                </div>
              </div>
            </div>
            <div className='w-full'>
              {componentData[0].isPermiteInscricaoPix &&
              componentData[0].isPermiteInscricao ? (
                <div className='flex w-full items-center justify-center'>
                  <hr className='w-full border border-slate-300' />
                  <Badge
                    variant='default'
                    className='m-2 h-8 w-fit gap-2 bg-yellow-200 text-xs text-slate-600 hover:bg-inherit hover:bg-yellow-200'
                  >
                    <span className='whitespace-nowrap'>Inscrição paga</span>
                    <svg
                      className='h-auto w-4'
                      viewBox='0 0 512 512'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs />
                      <g fill='#343a40' fill-rule='evenodd'>
                        <path d='M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z' />
                        <path d='M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z' />
                      </g>
                    </svg>
                  </Badge>
                  <hr className='w-full border border-slate-300' />
                </div>
              ) : (
                <div className='flex w-full items-center justify-center'>
                  <hr className='w-full border border-slate-300' />
                  <Badge
                    variant='default'
                    className='m-2 h-8 w-fit bg-green-500 text-xs text-white hover:bg-green-500'
                  >
                    <span className='whitespace-nowrap'>
                      Inscrição gratuita
                    </span>
                  </Badge>
                  <hr className='w-full border border-slate-300' />
                </div>
              )}
              {componentData[0].isPermiteInscricao &&
              componentData[0].isPermiteInscricaoPix ? (
                <FormEventoPago idEvento={pageId} />
              ) : (
                <FormEventoGratuito idEvento={pageId} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='h-screen'>
          <span>Carregando...</span>
        </div>
      )}
    </div>
  );
};

export default page;

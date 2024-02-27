'use client';
import { fetchWrapper } from '@/services/fetchService';
import { Root } from '@/types/types';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

function replaceHtmlWithTailwind(htmlString: string) {
  const tagMappings: any = {
    p: '',
    h1: 'text-4xl font-bold mb-4',
    h2: 'text-3xl font-bold mb-4',
    h3: 'text-2xl font-bold mb-4',
    // Adicione mais mapeamentos conforme necessário
  };

  // Expressão regular para encontrar tags HTML
  const regex = /<\s*(\/?\s*\w+)[^>]*>/g;

  // Substituir tags HTML
  const replacedString = htmlString.replace(regex, (match, tagName: any) => {
    const tailwindClass = tagMappings[tagName.toLowerCase()];
    return tailwindClass ? `<${tagName} class="${tailwindClass}">` : match;
  });

  return replacedString;
}

// Exemplo de uso
// const htmlString =
//   '<p>Isso é um parágrafo.</p><h2>Título H2</h2><span>Texto sem tag.</span>';
// const tailwindString = replaceHtmlWithTailwind(htmlString);

const sanitizeAndRemoveAttributes = (html: string) => {
  const sanitizedHtml = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'li', 'ul', 'span'], // Adicione as tags que deseja permitir
    ALLOWED_ATTR: ['script', 'style'], // Remove todos os atributos
  });

  const replacedHtml = replaceHtmlWithTailwind(sanitizedHtml);

  return replacedHtml;
};

const page = ({ params }: { params: { id: string } }) => {
  const [componentData, setComponentData] = useState<any>();
  const pageId = params.id;
  const request = fetchWrapper<{ Conteudos: Root[] }>(
    `CMSConteudo/GetConteudoById/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/${pageId}`,
    {
      method: 'GET',
    }
  );

  useEffect(() => {
    request.then((res) => setComponentData(res));
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

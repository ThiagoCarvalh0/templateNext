import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import Link from 'next/link';
import React, { useContext } from 'react';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER!;

const Footer = () => {
  const { getConteudoByNomeTipoConteudo } = useContext(ConteudoHomeContext);
  const ComponentData = getConteudoByNomeTipoConteudo('footer');

  const cnpj =
    ComponentData &&
    ComponentData.filter((item: any) => {
      return item.TituloConteudo == 'CNPJ' ? item.BreveDescricao : '';
    });

  const cnpjTag =
    ComponentData &&
    ComponentData.filter((item: any) => {
      return item.TituloConteudo == 'CNPJ TAG' ? item.BreveDescricao : '';
    });

  const LinksRedesSociais =
    ComponentData &&
    ComponentData.filter((item: any) => {
      return item.TituloConteudo == 'links redes sociais' ? item : '';
    });

  const textoParceria =
    ComponentData &&
    ComponentData.filter((item: any) => {
      return item.TituloConteudo == 'texto parceria' ? item : '';
    });

  return (
    <div className='flex items-center justify-center sm:w-full'>
      <div className='sm:6 flex w-full items-center justify-center gap-2 lg:py-12 custom-lg:w-[70rem] custom-lg:max-w-[70rem]'>
        <div className='flex w-full'>
          <div className='flex w-full sm:flex-col sm:gap-6 sm:p-2 lg:flex-row lg:gap-24'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <span
                  dangerouslySetInnerHTML={{
                    __html: cnpj && cnpj[0].BreveDescricao,
                  }}
                  className='w'
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: cnpjTag && cnpjTag[0].BreveDescricao,
                  }}
                />
              </div>
              <div className='flex gap-2'>
                {LinksRedesSociais &&
                  LinksRedesSociais[0].ConteudoDependente.map((item: any) => (
                    <Link href={item.BreveDescricao}>
                      <img src={src + item.Arquivos[0].NomeArquivo}></img>
                    </Link>
                  ))}
              </div>
            </div>
            <span className='lg:self-end'>
              {textoParceria && textoParceria[0].BreveDescricao}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

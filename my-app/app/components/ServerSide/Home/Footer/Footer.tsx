'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Root } from '@/types/types';
import { fetchWrapper } from '@/services/fetchService';

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const Footer = () => {
  const [footerData, setFooterData] = useState<any>({});
  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetConteudoByTipoConteudo/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/Footer`,
      {
        method: 'GET',
      }
    ).then((response) => {
      setFooterData(response[0]);
    });
  }, []);

  return (
    <div className='flex w-full items-center justify-center bg-entidades_dark_gray py-6'>
      <div className='w-[73rem] justify-between gap-4 sm:flex sm:flex-col sm:px-4 lg:max-w-[73rem] lg:flex-row xl:w-[80vw] xl:max-w-none'>
        <div>
          {footerData.ConteudoDependente ? (
            footerData.ConteudoDependente.map((item: any, index: any) =>
              item.TituloConteudo == 'LOGO PARCERIA' ? (
                <img
                  key={index}
                  src={src + item.Arquivos![0].NomeArquivo}
                  width={200}
                  height={200}
                  alt='logo'
                />
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
          <div className='flex gap-2'>
            {footerData.ConteudoDependente ? (
              footerData.ConteudoDependente.map((item: any, index: any) =>
                item.TituloConteudo != 'LOGO PARCERIA' &&
                item.TituloConteudo != 'ENDEREÇO' ? (
                  <img
                    key={index}
                    src={src + item.Arquivos![0].NomeArquivo}
                    width={50}
                    height={50}
                    alt='logo'
                  />
                ) : (
                  <></>
                )
              )
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          {footerData.ConteudoDependente ? (
            footerData.ConteudoDependente.map((item: any, index: any) =>
              item.TituloConteudo == 'ENDEREÇO' ? (
                <span key={index} className='font-semibold text-white'>
                  {item.BreveDescricao}
                </span>
              ) : (
                <></>
              )
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

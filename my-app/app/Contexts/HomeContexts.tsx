'use client';
import { fetchWrapper } from '@/services/fetchService';
import { Root } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext, useState } from 'react';

interface ConteudoProviderProps {
  children: ReactNode;
}

const ConteudoHomeContext = createContext<any>(null);

const ConteudoProvider = ({ children }: ConteudoProviderProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['homeComponent'],
    queryFn: () =>
      fetchWrapper<{ Conteudos: Root[] }>(
        `CMSConteudo/GetByPaginaDeConteudo/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}?nomePagina=Home`,
        {
          method: 'GET',
        }
      ),
  });

  console.log(data);

  function getConteudoByNomeTipoConteudo(key: string) {
    if (data != undefined && data != null) {
      const Conteudo = data?.Conteudos.filter((item) => {
        return item.NomeTipoConteudo == key ? item : null;
      });
      return Conteudo;
    }
  }

  function getConteudoByTituloConteudo(key: string) {
    if (data != undefined && data != null) {
      const Conteudo = data?.Conteudos.filter((item) => {
        return item.TituloConteudo == key ? item : null;
      });
      return Conteudo;
    }
  }

  return (
    <ConteudoHomeContext.Provider
      value={{
        data,
        getConteudoByNomeTipoConteudo,
        getConteudoByTituloConteudo,
      }}
    >
      {children}
    </ConteudoHomeContext.Provider>
  );
};

export { ConteudoProvider, ConteudoHomeContext };

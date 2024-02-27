'use client';
import { fetchWrapper } from '@/services/fetchService';
import { Root } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useState } from 'react';
import useEmpresaData from '../hooks/useDadosEmpresa';

interface ConteudoProviderProps {
  children: ReactNode;
}

const ConteudoHomeContext = createContext<any>(null);

const ConteudoProvider = ({ children }: ConteudoProviderProps) => {
  const [galeriaData, setGaleriaData] = useState<any>([]);
  const { empresaData, loading, error } = useEmpresaData(
    'http://www.facmat.org.br/'
  );
  window.location.origin;

  function loadGaleriaData(pageNumber: number, pageSize: number) {
    fetchWrapper<any>(
      `CMSConteudo/GetGalerias/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}?pageSize=${pageSize}&pageNumber=${pageNumber}`
    ).then((res) => {
      setGaleriaData(res);
    });
  }

  function getByNomeConteudo(
    key: string,
    pagesize: number,
    pageNumber: number,
    isDestaqueConteudo: boolean
  ) {
    const { data, isLoading } = useQuery({
      queryKey: ['homeComponent'],
      queryFn: () =>
        fetchWrapper<{ Conteudos: Root[] }>(
          `CMSConteudo/GetByNomeDeConteudo/${
            process.env.NEXT_PUBLIC_CMS_EMPRESA_ID
          }/${key}?PageSize=${pagesize}&PageNumber=${pageNumber}${
            isDestaqueConteudo
              ? `&isConteudoDestaque=true`
              : `&isConteudoDestaque=false`
          }`,
          {
            method: 'GET',
          }
        ),
    });
    return data;
  }

  function getBanners(
    key: string,
    pagesize: number,
    pageNumber: number,
    isDestaqueConteudo: boolean
  ) {
    const { data, isLoading } = useQuery({
      queryKey: [key],
      queryFn: () =>
        fetchWrapper<{ Conteudos: Root[] }>(
          `CMSConteudo/GetBanners/${
            process.env.NEXT_PUBLIC_CMS_EMPRESA_ID
          }/${key}?PageSize=${pagesize}&PageNumber=${pageNumber}${
            isDestaqueConteudo
              ? `&isConteudoDestaque=true`
              : `&isConteudoDestaque=false`
          }`,
          {
            method: 'GET',
          }
        ),
    });
    return data;
  }

  return (
    <ConteudoHomeContext.Provider
      value={{
        // getConteudoByNomeTipoConteudo,
        // getConteudoByNomeTituloConteudo,
        getByNomeConteudo,
        loadGaleriaData,
        galeriaData,
        getBanners,
      }}
    >
      {children}
    </ConteudoHomeContext.Provider>
  );
};

export { ConteudoProvider, ConteudoHomeContext };

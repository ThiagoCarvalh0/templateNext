'use client';
import { fetchWrapper } from '@/services/fetchService';
import { Root } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ConteudoProviderProps {
  children: ReactNode;
}

const ConteudoHomeContext = createContext<any>(null);

const ConteudoProvider = ({ children }: ConteudoProviderProps) => {
  const [galeriaData, setGaleriaData] = useState<any>([]);
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

  function loadGaleriaData(pageNumber: number, pageSize: number) {
    fetchWrapper<any>(
      `CMSConteudo/GetGalerias/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}?pageSize=${pageSize}&pageNumber=${pageNumber}`
    ).then((res) => {
      setGaleriaData(res);
    });
  }

  function getConteudoByNomeTipoConteudo(key: string) {
    if (data) {
      const Conteudo = data?.Conteudos.filter((item) => {
        return item.NomeTipoConteudo == key ? item : null;
      });
      return Conteudo;
    }
  }

  function getConteudoByNomeTituloConteudo(key: string) {
    if (data) {
      const Conteudo = data?.Conteudos.filter((item) => {
        return item.TituloConteudo == key ? item : null;
      });
      return Conteudo;
    }
  }

  // function getConteudoGalerias(key: string) {
  //   const Conteudo = GaleriaData && GaleriaData?.Conteudos.filter((item) => {
  //     return item.TituloConteudo == key ? item : null;
  //   });
  //   return Conteudo;
  // }

  return (
    <ConteudoHomeContext.Provider
      value={{
        data,
        getConteudoByNomeTipoConteudo,
        getConteudoByNomeTituloConteudo,
        loadGaleriaData,
        galeriaData,
      }}
    >
      {children}
    </ConteudoHomeContext.Provider>
  );
};

export { ConteudoProvider, ConteudoHomeContext };

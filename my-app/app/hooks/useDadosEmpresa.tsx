'use client';
import { useState, useEffect } from 'react';
import Empresa from '../Contexts/Types/empresa';

// Definindo o tipo para os dados da empresa
interface EmpresaData {
  nome: string;
  descricao: string;
}

const useEmpresaData = (url: string) => {
  const [empresaData, setEmpresaData] = useState<Empresa[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEmpresaData = async () => {
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_URL_API_CMS
          }/CMSEmpresa/GetEmpresaByUrlSite?urlSite=${encodeURIComponent(url)}`,
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da empresa');
        }
        const data = await response.json();
        setEmpresaData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEmpresaData();

    // Cleanup function to cancel the fetch if the component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, [url]);

  const clearData = () => {
    setEmpresaData(null);
    setLoading(true);
    setError(null);
  };

  return { empresaData, loading, error, clearData };
};

export default useEmpresaData;

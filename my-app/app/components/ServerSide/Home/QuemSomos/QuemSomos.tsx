import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Skeleton } from '@/components/ui/skeleton';
import { Root } from '@/types/types';
import React, { useContext } from 'react';
const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_IMAGE_FOLDER;

const QuemSomos = () => {
  const { getConteudoByNomeTituloConteudo } = useContext(ConteudoHomeContext);
  const QuemSomos: Root[] = getConteudoByNomeTituloConteudo('QUEM SOMOS');

  return QuemSomos ? (
    <div className='flex w-full justify-center bg-slate-200 py-10'>
      <div className='flex w-[73rem] max-w-[73rem] flex-col gap-10 px-4 sm:py-10'>
        <span className='text-center text-3xl font-semibold'>
          {QuemSomos && QuemSomos[0].TituloConteudo}
        </span>
        <span>{QuemSomos && QuemSomos[0].BreveDescricao}</span>
      </div>
    </div>
  ) : (
    <div className='flex w-full justify-center py-2'>
      <Skeleton className='h-[30rem] w-[71rem] max-w-[73rem] rounded-customLg bg-slate-400' />
    </div>
  );
};

export default QuemSomos;

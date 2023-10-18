import React from 'react';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';
import Associese from '../components/ServerSide/FaleConosco/Associese/Associese';

const FaleConosco = () => {
  return (
    <>
      <div className='flex min-h-[90vh] flex-col items-center'>
        <NextBreadcrumb
          homeElement={'Início'}
          separator={<span> | </span>}
          activeClasses='text-green-600'
          containerClasses='flex pt-4 pb-3 to-blue-600'
          listClasses='hover:underline mx-2 font-bold'
          capitalizeLinks
        />
        <div className='flex w-[73rem] max-w-[73rem] flex-col'>
          <Associese />
        </div>
      </div>
    </>
  );
};

export default FaleConosco;

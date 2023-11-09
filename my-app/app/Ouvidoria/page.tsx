import React from 'react';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';
import OuvidoriaSection from '../components/ServerSide/FaleConosco/Ouvidoria/Ouvidoria';

const Ouvidoria = () => {
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
        <div className='flex sm:w-full lg:w-[73rem] lg:max-w-[73rem] lg:flex-col'>
          <OuvidoriaSection />
        </div>
      </div>
    </>
  );
};

export default Ouvidoria;

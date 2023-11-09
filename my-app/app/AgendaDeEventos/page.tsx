'use client';
import { Calendar } from '@/components/ui/calendar';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React from 'react';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Início'}
        separator={<span> | </span>}
        activeClasses='text-green-600'
        containerClasses='flex pt-4 pb-3 to-blue-600'
        listClasses='hover:underline mx-2 font-bold'
        capitalizeLinks
      />
      <div className='mt-8 flex h-screen justify-center'>
        <div className='flex flex-col gap-4'>
          <span className='text-center text-2xl font-semibold text-slate-400'>
            Agenda de Eventos
          </span>
          <span className='text-center'>Nossos Eventos</span>
          <Calendar
            mode='single'
            locale={ptBR}
            selected={date}
            onSelect={setDate}
            styles={{
              cell: {
                width: '5rem',
                height: '5rem',
                border: '.1rem solid gray',
              },
              head_cell: { width: '5rem' },
            }}
            className='mt-4 rounded-md border'
          />
        </div>
      </div>
    </div>
  );
};

export default page;

'use client';
import { Calendar } from '@/components/ui/calendar';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { EventHandler, useEffect } from 'react';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [bookedDays, setBookedDays] = React.useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  // const simulatedResponse = {
  //   bookedDays: [
  //     new Date('2023-12-10'),
  //     new Date('2023-11-15'),
  //     new Date('2023-11-22'),
  //   ],
  // };

  const response = [
    {
      start: { ano: 2023, mes: 11, dia: 1 },
      end: { ano: 2023, mes: 11, dia: 3 },
    },
    {
      start: { ano: 2023, mes: 11, dia: 4 },
      end: { ano: 2023, mes: 11, dia: 8 },
    },
    {
      start: { ano: 2023, mes: 11, dia: 2 },
      end: { ano: 2023, mes: 11, dia: 6 },
    },
    {
      start: { ano: 2023, mes: 11, dia: 10 },
      end: { ano: 2023, mes: 11, dia: 16 },
    },
  ];
  const dataTeste = '20/02/2001';
  const partes = dataTeste.split('/');
  const dia = partes[0];
  const mes = partes[1];
  const ano = partes[2];
  console.log(dia + mes + ano);
  // useEffect(() => {
  //   setBookedDays(simulatedResponse.bookedDays);
  // }, []);

  useEffect(() => {
    // Extrair as datas da API para o formato esperado pela propriedade 'booked'
    const bookedDatesArray: any = response.map((range) => ({
      from: new Date(range.start.ano, range.start.mes, range.start.dia),
      to: new Date(range.end.ano, range.end.mes, range.end.dia),
    }));

    setBookedDays(bookedDatesArray);
  }, []);
  console.log(bookedDays);

  function fetchBookedDays(m: any) {}

  function handleMonthChange(month: Date) {
    fetchBookedDays(month); // Chama a função para buscar os dias reservados
    // console.log(month.getMonth());
  }

  const handleDayClick = (day: Date) => {
    // Filtrar os objetos da API com base na data selecionada
    const dateConverted = day.getDate();
    const filteredDates = response.filter((range) => {
      const startDate = range.start.dia;
      const endDate = range.end.dia;
      return dateConverted! >= startDate && dateConverted! <= endDate;
    });

    console.log('Objetos filtrados:', filteredDates);
  };
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
      <div className='mt-8 flex flex-col items-center justify-center gap-12 py-2'>
        <div className='flex flex-col gap-4'>
          <span className='text-center'>Nossos Eventos</span>
          <span className='bgen text-center text-2xl font-semibold text-slate-400'>
            Agenda de Eventos
          </span>
          <div className='flex w-full items-center justify-between gap-10'>
            <Calendar
              mode='single'
              locale={ptBR}
              modifiers={{ booked: bookedDays }}
              onDayClick={(day, { booked }) => {
                setSelectedDate(booked ? new Date(day) : null);
                handleDayClick(day);
              }}
              modifiersStyles={{
                booked: {
                  backgroundColor: '#386C5F',
                  color: 'white',
                  borderRadius: '100%',
                  width: '100%',
                  height: '100%',
                },
              }}
              onMonthChange={handleMonthChange}
              // onSelect={() => {
              //   setDate;
              // }}
              styles={{
                table: {
                  width: '100%',
                },
                cell: {
                  width: '100%',
                  height: '5rem',
                  display: 'flex',
                  padding: '1rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '.1rem solid gray',
                },
                head_cell: { width: '5rem' },
              }}
              className='mt-4 rounded-md border'
            />
            <div className='flex h-[20rem] w-[10rem] max-w-[10rem] flex-wrap justify-between rounded-customMd border border-gray-300 p-2'>
              <div className='h-4 w-4 rounded-full bg-red-400'></div>
              <div className='h-4 w-4 rounded-full bg-black'></div>
              <div className='h-4 w-4 rounded-full bg-red-600'></div>
              <div className='h-4 w-4 rounded-full bg-red-400'></div>
              <div className='h-4 w-4 rounded-full bg-red-400'></div>
              <div className='h-4 w-4 rounded-full bg-red-400'></div>
            </div>
          </div>
        </div>
        {selectedDate != null ? (
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            {/* <div className='flex'>
              <div className='gap-4p-8 flex w-full max-w-3xl flex-col'>
                <span className='text-xl font-semibold text-slate-500'>
                  PALESTRANTE: CAIO BUMSTEAD
                </span>
                <span className='text-5xl font-semibold text-slate-700'>
                  COMO LEVANTAR UMA MOTO E UMA MULHER
                </span>
                <span className='text-sm font-semibold text-slate-500'>
                  ENDEREÇO: Rua Caio Zidany Broqueado
                </span>
              </div>
              <div className='flex gap-2'>
                <div
                  style={{
                    height: 'auto',
                    margin: '0 auto',
                    maxWidth: 140,
                    width: '100%',
                  }}
                >
                  <QRCode
                    size={256}
                    style={{
                      height: 'auto',
                      maxWidth: '100%',
                      width: '100%',
                    }}
                    value='https://tagcred.com.br/'
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div className='flex w-[40rem] max-w-[40rem] flex-col gap-4'>
                  <span className='text-xl font-semibold text-slate-500'>
                    Rápido e prático!
                  </span>
                  <span className='text-5xl font-semibold text-slate-500'>
                    GARANTA JÁ A SUA VAGA VIA PIX
                  </span>
                </div>
              </div>
            </div> */}
            <img src='/imagens/caio_bumstead.jpg' />
            <span className='p-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pulvinar etiam non quam lacus suspendisse faucibus interdum
              posuere. Faucibus turpis in eu mi bibendum neque egestas congue.
              Eget duis at tellus at urna condimentum mattis pellentesque id.
              Nunc sed augue lacus viverra vitae congue eu consequat. Magna
              fermentum iaculis eu non diam phasellus vestibulum lorem sed.
              Aliquam sem fringilla ut morbi tincidunt augue. Dui nunc mattis
              enim ut tellus elementum sagittis vitae et. Amet justo donec enim
              diam vulputate ut. Tortor at risus viverra adipiscing at in tellus
              integer feugiat. <br />
              <br />
              Morbi non arcu risus quis varius quam quisque id diam. Morbi quis
              commodo odio aenean sed adipiscing diam. In eu mi bibendum neque
              egestas congue quisque egestas diam. Ut faucibus pulvinar
              elementum integer enim neque volutpat ac tincidunt. Diam donec
              adipiscing tristique risus nec feugiat. Dui ut ornare lectus sit
              amet est. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
              Tincidunt dui ut ornare lectus sit amet est placerat in. Tempor
              nec feugiat nisl pretium fusce id velit ut tortor. Blandit massa
              enim nec dui nunc mattis enim. Quam viverra orci sagittis eu
              volutpat odio facilisis mauris sit. Ultricies tristique nulla
              aliquet enim. Gravida neque convallis a cras. Gravida cum sociis
              natoque penatibus et magnis dis parturient. Ultricies leo integer
              malesuada nunc vel risus. Vel eros donec ac odio tempor orci
              dapibus. Hac habitasse platea dictumst quisque sagittis purus sit.{' '}
              <br />
              <br />
              Ac turpis egestas integer eget aliquet. In fermentum et
              sollicitudin ac orci phasellus egestas tellus rutrum. Tincidunt
              eget nullam non nisi est sit amet facilisis magna. Justo eget
              magna fermentum iaculis. Nunc lobortis mattis aliquam faucibus
              purus. Pellentesque elit eget gravida cum sociis natoque
              penatibus. Faucibus purus in massa tempor nec feugiat nisl pretium
              fusce. Metus aliquam eleifend mi in nulla. Lobortis scelerisque
              fermentum dui faucibus in ornare quam viverra orci. Venenatis cras
              sed felis eget velit aliquet. Vitae congue mauris rhoncus aenean
              vel elit. Aliquet risus feugiat in ante metus dictum at tempor.
              Euismod quis viverra nibh cras. Viverra nam libero justo laoreet
              sit amet cursus sit. Enim diam vulputate ut pharetra. Est placerat
              in egestas erat imperdiet sed euismod nisi. Porttitor rhoncus
              dolor purus non. Rhoncus urna neque viverra justo nec ultrices dui
              sapien. Sit amet nisl purus in mollis nunc. Pulvinar sapien et
              ligula ullamcorper malesuada proin libero nunc. Lacinia at quis
              risus sed vulputate odio ut enim blandit. Ante in nibh mauris
              cursus mattis. Sed felis eget velit aliquet sagittis id
              consectetur purus ut. Eu volutpat odio facilisis mauris. <br />
              <br />
              Nibh praesent tristique magna sit amet purus gravida. Purus semper
              eget duis at tellus at urna condimentum mattis. Commodo elit at
              imperdiet dui accumsan sit. Viverra aliquet eget sit amet.
              Senectus et netus et malesuada fames ac. Porttitor eget dolor
              morbi non. Pulvinar etiam non quam lacus suspendisse faucibus. In
              pellentesque massa placerat duis ultricies lacus sed turpis
              tincidunt. Magna etiam tempor orci eu lobortis. Nec feugiat nisl
              pretium fusce id velit. Pretium lectus quam id leo. In nisl nisi
              scelerisque eu ultrices vitae auctor eu augue. Morbi quis commodo
              odio aenean sed adipiscing. Ipsum dolor sit amet consectetur
              adipiscing elit. Eget dolor morbi non arcu risus quis varius.
              Consectetur libero id faucibus nisl tincidunt eget. Arcu bibendum
              at varius vel pharetra vel turpis nunc eget. Egestas sed tempus
              urna et pharetra pharetra massa. <br />
              <br />
              Id cursus metus aliquam eleifend mi in nulla posuere. Non sodales
              neque sodales ut etiam sit amet nisl purus. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. Venenatis urna
              cursus eget nunc scelerisque viverra mauris in. Morbi tempus
              iaculis urna id volutpat lacus laoreet non. Ac felis donec et odio
              pellentesque diam volutpat. Erat pellentesque adipiscing commodo
              elit at imperdiet dui. Purus viverra accumsan in nisl. Aliquam
              faucibus purus in massa tempor nec feugiat nisl pretium. Sed
              viverra ipsum nunc aliquet. Ac auctor augue mauris augue neque
              gravida. Aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque habitant morbi. Blandit turpis cursus in hac
              habitasse platea dictumst quisque. Sit amet aliquam id diam
              maecenas. Est lorem ipsum dolor sit amet. Feugiat nibh sed
              pulvinar proin gravida hendrerit lectus a.
            </span>
          </div>
        ) : (
          <div className='flex w-full max-w-3xl items-center justify-center border-b-[8px] border-b-entidades_green p-8'>
            <span>Nenhum evento disponível</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;

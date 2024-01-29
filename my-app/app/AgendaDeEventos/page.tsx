'use client';
import { Calendar } from '@/components/ui/calendarEventos';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { useCallback, useEffect } from 'react';
import NextBreadcrumb from '../components/ServerSide/Home/BreadCrumb/BreadCrumb';
import { fetchWrapper } from '@/services/fetchService';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoveUpIcon, MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';

interface eventDates {
  start: string;
  end: string;
  idEvento: number;
}

const src =
  process.env.NEXT_PUBLIC_URL_CMS! + process.env.NEXT_PUBLIC_EVENTO_FOLDER;

const page = () => {
  const [bookedDays, setBookedDays] = React.useState<any[]>([]);
  const [eventosBooked, setEventosBooked] = React.useState<any>([]);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  function getEventosByList(listaEventos: any) {
    listaEventos.length > 0
      ? fetchWrapper<any>(
          `CMSConteudo/GetEventosByIdList/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
          {
            method: 'POST',
            body: JSON.stringify({
              ids: listaEventos,
            }),
          }
        )
          .then((res) => {
            setEventosBooked(res);
            console.log(eventosBooked);
          })
          .catch((err) => {
            console.log(err);
          })
      : setEventosBooked([]);
  }
  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetDatasEventos/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        const treatedResponse = res.map((item: any) => {
          return {
            idEvento: item.idEvento,
            start: item.start.split('/'),
            end: item.end.split('/'),
          };
        });

        const bookedDatesArray: any =
          treatedResponse.length > 0
            ? treatedResponse.map((range: any, index: any) => ({
                from: new Date(
                  parseInt(range.start[2]),
                  parseInt(range.start[1]) - 1,
                  parseInt(range.start[0])
                ),
                to: new Date(
                  parseInt(range.end[2]),
                  parseInt(range.end[1]) - 1,
                  parseInt(range.end[0])
                ),
                idEvento: range.idEvento,
              }))
            : [];

        const eventoMesAtual = bookedDatesArray
          ? bookedDatesArray.filter((evento: any) => {
              const dataEvento = new Date(evento.from.toISOString());
              const dataFim = new Date(evento.to.toISOString());

              const dataCompletaDesejada = new Date(new Date().toISOString());
              return (
                dataCompletaDesejada.getMonth() >= dataEvento.getMonth() &&
                dataCompletaDesejada.getMonth() <= dataFim.getMonth() &&
                dataCompletaDesejada.getFullYear() == dataEvento.getFullYear()
              );
            })
          : [];

        setSelectedDate(new Date(eventoMesAtual[0].from));
        setBookedDays(bookedDatesArray);

        const dateConverted = bookedDatesArray[0].from.toISOString();
        const filteredDates: any = bookedDatesArray.filter((range: any) => {
          const startDate = range.from.toISOString();
          const endDate = range.to.toISOString();
          return dateConverted! >= startDate && dateConverted! <= endDate;
        });

        var idsArray: any = [];
        filteredDates.length > 0
          ? filteredDates.map((item: any) => idsArray.push(item.idEvento))
          : [];

        idsArray.length > 0
          ? fetchWrapper<any>(
              `CMSConteudo/GetEventosByIdList/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
              {
                method: 'POST',
                body: JSON.stringify({
                  ids: idsArray,
                }),
              }
            )
              .then((res) => {
                setEventosBooked(res);
                console.log(eventosBooked);
              })
              .catch((err) => {
                console.log(err);
              })
          : setEventosBooked([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleMonthChange(month: Date) {
    const eventosNoMes = bookedDays
      ? bookedDays.filter((evento: any) => {
          const dataEvento = new Date(evento.from.toISOString());
          const dataFim = new Date(evento.to.toISOString());

          const dataCompletaDesejada = new Date(month.toISOString());
          return (
            dataCompletaDesejada.getMonth() >= dataEvento.getMonth() &&
            dataCompletaDesejada.getMonth() <= dataFim.getMonth() &&
            dataCompletaDesejada.getFullYear() == dataEvento.getFullYear()
          );
        })
      : [];

    eventosNoMes.length > 0
      ? setSelectedDate(new Date(eventosNoMes[0].from))
      : setEventosBooked([]);

    if (eventosNoMes.length > 0) {
      const dateConverted = eventosNoMes[0].from.toISOString();
      const filteredDates: any = eventosNoMes.filter((range: any) => {
        const startDate = range.from.toISOString();
        const endDate = range.to.toISOString();
        return dateConverted! >= startDate && dateConverted! <= endDate;
      });

      var idsArray: any = [];
      filteredDates.length > 0
        ? filteredDates.map((item: any) => idsArray.push(item.idEvento))
        : [];

      idsArray.length > 0
        ? fetchWrapper<any>(
            `CMSConteudo/GetEventosByIdList/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
            {
              method: 'POST',
              body: JSON.stringify({
                ids: idsArray,
              }),
            }
          )
            .then((res) => {
              setEventosBooked(res);
              console.log(eventosBooked);
            })
            .catch((err) => {
              console.log(err);
            })
        : setEventosBooked([]);
    } else {
      setEventosBooked([]);
    }
  }

  const handleDayClick = (day: Date) => {
    // Filtrar os objetos da API com base na data selecionada
    const dateConverted = day.toISOString();
    const filteredDates: any = bookedDays.filter((range: any) => {
      const startDate = range.from.toISOString();
      const endDate = range.to.toISOString();
      return dateConverted! >= startDate && dateConverted! <= endDate;
    });

    console.log(filteredDates);

    var idsArray: any = [];
    filteredDates.length > 0
      ? filteredDates.map((item: any) => idsArray.push(item.idEvento))
      : [];
    getEventosByList(idsArray);
  };

  function RetornaDiaDaSemana(dia: number) {
    switch (dia) {
      case 1:
        return 'Seg.';
      case 2:
        return 'Ter.';
      case 3:
        return 'Qua.';
      case 4:
        return 'Qui.';
      case 5:
        return 'Sex.';
      case 6:
        return 'Sáb.';
      case 0:
        return 'Dom.';
      default:
        console.log(``);
    }
  }

  return (
    <div>
      <NextBreadcrumb
        homeElement={'Início'}
        separator={<span> | </span>}
        activeClasses='text-green-600'
        containerClasses='flex w-full xl:w-[80vw] xl:max-w-[80vw] pl-4 pt-4 pb-3 to-blue-600'
        listClasses='hover:underline mx-2 font-bold'
        capitalizeLinks
      />
      <div className='flex min-h-screen w-full flex-col gap-12 py-2'>
        <div className='flex w-full justify-center gap-4'>
          <div className='flex gap-4 sm:flex-col sm:px-4 lg:w-[73rem] lg:max-w-[73rem] lg:flex-row xl:w-full xl:max-w-[80vw]'>
            <aside>
              <Calendar
                mode='single'
                locale={ptBR}
                modifiers={{ booked: bookedDays }}
                onDayClick={(day, { booked }) => {
                  setSelectedDate(new Date(day));
                  handleDayClick(day);
                }}
                modifiersStyles={{
                  booked: {
                    backgroundColor: '#6BA091',
                    color: 'white',
                    borderRadius: '100%',
                    width: '100%',
                    height: '100%',
                    minHeight: '1.4rem',
                    maxHeight: '2rem',
                    minWidth: '1.4rem',
                    maxWidth: '2rem',
                  },
                }}
                onMonthChange={(month: Date) => handleMonthChange(month)}
                styles={{
                  cell: {
                    width: '100%',
                    height: '3rem',
                    minHeight: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  table: {
                    border: 'none',
                    width: '100%',
                  },
                  head_cell: { width: '100%' },
                }}
                className='mt-4 rounded-md border p-2 shadow-bottom'
              />
            </aside>
            <section className='flex flex-col sm:p-0 lg:pl-4'>
              <div className='flex w-full flex-col border-b-2'>
                <div className='flex w-10 flex-col items-center justify-center'>
                  <p className='pl-1 text-xs'>
                    {RetornaDiaDaSemana(new Date(selectedDate!).getDay())}
                  </p>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-entidades_green p-4'>
                    <p className='text-white'>
                      {new Date(selectedDate!).getDate()}
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex select-none flex-col gap-4 lg:flex-row lg:flex-wrap xl:flex-row xl:flex-wrap'>
                {eventosBooked.map((evento: any) => (
                  <div className='flex gap-4 border-b px-4 py-4 shadow-bottom sm:flex-col lg:flex-col'>
                    <div className='flex h-8 w-full items-center gap-2'>
                      {evento.isPermiteInscricaoPix &&
                      evento.isPermiteInscricao ? (
                        <div className='flex w-full items-center justify-center'>
                          <hr className='w-full border border-slate-300' />
                          <Badge
                            variant='default'
                            className='m-2 h-8 w-fit gap-2 bg-yellow-200 text-xs text-slate-600 hover:bg-inherit hover:bg-yellow-200'
                          >
                            <span className='whitespace-nowrap'>
                              Inscrição paga
                            </span>
                            <svg
                              className='h-auto w-4'
                              viewBox='0 0 512 512'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <defs />
                              <g fill='#343a40' fill-rule='evenodd'>
                                <path d='M393.072 391.897c-20.082 0-38.969-7.81-53.176-22.02l-77.069-77.067c-5.375-5.375-14.773-5.395-20.17 0l-76.784 76.786c-14.209 14.207-33.095 22.019-53.179 22.019h-9.247l97.521 97.52c30.375 30.375 79.614 30.375 109.988 0l97.239-97.238h-15.123zm-105.049 74.327c-8.55 8.53-19.93 13.25-32.05 13.25h-.02c-12.12 0-23.522-4.721-32.05-13.25l-56.855-56.855c7.875-4.613 15.165-10.248 21.758-16.84l63.948-63.948 64.23 64.23c7.637 7.66 16.188 14.013 25.478 18.952l-54.439 54.46zM310.958 22.78c-30.374-30.374-79.613-30.374-109.988 0l-97.52 97.52h9.247c20.082 0 38.97 7.834 53.178 22.02l76.784 76.785c5.57 5.592 14.622 5.57 20.17 0l77.069-77.068c14.207-14.187 33.094-22.02 53.176-22.02h15.123l-97.239-97.237zm6.028 96.346l-64.23 64.23-63.97-63.97c-6.593-6.592-13.86-12.206-21.736-16.818l56.853-56.877c17.69-17.645 46.476-17.668 64.121 0l54.44 54.461c-9.292 4.961-17.842 11.315-25.479 18.974h.001z' />
                                <path d='M489.149 200.97l-58.379-58.377h-37.706c-13.838 0-27.394 5.635-37.185 15.426l-77.068 77.069c-7.202 7.18-16.623 10.77-26.067 10.77-9.443 0-18.885-3.59-26.066-10.77l-76.785-76.785c-9.792-9.814-23.346-15.427-37.207-15.427h-31.81L22.78 200.97c-30.374 30.375-30.374 79.614 0 109.988l58.095 58.074 31.81.021c13.86 0 27.416-5.635 37.208-15.426l76.784-76.764c13.925-13.947 38.208-13.924 52.133-.02l77.068 77.066c9.791 9.792 23.346 15.405 37.185 15.405h37.706l58.379-58.356c30.374-30.374 30.374-79.613 0-109.988zm-362.19 129.724c-3.763 3.786-8.942 5.917-14.273 5.917H94.302l-48.59-48.564c-17.689-17.69-17.689-46.476 0-64.143L94.3 175.296h18.385c5.331 0 10.51 2.154 14.295 5.918l74.74 74.74-74.761 74.74zm339.257-42.647l-48.848 48.87h-24.305c-5.309 0-10.508-2.155-14.251-5.92l-75.023-75.043 75.023-75.023c3.743-3.764 8.942-5.918 14.252-5.918h24.304l48.847 48.891c8.573 8.551 13.273 19.93 13.273 32.05 0 12.141-4.7 23.52-13.273 32.093z' />
                              </g>
                            </svg>
                          </Badge>
                          <hr className='w-full border border-slate-300' />
                        </div>
                      ) : (
                        <div className='flex w-full items-center justify-center'>
                          <hr className='w-full border border-slate-300' />
                          <Badge
                            variant='default'
                            className='m-2 h-8 w-fit bg-green-500 text-xs text-white hover:bg-green-500'
                          >
                            <span className='whitespace-nowrap'>
                              Inscrição gratuita
                            </span>
                          </Badge>
                          <hr className='w-full border border-slate-300' />
                        </div>
                      )}
                    </div>
                    {evento.arquivos.map((item: any) => (
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL_CMS}/${process.env.NEXT_PUBLIC_EVENTO_FOLDER}/${item.nomeArquivo}`}
                        className=''
                      />
                    ))}
                    <div className='flex flex-col justify-between'>
                      <div className='flex flex-col gap-2'>
                        <span className='text-xs text-slate-500'>
                          Palestrante: {evento.nomePalestrante}
                        </span>
                        <span className='prose text-4xl text-slate-700'>
                          {evento.tiuloEvento}
                        </span>
                        <span className='text-xs text-slate-500'>{`${evento.dataEvento} - ${evento.dataFim}`}</span>
                      </div>
                      {evento.isPermiteInscricao ? (
                        <div>
                          <Link href={`/AgendaDeEventos/${evento.idEvento}`}>
                            <Button
                              variant={'outline'}
                              className='mt-4 flex w-full gap-2 bg-entidades_green text-white hover:bg-green-700 hover:text-white'
                            >
                              <span>Inscrever-se</span>
                              <MoveUpRightIcon className='w-4' />
                            </Button>
                          </Link>
                          <div className='flex items-center justify-center'>
                            <span className='text-xs'>
                              Já razlizou sua inscrição neste evento?
                            </span>
                            <Link
                              href={`/AgendaDeEventos/ConsultarInscricao/${evento.idEvento}`}
                            >
                              <span className='ml-2 text-xs text-blue-400 underline'>
                                Consulte-a!
                              </span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

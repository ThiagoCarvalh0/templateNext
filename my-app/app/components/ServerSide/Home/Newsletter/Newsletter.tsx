'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { fetchWrapper } from '@/services/fetchService';
import { toast } from '@/components/ui/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

// Esquema de validação usando Zod
const schema = z.object({
  nomeInternauta: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Digite um endereço de e-mail válido'),
});

type FormValues = {
  nomeInternauta: string;
  email: string;
};

const Newsletter = () => {
  const [visible, setVisible] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    try {
      schema.parse(data);
      const Body = {
        email: data.email,
        idEmpresa: process.env.NEXT_PUBLIC_CMS_EMPRESA_ID,
        isLiberado: true,
        nomeInternauta: data.nomeInternauta,
        chaveEmail: '',
        tipoLiberacao: 'Liberado pelo portal',
        tipoBloqueio: '',
        dataLiberacao: new Date(),
      };
      fetchWrapper<{}>(`CMSConteudo/SaveEmailNewsletter`, {
        method: 'POST',
        body: JSON.stringify(Body),
      }).then((res: any) =>
        toast({
          title: res.message,
          variant: 'default',
          className: res.sucesso
            ? 'bg-green-500 text-slate-50'
            : 'bg-red-400 text-slate-50',
        })
      );
    } catch (error) {
      console.error('Erro de validação:', error);
    }
  };
  setTimeout(() => {
    return setVisible(true);
  }, 1000);

  return visible ? (
    <div className='mt-6 flex justify-between rounded-xl bg-entidades_green p-4 sm:flex-col lg:flex-row'>
      <div className='flex flex-col'>
        <span className='text-3xl font-semibold text-white'>NEWSLETTER</span>
        <span className='text-slate-300'>
          Cadastre-se e receba nossas novidades por e-mail
        </span>
      </div>
      <div className='flex w-full justify-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full items-center justify-between gap-3 sm:flex-col lg:flex-row'
        >
          <div className='flex-1 sm:w-full'>
            <input
              type='text'
              {...register('nomeInternauta', {
                required: 'Este campo é obrigatório',
              })}
              placeholder='Insira seu NOME'
              className='w-full rounded-customMd px-2 py-4'
            />
            {errors && <p>{errors.nomeInternauta?.message}</p>}
          </div>
          <div className='flex-1 sm:w-full'>
            <input
              type='text'
              {...register('email', { required: 'Este campo é obrigatório' })}
              placeholder='Insira seu E-MAIL'
              className='w-full rounded-customMd px-2 py-4'
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <Button
            type='submit'
            className='flex-1 rounded-customMd border-2 border-white bg-transparent py-[1.65rem] font-semibold text-white hover:border-transparent hover:bg-green-400 hover:text-white sm:w-full'
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  ) : (
    <div className='py-2'>
      <Skeleton className='h-[15rem] w-full rounded-customLg bg-slate-400' />
    </div>
  );
};

export default Newsletter;

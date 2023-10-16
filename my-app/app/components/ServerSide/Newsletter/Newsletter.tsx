'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

// Esquema de validação usando Zod
const schema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Digite um endereço de e-mail válido'),
});

type FormValues = {
  nome: string;
  email: string;
};

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    try {
      schema.parse(data);
      console.log('Dados válidos:', data);
    } catch (error) {
      console.error('Erro de validação:', error);
    }
  };
  return (
    <div className='mt-6 flex justify-between rounded-xl bg-entidades_green p-4'>
      <div className='flex flex-col'>
        <span className='text-3xl font-semibold text-white'>NEWSLETTER</span>
        <span className='text-slate-300'>
          Cadastre-se e receba nossas novidades por e-mail
        </span>
      </div>
      <div className='flex w-full justify-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full items-center justify-between gap-3'
        >
          <div className='flex-1'>
            <input
              type='text'
              {...register('nome', { required: 'Este campo é obrigatório' })}
              placeholder='Insira seu NOME'
              className='w-full rounded-customMd px-2 py-4'
            />
            {errors.nome && <p>{errors.nome.message}</p>}
          </div>
          <div className='flex-1'>
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
            className='flex-1 rounded-customMd border-2 border-white bg-transparent py-[1.65rem] font-semibold text-white hover:border-transparent hover:bg-green-400 hover:text-white'
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

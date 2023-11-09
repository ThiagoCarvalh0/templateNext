'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Associese = () => {
  const formSchema = z.object({
    nomefantasia: z.string().min(2, {
      message: 'Nome Fantasia deve ter pelo menos 2 caracteres.',
    }),
    razaosocial: z.string().min(2, {
      message: 'Razão Social deve ter pelo menos 2 caracteres.',
    }),
    cidade: z.string().min(2, {
      message: 'Cidade deve ter pelo menos 2 caracteres.',
    }),
    uf: z.string().min(2, {
      message: 'UF deve ter pelo menos 2 caracteres.',
    }),
    bairro: z.string().min(2, {
      message: 'Bairro deve ter pelo menos 2 caracteres.',
    }),
    ddd: z.string().min(2, {
      message: 'DDD deve ter pelo menos 2 caracteres.',
    }),
    telefone: z.string().min(2, {
      message: 'Telefone deve ter pelo menos 2 caracteres.',
    }),
    nomeporcontato: z.string().min(2, {
      message: 'Nome por Contato deve ter pelo menos 2 caracteres.',
    }),
    ramodeatividade: z.string().min(2, {
      message: 'Ramo de Atividade deve ter pelo menos 2 caracteres.',
    }),
    cnpj: z.string().min(14, {
      message: 'CNPJ deve ter pelo menos 14 caracteres.',
    }),
    endereco: z.string().min(2, {
      message: 'Endereço deve ter pelo menos 2 caracteres.',
    }),
    numero: z.string().min(1, {
      message: 'Número deve ser fornecido.',
    }),
    cep: z.string().min(8, {
      message: 'CEP deve ter pelo menos 8 caracteres.',
    }),
    email: z.string().email({
      message: 'Email inválido.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomefantasia: '',
      razaosocial: '',
      cidade: '',
      uf: '',
      bairro: '',
      ddd: '',
      telefone: '',
      nomeporcontato: '',
      ramodeatividade: '',
      cnpj: '',
      endereco: '',
      numero: '',
      cep: '',
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className='w-full flex-col sm:flex-col sm:p-4 lg:flex-row lg:p-0 lg:py-4'>
        <div className='w-[14rem] rounded-t-xl bg-slate-200 px-16 py-1 text-xl'>
          Associe-se
        </div>
        <div className='relative bg-slate-200 p-4 text-center'>
          <span className='text-center'>
            Se a sua empresa ainda não é associada, preencha o formulário abaixo
            e entraremos em contato para te passar todas as informações
            necessárias. Você vai conhecer as vantagens de fazer parte da FACMAT
            e será um enorme prazer ter você aqui conosco.
          </span>
        </div>
        <div className='bg-slate-200 px-4'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col space-y-8 pb-4'
            >
              <div className='flex gap-4 sm:flex-col lg:flex-row'>
                <div className='flex flex-col gap-4 sm:w-full lg:w-2/4'>
                  {' '}
                  <FormField
                    control={form.control}
                    name='nomefantasia'
                    render={({ field }) => (
                      <FormItem className='bg-white'>
                        <FormControl>
                          <Input
                            placeholder='Nome Fantasia'
                            className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                            autoComplete='organaization'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='razaosocial'
                    render={({ field }) => (
                      <FormItem className='bg-white'>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder='Razão Social'
                            className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                            autoComplete='organization'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className=' flex justify-between gap-4'>
                    <FormField
                      control={form.control}
                      name='cidade'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl className='w-full'>
                            <Input
                              placeholder='Cidade'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='address-level2'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='uf'
                      render={({ field }) => (
                        <FormItem className='w-24 bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='UF'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='address-level2'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='bairro'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Bairro'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='address-level2'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex gap-4'>
                    <FormField
                      control={form.control}
                      name='ddd'
                      render={({ field }) => (
                        <FormItem className='bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='DDD'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='tel-national'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='telefone'
                      render={({ field }) => (
                        <FormItem className='bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Telefone'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='tel-national'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='flex w-1/2 flex-col gap-4 sm:w-full lg:w-1/2'>
                  <FormField
                    control={form.control}
                    name='nomeporcontato'
                    render={({ field }) => (
                      <FormItem className='bg-white'>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder='Nome Para Contato'
                            className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                            autoComplete='name'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className='flex gap-4'>
                    <FormField
                      control={form.control}
                      name='ramodeatividade'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Ramo de Atividade'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='organization'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='cnpj'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='CNPJ'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='tax-id'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex justify-between gap-4'>
                    <FormField
                      control={form.control}
                      name='endereco'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Endereço'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='address-line1'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='numero'
                      render={({ field }) => (
                        <FormItem className='w-[6.2rem] bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Nº'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='cep'
                      render={({ field }) => (
                        <FormItem className='w-full bg-white'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='CEP'
                              className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                              autoComplete='postal-code'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='bg-white'>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder='E-mail'
                            className='rounded-customMd border-none placeholder-slate-500 shadow-bottom'
                            autoComplete='email'
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Textarea
                placeholder='Mensagem...'
                className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom outline-none'
              />
              <Button
                type='submit'
                className='self-end rounded-customMd bg-entidades_green py-[1.65rem] font-semibold text-white hover:bg-green-500 hover:text-white'
              >
                CONFIRMAR
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Associese;

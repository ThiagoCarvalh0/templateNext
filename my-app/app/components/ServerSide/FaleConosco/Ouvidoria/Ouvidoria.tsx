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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
      <div className='flex flex-col px-4 py-4'>
        <div className='self-end rounded-t-xl bg-slate-200 px-16 py-1 text-xl'>
          Ouvidoria
        </div>
        <div className='bg-slate-200 p-4 text-center'>
          <span className='text-center'>
            Elogios ou críticas? Deixe sua mensagem!
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
                          <Select>
                            <SelectTrigger className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'>
                              <SelectValue placeholder='Selecione o tipo da solicitação.' />
                            </SelectTrigger>
                            <SelectContent className='bg-white'>
                              <SelectGroup>
                                <SelectLabel>Tipo de solitação</SelectLabel>
                                <SelectItem value='solicitacao'>
                                  Solicitação
                                </SelectItem>
                                <SelectItem value='reclamacao'>
                                  Reclamação
                                </SelectItem>
                                <SelectItem value='elogio'>Elogio</SelectItem>
                                <SelectItem value='denuncia'>
                                  Denúncia
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
                          <Select>
                            <SelectTrigger className='rounded-customSm border-none shadow-bottom'>
                              <SelectValue
                                className='placeholder-slate-500'
                                placeholder='Selecione a Área'
                              />
                            </SelectTrigger>
                            <SelectContent className='bg-white'>
                              <SelectGroup>
                                <SelectLabel>
                                  Área para a solicitação.
                                </SelectLabel>
                                <SelectItem value='financeiro'>
                                  Financeiro
                                </SelectItem>
                                <SelectItem value='certificados'>
                                  Certificados
                                </SelectItem>
                                <SelectItem value='duvidas'>Dúvidas</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
                <div className='flex flex-col gap-4 sm:w-full lg:w-2/4'>
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
                  <Textarea
                    placeholder='Mensagem...'
                    className='min-h-[9rem] rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
                  />
                </div>
              </div>
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

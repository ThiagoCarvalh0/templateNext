import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import React, { useContext, useState } from 'react';
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
import { Checkbox } from '@/components/ui/checkbox';

const EntreEmContato = () => {
  const { getConteudoByTituloConteudo, createRequest } =
    useContext(ConteudoHomeContext);
  const [checked, setChecked] = useState<boolean>(true);
  const ComponentData = getConteudoByTituloConteudo('Entre em contato');

  const formSchema = z.object({
    nome: z.string().min(2, {
      message: 'Nome Completo deve ter pelo menos 2 caracteres.',
    }),
    telefone: z.string().min(2, {
      message: 'Telefone deve ter pelo menos 2 caracteres.',
    }),
    cnpj: z.string().min(2, {
      message: 'Cnpj deve ter pelo menos 2 caracteres.',
    }),
    email: z.string().min(2, {
      message: 'Email deve ter pelo menos 2 caracteres.',
    }),
    mensagem: z.string().min(2, {
      message: 'Email deve ter pelo menos 2 caracteres.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      telefone: '',
      cnpj: '',
      email: '',
      mensagem: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const body = {
      idSolicitacao: 0,
      idEmpresa: +process.env.NEXT_PUBLIC_CMS_EMPRESA_ID!,
      nome: values.nome,
      telefone: values.telefone.replace(/\D/g, ''),
      email: values.email,
      cnpj: '',
      mensagem: values.mensagem,
      controleInterno: 'Solicitação Rede Check',
      tipoSolicitacao: 0,
    };
    createRequest(body);
    form.reset();
  }

  return (
    <div
      className='flex items-center justify-center bg-rede_check_light_blue sm:w-full'
      id='contato'
    >
      <div className='flex w-full flex-col items-center justify-center py-12 custom-lg:w-[70rem] custom-lg:max-w-[70rem]'>
        <div className='flex w-full gap-8 pb-12 sm:flex-col sm:items-center sm:justify-center lg:flex-row lg:items-baseline'>
          <div className='sm:w-full sm:px-2 lg:w-1/2'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
              >
                <div className='flex gap-4 sm:flex-col lg:flex-row'>
                  <div className='flex flex-col gap-4 sm:w-full'>
                    {' '}
                    <FormField
                      control={form.control}
                      name='nome'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl className='w-full'>
                            <Input
                              placeholder='Nome Completo'
                              className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
                              autoComplete='name'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className='text-white' />
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                        </FormItem>
                      )}
                    />
                    <div className='flex gap-2'>
                      <FormField
                        control={form.control}
                        name='telefone'
                        render={({ field }) => (
                          <FormItem className='w-full'>
                            {/* <FormLabel>Username</FormLabel> */}
                            <FormControl>
                              <Input
                                placeholder='Telefone'
                                className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
                                autoComplete='tel'
                                {...field}
                              />
                            </FormControl>
                            {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                            <FormMessage className='text-white' />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='cnpj'
                        render={({ field }) => (
                          <FormItem className='w-ful'>
                            {/* <FormLabel>Username</FormLabel> */}
                            <FormControl>
                              <Input
                                placeholder='CNPJ'
                                className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
                                {...field}
                              />
                            </FormControl>
                            {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                            <FormMessage className='text-white' />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='E-mail'
                              className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
                              autoComplete='email'
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage className='text-white' />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name='mensagem'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Textarea
                          placeholder='Comentário'
                          className='rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom outline-none'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='text-white' />
                    </FormItem>
                  )}
                />
                <div className='flex flex-col gap-2'>
                  <span className='text-white'>
                    Cadastro sujeito à aprovação. Prazo máximo 24h
                  </span>
                  <div className='flex justify-center gap-2'>
                    <Checkbox
                      className='mt-1 rounded-customMd border-white bg-white'
                      onCheckedChange={(e: boolean) => setChecked(!e)}
                    />
                    <span className='text-white'>
                      Autorizo o uso dos dados informados para entrar em contato
                      e receber publicidade da Rede Check Brasil.
                    </span>
                  </div>
                  <Button
                    type='submit'
                    className='w-full self-start rounded-customMd bg-slate-200 py-[1.65rem] font-semibold text-slate-400 hover:bg-rede_check_dark_blue hover:text-white disabled:bg-slate-400'
                    disabled={checked}
                  >
                    CONFIRMAR
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className='flex flex-col gap-2 text-white sm:w-full sm:p-2 lg:w-1/2'>
            <span className='text-3xl'>
              {ComponentData && ComponentData[0].TituloConteudo}
            </span>
            <span>{ComponentData && ComponentData[0].BreveDescricao}</span>
            {ComponentData &&
              ComponentData[0].ConteudoDependente.map(
                (item: any, index: any) => (
                  <span key={index}>{item.BreveDescricao}</span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntreEmContato;

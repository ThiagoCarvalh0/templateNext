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

const Associese = () => {
  const formSchema = z.object({
    nomefantasia: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    razaosocial: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    cidade: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    uf: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    bairro: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    ddd: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    telefone: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    nomeporcontato: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    ramodeatividade: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    cnpj: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    endereco: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    numero: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    cep: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
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
      <div className='flex flex-col py-4'>
        <div className='self-end rounded-t-xl bg-slate-200 px-16 py-1 text-xl'>
          Associe-se
        </div>
        <div className='bg-slate-200 p-4 text-center'>
          <span className='text-center'>
            Se a sua empresa ainda não é associada, preencha o formulário abaixo
            e entraremos em contato para te passar todas as informações
            necessárias. Você vai conhecer as vantagens de fazer parte da FACMAT
            e será um enorme prazer ter você aqui conosco.
          </span>
        </div>
        <div className='bg-slate-200 px-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='nomefantasia'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='cidade'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='ddd'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='nomeporcontato'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='ramodeatividade'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='endereco'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
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
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Associese;

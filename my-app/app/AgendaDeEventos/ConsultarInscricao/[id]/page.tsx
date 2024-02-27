'use client';
import { fetchWrapper } from '@/services/fetchService';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
// const sanitizeAndRemoveAttributes = (html: string) => {
//   const sanitizedHtml = DOMPurify.sanitize(html, {
//     ALLOWED_TAGS: [
//       'h1',
//       'p',
//       'span',
//       'a',
//       'ul',
//       'li',
//       'h2',
//       'h3',
//       'h4',
//       'br',
//       'img',
//     ], // Adicione as tags que deseja permitir
//     ALLOWED_ATTR: ['style', 'src'], // Remove todos os atributos
//   });
//   return sanitizedHtml;
// };

const page = ({ params }: { params: { id: string } }) => {
  const [componentData, setComponentData] = useState<any>();
  const [loading, setIsLoading] = React.useState(false);
  const [formVisibility, setFormVisibility] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pageId = params.id;

  useEffect(() => {
    fetchWrapper<any>(
      `CMSConteudo/GetEventosByIdList/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
      {
        method: 'POST',
        body: JSON.stringify({
          ids: [pageId],
        }),
      }
    )
      .then((res) => {
        setComponentData(res);
        res;
      })
      .catch((err) => {
        err;
      });
  }, []);

  const initialFormSchema = z.object({
    numeroDocumento: z.string().min(1, {
      message: 'Número do documento deve ser fornecido.',
    }),
  });

  const InitialForm = useForm<z.infer<typeof initialFormSchema>>({
    resolver: zodResolver(initialFormSchema),
    defaultValues: {
      numeroDocumento: '',
    },
  });

  function onInitialSubmit(values: z.infer<typeof initialFormSchema>) {
    values;

    let Body = {
      idEvento: pageId,
      numeroDocumento: values.numeroDocumento.replace(/[\/\.-]/g, ''),
    };

    fetchWrapper<{}>(`CMSEventos/BuscarInscricaoCMS`, {
      method: 'POST',
      body: JSON.stringify(Body),
    }).then((res: any) => {
      res;
      if (InitialForm.formState.isSubmitSuccessful) {
        if (res.status === 200) {
          toast({
            title: 'Existe uma inscrição com o documento fornecido.',
            variant: 'default',
            className: 'bg-green-400 text-slate-50',
          });
        }
        InitialForm.reset();
        setIsLoading(false);
      }
    });
  }

  function formatCnpjCpf(v: any) {
    const cnpjCpf = v.replace(/\D/g, '');

    if (cnpjCpf.length === 11) {
      return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    return cnpjCpf.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
  }

  return (
    <div className='flex justify-center py-2'>
      {componentData ? (
        <div className='flex min-h-[70vh] w-[98vw] max-w-[98vw] flex-col gap-2 p-4 xl:max-w-[80vw]'>
          <div className='flex w-full gap-8'>
            <div className='h-fit rounded-customMd border border-b border-zinc-300 shadow-bottom'>
              {componentData[0].arquivos.map((item: any) => (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL_CMS}/${process.env.NEXT_PUBLIC_EVENTO_FOLDER}/${item.nomeArquivo}`}
                  className=''
                />
              ))}
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-2 px-4 py-2'>
                  <span className='text-xs text-slate-500'>
                    Palestrante: {componentData[0].nomePalestrante}
                  </span>
                  <span className='prose text-4xl text-slate-700'>
                    {componentData[0].tiuloEvento}
                  </span>
                  <span className='text-xs text-slate-500'>{`${componentData[0].dataEvento} - ${componentData[0].dataFim}`}</span>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <Form {...InitialForm}>
                <form
                  onSubmit={InitialForm.handleSubmit(onInitialSubmit)}
                  className='flex w-full flex-col items-center justify-center gap-2'
                >
                  <div className='flex w-full items-center justify-center gap-2'>
                    <FormField
                      control={InitialForm.control}
                      name='numeroDocumento'
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl className='bg-white'>
                            <Input
                              placeholder='CNPJ'
                              className='w-full rounded-customSm border-none py-4 placeholder-slate-500 shadow-bottom'
                              autoComplete='tax-id'
                              {...field}
                              onChange={(e) => {
                                InitialForm.setValue(
                                  'numeroDocumento',
                                  formatCnpjCpf(e.target.value)
                                );
                              }}
                              maxLength={18}
                            />
                          </FormControl>
                          {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type='submit'
                      disabled={loading}
                      className='m-0 flex items-center justify-center gap-2 self-end rounded-customMd bg-entidades_green py-[1.4rem] font-semibold text-white hover:bg-green-500 hover:text-white'
                    >
                      {loading ? <Loader2 className='animate-spin' /> : <></>}
                      <span className='whitespace-nowrap'>
                        CONSULTAR INSCRIÇÃO
                      </span>
                    </Button>
                  </div>
                  {/* <img src='/imagens/sitting-8.svg' alt='' className='py-16 pr-28' /> */}
                </form>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div className='h-screen'>
          <span>Carregando...</span>
        </div>
      )}
    </div>
  );
};

export default page;

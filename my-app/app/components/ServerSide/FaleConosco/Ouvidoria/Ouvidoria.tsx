'use client';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { string, z } from 'zod';
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
import { fetchWrapper } from '@/services/fetchService';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { ITipoOuvidoria } from './Types/ILKP006_TIPO_OUVIDORIA';
import { IAreaEmpresa } from './Types/ICAD010_AREA_EMPRESA';

const Ddds = [
  { ddd: 11, estado: 'SP' },
  { ddd: 12, estado: 'SP' },
  { ddd: 13, estado: 'SP' },
  { ddd: 14, estado: 'SP' },
  { ddd: 15, estado: 'SP' },
  { ddd: 16, estado: 'SP' },
  { ddd: 17, estado: 'SP' },
  { ddd: 18, estado: 'SP' },
  { ddd: 19, estado: 'SP' },
  { ddd: 21, estado: 'RJ' },
  { ddd: 22, estado: 'RJ' },
  { ddd: 24, estado: 'RJ' },
  { ddd: 27, estado: 'ES' },
  { ddd: 28, estado: 'ES' },
  { ddd: 31, estado: 'MG' },
  { ddd: 32, estado: 'MG' },
  { ddd: 33, estado: 'MG' },
  { ddd: 34, estado: 'MG' },
  { ddd: 35, estado: 'MG' },
  { ddd: 37, estado: 'MG' },
  { ddd: 38, estado: 'MG' },
  { ddd: 41, estado: 'PR' },
  { ddd: 42, estado: 'PR' },
  { ddd: 43, estado: 'PR' },
  { ddd: 44, estado: 'PR' },
  { ddd: 45, estado: 'PR' },
  { ddd: 46, estado: 'PR' },
  { ddd: 47, estado: 'SC' },
  { ddd: 48, estado: 'SC' },
  { ddd: 49, estado: 'SC' },
  { ddd: 51, estado: 'RS' },
  { ddd: 53, estado: 'RS' },
  { ddd: 54, estado: 'RS' },
  { ddd: 55, estado: 'RS' },
  { ddd: 61, estado: 'DF' },
  { ddd: 62, estado: 'GO' },
  { ddd: 63, estado: 'TO' },
  { ddd: 64, estado: 'GO' },
  { ddd: 65, estado: 'MT' },
  { ddd: 66, estado: 'MT' },
  { ddd: 67, estado: 'MS' },
  { ddd: 68, estado: 'AC' },
  { ddd: 69, estado: 'RO' },
  { ddd: 71, estado: 'BA' },
  { ddd: 73, estado: 'BA' },
  { ddd: 74, estado: 'BA' },
  { ddd: 75, estado: 'BA' },
  { ddd: 77, estado: 'BA' },
  { ddd: 79, estado: 'SE' },
  { ddd: 81, estado: 'PE' },
  { ddd: 82, estado: 'AL' },
  { ddd: 83, estado: 'PB' },
  { ddd: 84, estado: 'RN' },
  { ddd: 85, estado: 'CE' },
  { ddd: 86, estado: 'PI' },
  { ddd: 87, estado: 'PE' },
  { ddd: 88, estado: 'CE' },
  { ddd: 89, estado: 'PI' },
  { ddd: 91, estado: 'PA' },
  { ddd: 92, estado: 'AM' },
  { ddd: 93, estado: 'PA' },
  { ddd: 94, estado: 'PA' },
  { ddd: 95, estado: 'RR' },
  { ddd: 96, estado: 'AP' },
  { ddd: 97, estado: 'AM' },
  { ddd: 98, estado: 'MA' },
  { ddd: 99, estado: 'MA' },
];

const Associese = () => {
  const [loading, setIsLoading] = React.useState(false);
  const [tiposOuvidoria, setTiposOuvidoria] = React.useState([]);
  const [areaEmpresa, setAreaEmpresa] = React.useState([]);

  useEffect(() => {
    fetchWrapper<{}>(`CMSConteudo/GetTiposOuvidoria`, {
      method: 'GET',
    }).then((res: any) => {
      setTiposOuvidoria(res.resultado);
    });

    fetchWrapper<{}>(
      `CMSConteudo/GetAreasEmpresa/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
      {
        method: 'GET',
      }
    ).then((res: any) => {
      setAreaEmpresa(res.resultado);
    });
  }, []);

  const formSchema = z.object({
    nomefantasia: z.string().min(1, {
      message: 'Nome Fantasia deve ter pelo menos 2 caracteres.',
    }),
    tiposolicitacao: z
      .string({
        required_error: 'Um tipo de solicitação é obrigatório.',
      })
      .min(1, { message: 'Um tipo de solicitação é obrigatório.' }),
    areasolicitacao: z
      .string({
        required_error: 'Uma área deve ser selecionada.',
      })
      .min(1, { message: 'Uma área deve ser selecionada.' }),
    ddd: z
      .string({
        required_error: 'DDD deve ser selecionado.',
      })
      .min(1, { message: 'DDD deve ser selecionado.' }),
    telefone: z.string().min(2, {
      message: 'Telefone deve ter pelo menos 2 caracteres.',
    }),
    email: z.string().email({
      message: 'Email inválido.',
    }),
    mensagem: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomefantasia: '',
      tiposolicitacao: '',
      areasolicitacao: '',
      ddd: '',
      telefone: '',
      email: '',
      mensagem: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      let Body = {
        idEmpresa: parseInt(process.env.NEXT_PUBLIC_CMS_EMPRESA_ID!),
        idTipoOuvidoria: parseInt(values.tiposolicitacao),
        idAreaEmpresa: parseInt(values.areasolicitacao),
        rg: '',
        cpf: '',
        nome: values.nomefantasia,
        telefone: values.ddd + values.telefone.replace(/-/g, ''),
        email: values.email,
        mensagem: values.mensagem,
        isVisualizado: false,
        isEncerrado: false,
        isEncaminhadoFAQ: false,
        dataVisualizacao: null,
        dataEncerramento: null,
        dataEncaminhamento: null,
        controleInterno: '',
        dataResposta: null,
        idUsuarioEncaminhou: null,
        idUsuarioEncerrou: null,
        idUsuarioRespondeu: null,
        idUsuarioVisualizou: null,
        isRespondido: false,
        respostaOuvidoria: '',
        historicoEncaminhamento: '',
      };

      fetchWrapper<{}>(
        `CMSOuvidoria/InserirNaOuvidoria/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
        {
          method: 'POST',
          body: JSON.stringify(Body),
        }
      ).then((res: any) => {
        toast({
          title:
            res.status == 201
              ? 'Solicitação enviada com sucesso!'
              : 'Erro ao enviar solicitação!',
          variant: 'default',
          className:
            res.status == 201
              ? 'bg-green-500 text-slate-50'
              : 'bg-red-400 text-slate-50',
        });

        if (form.formState.isSubmitSuccessful) {
          form.reset({
            nomefantasia: '',
            tiposolicitacao: form.getValues().tiposolicitacao,
            areasolicitacao: form.getValues().areasolicitacao,
            ddd: form.getValues().ddd,
            telefone: '',
            email: '',
            mensagem: '',
          });
          setIsLoading(false);
        }
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  const phoneMask = (value: any) => {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    return value;
  };

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
                    name='tiposolicitacao'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={(e) => {
                              form.setValue('tiposolicitacao', e);
                            }}
                          >
                            <SelectTrigger className='rounded-customSm border-none bg-white placeholder-slate-500 shadow-bottom'>
                              <SelectValue placeholder='Tipo da solicitação' />
                            </SelectTrigger>
                            <SelectContent className='bg-white'>
                              <SelectGroup>
                                <SelectLabel>Tipo de solitação</SelectLabel>
                                {tiposOuvidoria
                                  ? tiposOuvidoria.map(
                                      (item: ITipoOuvidoria, index) => (
                                        <SelectItem
                                          value={item.idTipoOuvidoria.toString()}
                                          key={index}
                                        >
                                          {item.nomeTipoOuvidoria}
                                        </SelectItem>
                                      )
                                    )
                                  : null}
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
                    name='areasolicitacao'
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Select
                            onValueChange={(e) => {
                              form.setValue('areasolicitacao', e);
                            }}
                          >
                            <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
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
                                {areaEmpresa
                                  ? areaEmpresa.map(
                                      (item: IAreaEmpresa, index) => (
                                        <SelectItem
                                          value={item.idAreaEmpresa.toString()}
                                          key={index}
                                        >
                                          {item.nomeAreaEmpresa}
                                        </SelectItem>
                                      )
                                    )
                                  : null}
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
                      <FormItem>
                        <FormControl className='bg-white'>
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
                        <FormItem>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Select
                              onValueChange={(e) => {
                                form.setValue('ddd', e);
                              }}
                            >
                              <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
                                <SelectValue
                                  className='placeholder-slate-500'
                                  placeholder='DDD'
                                />
                              </SelectTrigger>
                              <SelectContent className='bg-white'>
                                <SelectGroup className='max-h-[10rem] overflow-y-scroll'>
                                  <SelectLabel>DDD</SelectLabel>
                                  {Ddds.map((idx, ddd) => (
                                    <SelectItem
                                      key={ddd}
                                      value={idx.ddd.toString()}
                                    >
                                      {idx.ddd + ' - ' + idx.estado}
                                    </SelectItem>
                                  ))}
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
                      name='telefone'
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder='Tel: 9XXXX-XXXX'
                              className='rounded-customSm border-none bg-white placeholder-slate-500 shadow-bottom'
                              autoComplete='tel-national'
                              {...field}
                              onChange={(e) =>
                                form.setValue(
                                  'telefone',
                                  phoneMask(e.target.value)
                                )
                              }
                              maxLength={10}
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='mensagem'
                    render={({ field }) => (
                      <FormItem className='bg-white'>
                        {/* <FormLabel>Username</FormLabel> */}
                        <FormControl>
                          <Textarea
                            placeholder='Mensagem...'
                            className='min-h-[9rem] rounded-customMd border-none bg-white placeholder-slate-500 shadow-bottom'
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
              <Button
                type='submit'
                disabled={loading}
                className='flex items-center justify-center gap-2 self-end rounded-customMd bg-entidades_green py-[1.65rem] font-semibold text-white hover:bg-green-500 hover:text-white'
              >
                {loading ? <Loader2 className='animate-spin' /> : <></>}
                <span className='pt-[.2rem]'>CONFIRMAR</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Associese;

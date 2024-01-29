import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { fetchWrapper } from '@/services/fetchService';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CalendarIcon, Loader2 } from 'lucide-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

interface IEventoGratuitoProps {
  idEvento: string;
}

const formEventoPago = ({ idEvento }: IEventoGratuitoProps) => {
  const [loading, setIsLoading] = React.useState(false);
  const [Logradouro, setLogradouro] = React.useState([{}]);
  const [cidades, setCidades] = React.useState([{}]);
  const [date, setDate] = React.useState<Date>();
  const pageId = idEvento;

  useEffect(() => {
    fetchWrapper<{}>(`CMSUtils/GetTiposLogradouro`).then((res: any) => {
      setLogradouro(res.resultado);
    });
    fetchWrapper<{}>(`CMSUtils/GetCidades`).then((res: any) => {
      setCidades(res.resultado);
    });
  }, []);

  const formSchema = z.object({
    nome: z.string().min(1, {
      message: 'Nome deve ter pelo menos 2 caracteres.',
    }),
    numeroDocumento: z.string().min(1, {
      message: 'Número do documento deve ser fornecido.',
    }),
    ddd: z
      .string({
        required_error: 'Campo obrigatório.',
      })
      .min(1, { message: 'Campo obrigatório.' }),
    sexo: z.string().min(1, {
      message: 'Sexo deve ser fornecido.',
    }),
    dataNascimento: z
      .date({
        invalid_type_error: 'Data de nascimento inválida.',
      })
      .nullable(),
    email: z.string().email({
      message: 'Email inválido.',
    }),
    celular: z.string().min(2, {
      message: 'Celular deve ter pelo menos 2 caracteres.',
    }),
    telefone: z.string().min(2, {
      message: 'Telefone deve ter pelo menos 2 caracteres.',
    }),
    cep: z.string().min(1, {
      message: 'CEP deve ser fornecido.',
    }),
    endereco: z.string().min(1, {
      message: 'Endereço deve ser fornecido.',
    }),
    numero: z.string().min(1, {
      message: 'Número deve ser fornecido.',
    }),
    idTipoLogradouro: z.number().int(),
    idCidade: z.number().int(),
    idUf: z.number().int(),
    entidadeOrigem: z.string(),
    empresaOrigem: z.string(),
    isPresencaConfirmada: z.boolean(),
    idEvento: z.number().int(),
    Identity: z.number().int().optional(),
  });

  const ufs = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' },
  ];

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

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      numeroDocumento: '',
      sexo: '',
      dataNascimento: null,
      email: '',
      ddd: undefined,
      celular: '',
      telefone: '',
      cep: '',
      endereco: '',
      numero: '',
      idTipoLogradouro: 0, // ou o valor padrão apropriado
      idCidade: 0, // ou o valor padrão apropriado
      idUf: 0, // ou o valor padrão apropriado
      entidadeOrigem: '',
      empresaOrigem: '',
      isPresencaConfirmada: false,
      idEvento: 0, // ou o valor padrão apropriado
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      let Body = {
        idEvento: values.idEvento,
        nome: values.nome,
        numeroDocumento: values.numeroDocumento,
        sexo: values.sexo,
        dataNascimento: values.dataNascimento,
        email: values.email,
        celular: values.celular,
        telefone: values.telefone,
        cep: values.cep,
        endereco: values.endereco,
        numero: values.numero,
        idTipoLogradouro: values.idTipoLogradouro,
        idCidade: values.idCidade,
        idUf: values.idUf,
        entidadeOrigem: values.entidadeOrigem,
        empresaOrigem: values.empresaOrigem,
        isPresencaConfirmada: values.isPresencaConfirmada,
        Identity: values.Identity,
      };

      // fetchWrapper<{}>(
      //   `CMSOuvidoria/InserirNaOuvidoria/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}`,
      //   {
      //     method: 'POST',
      //     body: JSON.stringify(Body),
      //   }
      // ).then((res: any) => {
      //   if (form.formState.isSubmitSuccessful) {
      //     form.reset();
      //     setIsLoading(false);
      //   }
      // });
    } catch (ex) {
      console.error(ex);
    }
  }

  const zipCodeMask = (value: any) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value;
  };

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

  const phoneMask = (value: any) => {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    return value;
  };

  return (
    <div className='flex w-full flex-col gap-6'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col space-y-6 pb-4'
        >
          <div className=' flex gap-2'>
            <FormField
              control={form.control}
              name='nome'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl className='bg-white'>
                    <Input
                      placeholder='Nome completo'
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
              name='sexo'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      // defaultValue={field.value}
                    >
                      <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
                        <SelectValue
                          className='placeholder-slate-500'
                          placeholder='Sexo'
                        />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup className='max-h-[10rem] overflow-y-scroll'>
                          <SelectLabel>Sexo</SelectLabel>
                          <SelectItem value='M'>Masculino</SelectItem>
                          <SelectItem value='F'>Feminino</SelectItem>
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
          </div>
          <div className='flex gap-2'>
            <FormField
              control={form.control}
              name='numeroDocumento'
              render={({ field }) => (
                <FormItem className='w-full'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='bg-white'>
                    <Input
                      placeholder='CPF'
                      className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                      autoComplete='tax-id'
                      {...field}
                      onChange={(e) => {
                        form.setValue(
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
            <FormField
              control={form.control}
              name='dataNascimento'
              render={({ field }) => (
                <FormItem className='w-full'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='w-full bg-white'>
                    <Popover>
                      <PopoverTrigger
                        className='w-full rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                        asChild
                      >
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !date && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon
                            className='mr-2 h-4 w-4'
                            color='#a1a1aa'
                          />
                          {date ? (
                            format(date, 'PPP', { locale: ptBR })
                          ) : (
                            <span className='text-zinc-400'>
                              Data de Nascimento
                            </span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className='w-auto bg-white p-0'
                        align='start'
                      >
                        <Calendar
                          mode='single'
                          selected={date}
                          locale={ptBR}
                          onSelect={(e: any) => {
                            setDate(e);
                            field.value = e;
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='bg-white'>
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
                            <SelectItem key={ddd} value={idx.ddd.toString()}>
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
                  <FormControl className='bg-white'>
                    <Input
                      placeholder='TEL: 9XXXX-XXXX'
                      className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                      autoComplete='tel-national'
                      {...field}
                      onChange={(e) =>
                        form.setValue('telefone', phoneMask(e.target.value))
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
          <div>
            <FormField
              control={form.control}
              name='empresaOrigem'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='bg-white'>
                    <Input
                      placeholder='Empresa'
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
          </div>
          <div className='flex justify-between gap-4'>
            <FormField
              control={form.control}
              name='cep'
              render={({ field }) => (
                <FormItem className='w-full'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='bg-white'>
                    <Input
                      placeholder='CEP: XXXXX-XXX'
                      className='rounded-customSm border-none placeholder-slate-500 shadow-bottom'
                      autoComplete='postal-code'
                      {...field}
                      onChange={(e) => {
                        form.setValue('cep', zipCodeMask(e.target.value));
                      }}
                      maxLength={9}
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
              name='idTipoLogradouro'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      // defaultValue={field.value}
                    >
                      <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
                        <SelectValue
                          className='placeholder-slate-500'
                          placeholder='Logradouro'
                        />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup className='max-h-[10rem] overflow-y-scroll'>
                          <SelectLabel>Unidade Federativa</SelectLabel>
                          {Logradouro.map((idx: any, i) => (
                            <SelectItem key={i} value={idx.idTipoLogradouro}>
                              {idx.nomeLogradouro}
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
              name='endereco'
              render={({ field }) => (
                <FormItem className='w-full'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='w-full bg-white'>
                    <Input
                      placeholder='Endereço'
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
              name='numero'
              render={({ field }) => (
                <FormItem className='w-[10rem]'>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl className='bg-white'>
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
          </div>
          <div className='flex gap-2'>
            <FormField
              control={form.control}
              name='idUf'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      // defaultValue={field.value}
                    >
                      <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
                        <SelectValue
                          className='placeholder-slate-500'
                          placeholder='UF'
                        />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup className='max-h-[10rem] overflow-y-scroll'>
                          <SelectLabel>Unidade Federativa</SelectLabel>
                          {ufs.map((idx, i) => (
                            <SelectItem key={i} value={idx.sigla.toString()}>
                              {idx.nome + ' - ' + idx.sigla}
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
              name='idCidade'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      // defaultValue={field.value}
                    >
                      <SelectTrigger className='rounded-customSm border-none bg-white shadow-bottom'>
                        <SelectValue
                          className='placeholder-slate-500'
                          placeholder='Cidade'
                        />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup className='max-h-[10rem] overflow-y-scroll'>
                          <SelectLabel>Unidade Federativa</SelectLabel>
                          {cidades.map((idx: any, i) => (
                            <SelectItem key={i} value={idx.idCidade}>
                              {idx.nomeCidade}
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
          </div>
          <Button
            type='submit'
            disabled={loading}
            className='flex items-center justify-center gap-2 self-end rounded-customMd bg-entidades_green py-[1.65rem] font-semibold text-white hover:bg-green-500 hover:text-white'
          >
            {loading ? <Loader2 className='animate-spin' /> : <></>}
            <span className='pt-[.2rem]'>IR PARA O PAGAMENTO</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default formEventoPago;

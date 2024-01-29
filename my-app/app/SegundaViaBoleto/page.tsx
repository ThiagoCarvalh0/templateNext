'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { fetchWrapper } from '@/services/fetchService';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  ChevronsDownUp,
  FileBarChart,
  FileSpreadsheet,
  MoreHorizontal,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const schema = z.object({
  documento: z.string().min(12, 'Valor inválido.'),
});

type FormValues = {
  documento: string;
};

export interface Fatura {
  idFatura: number;
  numeroDocumentoCobranca: string;
  nomeStatusFatura: string;
  idStatusFatura: number;
  valorTotal: number;
  dataVencimento: string; // Você pode usar um tipo Date se preferir
  chaveBoletoWeb: string;
  idCliente: number;
}
export const columns: ColumnDef<Fatura>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'numeroDocumentoCobranca',
    header: 'Fatura',
    cell: ({ row }) => (
      <div className='capitalize'>
        {row.getValue('numeroDocumentoCobranca')}
      </div>
    ),
  },
  {
    accessorKey: 'dataVencimento',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Vencimento
          <ChevronsDownUp className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }: any) => (
      <div>
        {row.getValue('dataVencimento')
          ? new Date(row.getValue('dataVencimento')).getDate() +
            '/' +
            (parseInt(
              new Date(row.getValue('dataVencimento')).getMonth().toString()
            ) +
              1) +
            '/' +
            new Date(row.getValue('dataVencimento')).getFullYear()
          : ''}
      </div>
    ),
  },
  {
    accessorKey: 'valorTotal',
    header: () => <div className='text-right'>Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('valorTotal'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
  {
    id: 'actions',
    header: 'Ações',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white' align='start'>
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <Link
              target='_blank'
              href={`http://localhost:63787/UI/BOLETO/form_BOLETO_IMPRIMIR_WEB.aspx?tipoImpressao=IND&chaveBoleto=${row.original.chaveBoletoWeb}&cliente=${row.original.idCliente}&tipo=BOL`}
            >
              <DropdownMenuItem
                className='flex cursor-pointer flex-row items-center justify-start'
                onClick={() => console.log('é o click do boleto papae')}
              >
                <FileSpreadsheet width={16} />
                <span className='flex items-center pt-1'>Boleto</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link
              target='_blank'
              href={`http://localhost:63787/UI/BOLETO/form_BOLETO_IMPRIMIR_WEB.aspx?tipoImpressao=IND&chaveBoleto=${row.original.chaveBoletoWeb}&cliente=${row.original.idCliente}&tipo=DET`}
            >
              <DropdownMenuItem className='flex cursor-pointer flex-row items-center justify-start'>
                <FileBarChart width={16} />
                <span className='flex items-center pt-1'>Detalhe</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const page = () => {
  const [documento, setDocumento] = useState('');
  const [dataSet, setDataSet] = useState<Fatura[] | any>();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      documento: '',
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    schema.parse(data);
    try {
      const Body = {
        documento: data.documento.replace(/[^\d]/g, ''),
        idProvedorIntegracao: 3132,
        connectionStringKey: 'MGvYwLZuMkuRzWta1AqNOg==',
      };
      fetchWrapper<{}>(`CMSBoleto/GetFaturas`, {
        method: 'POST',
        body: JSON.stringify(Body),
      }).then((res: any) => {
        setDataSet(res.result);
        toast({
          title: res.statusCode == 200 ? 'Sucesso!' : 'Algo de errado ocorreu.',
          variant: 'default',
          className:
            res.statusCode == 200
              ? 'bg-green-500 text-slate-50'
              : 'bg-red-400 text-slate-50',
        });
      });
    } catch (error) {
      console.error('Erro de validação:', error);
    }
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
  const table = useReactTable({
    data: dataSet,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  useEffect(() => {}, []);
  return (
    <div className='flex min-h-screen justify-center'>
      <div className='sm:w-full sm:px-2 lg:w-[72vw]'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-full gap-2 py-8 sm:flex-col lg:flex-row'
          >
            <FormField
              control={form.control}
              name='documento'
              render={({ field }) => (
                <FormItem className='sm:w-full lg:w-[80%]'>
                  <FormControl>
                    <Input
                      placeholder='CPF/CNPJ'
                      {...field}
                      onChange={(e) => {
                        const formattedDocumento = formatCnpjCpf(
                          e.target.value
                        );
                        setDocumento(formattedDocumento); // Update local state
                        field.onChange(
                          formattedDocumento.length == 14 ||
                            formattedDocumento.length == 18
                            ? formattedDocumento
                            : ''
                        );
                      }}
                      value={documento}
                      className='w-full rounded-customSm border-none px-2 py-4 placeholder-slate-500 shadow-bottom'
                      autoComplete='tax-id'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='rounded-customMd border-2 border-black bg-entidades_green py-[1.2rem] font-semibold text-white hover:bg-white hover:text-black sm:w-full lg:w-[20%]'
            >
              Enviar
            </Button>
          </form>
        </Form>
        {dataSet ? (
          <>
            <div className='w-full'>
              <div className='flex items-center py-4 sm:gap-2'>
                <Input
                  placeholder='Filtrar pelo vencimento'
                  value={
                    (table
                      .getColumn('dataVencimento')
                      ?.getFilterValue() as string) ?? ''
                  }
                  onChange={(event) =>
                    table
                      .getColumn('dataVencimento')
                      ?.setFilterValue(event.target.value)
                  }
                  className='w-full max-w-sm rounded-customSm border-none px-2 py-4 placeholder-slate-500 shadow-bottom'
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='outline'
                      className='ml-auto rounded-customSm border-none px-2 py-4 placeholder-slate-500 shadow-bottom'
                    >
                      Colunas <ChevronDown className='ml-2 h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align='end'
                    className='z-50 flex flex-col'
                  >
                    {table
                      .getAllColumns()
                      .filter((column) => column.getCanHide())
                      .map((column) => {
                        return (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className='bg-white capitalize hover:z-50 hover:cursor-pointer hover:bg-white'
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) =>
                              column.toggleVisibility(!!value)
                            }
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='rounded-md border-2'>
                <Table className='rounded-md border-none px-2 py-4 shadow-bottom hover:z-0'>
                  <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id} className='hover:z-0'>
                        {headerGroup.headers.map((header) => {
                          return (
                            <TableHead key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </TableHead>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                    {table.getRowModel().rows?.length ? (
                      table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && 'selected'}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={columns.length}
                          className='h-24 text-center'
                        >
                          No results.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <div className='flex items-center justify-end space-x-2 py-4'>
                {/* <div className='flex-1 text-sm text-muted-foreground'>
                  {table.getFilteredSelectedRowModel().rows.length} of{' '}
                  {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}
                <div className='space-x-2'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default page;
// function zodResolver(
//   FormSchema: any
// ): import('react-hook-form').Resolver<any, any> | undefined {
//   throw new Error('Function not implemented.');
// }

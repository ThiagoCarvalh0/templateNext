import {
  ArrowRightLeft,
  Banknote,
  Boxes,
  Briefcase,
  CalendarDaysIcon,
  DollarSign,
  FileText,
  Files,
  Lock,
  MessagesSquare,
  PenSquare,
  Scale,
  ShoppingCart,
  Stamp,
} from 'lucide-react';
import Card from '../layout/Card';

function Cards() {
  return (
    <div
      className='flex w-full flex-col items-center justify-center px-4 pb-12 pt-14 lg:px-0 lg:pb-[219px]'
      data-aos='fade-up'
      data-aos-duration='800'
    >
      <p className='mb-5 flex text-center text-xl lg:w-[554px] lg:text-3xl'>
        Sistema de Gestão para Autoridades de Registro | AC Copy
      </p>

      <p className='mb-20 w-full text-center text-sm font-light lg:w-[485px] lg:text-base'>
        Gere valor para sua empresa a cada certificado on-line vendido.
        Oferecemos uma plataforma segura e completa para sua empresa.
      </p>

      <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-7'>
        <Card icon={DollarSign} title='Comissão Canais' />
        <Card icon={DollarSign} title='Comissão Indicadores' />
        <Card icon={DollarSign} title='Comissão Usuários' />
        <Card icon={Briefcase} title='Multiempresas e Multinível' />
        <Card icon={CalendarDaysIcon} title='Agendamento de Emissões' />
        <Card icon={Stamp} title='Controle de Vendas e Emissões' />
        <Card icon={Banknote} title='Controle Financeiro' />
        <Card icon={PenSquare} title='Controle de Dossiês' />
        <Card icon={Boxes} title='Controle de Estoque Distribuído' />
        <Card icon={Files} title='Controle de Arquivos' />
        <Card icon={MessagesSquare} title='Mensageria Integrada' />
        <Card icon={Lock} title='Gerenciamento de Acesso' />
        <Card icon={FileText} title='Emissão e Controle de NFSe' />
        <Card icon={ShoppingCart} title='e-Commerce Integrado' />
        <Card icon={Scale} title='Controle de Comissões' />
        <Card icon={ArrowRightLeft} title='Integração Valid' />
        <Card icon={ArrowRightLeft} title='Integração Soluti' />
        <Card icon={ArrowRightLeft} title='Integração AC Link' />
      </div>
    </div>
  );
}

export default Cards;

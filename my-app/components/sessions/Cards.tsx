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
    <div className='flex flex-col items-center justify-center pb-[219px] pt-14'>
      <p className='mb-5 flex w-[554px] text-center text-3xl'>
        Sistema de Gestão para Autoridades de Registro | AC Copy
      </p>

      <p className='mb-20 w-[485px] text-center text-base font-light'>
        Gere valor para sua empresa a cada certificado on-line vendido.
        Oferecemos uma plataforma segura e completa para sua empresa.
      </p>

      <div className='grid grid-cols-3 gap-7'>
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

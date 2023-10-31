import { ElementType } from 'react';

interface CardProps {
  icon: ElementType;
  title: string;
}

function Card({ icon: Icon, title }: CardProps) {
  return (
    <div className='bg-BlueGAC flex h-[220px] w-[330px] flex-col items-center justify-center rounded-3xl font-normal capitalize text-white'>
      <Icon className='h-24 w-24' strokeWidth='1px' />
      <p>{title}</p>
    </div>
  );
}

export default Card;

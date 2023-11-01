import { ElementType } from 'react';

interface CardProps {
  icon: ElementType;
  title: string;
}

function Card({ icon: Icon, title }: CardProps) {
  return (
    <div
      className='flex h-32 w-full flex-col items-center justify-center rounded bg-BlueGAC font-normal capitalize text-white lg:h-[220px] lg:w-[330px] lg:rounded-3xl'
      data-aos='fade-down'
    >
      <Icon className='h-10 w-10 lg:h-24 lg:w-24' strokeWidth='1px' />
      <p className='px-2 text-center lg:px-2'>{title}</p>
    </div>
  );
}

export default Card;

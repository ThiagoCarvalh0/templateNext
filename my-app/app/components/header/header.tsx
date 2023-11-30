import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex w-full justify-center bg-rede_check_dark_blue'>
      <div className='flex items-center px-2 py-4 sm:w-full sm:justify-between sm:gap-2 lg:w-[72rem] lg:max-w-[72rem] xl:w-full xl:max-w-none xl:px-4'>
        <img src='/imagens/REDE_CHECK.png' className='h-auto sm:w-40 lg:w-72' />
        <ul className='m-auto flex gap-2 sm:hidden lg:flex'>
          <li>
            <span className='text-xl text-white'>Home</span>
          </li>
          <li>
            <span className='text-xl text-white'>Quem Somos</span>
          </li>
          <li>
            <span className='text-xl text-white'>Serviços</span>
          </li>
          <li>
            <span className='text-xl text-white'>Contato</span>
          </li>
        </ul>
        <Button className='border-2 border-white px-2 py-8'>
          <Link href='https://app.tagcred.com.br/' target='_blank'>
            <img
              src='/imagens/logo.png'
              alt=''
              className='h-auto sm:w-40 lg:w-full'
            />
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

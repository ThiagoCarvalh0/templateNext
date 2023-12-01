import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='flex w-full justify-center bg-rede_check_dark_blue'>
      <div className='flex items-center px-2 py-4 sm:w-full sm:justify-between sm:gap-2 lg:w-[72rem] lg:max-w-[72rem] xl:w-full xl:max-w-none xl:px-4'>
        <Link href='#'>
          <img
            src='/imagens/REDE_CHECK.png'
            className='h-auto sm:w-40 lg:w-72'
          />
        </Link>
        <ul className='m-auto flex gap-2 sm:hidden lg:flex'>
          <li>
            <Link href='#'>
              <span className='text-xl text-white hover:text-blue-300'>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href='#quemsomos'>
              <span className='text-xl text-white hover:text-blue-300'>
                Quem Somos
              </span>
            </Link>
          </li>
          <li>
            <Link href='#nossosservicos'>
              <span className='text-xl text-white hover:text-blue-300'>
                Serviços
              </span>
            </Link>
          </li>
          <li>
            <Link href='#contato'>
              <span className='text-xl text-white hover:text-blue-300'>
                Contato
              </span>
            </Link>
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

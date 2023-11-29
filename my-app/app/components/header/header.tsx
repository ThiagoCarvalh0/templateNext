import { Button } from '@/components/ui/button';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-rede_check_dark_blue flex w-full justify-center'>
      <div className='flex w-[72rem] max-w-[72rem] items-center justify-center py-4'>
        <img src='/imagens/REDE_CHECK.png' className='h-auto w-72' />
        <ul className='m-auto flex gap-2'>
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
          <img src='/imagens/logo.png' alt='' className='h-auto w-full' />
        </Button>
      </div>
    </header>
  );
};

export default Header;

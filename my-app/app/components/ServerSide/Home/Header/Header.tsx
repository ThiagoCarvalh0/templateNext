import React from 'react';
import Image from 'next/image';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  Button,
} from '../../../ClientSide/Header/HeaderClient';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='sticky top-0 z-20 flex flex-col'>
        <div>
          <div
            id='header'
            className='flex w-full justify-center bg-entidades_green'
          >
            <div className='flex w-[98vw] max-w-[98vw] items-center justify-between'>
              <div className='flex'>
                <Link href='#'>
                  <Image
                    src='/imagens/facmat-logo.png'
                    width={300}
                    height={30}
                    alt='logo'
                    className='pb-4'
                  />
                </Link>
                <ul className='flex items-center justify-center gap-2'>
                  <li className='cursor-pointer text-white hover:text-green-400'>
                    <Link href={'/'}>FACMAT</Link>
                  </li>
                  <li className='cursor-pointer text-white hover:text-green-400'>
                    CERTIFICADOS
                  </li>
                  <li className='cursor-pointer text-white hover:text-green-400'>
                    IMPRENSA
                  </li>
                  <li className='cursor-pointer text-white hover:text-green-400'>
                    AR FACMAT
                  </li>
                  <li className='cursor-pointer text-white hover:text-green-400'>
                    <Link href={'/FaleConosco'}>FALE CONOSCO</Link>
                  </li>
                </ul>
              </div>
              <div className='mb-4 mr-4 flex-col'>
                <span className='text-white'>Acesso rápido</span>
                <div className='rounded-xl border-2 border-white bg-transparent pt-2 font-semibold text-blue-700 hover:border-transparent hover:bg-green-400 hover:text-white'>
                  <Button>
                    <Image
                      src='/imagens/boa-vista.png'
                      width={150}
                      height={100}
                      alt='logo'
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

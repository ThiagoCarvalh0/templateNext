import React from 'react';
import Image from 'next/image';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  Button,
} from '../../ClientSide/Header/HeaderClient';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='flex h-24 flex-col'>
        <div>
          <div className='flex justify-center bg-entidades_gray'>
            <div className='flex w-[95vw] max-w-[95vw] justify-between py-2'>
              <div className='flex items-center justify-center gap-2'>
                <Image
                  src='/imagens/whats-icon.png'
                  width={24}
                  height={24}
                  alt='whats'
                />
                <span className='text-white underline'>(65) 3317-1661</span>
              </div>
              <div className='flex gap-2'>
                <span className='rounded-3xl bg-entidades_green px-2 py-1 text-white'>
                  2º Via Boleto
                </span>
                <span className='rounded-3xl bg-entidades_green px-2 py-1 text-white'>
                  Cadastre seu currículo
                </span>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <Image
                  src='/imagens/email-icon.png'
                  width={24}
                  height={24}
                  alt='mail'
                />
                <span className='text-white underline'>adm@facmat.org.br</span>
              </div>
            </div>
          </div>
          <div className='z-20 flex w-full justify-center bg-entidades_green shadow-b'>
            <div className='sticky top-0 flex w-[98vw] max-w-[98vw] items-center justify-between'>
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
                <Menubar className='flex gap-2 pr-44'>
                  <MenubarMenu>
                    <MenubarTrigger className='text-white'>
                      FACMAT
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className='text-white'>
                      CERTIFICADOS
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className='text-white'>
                      IMPRENSA
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className='text-white'>
                      AR FACMAT
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className='text-white'>
                      FALE CONOSCO
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
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

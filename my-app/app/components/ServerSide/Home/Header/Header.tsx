'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '../../../ClientSide/Header/HeaderClient';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MenuIcon } from 'lucide-react';
import { Root } from '@/types/types';
import { fetchWrapper } from '@/services/fetchService';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [headerData, setHeaderData] = useState<any>([]);

  useEffect(() => {
    fetchWrapper<{ Conteudos: Root[] }>(
      `CMSConteudo/GetByNomeDeConteudo/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/MENU`,
      {
        method: 'GET',
      }
    ).then((res) => {
      setHeaderData(res);
    });
  }, []);

  return (
    <>
      <div className='sticky top-0 z-20 flex w-full flex-col'>
        <div>
          <div
            id='header'
            className='flex w-full justify-center bg-entidades_green'
          >
            <div className='flex w-[98vw] max-w-[98vw] items-center justify-between xl:max-w-[80vw]'>
              <div className='flex items-center justify-center'>
                <Link href='/'>
                  <img
                    src='/imagens/facmat-logo.png'
                    width={300}
                    height={30}
                    alt='logo'
                    className='pb-4'
                  />
                </Link>
                <div className='flex flex-row-reverse'>
                  {headerData &&
                    headerData.map((item: any, index: any) =>
                      item.ConteudoDependente.length > 0 ? (
                        <div
                          key={index}
                          className={`sm:hidden lg:block order-${
                            item.OrdemConteudo ? item.OrdemConteudo : ''
                          }`}
                        >
                          <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-white hover:text-white focus:text-white data-[active]:text-white data-[state=open]:text-white'>
                                  {item.TituloConteudo.toUpperCase()}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className='flex flex-col rounded-customMd bg-green-700'>
                                  {item.ConteudoDependente.map(
                                    (item: any, index: any) => (
                                      <NavigationMenuLink
                                        key={index}
                                        className='w-40 p-2'
                                      >
                                        <Link href={item.BreveDescricao}>
                                          <span className='border-0 text-white'>
                                            {item.TituloConteudo.toUpperCase()}
                                          </span>
                                        </Link>
                                      </NavigationMenuLink>
                                    )
                                  )}
                                </NavigationMenuContent>
                              </NavigationMenuItem>
                            </NavigationMenuList>
                          </NavigationMenu>
                        </div>
                      ) : (
                        <div
                          className={`sm:hidden lg:block order-${
                            item.OrdemConteudo ? item.OrdemConteudo : ''
                          }`}
                        >
                          <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <Link href='/' legacyBehavior passHref>
                                  <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                  >
                                    <span className='text-white'>
                                      {item.TituloConteudo.toUpperCase()}
                                    </span>
                                  </NavigationMenuLink>
                                </Link>
                              </NavigationMenuItem>
                            </NavigationMenuList>
                          </NavigationMenu>
                        </div>
                      )
                    )}
                </div>
              </div>
              <div className='flex items-center lg:mb-4 lg:mr-4'>
                <div className='flex flex-col sm:mb-0 sm:hidden sm:h-12 lg:flex'>
                  <Button className='rounded-customMd border-2 border-white bg-transparent p-0 font-semibold text-blue-700 hover:border-transparent hover:bg-green-400 hover:text-white sm:h-10 lg:h-14'>
                    <img
                      src='/imagens/boa-vista.png'
                      alt='logo'
                      className='w-full'
                    />
                  </Button>
                  <span className='whitespace-nowrap pt-2 text-white sm:text-xs'>
                    Acesso rápido
                  </span>
                </div>
                <div className='sm:visible lg:hidden'>
                  <Sheet onOpenChange={() => setOpen(!open)} open={open}>
                    <SheetTrigger className='flex'>
                      <MenuIcon
                        color='white'
                        size={70}
                        className='self-center'
                      />
                    </SheetTrigger>
                    <SheetContent className='w-full bg-white'>
                      <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <Button className='w-30 rounded-customMd border-2 border-white bg-green-400 p-0 font-semibold hover:border-transparent sm:h-20 lg:h-14'>
                          <div className='h-fit'>
                            <img
                              src='/imagens/boa-vista.png'
                              alt='logo'
                              className='w-full'
                            />
                            <span className='whitespace-nowrap pt-2 text-white sm:text-xs'>
                              Acesso rápido
                            </span>
                          </div>
                        </Button>
                        <SheetDescription>
                          <div className='flex flex-col'>
                            {headerData &&
                              headerData.map((item: any, index: any) =>
                                item.ConteudoDependente.length > 0 ? (
                                  <Accordion
                                    type='single'
                                    collapsible
                                    className='w-full sm:block lg:hidden'
                                  >
                                    <AccordionItem value='item-1'>
                                      <AccordionTrigger>
                                        {item.TituloConteudo}
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <div className='flex flex-col gap-2 pl-2'>
                                          {item.ConteudoDependente.map(
                                            (item: any, index: any) => (
                                              <Link
                                                key={index}
                                                href={item.BreveDescricao}
                                                onClick={() => setOpen(false)}
                                              >
                                                <span className='border-0'>
                                                  {item.TituloConteudo}
                                                </span>
                                              </Link>
                                            )
                                          )}
                                        </div>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                ) : (
                                  <div className='border-b border-b-slate-200 py-2 sm:block lg:hidden'>
                                    <Link
                                      href='/'
                                      onClick={() => setOpen(false)}
                                    >
                                      <span>{item.TituloConteudo}</span>
                                    </Link>
                                  </div>
                                )
                              )}
                          </div>
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             'block select-none space-y-1 rounded-customMd p-3 leading-none text-black no-underline outline-none hover:bg-green-200 focus:bg-accent',
//             className
//           )}
//           {...props}
//         >
//           <div className='text-sm font-medium leading-none'>{title}</div>
//           <p className='line-clamp-2 text-sm leading-snug text-gray-500'>
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = 'ListItem';

export default Header;

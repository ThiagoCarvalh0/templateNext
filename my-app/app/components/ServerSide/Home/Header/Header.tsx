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
import { MenuIcon } from 'lucide-react';
import { Root } from '@/types/types';
import { fetchWrapper } from '@/services/fetchService';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [headerData, setHeaderData] = useState<any>([]);

  useEffect(() => {
    fetchWrapper<{ Conteudos: Root[] }>(
      `CMSConteudo/GetConteudoByTipoConteudo/${process.env.NEXT_PUBLIC_CMS_EMPRESA_ID}/Navbar`,
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
                  <Image
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
                        <div key={index} className='sm:hidden lg:block'>
                          <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-white hover:text-white focus:text-white data-[active]:text-white data-[state=open]:text-white'>
                                  {item.TituloConteudo}
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
                                            {item.TituloConteudo}
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
                        <div className='sm:hidden lg:block'>
                          <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <Link href='/' legacyBehavior passHref>
                                  <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                  >
                                    <span className='text-white'>
                                      {item.TituloConteudo}
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
                <div className='flex flex-col sm:mb-2 sm:h-12'>
                  <span className='text-white sm:text-xs'>Acesso rápido</span>
                  <Button className='rounded-xl border-2 border-white bg-transparent font-semibold text-blue-700 hover:border-transparent hover:bg-green-400 hover:text-white sm:h-10 lg:h-14'>
                    <img
                      src='/imagens/boa-vista.png'
                      alt='logo'
                      className='w-28'
                    />
                  </Button>
                </div>
                <div className='sm:visible lg:hidden'>
                  <Sheet>
                    <SheetTrigger className='flex'>
                      <MenuIcon
                        color='white'
                        size={60}
                        className='self-center'
                      />
                    </SheetTrigger>
                    <SheetContent className='w-full bg-white'>
                      <SheetHeader>
                        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                        <SheetDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
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

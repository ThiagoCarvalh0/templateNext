'use client';
import React, { useContext } from 'react';
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
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { ConteudoHomeContext } from '@/app/Contexts/HomeContexts';
import { Root } from '@/types/types';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'DPN-CD',
    href: '/FaleConosco',
    description: '',
  },
  {
    title: 'DPN-RFB',
    href: '/FaleConosco',
    description: '',
  },
];

const Header = () => {
  const { getConteudoByNomeTipoConteudo } = useContext(ConteudoHomeContext);
  const menu: Root[] = getConteudoByNomeTipoConteudo('Menu');
  console.log(menu);
  return (
    <>
      <div className='sticky top-0 z-20 flex w-full flex-col'>
        <div>
          <div
            id='header'
            className='flex w-full justify-center bg-entidades_green'
          >
            <div className='flex w-[98vw] max-w-[98vw] items-center justify-between'>
              <div className='flex'>
                <Link href='/'>
                  <Image
                    src='/imagens/facmat-logo.png'
                    width={300}
                    height={30}
                    alt='logo'
                    className='pb-4'
                  />
                </Link>
                <NavigationMenu className='sm:hidden lg:inline-flex'>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='text-base text-white'>
                        FACMAT
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className='grid w-[400px] gap-3 rounded-customMd bg-white p-4 shadow md:w-[500px] md:grid-cols-1 lg:w-[220px]'>
                          <ListItem href='/docs' title='SOBRE NÓS'>
                            Venha conhecer mais!
                          </ListItem>
                          <ListItem href='/docs' title='DIRETORIA' />
                          <ListItem href='/docs' title='ASSOCIATIVISMO' />
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href='/docs' legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          CERTIFICADOS
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='text-base text-white'>
                        IMPRENSA
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='relative'>
                        <ul className='fixed left-[35rem] grid w-[400px] gap-3 rounded-customMd bg-white p-4 shadow-b md:w-[500px] md:grid-cols-1 lg:w-[220px]'>
                          <ListItem href='/Noticias' title='NOTÍCIAS'>
                            Verifique nossas notícias!
                          </ListItem>
                          <ListItem
                            href='/GaleriaDeImagens'
                            title='GALERIA DE EVENTOS'
                          >
                            Verifique nossa galeria de imagens!
                          </ListItem>
                          <ListItem
                            href='/AgendaDeEventos'
                            title='AGENDA DE EVENTOS'
                          >
                            Verifique nossa agenda de eventos!
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='text-base text-white'>
                        AR FACMAT
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='relative'>
                        <ul className='fixed left-[44rem] grid w-[400px] gap-3 rounded-customMd bg-white p-4 shadow-b md:w-[500px] md:grid-cols-1 lg:w-[220px]'>
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='text-base text-white'>
                        FALE CONOSCO
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='relative'>
                        <ul className='fixed left-[53rem] grid w-[400px] gap-3 rounded-customMd bg-white p-4 shadow-b md:w-[500px] md:grid-cols-1 lg:w-[220px]'>
                          <ListItem href='/FaleConosco' title='ASSOCIE-SE'>
                            Seja nosso parceiro!
                          </ListItem>
                          <ListItem href='/Ouvidoria' title='OUVIDORIA'>
                            Entre em contato conosco!
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
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
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-customMd p-3 leading-none text-black no-underline outline-none hover:bg-green-200 focus:bg-accent',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-gray-500'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Header;

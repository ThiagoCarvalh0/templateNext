import Image from 'next/image';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <div className='flex h-[164px] w-full items-center justify-between px-16 py-4'>
      <Image
        src='/images/coloredIcon.png'
        width={1280}
        height={1280}
        alt=''
        className='h-16 w-32 object-scale-down sm:h-[115px] sm:w-[266px]'
      />
      <nav className='hidden gap-x-4 text-lg lg:flex'>
        <Link href={''}>INICIO</Link>
        <Link href={''}>SOBRE NOS</Link>
        <Link href={''}>PRODUTO</Link>
        <Link href={''}>CLIENTE</Link>
        <Link href={''}>ORÇAMENTO</Link>
        <Link href={''}>CONTATO</Link>
        <Link href={''}>POLITICA</Link>
      </nav>

      <Sheet>
        <SheetTrigger className='flex lg:hidden'>
          <Menu className='sm:h-10 sm:w-10' />
        </SheetTrigger>
        <SheetContent className='flex w-4/5 sm:w-1/2'>
          <SheetHeader>
            <SheetTitle className='mb-10'>Menu</SheetTitle>
            <SheetDescription className='flex flex-col items-start justify-start gap-y-2'>
              <Link href={''}>INICIO</Link>
              <Link href={''}>SOBRE NOS</Link>
              <Link href={''}>PRODUTO</Link>
              <Link href={''}>CLIENTE</Link>
              <Link href={''}>ORÇAMENTO</Link>
              <Link href={''}>CONTATO</Link>
              <Link href={''}>POLITICA</Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

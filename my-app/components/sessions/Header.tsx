import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex h-[164px] w-full items-center justify-between px-16 py-4'>
      <Image
        src='/images/coloredIcon.png'
        width={1280}
        height={1280}
        alt=''
        className='h-[115px] w-[266px] object-scale-down'
      />
      <nav className='flex gap-x-4 text-lg'>
        <Link href={''}>INICIO</Link>
        <Link href={''}>SOBRE NOS</Link>
        <Link href={''}>PRODUTO</Link>
        <Link href={''}>CLIENTE</Link>
        <Link href={''}>ORÇAMENTO</Link>
        <Link href={''}>CONTATO</Link>
        <Link href={''}>POLITICA</Link>
      </nav>
    </div>
  );
}

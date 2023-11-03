import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div
      className='relative flex h-[164px] w-full items-center justify-between px-16 py-4'
      id='header'
    >
      <Image
        src='/images/coloredIcon.png'
        width={1280}
        height={1280}
        alt=''
        className='h-16 w-32 object-scale-down sm:h-[115px] sm:w-[266px]'
      />
      <nav className='hidden gap-x-4 text-lg lg:flex'>
        <Link
          to='carousel'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          INICIO
        </Link>
        <Link
          to='about'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          SOBRE NOS
        </Link>
        <Link
          to='product'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          PRODUTO
        </Link>
        <Link
          to='client'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          CLIENTE
        </Link>
        <Link
          to='pay'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          ORÇAMENTO
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          CONTATO
        </Link>
        <Link
          to='politics'
          smooth={true}
          duration={500}
          className='cursor-pointer hover:animate-pulse'
        >
          POLITICA
        </Link>
      </nav>

      {/*Versao Mobile*/}
      <div className='z-10 lg:hidden'>
        <Menu className='h-10 w-10 cursor-pointer' onClick={toggleMenu} />

        {isMenuOpen && (
          <div className='fixed right-2 top-2 flex h-72 w-56 flex-col justify-between rounded-xl border border-black bg-white p-8'>
            <div className='flex items-center justify-between'>
              <p className='font-bold'>GAC MENU</p>
              <X className='h-5 w-5 cursor-pointer' onClick={closeMenu} />
            </div>

            <div className='text-xs'>
              <Link
                to='carousel'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                INICIO
              </Link>
              <Link
                to='about'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                SOBRE NOS
              </Link>
              <Link
                to='product'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                PRODUTO
              </Link>
              <Link
                to='client'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                CLIENTE
              </Link>
              <Link
                to='pay'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                ORÇAMENTO
              </Link>
              <Link
                to='contact'
                smooth={true}
                duration={500}
                className='mb-2 block cursor-pointer'
              >
                CONTATO
              </Link>
              <Link
                to='politics'
                smooth={true}
                duration={500}
                className='block cursor-pointer'
              >
                POLITICA
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex w-full items-center justify-center bg-entidades_dark_gray py-6'>
      <div className='w-[73rem] max-w-[73rem] justify-between gap-4 sm:flex sm:flex-col sm:px-4 lg:flex-row'>
        <div>
          <Image
            src='/imagens/BvsCrediconsult.png'
            width={200}
            height={200}
            alt='logo'
          />
          <div className='flex'>
            <Image src='/imagens/face.png' width={50} height={50} alt='logo' />
            <Image src='/imagens/insta.png' width={50} height={50} alt='logo' />
            <Image
              src='/imagens/youtube.png'
              width={50}
              height={50}
              alt='logo'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-semibold text-white'>
            Rua Galdino Pimentel, 14, 8° andar - Palácio do Comércio 3025 Centro
            Cuiabá MT 78005020 N/C
          </span>
          <span className='text-white'>(65) 3317-1661</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

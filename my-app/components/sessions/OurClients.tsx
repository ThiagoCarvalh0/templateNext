import Image from 'next/image';

function OurClients() {
  return (
    <div
      className='mb-32 flex flex-col items-center justify-center pt-36'
      id='client'
      data-aos='fade-up'
      data-aos-duration='800'
    >
      <svg
        className='mb-14'
        width='226'
        height='178'
        viewBox='0 0 226 178'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='112.523' cy='52.7568' rx='31.5' ry='33.5' fill='#0E4B98' />
        <ellipse cx='178.523' cy='32.2568' rx='30.5' ry='32' fill='#343565' />
        <ellipse cx='46.5227' cy='32.2568' rx='30.5' ry='32' fill='#343565' />
        <path
          d='M93.0227 92.2568H132.023C148.591 92.2568 162.023 105.688 162.023 122.257V165.087C162.023 165.087 147.471 177.743 112.543 177.743C77.616 177.743 63.0227 165.407 63.0227 165.407V122.257C63.0227 105.688 76.4542 92.2568 93.0227 92.2568Z'
          fill='#0E4B98'
        />
        <path
          d='M45.9466 147.851C38.6499 147.851 31.725 147.263 25.3643 146.102C20.2757 145.173 15.5346 143.878 11.2728 142.252C4.01708 139.485 0.624487 136.681 0.591064 136.653V97.4872C0.591064 93.8111 1.31751 90.245 2.75023 86.8879C4.13409 83.6453 6.1152 80.7332 8.63853 78.2324C11.1619 75.7316 14.1003 73.7682 17.3721 72.3967C20.7595 70.9768 24.3578 70.2568 28.0672 70.2568H63.7864C69.4353 70.2568 74.8617 71.9426 79.4791 75.1319C83.992 78.249 87.4257 82.5719 89.409 87.6331H87.5401C71.4647 87.6331 58.3864 102.554 58.3864 120.894V147.23C54.4083 147.642 50.2232 147.851 45.9466 147.851Z'
          fill='#343565'
        />
        <path
          d='M180.053 147.851C187.35 147.851 194.275 147.262 200.636 146.101C205.724 145.173 210.465 143.878 214.727 142.252C221.983 139.485 225.376 136.681 225.409 136.653V97.4871C225.409 93.811 224.682 90.2449 223.25 86.8878C221.866 83.6452 219.885 80.7331 217.361 78.2323C214.838 75.7315 211.9 73.7681 208.628 72.3966C205.241 70.9767 201.642 70.2567 197.933 70.2567H162.214C156.565 70.2567 151.138 71.9425 146.521 75.1318C142.008 78.2489 138.574 82.5718 136.591 87.633H138.46C154.535 87.633 167.614 102.554 167.614 120.893V147.23C171.592 147.642 175.777 147.851 180.053 147.851Z'
          fill='#343565'
        />
      </svg>

      <h1 className='mb-5 text-4xl'>Nossos Clientes</h1>
      <p className='mb-20 text-center font-light'>
        Estas renomadas empresas confiam em nossos produtos
      </p>

      {/*
          - Falta trocar hidden -> flex, quando tiver todas as imagens para construir o carrossel.
      */}
      <div className='hidden items-center justify-center px-8'>
        <Image
          src='/images/clientes/online.png'
          alt={''}
          height={1280}
          width={1280}
          quality={100}
          className='h-[410px] w-[300px] object-scale-down'
        />
        <Image
          src='/images/clientes/hgl.png'
          alt={''}
          height={1280}
          width={1280}
          quality={100}
          className='h-[410px] w-[300px] object-scale-down'
        />
        <Image
          src='/images/clientes/terra.png'
          alt={''}
          height={1280}
          width={1280}
          quality={100}
          className='h-[410px] w-[300px] object-scale-down'
        />
        <Image
          src='/images/clientes/ar.png'
          alt={''}
          height={1280}
          width={1280}
          quality={100}
          className='h-[410px] w-[300px] object-scale-down'
        />
      </div>
    </div>
  );
}

export default OurClients;

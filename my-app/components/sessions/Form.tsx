import Image from 'next/image';

function Form() {
  return (
    <div className='bg-LightBlueGAC grid grid-cols-2 gap-x-8 px-12 pt-24'>
      <form action='' className='grid grid-cols-2 gap-x-12 gap-y-10'>
        <input
          type='text'
          placeholder='Nome'
          className='rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
        />
        <input
          type='text'
          placeholder='E-mail'
          className='rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
        />
        <input
          type='text'
          placeholder='Nome da AR'
          className='col-span-2 rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
        />
        <input
          type='text'
          placeholder='Telefone com DDD'
          className='rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
        />
        <input
          type='text'
          placeholder='Qtd certificados emitidos por mês'
          className='rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
        />
        <textarea
          name=''
          id=''
          className='col-span-2 h-[164px] rounded-xl px-4 pb-3 pt-2 font-light placeholder:italic'
          placeholder='Mensagem'
        />
        <div className='flex  items-center gap-x-2'>
          <input type='checkbox' />
          Desejo um orçamento
        </div>

        <div className='flex  items-center gap-x-2'>
          <input type='checkbox' />
          Autorizo o uso de dados
        </div>
        <button
          type='submit'
          className='col-span-2 flex items-center justify-center rounded-xl bg-white p-2 text-3xl'
        >
          Enviar
        </button>
        <Image
          className='h-[141px] w-[327px] object-scale-down'
          src='/images/whiteIcon.png'
          alt={''}
          width={1280}
          height={1280}
        />
      </form>
      <div>
        <h1 className='mb-9 text-3xl'>Entre em contato</h1>
        <p className='mb-2 text-xl font-light'>
          Queremos ouvir você! Envie uma mensagem e a nossa equipe retornará!
        </p>
        <p className='mb-2 text-xl font-light'>
          Endereço: Rua Barão de Melgaço, 2754 - Ed. Work Tower, Sala 1606 -
          Centro Sul - CEP: 78040-365 - Cuiabá, MT
        </p>
        <p className='mb-2 text-xl font-light'>Telefone: +55 65 3051-5900</p>
        <p className='mb-2 text-xl font-light'>Enviar Mensagem no WhatsApp</p>
        <p className='mb-2 text-xl font-light'>
          Email: atendimento@egac.com.br
        </p>
        <p className='mb-2 text-xl font-light'>Website: www.egac.com.br</p>
        <p className='mb-14 text-xl font-light'>
          www.sistemaautoridaderegistro.com.br
        </p>
        <Image
          className='h-[149px] w-[327px] object-scale-down'
          src='/images/btor.png'
          alt={''}
          width={1280}
          height={1280}
        />
      </div>
    </div>
  );
}

export default Form;

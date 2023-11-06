function Form() {
  return (
    <div className='grid grid-cols-1 gap-x-8 bg-LightBlueGAC px-8 pb-10 pt-24 lg:grid-cols-2 lg:px-12 lg:pb-4'>
      {/*
          - Falta adicionar a funcionalidade de enviar a mensagem. 
          (nessecita endereço endpoint para concluir.)
      */}
      <form
        action=''
        className='grid grid-cols-2 gap-x-12 gap-y-10'
        data-aos='fade-up'
      >
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
        <img
          className='h-[141px] w-[327px] object-scale-down'
          src='/images/whiteIcon.png'
          alt={''}
        />
      </form>
      <div data-aos='fade-up'>
        <h1 className='mb-9 text-xl lg:text-3xl'>Entre em contato</h1>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Queremos ouvir você! Envie uma mensagem e a nossa equipe retornará!
        </p>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Endereço: Rua Barão de Melgaço, 2754 - Ed. Work Tower, Sala 1606 -
          Centro Sul - CEP: 78040-365 - Cuiabá, MT
        </p>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Telefone: +55 65 3051-5900
        </p>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Enviar Mensagem no WhatsApp
        </p>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Email: atendimento@egac.com.br
        </p>
        <p className='text-md mb-2 font-light lg:text-xl'>
          Website: www.egac.com.br
        </p>
        <p className='text-md mb-14 font-light lg:text-xl'>
          www.sistemaautoridaderegistro.com.br
        </p>
        <img
          className='h-[149px] w-[327px] object-scale-down'
          src='/images/btor.png'
          alt={''}
        />
      </div>
    </div>
  );
}

export default Form;

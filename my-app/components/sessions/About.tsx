function About() {
  return (
    <div className='bg-LightBlueGAC px-8 py-10 lg:px-20 lg:py-24' id='about'>
      <h1
        className='mb-8 text-xl lg:text-[60px]'
        data-aos='fade-right'
        data-aos-duration='800'
      >
        Sobre nós
      </h1>
      <article
        className='flex flex-col gap-y-4 text-sm font-light lg:text-xl'
        data-aos='fade-right'
        data-aos-duration='800'
      >
        <p>
          O e-GAC surgiu da necessidades de empresas distribuidoras e emissoras
          de certificados digitais sustentarem suas operações e processos. Dessa
          forma garantindo um crescimento controlado e gerenciado.
        </p>
        <p>
          O e-GAC é um conjunto de softwares integrados que forma uma plataforma
          completa para gestão das vendas, emissões e atividades de controle de
          autoridades certificadoras e suas redes.
        </p>
        <p>
          Nos últimos 9 anos o e-GAC vem sendo utilizado por dezenas de empresas
          Autoridades Certificadoras, Autoridades de Registro e Parceiros
          Comerciais. Neste contexto absorvemos as melhores práticas de gestão,
          que agora estão consolidadas em uma ferramenta robusta, suportada por
          profissionais que conhecem e trabalham com a comercialização de
          Certificados Digitais.
        </p>
        <p>
          Por oferecermos suporte a operação de pequenas, médias e grandes
          empresas do ramo, há muitos anos, nos tornamos referência na entrega e
          suporte de soluções tecnológicas voltadas à certificação digital.
          Dessa forma você conta com um pacote de sistemas integrados que são,
          consistentes, de fácil uso e com a garantia de um time de
          profissionais especializados.
        </p>
        <p>Faça parte dessa história!</p>
      </article>
    </div>
  );
}

export default About;

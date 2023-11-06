interface ItemCarouselProps {
  title: string;
  description: string;
}

function ItemCarousel({ title, description }: ItemCarouselProps) {
  return (
    <div
      className='flex flex-col items-center justify-center'
      data-aos='zoom-in'
    >
      <img
        src='/images/whiteIcon.png'
        alt={''}
        className='mb-6 h-[141px] w-[327px] object-scale-down'
      />
      <h1
        className='mb-3 text-center text-3xl sm:text-[46px]'
        data-aos='fade-left'
        data-aos-delay='300'
        data-aos-offset='0'
      >
        {title}
      </h1>
      <p
        className='w-4/5 text-center text-sm font-light sm:text-base'
        data-aos='fade-right'
        data-aos-delay='300'
        data-aos-offset='0'
      >
        {description}
      </p>
    </div>
  );
}

export default ItemCarousel;

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imagem1 from '../assets/sabores-fotos/1.jpg'
import imagem2 from '../assets/sabores-fotos/2.jpg'
import imagem3 from '../assets/sabores-fotos/3.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true}, [Autoplay({delay: 2000})])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={imagem1} alt="Foto" />
        </div>
        <div className="embla__slide">
        <img src={imagem2} alt="Foto" />
        </div>
        <div className="embla__slide">
        <img src={imagem3} alt="Foto" />
        </div>
      </div>
    </div>
  )
}
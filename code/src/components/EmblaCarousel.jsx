<<<<<<< HEAD:code/src/components/EmblaCarousel.jsx
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Carregamento dinâmico das imagens
const imagensImportadas = import.meta.glob('../assets/sabores-fotos/*.jpg', {
  eager: true,
  import: 'default',
})

const imagens = Object.entries(imagensImportadas).map(([path, src]) => {
  const nomeArquivo = path.split('/').pop()?.split('.')[0] || 'Imagem'
  return {
    src,
    alt: `Sabor ${nomeArquivo}`,
  }
})

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000 })]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {imagens.map((img, index) => (
            <div
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 flex-shrink-0 px-2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.alt = 'Imagem não carregada'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-30 z-10"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-30 z-10"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        ▶
      </button>
    </div>
  )
}
=======
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
>>>>>>> a4889f6 (:sparkles: feature: Carousel of photos, just implement, not style yet):src/components/EmblaCarousel.jsx

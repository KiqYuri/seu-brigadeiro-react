import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imagem1 from '../assets/sabores-fotos/1.jpg'
import imagem2 from '../assets/sabores-fotos/2.jpg'
import imagem3 from '../assets/sabores-fotos/3.jpg'

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
          {[imagem1, imagem2, imagem3].map((img, index) => (
            <div
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3 flex-shrink-0 px-2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 shadow-md">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
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
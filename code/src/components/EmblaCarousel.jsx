import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const importedImages = import.meta.glob('../assets/sabores-fotos/*.jpg', {
  eager: true,
  import: 'default',
});

const images = Object.entries(importedImages).map(([path, src]) => {
  const fileName = path.split('/').pop()?.split('.')[0] || 'Image';
  return {
    src,
    alt: `Sabor ${fileName}`,
  };
});

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000 })]
  );

  const [isPrevEnabled, setIsPrevEnabled] = useState(false);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    setIsPrevEnabled(emblaApi.canScrollPrev());
    setIsNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    handleSelect();
    emblaApi.on('select', handleSelect);
  }, [emblaApi, handleSelect]);

  return (
    <div id="mais-vendidos" className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
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
                    e.currentTarget.alt = 'Imagem não carregada';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-30 z-10"
        onClick={scrollPrev}
        disabled={!isPrevEnabled}
      >
        ◀
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-30 z-10"
        onClick={scrollNext}
        disabled={!isNextEnabled}
      >
        ▶
      </button>
    </div>
  );
}

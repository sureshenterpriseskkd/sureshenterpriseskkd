
import { useState, useEffect, useCallback } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

export function useCarouselAutoplay(
  api: CarouselApi | null,
  interval = 5000,
  autoplay = true
) {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!autoplay || !api) {
      return;
    }

    const autoplayInterval = setInterval(scrollNext, interval);
    
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api, interval, autoplay, scrollNext]);

  return {
    current,
    count,
  };
}

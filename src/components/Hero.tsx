
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from './ui/carousel';
import { useCarouselAutoplay } from '@/hooks/use-carousel-autoplay';

const HeroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2840&q=80",
    alt: "Oil and Gas Industry - Mountain Landscape"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2840&q=80",
    alt: "Oil Rig Silhouette at Sunset"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2840&q=80",
    alt: "Industrial Oil Equipment"
  }
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  
  // Use the autoplay hook with a slower transition (7 seconds instead of 5)
  useCarouselAutoplay(api, 7000, true);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Slideshow Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-full">
            {HeroSlides.map((slide) => (
              <CarouselItem key={slide.id} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Reliable & Trusted Vendor for the 
          <span className="text-accent block md:inline"> Oil & Gas Industry</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Providing quality services and supplies to the industry for over 15 years
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="text-lg">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {HeroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                api?.selectedScrollSnap() === index 
                  ? "bg-white" 
                  : "bg-white/40"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll down indicator - Fixed position at bottom */}
        <div className="absolute bottom-10 left-0 right-0 text-white animate-bounce cursor-pointer">
          <button 
            onClick={() => scrollToSection('overview')} 
            aria-label="Scroll to overview"
            className="flex flex-col items-center mx-auto"
          >
            <span className="text-sm mb-2">Learn More</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

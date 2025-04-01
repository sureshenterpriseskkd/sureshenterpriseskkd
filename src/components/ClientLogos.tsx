import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from './ui/carousel';
import { useCarouselAutoplay } from '@/hooks/use-carousel-autoplay';

const ClientLogos = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay with 5 second interval
  useCarouselAutoplay(api, 5000, true);

  const clients = [
    { name: 'Halliburton', logo: 'https://mms.businesswire.com/media/20250212386982/en/768412/22/HAL_RGB.jpg' },
    { name: 'Baker Hughes', logo: 'https://www.bakerhughes.com/sites/bakerhughes/files/2023-10/hq_press_release.jpeg' },
    { name: 'Vetco Gray', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Vetcogray_logo.jpg' }, // Replace with actual logo
    { name: 'OCS Services', logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5df8aa28caa2280001f85b41/0x0.png' }, // Replace with actual logo
    { name: 'Reliance Industries', logo: 'https://images.cnbctv18.com/uploads/2024/07/reliance-industries-new-2024-07-a7df81d41c8c01b451627bbdc570c1b6.jpg' },
    { name: 'ONGC', logo: 'https://blog.careerlauncher.com/wp-content/uploads/2019/02/ONGC-Blog.jpg' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-float">
            Trusted By Industry Leaders
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6">
                  <div className="relative group">
                    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="h-32 w-full object-contain transition-all duration-500 group-hover:scale-110 filter contrast-125"
                      />
                      <h3 className="text-xl font-semibold text-center mt-4 text-primary group-hover:text-accent transition-colors duration-300">
                        {client.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 hover:bg-primary hover:text-white transition-all duration-300" />
            <CarouselNext className="absolute -right-12 hover:bg-primary hover:text-white transition-all duration-300" />
          </div>
        </Carousel>

        {/* Slide indicators with new styling */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "w-8 bg-primary" 
                  : "bg-gray-300 hover:bg-secondary"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

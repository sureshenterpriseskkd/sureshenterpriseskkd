
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2840&q=80"
          alt="Oil and Gas Industry"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
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
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
          <button 
            onClick={() => scrollToSection('overview')} 
            aria-label="Scroll to overview"
            className="flex flex-col items-center"
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

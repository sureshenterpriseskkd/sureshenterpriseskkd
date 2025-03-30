import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-oil-800/95 shadow-lg backdrop-blur-sm py-2' : 'bg-oil-800 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold text-white uppercase tracking-wide transition-all duration-300 group-hover:scale-105">
                SURESH <span className="text-white">ENTERPRISES</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative',
                    location.pathname === link.path
                      ? 'text-accent font-semibold'
                      : 'text-gray-200 hover:text-accent',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300',
                    location.pathname !== link.path && 'hover:after:scale-x-100 hover:after:origin-bottom-left'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button className="ml-4 transition-all duration-300 hover:scale-105" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white p-2 transition-transform duration-300 hover:scale-110"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-oil-800 shadow-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'block px-3 py-2 text-base font-medium rounded-md transition-all duration-300',
                location.pathname === link.path
                  ? 'text-accent bg-oil-700/50'
                  : 'text-gray-200 hover:text-accent hover:bg-oil-700/30'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-3 transition-all duration-300 hover:bg-accent/90" asChild>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

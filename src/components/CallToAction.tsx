
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Partner with a Trusted Industry Vendor?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Contact us today to discuss how Suresh Enterprises KKD can support your oil and gas operations
          with reliable supplies and services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-accent">
            <Link to="/contact" className="flex items-center gap-2">
              <Phone size={18} />
              Contact Us Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Truck, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

const CompanyOverview = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: '15+ Years Experience',
      description: 'Serving the oil and gas industry with excellence for over a decade.'
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: 'Quality Assurance',
      description: 'We maintain high standards for all our products and services.'
    },
    {
      icon: <Truck className="h-10 w-10 text-accent" />,
      title: 'Timely Delivery',
      description: 'On-time delivery is our commitment to maintain your operations.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-accent" />,
      title: 'Custom Solutions',
      description: 'Tailored services to meet your specific requirements.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-oil-800 mb-6">About Suresh Enterprises KKD</h2>
            <p className="text-lg text-gray-700 mb-6">
              Suresh Enterprises KKD has been a trusted name in the oil and gas industry for over 15 years. We take pride in our long-standing partnerships with leading companies like Halliburton, Baker Hughes, and ONGC.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our commitment to quality, reliability, and customer satisfaction has made us a preferred vendor for various industrial supplies and services.
            </p>
            <Button asChild size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-oil-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

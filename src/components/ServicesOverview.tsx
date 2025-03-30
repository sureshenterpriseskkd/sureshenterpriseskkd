
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, Box, PenTool, Hammer, Pipette, FileText } from 'lucide-react';
import { Button } from './ui/button';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Stationery Supplies',
      description: 'Complete office stationery solutions for industrial operations.',
      icon: <PenTool className="service-icon" />,
      id: 'stationery'
    },
    {
      title: 'Hand Tools Supply',
      description: 'Quality tools for maintenance, repair, and operations.',
      icon: <Wrench className="service-icon" />,
      id: 'tools'
    },
    {
      title: 'Manpower Services',
      description: 'Skilled and unskilled labor for various industrial operations.',
      icon: <Users className="service-icon" />,
      id: 'manpower'
    },
    {
      title: 'Wooden Boxes & Carpentry',
      description: 'Custom-made packaging solutions for safe transportation.',
      icon: <Box className="service-icon" />,
      id: 'carpentry'
    },
    {
      title: 'Fabrication Services',
      description: 'Metal fabrication and welding work for industrial needs.',
      icon: <Hammer className="service-icon" />,
      id: 'fabrication'
    },
    {
      title: 'Plumbing Services',
      description: 'Industrial plumbing solutions for oil and gas facilities.',
      icon: <Pipette className="service-icon" />,
      id: 'plumbing'
    },
  ];

  return (
    <section id="overview" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-oil-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive vendor services to the oil and gas industry, with a focus on quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-oil-800 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={`/services#${service.id}`} className="text-accent font-medium hover:text-accent/80 inline-flex items-center">
                Learn more 
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

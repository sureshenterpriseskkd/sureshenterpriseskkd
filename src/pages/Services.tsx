
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { PenTool, Wrench, Users, Box, Hammer, Pipette, FileText } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const location = useLocation();
  
  const services = [
    {
      id: 'stationery',
      title: 'Stationery Supplies',
      description: 'We provide a comprehensive range of office stationery and supplies tailored for oil and gas operations. Our inventory includes notebooks, pens, files, paper, printing materials, and specialized industrial stationery items required for daily operations.',
      features: [
        'Complete range of office supplies',
        'Industrial-grade materials',
        'Customized stationery with company branding',
        'Bulk ordering capability',
        'Regular supply management',
      ],
      icon: <PenTool className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'tools',
      title: 'Hand Tools Supply',
      description: 'We supply high-quality hand tools and equipment for maintenance, repair, and operations in the oil and gas industry. Our tool inventory is sourced from reputable manufacturers and meets industry safety and quality standards.',
      features: [
        'Wrenches, pliers, screwdrivers, and specialized tools',
        'Safety-certified equipment',
        'Industry-standard quality',
        'Regular maintenance kits',
        'Custom tool packages for specific operations',
      ],
      icon: <Wrench className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'manpower',
      title: 'Manpower Services',
      description: 'We provide skilled and unskilled labor for various industrial operations in the oil and gas sector. Our manpower services include temporary staffing, contract labor, and specialized workforce solutions for both short-term and long-term requirements.',
      features: [
        'Skilled technical workers',
        'Unskilled support staff',
        'Trained in safety protocols',
        'Flexible staffing solutions',
        'Compliance with labor regulations',
      ],
      icon: <Users className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'carpentry',
      title: 'Wooden Boxes & Carpentry',
      description: 'We specialize in custom-made wooden packaging solutions for the safe transportation and storage of sensitive equipment and materials. Our carpentry services include the design and construction of wooden crates, boxes, and pallets according to specific requirements.',
      features: [
        'Custom-sized wooden packaging',
        'Treatment for international shipping',
        'Shock-resistant designs',
        'Weather-resistant options',
        'Eco-friendly materials available',
      ],
      icon: <Box className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1588435305909-0c44d9961752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'fabrication',
      title: 'Fabrication Services',
      description: 'Our fabrication services cater to the specific needs of the oil and gas industry. We undertake metal fabrication, welding, and custom manufacturing of components for industrial applications, ensuring precision and durability.',
      features: [
        'Custom metal fabrication',
        'Welding services',
        'Material cutting and forming',
        'Assembly and installation',
        'Quality testing and certification',
      ],
      icon: <Hammer className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      id: 'plumbing',
      title: 'Plumbing Services',
      description: 'We provide industrial plumbing solutions for oil and gas facilities. Our services include installation, maintenance, and repair of piping systems, valves, and related components essential for fluid and gas transportation within industrial settings.',
      features: [
        'Industrial pipe installation',
        'Valve maintenance and repair',
        'Leak detection and fixing',
        'Pressure testing',
        'Compliance with safety standards',
      ],
      icon: <Pipette className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    },
    {
      id: 'custom',
      title: 'Custom Orders & Other Services',
      description: 'Beyond our standard offerings, we pride ourselves on our flexibility to provide other supplies and services on request. We understand that the oil and gas industry often has unique requirements, and we are equipped to meet these specialized needs.',
      features: [
        'Customized procurement',
        'Special order handling',
        'Industry-specific solutions',
        'Consultation for unique requirements',
        'Flexible service packages',
      ],
      icon: <FileText className="h-16 w-16 text-accent" />,
      image: 'https://images.unsplash.com/photo-1588064011404-57a7bc7133f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80',
    },
  ];

  // Scroll to the specific service section if hash is present in URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Wait a bit for the page to render properly
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section with improved background image */}
        <div 
          className="bg-oil-800 text-white py-32 bg-cover bg-center relative"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive vendor services tailored for the oil and gas industry
            </p>
          </div>
        </div>

        {/* Services list */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-oil-800 mb-6">What We Offer</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Suresh Enterprises KKD provides a wide range of services to support your operations in the oil and gas industry.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-3xl font-bold text-oil-800 ml-4">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <h4 className="text-xl font-semibold text-oil-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { PenTool, Wrench, Users, Box, Hammer, Pipette, FileText, Shield, Truck, PackageOpen, Power, Thermometer, Construction } from 'lucide-react';
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
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/313776477/WR/OA/MV/1646914/stanley-stht5-73795-210pc-mixed-tool-kit-500x500.jpg',
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
      image: 'https://5.imimg.com/data5/BP/TH/TR/SELLER-89759537/manpower-services-in-sohna-500x500.jpg',
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
      image: 'https://res.cloudinary.com/dogxiffxk/image/upload/v1747330797/wooden-box_hloni4.png',
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
      image: 'https://texastechserv.com/wp-content/uploads/2023/08/Fabrication-Shop-Grinding.jpg',
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
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448828488/QU/ZG/LP/48020986/plumbing-services.jpg',
    },

    {
      id: 'ppe',
      title: 'PPE Material Supply',
      description: 'We provide high-quality Personal Protective Equipment (PPE) essential for ensuring worker safety in the hazardous environments of oil and gas operations. Our comprehensive range includes certified safety gear that meets international standards and industry regulations.',
      features: [
        'Complete range of safety helmets, goggles, and face shields',
        'Fire-resistant and chemical-resistant clothing',
        'Specialized safety footwear for industrial environments',
        'Respiratory protection equipment',
        'Fall protection gear and safety harnesses',
      ],
      icon: <Shield className="h-16 w-16 text-accent" />,
      image: 'https://res.cloudinary.com/dogxiffxk/image/upload/v1747331697/ppe_z9ej37.jpg',
    },
    {
      id: 'crane',
      title: '40 Ton Crane Services',
      description: 'Our heavy lifting solutions include 40-ton crane services for complex lifting operations in oil and gas facilities. We provide both equipment rental and operated crane services with certified operators to handle critical lifting tasks safely and efficiently.',
      features: [
        'Certified 40-ton lifting capacity for heavy industrial components',
        'Experienced and safety-trained crane operators',
        'Regular equipment maintenance and inspection',
        'Project-specific lift planning and risk assessment',
        'Available for both short-term and long-term projects',
      ],
      icon: <Construction className="h-16 w-16 text-accent" />,
      image: 'https://5.imimg.com/data5/GI/LU/CA/GLADMIN-12/tms750b1.JPG',
    },
    {
      id: 'hydra',
      title: 'Hydra Machine Services',
      description: 'We offer versatile Hydra crane services for material handling and lifting requirements in confined spaces and challenging terrains. These pick-and-carry cranes provide excellent mobility and precision lifting capabilities for oil and gas operations.',
      features: [
        'Mobile pick-and-carry crane operations',
        'All-terrain capability for difficult access areas',
        'Telescopic boom for precise positioning',
        'Qualified operators with industry experience',
        'Comprehensive safety protocols for all lift operations',
      ],
      icon: <Truck className="h-16 w-16 text-accent" />,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350240698/XB/HG/TY/118465820/hydra-crane-rental-service-500x500.jpg',
    },
    {
      id: 'forklift',
      title: 'Fork Lift Services',
      description: 'Our forklift services provide essential material handling solutions for loading, unloading, and transporting equipment and supplies within industrial facilities. We offer various capacity forklifts with trained operators to ensure safe and efficient operations.',
      features: [
        'Various forklift capacities to handle different load requirements',
        'Indoor and rough terrain forklift options',
        'Certified operators with safety training',
        'Scheduled maintenance to ensure equipment reliability',
        'Available for daily, weekly, or monthly rental',
      ],
      icon: <PackageOpen className="h-16 w-16 text-accent" />,
      image: 'https://www.hflifttrucks.co.uk/wp-content/uploads/2018/02/vr-forklift-training.jpg',
    },
    {
      id: 'generator',
      title: 'Generator Services',
      description: 'We provide comprehensive generator services including supply, installation, maintenance, and repair of power generation equipment critical for oil and gas operations. Our solutions ensure reliable power supply for both continuous operations and emergency backup requirements.',
      features: [
        'Supply of industrial generators in various capacities',
        'Professional installation and commissioning',
        'Preventive maintenance programs',
        'Emergency repair services with quick response time',
        'Fuel management and efficiency optimization',
      ],
      icon: <Power className="h-16 w-16 text-accent" />,
      image: 'https://remsausainc.com/wp-content/uploads/AdobeStock_223494155.jpeg',
    },
    {
      id: 'radiator',
      title: 'Radiator Services',
      description: 'Our radiator services cover maintenance, repair, and replacement of cooling systems for industrial equipment and vehicles used in oil and gas operations. We ensure optimal performance of cooling systems to prevent equipment overheating and downtime.',
      features: [
        'Radiator cleaning and de-scaling services',
        'Core replacement and repair for all equipment types',
        'Performance testing and optimization',
        'Coolant system maintenance and fluid replacement',
        'Emergency repair services for critical equipment',
      ],
      icon: <Thermometer className="h-16 w-16 text-accent" />,
      image: 'https://res.cloudinary.com/dogxiffxk/image/upload/v1747331984/radation_zczzsl.png',
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
      image: 'https://res.cloudinary.com/dogxiffxk/image/upload/v1747331321/custom_hec2w3.png',
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
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            Contact us at <a href="tel:+919542137813" className="text-accent hover:underline">+91 9542137813</a> or email us at <a href="mailto:sureshenterpriseskkd@gmail.com" className="text-accent hover:underline">sureshenterpriseskkd@gmail.com</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Services;

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Quote } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'Halliburton',
      logo: 'https://www.gulfsat.com/wp-content/uploads/2020/08/Halliburton-800by541new.png',
      description: 'One of the world\'s largest oil field service companies, Halliburton operates in more than 70 countries. We have been providing various vendor services to Halliburton for over a decade.',
    },
    {
      name: 'Baker Hughes',
      logo: 'https://www.bakerhughes.com/sites/bakerhughes/files/2023-10/hq_press_release.jpeg',
      description: 'A leading energy technology company that provides solutions for energy and industrial customers worldwide. We have been working with Baker Hughes on multiple projects providing stationery, tool supplies, and manpower services.',
    },
    {
      name: 'Vetco Gray',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Vetcogray_logo.jpg', // Replace with actual logo
      description: 'A leading supplier of products, systems, and services for offshore drilling and production applications. Our partnership with Vetco Gray includes fabrication services and wooden packaging solutions.',
    },
    {
      name: 'OCS Services',
      logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5df8aa28caa2280001f85b41/0x0.png', // Replace with actual logo
      description: 'A specialized service provider in the oil and gas sector. We have been supporting OCS Services with manpower and fabrication solutions for their offshore operations.',
    },
    {
      name: 'Reliance Industries',
      logo: 'https://images.cnbctv18.com/uploads/2024/07/reliance-industries-new-2024-07-a7df81d41c8c01b451627bbdc570c1b6.jpg',
      description: 'One of India\'s largest private sector companies with businesses across energy, petrochemicals, and telecommunications. We provide various vendor services to Reliance\'s oil and gas operations.',
    },
    {
      name: 'ONGC',
      logo: 'https://blog.careerlauncher.com/wp-content/uploads/2019/02/ONGC-Blog.jpg',
      description: 'India\'s largest oil and gas exploration and production company. We have been working with ONGC providing stationery, manpower, and fabrication services across multiple projects.',
    },
  ];

  const testimonials = [
    {
      text: "Suresh Enterprises KKD has been a reliable partner for our stationery and tool supply needs. Their commitment to quality and on-time delivery has made them one of our preferred vendors.",
      author: "Operations Manager",
      company: "Halliburton",
    },
    {
      text: "We've been impressed with the quality of wooden packaging solutions provided by Suresh Enterprises. Their attention to detail ensures our equipment is transported safely.",
      author: "Logistics Head",
      company: "Baker Hughes",
    },
    {
      text: "The manpower services provided by Suresh Enterprises have consistently met our expectations. Their team is well-trained and professional.",
      author: "Project Director",
      company: "ONGC",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section with improved background image */}
        <div 
          className="bg-oil-800 text-white py-32 bg-cover bg-center relative"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies in the oil and gas industry
            </p>
          </div>
        </div>

        {/* Client logos showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-oil-800 mb-6">Companies We Serve</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                For over 15 years, we have been privileged to work with some of the most respected names in the oil and gas industry.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center p-8 border-b border-gray-100">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-full w-auto max-w-full object-contain filter contrast-125 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 bg-gradient-to-br from-transparent to-gray-50/30">
                    <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {client.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-oil-800 mb-6">Client Testimonials</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Hear what our clients have to say about their experience working with us.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                  <Quote className="absolute text-gray-200 top-4 right-4 h-10 w-10" />
                  <p className="text-gray-700 mb-6 relative z-10">"{testimonial.text}"</p>
                  <div className="mt-4">
                    <p className="font-semibold text-oil-800">{testimonial.author}</p>
                    <p className="text-accent">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Business Partnership"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-oil-800 mb-6">Our Partnership Approach</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Suresh Enterprises KKD, we believe in building long-term partnerships rather than just transactional relationships with our clients.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We take the time to understand each client's unique requirements and operational challenges to provide tailored solutions that add value to their business.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our commitment to quality, reliability, and customer satisfaction has enabled us to maintain long-standing relationships with major companies in the oil and gas industry.
                </p>
                <p className="text-lg text-gray-700">
                  We continuously invest in improving our services and expanding our capabilities to better serve our clients' evolving needs.
                </p>
              </div>
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

export default Clients;

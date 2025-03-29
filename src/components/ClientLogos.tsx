
import React from 'react';

const ClientLogos = () => {
  // Note: These would be replaced with actual client logos
  const clients = [
    { name: 'Halliburton', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Halliburton_logo.svg/1280px-Halliburton_logo.svg.png' },
    { name: 'Baker Hughes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Baker_Hughes_logo.svg/1280px-Baker_Hughes_logo.svg.png' },
    { name: 'Vetco Gray', logo: 'https://placeholder.svg' }, // Replace with actual logo
    { name: 'OCS Services', logo: 'https://placeholder.svg' }, // Replace with actual logo
    { name: 'Reliance Industries', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png' },
    { name: 'ONGC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Oil_and_Natural_Gas_Corporation_logo.svg/1200px-Oil_and_Natural_Gas_Corporation_logo.svg.png' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-oil-800">Trusted By Industry Leaders</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

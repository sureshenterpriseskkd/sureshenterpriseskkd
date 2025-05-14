import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Briefcase, Target, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero section with improved background image */}
        <div 
          className="bg-oil-800 text-white py-32 bg-cover bg-center relative"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2840&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A trusted partner in the oil and gas industry for over 15 years
            </p>
          </div>
        </div>

        {/* Company history */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Industrial Facility"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-oil-800 mb-6">Our History</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Suresh Enterprises KKD was established in 2008 with a vision to provide quality services and supplies to the growing oil and gas industry in Kakinada, India.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Starting with basic stationery and hardware supplies, we quickly built a reputation for reliability and quality. Over the years, we expanded our services to include manpower, fabrication, carpentry, and specialized industrial solutions.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we are proud to be a trusted vendor for major companies like Halliburton, Baker Hughes, and ONGC, serving their operational needs across various projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="h-12 w-12 text-accent mr-4" />
                  <h3 className="text-2xl font-bold text-oil-800">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To deliver high-quality vendor services to the oil and gas industry with a focus on reliability, efficiency, and customer satisfaction. We aim to be the most dependable partner for our clients' operational needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-12 w-12 text-accent mr-4" />
                  <h3 className="text-2xl font-bold text-oil-800">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                  To be the leading vendor in the oil and gas industry, recognized for our exceptional service quality, innovative solutions, and commitment to supporting our clients' success in their operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-oil-800 mb-6">Why Choose Us</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                When you partner with Suresh Enterprises KKD, you're choosing a vendor committed to excellence in every aspect of service delivery.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Industry Experience</h3>
                <p className="text-gray-700">
                  Over 15 years of experience working with top oil and gas companies, understanding their specific requirements and operational challenges.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  We ensure high-quality materials and services that meet industry standards and specifications for all our deliverables.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Reliable Delivery</h3>
                <p className="text-gray-700">
                  We understand the importance of timely delivery in industrial operations and consistently meet our delivery commitments.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">
                  We offer cost-effective solutions without compromising on quality, helping our clients optimize their operational expenses.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Customer Service</h3>
                <p className="text-gray-700">
                  Dedicated customer service ensuring smooth communication and prompt resolution of any concerns or queries.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-shadow">
                <CheckCircle className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-oil-800 mb-2">Adaptability</h3>
                <p className="text-gray-700">
                  Flexible to adapt to changing requirements and capable of providing customized solutions for specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-oil-800 mb-6">Our Leadership</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our experienced team is committed to excellence and customer satisfaction
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src="https://res.cloudinary.com/dogxiffxk/image/upload/v1747213312/founder_emhakn.jpg"
                    alt="Pinisetty Suresh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-oil-800">Pinisetty Suresh</h3>
                <p className="text-accent mb-3">Founder & CEO</p>
                <p className="text-gray-600">Founded the company in 2008 with over 17 years of industry experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src="https://res.cloudinary.com/dogxiffxk/image/upload/v1747211922/bobby_annaya_ufufxh.jpg"
                    alt="Arava Pandu Ranga Rao"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-oil-800">Arava Pandu Ranga Rao </h3>
                <p className="text-accent mb-3">Operations Manager</p>
                <p className="text-gray-600">Oversees all operations and ensures quality service delivery</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <img
                    src="https://res.cloudinary.com/dogxiffxk/image/upload/v1747212679/profile-C1Cw8KDH_uoa2lz.jpg"
                    alt="Anand Pinisetty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-oil-800">Anand Pinisetty</h3>
                <p className="text-accent mb-3">Client Relations Manager</p>
                <p className="text-gray-600">Manages client relationships and ensures customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default About;

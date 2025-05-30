import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
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
                  src="https://netzero-events.com/wp-content/uploads/2023/11/AdobeStock_330141364-scaled.jpeg" 
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
        <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-oil-800 mb-6">Our Leadership</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Driving excellence through experienced leadership
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-12 px-4">
              {[
                {
                  name: "Pinisetty Suresh",
                  role: "Founder & CEO",
                  image: "https://res.cloudinary.com/dogxiffxk/image/upload/v1747214122/IMG_6616_oc0n98.jpg",
                  bio: "Founded the company in 2008 with over 17 years of industry experience",
                  contact: {
                    email: "suressureshenterpriseskkdh@sureshenterprises.com",
                    linkedin: "#",
                    phone: "+91 919542137813"
                  }
                },
                {
                  name: "Arava bobby",
                  role: "Operations Manager",
                  image: "https://res.cloudinary.com/dogxiffxk/image/upload/v1747211922/bobby_annaya_ufufxh.jpg",
                  bio: "Oversees all operations and ensures quality service delivery",
                  contact: {
                    email: "pandu@sureshenterpriseskkd.com",
                    linkedin: "#",
                    phone: "+919542137813"
                  }
                },
                {
                  name: "Anand Pinisetty",
                  role: "Client Relations Manager",
                  image: "https://res.cloudinary.com/dogxiffxk/image/upload/v1747215001/IMG_6617_pwpksp_nsvfpg.jpg",
                  bio: "Manages client relationships and ensures customer satisfaction",
                  contact: {
                    email: "sureshenterpriseskkd@gmail.com",
                    linkedin: "#",
                    phone: "+919542137813"
                  }
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </motion.div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex justify-center space-x-4">
                          <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href={`mailto:${member.contact.email}`}
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Mail className="h-5 w-5 text-white" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href={member.contact.linkedin}
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-white" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href={`tel:${member.contact.phone}`}
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Phone className="h-5 w-5 text-white" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-oil-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg font-medium text-accent mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default About;

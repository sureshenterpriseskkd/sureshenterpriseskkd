
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import CompanyOverview from '@/components/CompanyOverview';
import ClientLogos from '@/components/ClientLogos';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompanyOverview />
        <ServicesOverview />
        <ClientLogos />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

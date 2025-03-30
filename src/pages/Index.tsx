
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import CompanyOverview from '@/components/CompanyOverview';
import ClientLogos from '@/components/ClientLogos';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
          <CompanyOverview />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServicesOverview />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <ClientLogos />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <CallToAction />
        </AnimatedSection>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

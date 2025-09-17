import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;

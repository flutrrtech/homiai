import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CallToAction from '../components/sections/CallToAction';
import PricingBox from '../components/sections/PricingBox';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import MarketingThatWorksSection from '../components/sections/MarketingThatWorksSection';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <MarketingThatWorksSection/>
      <CallToAction />
      <PricingBox />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
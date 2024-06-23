import React from 'react';
import Banner from '../../../components/customer/Banner';
import FAQ from '../../../components/customer/FAQ';
import Footer from '../../../components/customer/Footer';
import Navbar from '../../../components/customer/Navbar';
import OurService from '../../../components/customer/OurService';
import PromoBanner from '../../../components/customer/PromoBanner';
import Testimonial from '../../../components/customer/Testimonial';
import WhyUs from '../../../components/customer/WhyUs';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <OurService id="ourservice" />
      <WhyUs id="whyus" />
      <Testimonial id="testimonial" />
      <PromoBanner />
      <FAQ id="faq" />
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import Newsletter from '../../shared/newsletter/Newsletter';
import Banner from '../banner/Banner';
import ChooseUs from '../chooseUs/ChooseUs';
import OurProcess from '../ourProcess/OurProcess';
import Services from '../services/services/Services';
import Team from '../team/team/Team';
import Testimonials from '../testimonials/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Team />
      <OurProcess />
      <ChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;

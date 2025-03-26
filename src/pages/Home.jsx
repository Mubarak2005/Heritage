import React from 'react';
import { Hero, MostViewed } from '../sections';
import Category from '../sections/Category';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <>
      <div >
        <Hero />
        <MostViewed />
        <Category />
        <Footer />
      </div>
    </>
  );
};

export default Home;

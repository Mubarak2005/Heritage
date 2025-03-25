import React from 'react';
import { Hero, MostViewed } from '../sections';
import Category from '../sections/Category';

const Home = () => {
  return (
    <>
      <div >
        <Hero />
        <MostViewed />
        <Category />
      </div>
    </>
  );
};

export default Home;

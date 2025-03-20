import React from 'react';
import Hero from '../sections/Hero';
import MostViewed from '../sections/MostViewed';

const Home = () => {
  return (
    <>
      <div className='bg-[var(--primary-color)]'>
        <Hero />
        <MostViewed />
      </div>
    </>
  );
};

export default Home;

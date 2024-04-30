import React from 'react';
import hero from '../assets/home/photoguy.png';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition } from '../transitions';

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full pt-24 relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left'>
          <div className='lg:pl-28 lg:pt-32 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center lg:items-start'>
            <h2 className='h1'>Nature &<br />Landscape <br />Photographer</h2>
            <p className='text-[24px] lg:text-[32px] font-primary mb-2 lg:mb-5'>San Francisco, CA | Dallas, TX</p>
            <Link to='/contact' className='btn mb-[30px]'>Let's Connect</Link> 
          </div>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img src={hero} alt='hero' />
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Home;
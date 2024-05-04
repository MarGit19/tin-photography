import React from 'react';
import hero from '../assets/home/photoguy.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full pt-1 lg:pt-24 relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left'>
          <div className='pt-56 lg:pt-12 pb-14 px-4 lg:w-auto z-10 flex flex-col justify-center lg:items-start'>
            <h2 className='h1'>Nature &<br />Landscape <br />Photographer</h2>
            <p className='text-[24px] lg:text-[32px] font-primary mb-2 lg:mb-5'>
            San Francisco, CA | Dallas, TX
            </p>
            <Link to='/contact' className='btn'>Let's Connect</Link> 
          </div>
          <div className='lg:max-h-100 lg:max-h-max order-2 lg:order-none mb-[38px] lg:mb-[10px]'>
            <img src={hero} alt='hero' className='max-w-full' />
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Home;
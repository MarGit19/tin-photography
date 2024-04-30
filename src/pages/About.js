import React from 'react';
import { Link } from 'react-router-dom';
import Man1 from '../assets/about/man1.png';

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full pt-1 lg:pt-24 relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left'>
          <div className='lg:max-h-100 lg:max-h-max order-2 lg:order-none mb-[38px] lg:mb-[10px]'>
            <img src={Man1} alt='Man1' className='max-w-full' />
          </div>
          <div className='pt-56 lg:pt-12 pb-14 px-4 lg:w-auto z-10 flex flex-col justify-center lg:items-start'>
            <h2 className='h1'>About Me</h2>
            <p className='text-[15px] mb-4 max-w-lg'>
            Hello! I'm Martin, a nature photographer driven by a profound passion for capturing the beauty of the natural world. With my lens, I freeze moments to convey both visual splendor and the emotions within landscapes, traversing diverse terrains to share our planet's beauty and foster connections. Beyond photography, I advocate for environmental conservation, raising awareness about our planet's fragility and the urgent need for preservation. Join me on this journey where each image tells a story, and landscapes reveal the earth's secrets, celebrating nature's magnificence together.
            </p>
            <Link to='/portfolio' className='btn'>See my Works</Link> 
          </div>
        </div>
      </div>      
    </section>
  );
};

export default About;

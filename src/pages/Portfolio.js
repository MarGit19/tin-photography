import React from 'react';

import Image1 from '../assets/portfolio/1.png'
import Image2 from '../assets/portfolio/2.png'
import Image3 from '../assets/portfolio/3.png'
import Image4 from '../assets/portfolio/4.png'

import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full pt-24 relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-6 lg:pt-2 pb-8'>
          <div>
              <h1 className='h1'>Portfolio</h1>
              <p className='mb-4 max-w-sm'>Explore a curated selection of my work, capturing the natural world's beauty and serenity. From majestic mountains to tranquil lakes, rolling hills, and surprising inner-city oases, each photograph narrates a unique story of diverse landscapes. Witness the majestic dawn over towering peaks, immerse in serene lakes reflecting lush surroundings, and discover urban tranquility amidst bustling streets and towering skyscrapers. These images invite contemplation and offer respite from the hustle and bustle of city life.</p>
            <Link to={'/contact'} className='btn mb-[1px] mx-auto lg:mx-0'>Let's Connect</Link>
          </div>
          <div className='grid grid-cols-2 lg:gap-2 mb-[25px] lg:mb-[150px]'>
              <div className='max-w-[175px] lg:max-w-[320px] h-[180px] lg:h-[220px]'>
                <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={Image1} alt='img1' />
              </div>
              <div className='max-w-[175px] lg:max-w-[320px] h-[180px] lg:h-[220px]'>
                <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={Image2} alt='img1' />
              </div>
              <div className='max-w-[175px] lg:max-w-[320px] h-[180px] lg:h-[220px]'>
                <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={Image3} alt='img1' />
              </div>
              <div className='max-w-[175px] lg:max-w-[320px] h-[180px] lg:h-[220px]'>
                <img className='object-cover h-full lg:h-[320px] hover:scale-110 transition-all duration-500' src={Image4} alt='img1' />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';

import Man2 from '../assets/contact/man2.png';

const Contact = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full lg:pt-24 relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left'>
          <div className='lg:max-h-100 lg:max-h-max order-2 lg:order-none mb-[38px] lg:mb-[10px]'>
            <img src={Man2} alt='Man1' className='max-w-full' />
          </div>
          <div className='pt-56 lg:pt-12 px-4 pb-14 lg:w-auto z-10 flex flex-col justify-center lg:items-start'>
            <h1 className='h1'>Contact Me</h1>
            <p className='text-[18px] mb-3'>Please leave me some suggestions</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='full name'/>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='email address'/>
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='enter message'/>
              <button className='btn mx-auto lg:mx-0 self-start'>Send</button>
            </form>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Contact;
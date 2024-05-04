import React from 'react';
import { ImInstagram } from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul>
        <li>
          <a href='https://www.instagram.com/tin.photography.nl/' target='_blank' rel='noopener noreferrer'>
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

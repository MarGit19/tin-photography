import React from 'react';
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul>
        <li>
          <a href='http://www.instagram.com' target='_blank'><ImInstagram /></a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

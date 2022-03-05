import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../../styles/SocialBox/SocialBox.css';


export const SocialBox = () => {
  return (
        <div className='social__box'>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaFacebookF/></a>
        </div>
  )
}

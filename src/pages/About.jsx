import React from 'react';
import '../styles/Pages/About/About.css';


export const About = () => {
  return (
    <div className='about__container'>
      <div className='title__section__box'>
        <p>O NAS</p>
        <span className='title__section'></span>
      </div>
      <div className='about__box'>
        <div className='about__box__image'></div>
        <div className='about__box__description'></div>
      </div>
    </div>
  )
}

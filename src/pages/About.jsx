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
        <div className='about__box__image'>
          <img src='images/About/Onas.jpg' alt = "About Us image"/>
        </div>
        <div className='about__box__description'>
          <div className='description__box'>
            <p className='who_description'>Andżela Świeczak <span>&</span> Damian Świeczak</p>
            <p className='description_about'>Fantastycznie jest móc dzielić pasję, z kimś kogo się kocha!</p>
            <p className='description_about'>My mamy to szczęście.</p>
            <p className='description_about'>Jesteśmy świeżo upieczonym małżeństwem, zawsze zmierzającym w tym samym kierunku.
            Robienie zdjęć sprawia nam ogromną radość i satysfakcję z tego, że to nas wybraliście do uwiecznienia najważniejszych momentów w Waszym życiu. 
            </p> 
            <p className='description_about'>Także już wiecie, że ZAFOTKOWANI są ZAKOCHANI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

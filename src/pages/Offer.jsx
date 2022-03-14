import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages/Offer/Offer.css';

export const Offer = () => {
  return (
    <div className='offer__container'>
        <div className='title__section__box'>
            <p>OFERTA</p>
        <span className='title__section'></span>
      </div>
      <div className='description__box'>
        <p className='offer__description'>Zdjęcia przez nas wykonane będą przede 
            wszystkim spontaniczne, pełne uśmiechu i 
            dobrej energii bo dbamy o miłą i luźną atmosferę.</p>
        <p className='offer__description'>W naszej ofercie mamy m.in sesje rodzinne, narzeczeńskie,
          ślubne, brzuszkowe, noworodkowe, reportaże: z Chrztu
          Świętego, Komunii Świętej czy Ślubu.</p>
        <p className='offer__description'>Zdjęcia to wspomnienia, które dane jest nam trzymać w 
          dłoniach... a wspomnienia są jak zdjęcia, które trzymamy 
          w sercu”. Zafotkowani uchwycą Wam tylko te dobre wspomnienia!</p>
          <Link to='#' className='offer__btn'>Otrzymaj oferte</Link>
      </div>
    </div>
  )
}

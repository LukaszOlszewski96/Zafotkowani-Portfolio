import React, { useEffect, useState } from 'react';
import '../../styles/Slider/Slider.css';

export const Slider = () => {

  const [index, setIndex] = useState(0);

  const images = [
    "images/Home/zdjecie_1_1.jpeg",
    "images/Home/zdjecie_2.jpg",
    "images/Home/zdjecie_3.jpg",
    "images/Home/zdjecie_4.jpg",
    "images/Home/zdjecie_5.jpg",
    "images/Home/zdjecie_6.jpg",
  ]


  useEffect (() => {
    setTimeout(() => {
      if(index === 5) {
        setIndex(0);
      }
      else {
        setIndex(prevState => prevState + 1);
      }
    }, 10000);
  },[console.log(index), index])

  return (
      <div className = "image__box">
        <img className='image' src={images[index]} alt='Home Page Slider'/>
        <div className='quote__box'>
          <p>Fotografie to kęsy czasu, które można wziąć do ręki.</p>
          <p>– Angela Carter –</p>
        </div>
      </div>
  )
}

import React, { useEffect, useState } from 'react';
import { PhotoMasonry } from '../components/Images/PhotoMasonry';
import '../styles/Pages/Portfolio/Portfolio.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Portfolio = () => {

    const [photosData, setPhotosData] = useState([]);


    const API_KEY = 'lvyG9BxtKdz-w8jMsPvRR-QnsQyGz42qsIbzW69o3RI';
    const URL = `https://api.unsplash.com/search/photos?page=1&query="Country"&client_id=${API_KEY}&per_page=10&location[name]`;

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
               console.log(response);
               setPhotosData(response.data.results);
            })
            .catch( error =>{
              console.log('Error happend during fetching!', error)
            });
      }, []);

  return (
    <div className='portfolio__container'>
            <p className='title__section__box'>Portfolio</p>
            <div className='filters__box'>
                <div className='filters__box__links'>
                    <a href='#'>Chrzest Święty</a>
                    <a href='#'>Ślub</a>
                    <a href='#'>Wieczór Panieński</a>
                    <a href='#'>Sesje Rodzinne</a>
                    <a href='#'>Sesje Brzuszkowe</a>
                    <a href='#'>Sesje Noworodkowe</a>
                </div>
                <div className='filters__box__links'>
                    <a href='#'>Sesje Ślubne</a>
                    <a href='#'>Sesje Narzeczeńskie</a>
                    <a href='#'>Sesje Produktowe</a>
                    <a href='#'>Sesje Świąteczne</a>
                </div>
            </div>
            <div className='gallery__box'>
                <PhotoMasonry photosData={photosData}/>
            </div>
            <div className='blur'>
                <Link className='gallery__btn' to='/' >Zobacz Więcej</Link>
            </div>
    </div>  
    )
}
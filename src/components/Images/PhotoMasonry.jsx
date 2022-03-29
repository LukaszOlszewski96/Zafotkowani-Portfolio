import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import {MdOutlineClear} from 'react-icons/md';
import '../../styles/Images/PhotoMasonry/PhotoMasonry.css';


export const PhotoMasonry = ({photosData}) => {

    const [showDetails, setDetails] = useState('false');
    const [data, setData] = useState('');

    const handleClick = (imgScr) => {
        setDetails(!showDetails);
        setData(imgScr);
    }

  return (
    <section className = 'mansory__box'>
        <ResponsiveMasonry 
          columnsCountBreakPoints={{ 400: 1, 800: 2, 900: 3 }}>
          <Masonry  
            columnsCount={3} 
            gutter="15px"
          >
            {photosData.map((image) => (
              <div className='card'>
                <img src={image.urls.small} alt='Zdjęcie z Portfolio' />
                <span className='image__mask' onClick={() => handleClick(image.urls.small)}></span>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {!showDetails && 
            <div className='photo__details__box'>
                <MdOutlineClear className="exit" onClick={handleClick}/>
                <img alt='Szczegóły zdjęcia' src={data}  />
            </div>
        }
      </section>
      )
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MdOutlineClear } from "react-icons/md";

import "../styles/Pages/Portfolio-all/portfolio.css";
import { PhotoMasonry } from "../components/Images/PhotoMasonry";
import { Link } from "react-router-dom";

export const PortfolioALL = () => {
  const [photosData, setPhotosData] = useState([]);
  const [showDetails, setDetails] = useState("false");
  const [data, setData] = useState("");

  const API_KEY = "lvyG9BxtKdz-w8jMsPvRR-QnsQyGz42qsIbzW69o3RI";
  const URL = `https://api.unsplash.com/search/photos?page=1&query="Country"&client_id=${API_KEY}&per_page=50&location[name]`;

  const handleClick = (imgScr) => {
    setDetails(!showDetails);
    setData(imgScr);
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        setPhotosData(response.data.results);
      })
      .catch((error) => {
        console.log("Error happend during fetching!", error);
      });
  }, []);

  return (
    <div className="portfolio-all__container">
      <div className="portfolio-all__filters__box">
        <div className="portfolio-all__filters__box__links">
          <a href="#">Chrzest Święty</a>
          <a href="#">Pierwsza Komunia Święta</a>
          <a href="#">Ślub</a>
          <a href="#">Wieczór Panieński</a>
          <a href="#">Sesje Rodzinne</a>
          <a href="#">Sesje Brzuszkowe</a>
        </div>
        <div className="portfolio-all__filters__box__links">
          <a href="#">Sesje Noworodkowe</a>
          <a href="#">Sesje Ślubne</a>
          <a href="#">Sesje Narzeczeńskie</a>
          <a href="#">Sesje Produktowe</a>
          <a href="#">Sesje Świąteczne</a>
        </div>
      </div>
      <div className="gallery__box">
        <PhotoMasonry photosData={photosData} />
      </div>
    </div>
  );
};

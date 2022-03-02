import { Container, Box } from '@mui/material'
import React from 'react';
import { Slider } from '../components/Slider/Slider';
import '../styles/Pages/Home/Home.css'

export const Home = () => {
  return (
      <div className='home__container'>
        <Slider/>
      </div>
  )
}

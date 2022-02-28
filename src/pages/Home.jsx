import { Container, Box } from '@mui/material'
import React from 'react';
import '../styles/Pages/Home/Home.css'

export const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{height: '80vh' }}>
          <div className='image-home'></div>
        </Box>
      </Container>
    </>
  )
}

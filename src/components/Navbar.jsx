import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { navbarLinksLeft, navbarLinksRight } from './NavbarData/NavbarData';
import { Link } from 'react-router-dom';
import '../styles/Navbar/Navbar.css';
import { Dropdown } from './Buttons/Dropdown';



export const Navbar = () => {

  const [showDropDown, setDropDown] = useState(false);

  const hover = () => {
    setDropDown(!showDropDown)
  }


  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar className = 'menu__conteiner' sx={{ boxShadow: 0}} color='transparent' position = 'static'>
      <Toolbar className='menu__box'>
        {navbarLinksLeft.map(item => (
            <Link
                key = {item.key}
                className = {item.className}
                to = {item.url}
                onClick = { item.title === 'PORTFOLIO' && hover }
            >
                {item.title}
            </Link>
        ))}
        <Dropdown enable ={showDropDown}/>
        <img className = 'menu__logo' src='images\Logo.png' alt='Logo'/>
        {navbarLinksRight.map(item => (
            <Link
                key = {item.key}
                className = {item.className}
                to= {item.url}
            >
                {item.title}
            </Link>
        ))}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

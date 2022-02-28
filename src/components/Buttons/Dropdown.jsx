import React from 'react'
import { portfolioLinks } from './DropdownData/DropDownData';
import { Link } from '@mui/material';
import '../../styles/Buttons/DropDown/DropDown.css';

export const Dropdown = ({enable}) => {
  return (
    <div className={!enable ? 'dropDown__box' : 'dropDown__box-active'}>
          {portfolioLinks.map(item => (
              <Link
                  key = {item.key}
                  className = {item.className}
                  to = {item.url}
                  >
                  {item.title}
              </Link>
          ))}
        </div>
  )
}

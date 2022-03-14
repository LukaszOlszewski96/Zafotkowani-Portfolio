import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer/Footer.css'
import { footerData } from './FooterData'

export const Footer = () => {
  return (
    <div className='footer__container'>
        <div className='logo_copy__box'>
          <div className='copy__box'>
            <p>© All right reserved</p>
            <p>Logo by <a href='https://www.behance.net/martynawieczak'>Martyna</a> | Create by <a href='https://lukols.com/'>lukols</a></p>
          </div>
        </div>
        <div className='links__box'>
            {footerData.map(item =>(
                <Link className={item.className} to={item.url}>{item.title}</Link>
            ))}
        </div>
    </div>
  )
}

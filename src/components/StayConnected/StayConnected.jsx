import React from 'react'
import './StayConnected.css'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const StayConnected = () => {
  return (
    <div className='stayconnected__container'>
      
        <h1>Stay Connected</h1>
      
      <div className='footer_icons'>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/excelmec/'>
          <FaInstagramSquare/>
        </a> 
        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/excelmec'>  
          <FaFacebookSquare/>
        </a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/excelmec/'>
          <FaLinkedin/>
        </a>
        <a target='_blank' rel='noreferrer' href='https://twitter.com/excelmec'>
          <FaTwitterSquare/>
        </a>
      </div>
    </div>
  )
}

export default StayConnected
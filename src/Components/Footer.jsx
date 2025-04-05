import React from 'react'
import "./Footer.css";
import logo from '../asset/LOGO.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='logo_container'>
        <img className='footer_logo' src={logo} alt="logo" />
      </div>
      <div className='other_detail'>
       <div>
        <h5 style={{textAlign:'end'}}>Expert in Frontend Development.</h5>
       </div>
       <div className='footer_socialLinks'>
          <a href='https://www.linkedin.com/in/shashank-gupta-3bb5402aa/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
         
          <a href='https://github.com/guptashashank31999' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
        </div> 
      </div>
    </div>
  )
}

export default Footer
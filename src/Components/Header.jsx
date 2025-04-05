import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../asset/LOGO.png';
import mobile_logo from '../asset/MOBILE_LOGO.png';
import "./Header.css";
import { animateScroll as scroll } from 'react-scroll';
import { scroller } from 'react-scroll';
// import MobileMenu from './MobileMenu';


 

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    scroller.scrollTo(targetId, {
      duration: 800,
      offset:0,
    });
    setTimeout(() => {
      handleClose(); // Close the mobile menu after a delay
    }, 500); // Adjust the delay as needed
  // Close the mobile menu after clicking a link
  };
  return (
    <>
    <div className='Header_container'>
      <div>
        <a href='#firstsection'><img className='logo' src={logo} alt="logo" /></a>
      </div>

      <div>
       {/* <a href='#firstsection'><img className='logo' src={logo} alt="logo" /></a> */}
     
        <a href='#thirdsection' onClick={(e) => handleSmoothScroll(e, 'thirdsection')}>Resume</a>
        <a href='#fourthsection' onClick={(e) => handleSmoothScroll(e, 'fourthsection')}>Works</a>
        <a href='#fifthsection' onClick={(e) => handleSmoothScroll(e, 'fifthsection')}>Contact</a> 
      </div>
      <div>
        <a href='https://www.linkedin.com/in/shashank-gupta-3bb5402aa/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
       
        <a href='https://github.com/guptashashank31999' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
      </div>
    </div>
    <div className='mobileHeader'>
      <div className='homeLink'>
        <a  href='#firstsection'><img className='mobilelogo' src={mobile_logo} alt="logo" /></a>
      </div>
      {/* <button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button> */}
      {show? <button className='menubutton' onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>:<button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button>}
      
      <Offcanvas show={show} onHide={handleClose} scroll={false} backdrop= {true} style={{ width: '100%',maxWidth:'250px' }}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className='Offcanva_body'>
          <div className='mobilecontents'>
          
            <div className='sectionLinks'>
              <div className='sectionLinks'>
                <a href='#thirdsection' onClick={(e) => handleSmoothScroll(e, 'thirdsection')}>Resume</a>
                <a href='#fourthsection' onClick={(e) => handleSmoothScroll(e, 'fourthsection')}>Works</a>
                <a href='#fifthsection' onClick={(e) => handleSmoothScroll(e, 'fifthsection')}>Contact</a> 
              </div>
             
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </>
  )
}

export default Header
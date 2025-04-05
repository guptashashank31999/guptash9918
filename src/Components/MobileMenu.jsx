import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <div className='mobileHeader'>
      <div className='homeLink'>
        <a href='#firstsection'>Home</a>
      </div>
      <button className='menubutton' onClick={handleShow}><FontAwesomeIcon icon={faBars} /></button>
      
      
      <Offcanvas show={show} onHide={handleClose} placement={"top"}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          
            <div className='sectionLinks'>
              <div className='sectionLinks'>
                <a href='#thirdsection'>Resume</a>
                <a href='#fourthsection'>Works</a>
                <a href='#fifthsection'>Contact</a> 
              </div>
              <div className='socialLinks'>
                <a href='https://www.linkedin.com/in/shashank-gupta-3bb5402aa/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
               
                <a href='https://github.com/guptashashank31999' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
              </div> 
            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </div> 
    </div>
  )
}

export default MobileMenu
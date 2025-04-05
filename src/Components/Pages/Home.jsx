import React from 'react';
import "./Home.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
// import Offcanvas from 'react-bootstrap/Offcanvas';




const Home = () => {

  return (
    <div className='home_container'>
        <div className='leftdiv'>
        <h1>Shashank Gupta</h1>
        <TypeAnimation
         // Same String at the start will only be typed once, initially
          sequence={[
          'Hi! I am Shashank Gupta.',
          1000,
          'I am a Full Stack Developer.',
          1000,
          'I am a MERN Stack Developer.',
          1000,
          ]}
          speed={60} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '1rem',fontFamily:'Raleway' , fontWeight:'300',  color: 'white' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        </div>
    </div>

  )
}

export default Home
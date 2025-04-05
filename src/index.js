import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 600, // Animation duration in milliseconds
  easing: 'ease-in-out', // Animation timing function
  offset: 100, // Offset (in pixels) from the original trigger point
  // Additional configuration options...
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



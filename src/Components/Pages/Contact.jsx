import React from 'react';
import "./Contact.css";
// import contactme from  '../../asset/contact1.svg';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Loader from '../Loader';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const modifiedFormData = {
    ...formData,
    from_name: formData.name, // Set from_name to the value of 'name' input
    to_name: 'Nikhil', // Set to_name as 'Nikhil'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   
    // Replace these with your actual EmailJS service ID, template ID, and user ID
    const serviceId = 'service_d4ovzpe';
    const templateId = 'template_slxubff';
    const publickey = 'wz1PE2_ImgnAStVQt';
    emailjs.send(serviceId, templateId, modifiedFormData, publickey)
      .then((response) => {
        setLoading(false);
        console.log('Email sent!', response.status, response.text);
        // Add any success message or state update here
        Swal.fire({
          icon: "success",
          title: "Message sent.",
          text: "Thankyou for contacting me.",
        }).then((result) => {
          // This code will run when the user clicks "OK"
          if (result.isConfirmed) {
            // Add your additional actions or functions here
            console.log("User clicked OK!");
            setFormData({
              name: '',
              email: '',
              subject:'',
              message: '',
            })
          }
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error sending email:', error);
        // Add error handling or state update for failure
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Error sending email.",
        });
      })     
      .finally(() => {
        setLoading(false); // Set loading back to false when email sending process is finished
      });
    }
  return (
    <div className='contact' data-aos="fade-up"  data-aos-anchor-placement="top-center">
    <div className='contact_row'>
      <div className='row_item item1'>
        <div className='links_container'>
          <div className='socialLinks'>
            <a href='https://www.linkedin.com/in/shashank-gupta-3bb5402aa/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
           
            <a href='https://github.com/guptashashank31999' target='_blank'><FontAwesomeIcon icon={faGithub} size="lg"/></a>
          </div> 
        </div>
        <div className='svg_container'>
          {/* <img className='contactme' src={contactme} alt="svg" /> */}
            <div className='contact-cont'>
              <div style={{ padding: '1rem' }}>
                <h1>Contact me</h1>
                <h5 className='looking' style={{ fontFamily: 'Meow Script, cursive' }}>Looking forward to hearing you from</h5>
              </div>
              <div className='mobileP1' >
                <p className='p1'>+91 9918525877 <FontAwesomeIcon icon={faPhone} size="sm"/> </p>
                <p className='p1'> guptash9918@gmail.com <FontAwesomeIcon icon={faEnvelope} size="sm"/></p>
              </div>
              <div className='desktopP1'>
                <p className='p1'> <FontAwesomeIcon icon={faPhone} size="sm"/> +91 9918525877</p>
                <p className='p1'> <FontAwesomeIcon icon={faEnvelope} size="sm"/> guptash9918@gmail.com</p>
              </div>
            </div>
        </div>
      </div>
      {/* <div className='formcontainer row_item item2'>
        <form onSubmit={handleSubmit}>
          <div className='inputfield'>
            <input type='text'  name="name" placeholder='Full Name' value={formData.name} onChange={handleChange} required></input>
          </div>
          <div className='inputfield'>
            <input type='email' name="email" placeholder='Email'  value={formData.email} onChange={handleChange} required></input>
          </div>
          <div className='inputfield' >
            <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} required></input>
          </div>
          <div className='inputfield message' >
            <textarea type='text' name='message' placeholder='Message' value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className='btncontainer'>
            <button type="submit"> {loading ? <Loader/> : 'Send'}</button>
      

          </div>
        </form>
      </div> */}
    </div>

    </div>
  )
}

export default Contact
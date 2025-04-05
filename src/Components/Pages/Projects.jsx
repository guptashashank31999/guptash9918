// import React from 'react'; 
// const Projects = () => {
//   return (
//     <div className='Projects_container'>Projects</div>
//   )
// }

// export default Projects

import React from 'react';
import img1 from '../../asset/Capture3.JPG';
import img2 from '../../asset/Cap.JPG';
import img3 from '../../asset/Capture2.JPG';
import img4 from '../../asset/Capture4.jpg';
import img5 from '../../asset/Capture5.jpg';
import img6 from '../../asset/Capture6.jpg';
import img7 from '../../asset/MealMastermind.png'
import {Container, Col,Row,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Project.css";
const Projects = () => {


    return (
      <div className='main_container'>
          <Container className='container'>
          <div >
            <Row >
              <Col sm className='maincolumn' data-aos="fade-up">             
                <Card  className='column' >
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>Smart City Dashboard</Card.Title>
                    <Card.Text>
                    In this project we can keep our devices information across the city.
                    
                    </Card.Text>
                    <Card.Link href="#">Hosted on client site</Card.Link>
                  </Card.Body>
                </Card>

             </Col>


              <Col sm className='maincolumn' data-aos="fade-up">
              <Card  className='column'>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>STOR TRACK</Card.Title>
                  <Card.Text>
                  In this project we can get the information about Real state and its values at different parameters.
                  </Card.Text>
                  <Card.Link href="https://www.stortrack.com/products/requesttrial-explorer.html" target='_blank'>Click here</Card.Link>
                </Card.Body>
              </Card>
              </Col>

              <Col sm className='maincolumn' data-aos="fade-up">
              <Card  className='column'>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>Bulls Eye</Card.Title>
                  <Card.Text>
                  In this project we can get the status of the devices.
                  </Card.Text>
                  <Card.Link href="" disabled>Hosted on client site</Card.Link>
                </Card.Body>
              </Card>
              </Col>

            {/* </Row>


            <Row> */}

              <Col sm className='maincolumn' data-aos="fade-up">
                <Card  className='column'>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title>Guest Wifi</Card.Title>
                    <Card.Text>
                    In this app we can add user and remove user for the devices.
                    </Card.Text>
                    <Card.Link href="#">Hosted on client site</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm className='maincolumn' data-aos="fade-up">
                <Card  className='column'>
                  <Card.Img variant="top" src={img6} />
                  <Card.Body>
                    <Card.Title>Observer </Card.Title>
                    <Card.Text>
                     It is the project thats check the hardening of the devices.
                    </Card.Text>
                    <Card.Link href="#">Host on clients site</Card.Link>
                  </Card.Body>
                </Card>
              </Col>


              <Col sm className='maincolumn'data-aos="fade-up">
                <Card  className='column'>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title>My Portfolio</Card.Title>
                    <Card.Text>
                    Portfolio website.
                    </Card.Text>
                    <Card.Link href="https://shashankgportfolio.vercel.app/">Open Project</Card.Link>
                  </Card.Body>
                </Card>

                </Col>
                <Col sm className='maincolumn'data-aos="fade-up">
                <Card  className='column'>
                  <Card.Img variant="top" src={img7} />
                  <Card.Body>
                    <Card.Title>Compliance Engine</Card.Title>
                    <Card.Text>
                    This project gives information about all the devices.
                    </Card.Text>
                    <Card.Link href="">Hosted on client site</Card.Link>
                  </Card.Body>
                </Card>

                </Col>
            
</Row>
</div>

</Container>
</div>
    )}

export default Projects;

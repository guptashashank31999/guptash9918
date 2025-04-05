import React from 'react'
import "./Resume.css";
// import img3 from '../../asset/user.png';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import DownloadLink from '../Resume_download';

const Resume = () => {
  return (
    <div className='resume_container'>
      <div className='row1 '>
        <div className='col1 item' data-aos="fade-up" >
          <div className='profilecontainer'>
            {/* <img class="profile" src={img3} /> */}
            <div className='namesection'>
              <h1 className='name'>SHASHANK <span className='title'> GUPTA</span> </h1>
              <h5>Frontend Developer</h5>
              <h5>MERN Stack Developer</h5>
            </div>
            <p>
            Results-driven React.js — Frontend Developer — TypeScript — UI/UX — Performance Optimization — 3+ Years of experience in designing and optimizing user-centric web applications. Expertise in React.js, JavaScript, TypeScript, UI/UX, and Performance Optimization. Proven ability to develop scalable, high-performance web applications and enhance user experiences. Passionate about delivering pixel-perfect, accessible, and responsive designs.
            </p>
          </div>
          <DownloadLink />

        </div>
        <div className='col2 item' data-aos="fade-up" >
          <div className='experience'>
            <h4>EXPERIENCE</h4>
            <div className='experience1'>
              <p className='duration'>August 2023 - Present</p>
              <h5>Software Developer</h5>
              <h5>Agilus Technologies Pvt. Ltd. (Velocis System Pvt. Ltd.) / Noida</h5>
              <p>Developed high-quality, mobile-responsive applications, improving performance by 40%. Optimized React.js components, reducing load time and increasing efficiency. Implemented interactive maps (Leaflet) and dynamic tables (Material Table) for enhanced UI. Technologies: React.js, JavaScript, Node.js, Express, MongoDB, Tailwind CSS.</p>
            </div>
            <div className='experience2'>
              <p className='duration'>February 2022 - July 2023</p>
              <h5>UI UX Developer</h5>
              <h5>Aggregate Intelligence / Coimbatore</h5>
              <p>Led the development of intuitive UIs, improving user engagement by 30%. Enhanced website performance by 30% through optimization techniques. Worked with Redux, Material UI, and data visualization libraries (D3.js, Apex Charts).</p>
            </div>
          </div>

        </div>
        <div className='col3 item' data-aos="fade-up">
          <div className='education col3_item'>
            <h4>EDUCATION</h4>
            <div>
              <h5>B.Tech</h5>
              <p>IET Rammanohar Lohia Avadh University, Ayodhya</p>
            </div>

          </div>
          <div className='projectsection col3_item'>
            <div>
              <h4>PERSONAL PROJECTS</h4>
            </div>
            <ul>
              <li>
                Portfolio Website  <a href='https://shashankgportfolio.vercel.app/'>link </a>
              </li>
              <li>
                Compliance Engine
              </li>
              <li>
                Observer
              </li>
              <li>
                Vautomate
              </li>
              <li>
                Stortrack Explorer <span><a href='https://www.stortrack.com/products/requesttrial-explorer.html'>link</a></span>
              </li>
              <li>
              Stortrack Optimize <span><a href='https://www.stortrack.com/products/optimize.html'>link</a></span>
              </li>
            </ul>
          </div>
          <div className='skillcontainer col3_item'>
            <h4>SKILLS</h4>
            <table>
              <tr>
                <td>JavaScript (ES6+)</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>HTML</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>React.js</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Next.js</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Redux</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Material UI</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Tailwind CSS</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Three.js</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Jest</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>TDD</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>GraphQL</td>
                <td><p>Skillful</p></td>
              </tr>
              <tr>
                <td>Socket.io</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Angular</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Node.js</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Express.js</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Oracle</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Git</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>GitHub</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Bitbucket</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Postman</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>AWS (EC2, S3)</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>Netlify</td>
                <td><p>Skilful</p></td>
              </tr>
              <tr>
                <td>REST APIs</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>JWT Authentication</td>
                <td><p>Experienced</p></td>
              </tr>
              <tr>
                <td>Data Structures & Algorithms</td>
                <td><p>Skilful</p></td>
              </tr>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Resume from './Components/Pages/Resume';
import Projects from './Components/Pages/Projects';

function App() {
  return (
    <div className="Container">
      <Header/>
      <section id="firstsection" className='Home_section'>
        <Home/>
      </section>
      <section id="thirdsection" className='Resume_section'>
        <Resume/>
      </section>
      <section id="fourthsection" className='Projects_section'>
        <Projects/>
      </section>
      <section id="fifthsection" className='Contact_section'>
        <Contact/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;

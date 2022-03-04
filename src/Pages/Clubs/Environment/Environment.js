import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/EnvFacultyCoordinators';
import Photogallery from './photo/photo';
import Events from './events/Events';
import { useEffect } from 'react';
function Environment() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Environment">
    <Header/>
    <Title Heading = "ENVIRONMENT, ECOLOGY & HEALTH CLUB" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Photogallery/>
    <Footer/>
    </div>
  );
}

export default Environment;
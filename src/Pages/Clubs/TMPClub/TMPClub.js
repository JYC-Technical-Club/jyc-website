import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import Events from './events/Events';
import { useEffect } from 'react';
import Photogallery from './photo/photo';

function TMPClub() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="TMPClub">
    <Header/>
    <Title Heading = "TECHNICAL SCIENCES, MOVIES & PHOTOGRAPHY CLUB" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/>
    <Photogallery/>
    <Footer/>
    </div>
  );
}

export default TMPClub;
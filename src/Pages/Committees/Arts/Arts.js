import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import Photogallery from './photo/photo';
import Events from './events/Events';
import { useEffect } from 'react';

function Arts() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Arts">
    <Header/>
    <Title Heading = "CREATIVE ARTS COMMITTEE" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Photogallery/>
    <Footer/>
    </div>
  );
}

export default Arts;
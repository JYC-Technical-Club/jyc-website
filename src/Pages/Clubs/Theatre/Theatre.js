import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import Photogallery from '../Theatre/photo/photo';
import Events from './events/Events';
import { useEffect } from 'react';
function Theatre() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Theatre">
    <Header/>
    <Title Heading = "THEATRE & MUSIC CLUB" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Photogallery/>
    <Footer/>
    </div>
  );
}

export default Theatre;
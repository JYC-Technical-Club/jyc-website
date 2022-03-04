import Header from '../../components/Header/Header';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import Photogallery from './photo/photo';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import Events from './events/Events';
import Footer from '../../components/Footer/Footer';    
import { useEffect } from 'react';
function Cultural() {
  useEffect(() => {
    window.scrollTo(-5000, -5000)
  }, [])
  return (
    <div className="Cultural">
    <Header/>
    <Title Heading = "CULTURAL & DANCE CLUB" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Photogallery/>
    <Footer/>
    </div>
  );
}

export default Cultural;
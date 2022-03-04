import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import Events from './events/Events';   
import { useEffect } from 'react';
function Sports() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Sports">
    <Header/>
    <Title Heading = "SPORTS CLUB" /> 
    <About/>
    <Events/>
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Footer/>
    </div>
  );
}

export default Sports;
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from './Title/Title'; 
import About from './About/About';
import StudentSlideShow from './ClubsSeperatePage/slider/studentCoordi';
import FacultyCoordinators from './ClubsSeperatePage/FacultyCoordinators';
import { useEffect } from 'react';
// import Events from './events/Events';
function EventsPro() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Cultural">
    <Header/>
    <Title Heading = "EVENTS AND PROCUREMENT COMMITTEE" /> 
    <About/>
    {/* <Events/> */}
    <FacultyCoordinators/>  
    <StudentSlideShow/> 
    <Footer/>
    </div>
  );
}

export default EventsPro;
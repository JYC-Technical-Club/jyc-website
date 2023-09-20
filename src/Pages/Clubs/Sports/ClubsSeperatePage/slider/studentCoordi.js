import "./SportsstudentCoordi.css";
import Karan from '../images/Karan Rana.png'
import Aditya from '../images/Aditya Prabhakar.png'
import Astik from '../images/Astik Tyagi.png'
import Avi from '../images/Avi Jaiswal.png'
import Jasmeen from '../images/Jasmeen Kaur.png'
import Manav from '../images/Manav Lukar.png'
import Pranjal from '../images/Pranjal Thakur.png'
import Shruti from '../images/Shruti Kadyan.png'
import Tarisha from '../images/Tarisha Kaplex.png'
import Rood from '../images/Roodransh Mehta.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Karan,Aditya,Astik,Avi,Jasmeen,Manav,Pranjal,Shruti,Tarisha,Rood];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="SportsTitle" className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
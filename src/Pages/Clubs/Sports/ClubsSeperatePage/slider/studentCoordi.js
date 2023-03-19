import "./SportsstudentCoordi.css";
import Karanveer from '../images/karanveer_singh.png'
import Arnav from '../images/arnav_thakur.png'
import Arushi from '../images/arushi.png'
import Suditi from '../images/suditi_rathore.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Karanveer,Arushi,Arnav,Suditi];

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
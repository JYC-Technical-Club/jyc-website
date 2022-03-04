import "./SportsstudentCoordi.css";
import Ambar from '../images/AmbarTiwari.png'
import Aryan from '../images/AryanBathla.png'
import Falguni from '../images/FalguniBharadwaj.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Ambar,Falguni,Aryan];

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
import "./studentCoordiCultural.css";
import Shivansh from '../images/Shivansh Katoch.png'
import Urvi from '../images/Urvi Mittal.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Shivansh,Urvi,Shivansh,Urvi];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="CulturalTitle" className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
import "./LitstudentCoordi.css";
import AnanyaJoshi from '../images/AnanyaJoshi.png'
import Ravi from '../images/RaviSrivastava.png'
import Slideshow from './Slideshow/Slideshow'
const images = [AnanyaJoshi,Ravi,AnanyaJoshi,Ravi];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id='LitTitle' className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
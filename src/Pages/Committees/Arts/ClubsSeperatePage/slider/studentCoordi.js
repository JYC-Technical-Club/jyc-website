import "./studentCoordi.css";
import Janhvi from '../images/janhvi_singh.png'
import Jyotirmay from '../images/jyotirmay_verma.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Janhvi,Jyotirmay,Janhvi,Jyotirmay];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
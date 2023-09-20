import "./TheatrestudentCoordi.css";
import Akarsh from '../images/Akarsh Rastogi.png'
import Nilakshi from '../images/Nilakshi Sharma.png'
import Tanmay from '../images/Tanmay Parashar.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Akarsh,Nilakshi,Tanmay];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id='TheatreTitle' className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
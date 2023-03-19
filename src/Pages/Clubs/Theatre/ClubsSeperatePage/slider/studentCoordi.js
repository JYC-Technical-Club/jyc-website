import "./TheatrestudentCoordi.css";
import Vishwadeep from '../images/vishwadeep_nigam.png'
import Parth from '../images/parth_kumar_khare.png'
import Ishan from '../images/ishan_sharma.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Vishwadeep,Parth,Ishan];

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
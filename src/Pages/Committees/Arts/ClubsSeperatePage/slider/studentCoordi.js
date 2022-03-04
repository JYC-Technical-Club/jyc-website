import "./studentCoordi.css";
import image from '../images/AnjaliRana.png'
import image1 from '../images/RohitRaj.png'
import Slideshow from './Slideshow/Slideshow'
const images = [image,image1,image,image1];

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
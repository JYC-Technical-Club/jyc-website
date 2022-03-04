import "./studentCoordi.css";
import image from '../images/AbhayGuleria.png'
import image1 from '../images/ArthzaShukla.png'
import image2 from '../images/NandiniAgarwal.png'
import image3 from '../images/ShivendraSingh.png'
import Slideshow from './Slideshow/Slideshow'
const images = [image,image1,image2,image3];

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
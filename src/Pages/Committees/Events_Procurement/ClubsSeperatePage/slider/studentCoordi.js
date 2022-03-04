import "./studentCoordi.css";
import image from '../images/AchyutTiwari.png'
import image1 from '../images/Nandita.png'
import image2 from '../images/Sai.png'
import image3 from '../images/ShikharTrivedi.png'
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
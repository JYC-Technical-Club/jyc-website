import "./studentCoordiCultural.css";
import KhushiShah from '../images/KhushiShah.png'
import SalilVerma from '../images/SalilVerma.png'
import Slideshow from './Slideshow/Slideshow'
const images = [SalilVerma,KhushiShah,SalilVerma,KhushiShah];

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
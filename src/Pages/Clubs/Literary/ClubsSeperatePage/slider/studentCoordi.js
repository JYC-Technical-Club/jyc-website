import "./LitstudentCoordi.css";
import MitushiKohli from '../images/Mitushi Kohli.png'
import SwastikJha from '../images/Swastik Jha.png'
import Slideshow from './Slideshow/Slideshow'
const images = [MitushiKohli,SwastikJha,MitushiKohli,SwastikJha];

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
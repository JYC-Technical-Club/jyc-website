import "./studentCoordi.css";
import Sristi from '../images/sristi_agarwal.png'
import Dazzle from '../images/dazzle.png'
import Shantam from '../images/Shantam.png'
import Slideshow from './Slideshow/Slideshow'
import Sharad from '../images/Sharad.png'
import Akshat from '../images/Akshat.png'
const images = [Sristi,Dazzle,Shantam,Sharad,Akshat];

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
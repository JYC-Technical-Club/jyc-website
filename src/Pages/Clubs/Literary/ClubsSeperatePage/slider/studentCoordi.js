import "./LitstudentCoordi.css";
import Anushree from '../images/Anushree Singh.png'
import Nandini from '../images/Nandini Aggarwal.png'
import Shwetabh from '../images/Shwetabh Vikram.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Anushree,Nandini,Shwetabh];

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
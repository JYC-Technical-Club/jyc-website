import "./studentCoordi.css";
import Geetali from '../images/geetali_goel.png'
import Harsh from '../images/harsh_abhay_galgate.png'
import Karan from '../images/karan_sharma.png'
import Chirag from '../images/chirag_jain.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Geetali,Harsh,Karan,Chirag];

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
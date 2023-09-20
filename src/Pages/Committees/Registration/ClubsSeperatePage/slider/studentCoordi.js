import "./studentCoordi.css";
import Ansh from '../images/ansh.png'
import Nishi from '../images/Nishi.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Ansh,Nishi,Ansh,Nishi];

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
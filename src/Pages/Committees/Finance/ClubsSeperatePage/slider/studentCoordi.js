import "./studentCoordi.css";
import Aanchal from '../images/Aanchal Aggarwal.png'
import Aaryan from '../images/Aaryan sharma.png'
import Slideshow from './Slideshow/Slideshow'
import Hriday from '../images/Ambar Pandey.png'
import Ambar from '../images/Hriday Verma.png'
const images = [Aanchal,Aaryan,Ambar,Hriday]
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
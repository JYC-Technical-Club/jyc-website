import "./studentCoordi.css";
import Utsav from '../images/utsav.png'
import Vansh from '../images/vansh_jain.png'
import Soumya from '../images/soumya_goyal.png'
import Ishita from '../images/ishita_sarin.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Utsav,Soumya,Vansh,Ishita];

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
import "./studentCoordi.css";
import Utsav from '../images/utsav.png'
import Vansh from '../images/vansh_jain.png'
import Soumya from '../images/soumya_goyal.png'
import Ishita from '../images/ishita_sarin.png'
import Aditya from '../images/Aditya Sinha.png'
import Ashi from '../images/Ashi gupta.png'
import Ashish from '../images/Ashish.png'
import Naman from '../images/Naman Pratap.png'
import Raghav from '../images/Raghav.png'
import Shagun from '../images/Shagun.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Aditya,Ashi,Ashish,Naman,Raghav,Shagun];

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
import "./studentCoordiCultural.css";
import Rudra from '../images/rudra_pratap_singh.png'
import Jigyasa from '../images/jigyasa_sharma.png'
import Akansha from '../images/akansha_sharma.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Rudra,Jigyasa,Akansha];

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
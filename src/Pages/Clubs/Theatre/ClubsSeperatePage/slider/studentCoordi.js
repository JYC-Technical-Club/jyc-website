import "./TheatrestudentCoordi.css";
import Jeet from '../images/JeetDhamija.png'
import Mrinal from '../images/MrinalSharma.png'
import Pranjal from '../images/PranjalBansal.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Jeet,Mrinal,Pranjal];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id='TheatreTitle' className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
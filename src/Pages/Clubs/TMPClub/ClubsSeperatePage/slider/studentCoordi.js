import "./TMPstudentCoordi.css";
import Sahil from '../images/SahilThakur.png'
import Akshat from '../images/Akshat.png'
import Shivansh from '../images/ShivanshGarg.png'

import Slideshow from './Slideshow/Slideshow'
const images = [Sahil,Akshat,Shivansh];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="TMPTitle" className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
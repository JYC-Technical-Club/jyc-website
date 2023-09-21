import "./TMPstudentCoordi.css";
import Akshit from '../images/Akshit Sharma.png'
import Niharika from '../images/Niharika.png'
import Nitish from '../images/Nitish Kumar Gupta.png'
import Vidushui from '../images/Vidushi.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Akshit,Niharika,Nitish,Vidushui];

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
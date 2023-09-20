import "./TMPstudentCoordi.css";
import Aditya from '../images/Aditya Sood.png'
import Mayank from '..//images/Mayank Kumar.png'
import Anshul from '../images/Anshul Sharma.png'
import Ashmit from '../images/Ashmit Sharma.png'
import Slideshow from './Slideshow/Slideshow'
const images = [Aditya,Mayank,Anshul,Ashmit];

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
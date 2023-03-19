import "./TMPstudentCoordi.css";
import Divyan from '../images/Divyan.png'
import Abhinandan from '../images/Abhinandan.png'
import Shivansh from '../images/ShivanshGarg.png'

import Slideshow from './Slideshow/Slideshow'
const images = [Divyan,Abhinandan,Shivansh];

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
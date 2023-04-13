import "./TMPstudentCoordi.css";
import Divyan from '../images/Divyan.png'
import Abhinandan from '../images/Abhinandan.png'
import Priyank from '../images/Priyank.png'
import Ishita from '../images/Ishita.png'

import Slideshow from './Slideshow/Slideshow'
const images = [Divyan,Abhinandan,Priyank,Ishita];

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
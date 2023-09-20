import "./EnvstudentCoordi.css";
import Divyansh from '../images/Divyansh Goyal.png'
import Shruti from '../images/Shruti Shree.png'

const images = [Divyansh,Shruti];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="TitleSC" className="Title"><b> Student Coordinators </b></div>
      <div class="env_cordi">
        <div className="PankajKumar"><img src={Divyansh} alt={Divyansh} /></div>
        <div className="PankajKumar"><img src={Shruti} alt={Shruti} /></div>
      </div>    
    </div>
  );
}

export default StudentSlideShow;
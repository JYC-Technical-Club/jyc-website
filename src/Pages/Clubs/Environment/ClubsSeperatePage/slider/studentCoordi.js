import "./EnvstudentCoordi.css";
import Ayushi from '../images/ayushi_tiwari.png'
import Prakhar from '../images/prakhar.png'

const images = [Ayushi,Prakhar];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="TitleSC" className="Title"><b> Student Coordinators </b></div>
      <div class="env_cordi">
        <div className="PankajKumar"><img src={Ayushi} alt={Ayushi} /></div>
        <div className="PankajKumar"><img src={Prakhar} alt={Prakhar} /></div>
      </div>    
    </div>
  );
}

export default StudentSlideShow;
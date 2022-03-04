import "./EnvstudentCoordi.css";
import PankajKumar from '../images/PankajKumar.png'

const images = [PankajKumar];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div id="TitleSC" className="Title"><b> Student Coordinators </b></div>
      <div className="PankajKumar"><img src={PankajKumar} alt={PankajKumar} /></div>
    </div>
  );
}

export default StudentSlideShow;
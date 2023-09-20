import "./studentCoordi.css";
import Devanshi from '../images/Devanshi.png'
import Piyush from '../images/Piyush Joshi.png'

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <div className="cordi_2">
        <div className="Nishapic"><img src={Devanshi} alt={Devanshi} /></div>
        <div className="Nishapic"><img src={Piyush} alt={Piyush} /></div>
      </div>
    </div>
  );
}

export default StudentSlideShow;
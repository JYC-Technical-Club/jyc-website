import "./studentCoordi.css";
import Nisha from '../images/NadirunNisha.png'

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <div className="Nishapic"><img src={Nisha} alt={Nisha} /></div>
    </div>
  );
}

export default StudentSlideShow;
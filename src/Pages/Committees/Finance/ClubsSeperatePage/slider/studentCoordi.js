import "./studentCoordi.css";
import Jayant from '../images/JayantSharma.png'

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <div className="Jayant"><img src={Jayant} alt={Jayant} /></div>
    </div>
  );
}

export default StudentSlideShow;
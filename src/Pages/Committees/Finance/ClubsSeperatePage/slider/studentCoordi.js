import "./studentCoordi.css";
import Arjit from '../images/arjit_upadhyay.png'
import Yash from '../images/yash_srivastava.png'

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <div className="cordi_2">
        <div className="Jayant"><img src={Arjit} alt={Arjit} /></div>
        <div className="Jayant"><img src={Yash} alt={Yash} /></div>
      </div>
    </div>
  );
}

export default StudentSlideShow;
import "./studentCoordi.css";
import Nikita from '../images/nikita_bhatt.png'
import Siddharth from '../images/siddharth_kuthiala.png'

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <div className="cordi_2">
        <div className="Nishapic"><img src={Nikita} alt={Nikita} /></div>
        <div className="Nishapic"><img src={Siddharth} alt={Siddharth} /></div>
      </div>
    </div>
  );
}

export default StudentSlideShow;
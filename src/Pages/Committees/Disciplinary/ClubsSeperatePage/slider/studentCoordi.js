import "./studentCoordi.css";
import Krritin from '../images/Krritin.png'
import Pradyumn from '../images/Pradyumn Vashisht.png'
import Shivansh from '../images/Shivansh.png'
import Slideshow from './Slideshow/Slideshow'
import Yashovardhan from '../images/Yashovardhan.png'
import Yashwardhan from '../images/Yashwardhan.png'
import Manshita from '../images/Manshita Jindal.png'
import Tanu from '../images/Tanu Singh.png'
const images = [Krritin,Pradyumn,Shivansh,Yashovardhan,Yashwardhan, Manshita,Tanu];

function StudentSlideShow() {
  return (
    <div className="StdCoordinators">
      <div className="Title"><b> Student Coordinators </b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default StudentSlideShow;
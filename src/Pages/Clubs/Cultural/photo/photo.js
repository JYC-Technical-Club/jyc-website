import "./photo.css";
import Bhangra1 from './images/Bhangra1.png'
import Diksha1 from './images/Diksha1.png'
import LF1 from './images/LF1.png'
import Natti1 from './images/Natti1.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [Bhangra1,Diksha1,LF1,Natti1];

function Photogallery() {
  return (
    <div className="photogallery">
      <div className="Head"><b> Photogallery</b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default Photogallery;
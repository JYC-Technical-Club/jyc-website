import "./photo.css";
import lp11 from './images/lp11.png'
import lp12 from './images/lp12.png'
import lp13 from './images/lp13.png'
import lp14 from './images/lp14.png'
import lp15 from './images/lp15.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [lp11,lp12,lp13,lp14,lp15];

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
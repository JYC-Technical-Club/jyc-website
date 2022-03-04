import "./photo.css";
import aa1 from './images/aa1.png'
import bb1 from './images/bb1.png'
import cc1 from './images/cc1.png'
import dd1 from './images/dd1.png'
import ee1 from './images/ee1.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [aa1,bb1,cc1,dd1,ee1];

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
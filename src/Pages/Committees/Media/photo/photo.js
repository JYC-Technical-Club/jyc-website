import "./photo.css";
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import Slideshow from './slideshow1/Slideshow1'
const images = [img1,img2,img1,img2];

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
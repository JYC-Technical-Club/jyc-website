import "./photo.css";
import first from './images/first.png'  
import second from './images/second.png'
import third from './images/third.png'
import fourth from './images/fourth.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [first,second,third,fourth];

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
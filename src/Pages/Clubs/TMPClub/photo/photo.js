import "./photo.css";
import g1 from './images/g1.jpeg';
import g2 from './images/g2.jpeg';
import g3 from './images/g3.jpeg';
import g4 from './images/g4.jpeg';
import g5 from './images/g5.jpeg';
import g6 from './images/g6.jpeg';
import g7 from './images/g7.jpeg';
import g8 from './images/g8.jpeg';
import Slideshow from './slideshow1/Slideshow1';
const images = [g1,g2,g3,g4,g5,g6,g7,g8];

function Photogallery() {
  return (
    <div className="photogallery">
      <div className="Head"><b>Photogallery</b></div>
      <Slideshow 
        img = {images}
      />
    </div>
  );
}

export default Photogallery;
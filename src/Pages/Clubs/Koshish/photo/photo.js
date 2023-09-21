import "./photo.css";
import g1 from './images/koshish 1.jpeg'
import g2 from './images/koshish 2.jpeg'
import g3 from './images/koshish 3.jpeg'
import g4 from './images/koshish 4.jpeg'
import g5 from './images/koshish 5.jpeg'
import g6 from './images/koshish 6.jpeg'
// import g7 from './images/koshish 7.jpeg'
import Slideshow from './slideshow1/Slideshow1';
const images = [g1,g2,g3,g4,g5,g6];

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
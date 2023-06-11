import "./photo.css";
import Bhangra1 from './images/Bhangra1.png'
import Diksha1 from './images/Diksha1.png'
import LF1 from './images/LF1.png'
import Natti1 from './images/Natti1.png'
import diksha from "./images/diksha.jpg"
import diksha1 from "./images/diksha1.jpg"
import diksha2 from "./images/diksha2.jpg"
import diksha3 from "./images/diksha3.jpg"
import diksha4 from "./images/diksha4.jpg"
import diksha5 from "./images/diksha5.jpg"
import lf from "./images/lf.jpg"
import lf1 from "./images/lf1.jpg"
import lf2 from "./images/lf2.jpg"
import lf3 from "./images/lf3.jpg"
import lf4 from "./images/lf4.jpg"
import lf5 from "./images/lf5.jpg"
import Slideshow from './slideshow1/Slideshow1'
const images = [Bhangra1,Diksha1,LF1,Natti1,diksha,diksha1,diksha2,diksha3,diksha4,diksha5,lf,lf1,lf2,lf3,lf4,lf5];

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
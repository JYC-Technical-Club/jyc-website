import "./photo.css";
import ec1 from './images/ec1.png'
import ec2 from './images/ec2.png'
import ec3 from './images/ec3.png'
import Slideshow from './slideshow1/Slideshow1'
const images = [ec1,ec2,ec3,ec1];

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
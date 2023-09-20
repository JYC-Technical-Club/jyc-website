import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Card2 from "./cards/cards";
import Card3 from "./cards/cards";
import Bhupendra from "./images/Bhupendra.jpeg";
import Yugal from "./images/Yughal.jpeg";
import RahulSri from "./images/RahulSri.jpg";
import Sunil from "./images/Sunil.jpeg";
import Neena from "./images/Neena.jpg";
import "./FacultyCoordinatorsDispi.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacDis" className="HeadingFacCoordi">
        {" "}
        <b>Faculty Coordinators</b>
      </div>
      <div className="containerFC">
        <div id="tiltedDis" class="tilted">
          <div class="card">
            <Card
              src={Sunil}
              title="Dr. Sunil Datt Sharma"
              designation="Assistant Professor (SG)"
              eMail="sunildatt.sharma@juitsolan.in"
              Phone="9826868418"
            />
          </div>
          <div class="card" id="Card2">
            <Card1
              src={Yugal}
              title="Dr. Yugal Kumar"
              designation="Associate Professor"
              eMail="yugal.kumar@juitsolan.in"
              Phone="9897709834"
            />
          </div>
          <div class="card ">
            <Card2
              src={Neena}
              title="Dr. Neena Jindal"
              designation="Assistant Professor "
              eMail="neena.jindal@juit.ac.in"
              Phone="(91)01792- 239306"
            />
          </div>
          <div class="card ">
            <Card3
              src={Bhupendra}
              title="Dr. Bhupendra Kumar Pathak"
              designation="Associate Professor (SG)"
              eMail="bhupendra.pathak@juitsolan.in"
              Phone="9816181519"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCoordinators;

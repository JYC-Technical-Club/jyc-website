import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Card2 from "./cards/cards";
import Card3 from "./cards/cards";
import Card4 from "./cards/cards";
import Card5 from "./cards/cards";
import Bhupendra from "./images/Bhupendra.jpeg";
import nancy from "./images/nancy.jpeg";
import mandeep from "./images/mandeep.jpeg";
import abhi from "./images/abhi.jpeg";
import Neena from "./images/Neena.jpg";
import vikas from "./images/vikas.jpeg";
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
              src={abhi}
              title="Dr. Abhishek Chaudhary"
              designation="Assistant Professor (SG)"
              eMail="abhishek.chaudhary@juit.ac.in"
              Phone="(91)01792-239354(O)"
            />
          </div>
      
          <div class="card" id="Card2">
            <Card1
              src={nancy}
              title="Dr. Nancy Singla"
              designation="Associate Professor (SG)"
              eMail="nancy.singla@juit.ac.in"
              Phone="(91) 01792239s263"
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

          <div class="card ">
            <Card4
              src={mandeep}
              title="Dr. Mandeep Singh"
              designation="Associate Professor (SG)"
              eMail="mandeep.singh@juit.ac.in"
              Phone="(91)01792-239277"
            />
          </div>
          <div class="card ">
            <Card5
              src={vikas}
              title="Dr. Vikas Baghel"
              designation="Associate Professor (SG)"
              eMail="vikas.baghel@juit.ac.in"
              Phone="( 91)01792-239268"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyCoordinators;

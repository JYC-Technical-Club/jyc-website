import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Rakesh from "./images/RakeshBajaj.jpeg";
import Vikas from "./images/VikasBaghel.jpeg";
import "./FacultyCoordinatorsTheatre.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FACTheatre" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedTheatre" class="tilted">
        <div class="card" ><Card 
            src={Rakesh}
            title="Dr. Rakesh Bajaj"
            designation="Associate Professor"
            eMail="rakesh.bajaj@juit.ac.in"
            Phone="(91)01792-239235"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Vikas}
            title="Dr. Vikas Baghel"
            designation="Assistant Professor"
            eMail="vikas.baghel@juit.ac.in"
            Phone="( 91)01792-239268"
          /></div>
        
    </div>
    </div>
   </div>
  );
  }

export default FacultyCoordinators;

import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";

import Deepak from "./images/deepak_gupta.png";
import TGM from "./images/TGM.jpeg";
import "./LitFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FACTitle" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="LitTilted" class="tilted">
        <div class="card" ><Card 
            src={Deepak}
            title="Dr. Deepak Gupta"
            designation="Assistant Professor (SG)"
            eMail="deepak.gupta@juitsolan.in"
            Phone="8054439080"
          /></div>
        <div class="card" id="Card2"><Card1
            src={TGM}
            title="Ms. Triambika Gautam"
            designation="Assistant Professor"
            eMail="triambica.gautam@juit.ac.in"
            Phone="(91)01792-239275"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

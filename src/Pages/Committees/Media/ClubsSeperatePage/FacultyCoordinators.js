import React from "react";
import Card from "./cards/cards";

import bgImg from "./images/Tirathraj.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacMedia" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedMedia" class="tilted">
        <div class="card" ><Card 
            src={bgImg}
            title="Dr. Tiratha Raj Singh"
            designation="Associate Professor"
            eMail="tiratharaj.singh@juit.ac.in"
            Phone="( 91) 01792-239344"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

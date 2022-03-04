import React from "react";
import Card from "./cards/cards";

import bgImg from "./images/sermon-1.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacFinance" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedFinance" class="tilted">
        <div class="card" ><Card 
            src={bgImg}
            title="Dr. Amit Srivastava"
            designation="Associate Professor"
            eMail="amit.srivastava@juit.ac.in"
            Phone="(91)01792-239386"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

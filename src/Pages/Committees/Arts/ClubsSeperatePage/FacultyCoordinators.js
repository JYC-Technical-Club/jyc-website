import React from "react";
import Card from "./cards/cards";
import Ragini from "./images/RaginiRaj.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacArts" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedArts" class="tilted">
        <div class="card" ><Card 
            src={Ragini}
            title="Dr. Ragini Raj Singh"
            designation="Associate Professor"
            eMail="ragini.rajsingh@juit.ac.in"
            Phone="(91)-01792-239309"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

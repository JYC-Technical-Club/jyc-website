import React from "react";
import Card from "./cards/Culcards";

import RuchiVerma from "./images/RuchiVerma.jpg";
import "./CulturalFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacTitleCultural" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedCultural" class="tilted">
        <div class="card" ><Card 
            src={RuchiVerma}
            title="Ruchi Verma"
            designation="Assistant Professor"
            eMail="ruchi.verma@juit.ac.in"
            Phone="( 91) 01792-239346"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

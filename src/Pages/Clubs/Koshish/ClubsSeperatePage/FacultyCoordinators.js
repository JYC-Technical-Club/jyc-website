import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Raj from './images/rajkumar.jpg'
import Shikha from './images/ShikhaMittalBio.jpg'
import "./KoshishFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacTMP" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedTMP" class="tilted">
        <div class="card" ><Card 
            src={Raj}
            title="Dr. Raj Kumar"
            designation="Assistant Professor"
            eMail="raj.kumar@juit.ac.in"
            Phone="( 91)01792-239305"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Shikha}
            title="Mr. Shikha Mittal"
            designation="Assistant Professor"
            eMail="shikha.mittal@juit.ac.in"
            Phone="( 91) 01792 - 239224"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

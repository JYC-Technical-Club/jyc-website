import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Shruti from "./images/ShrutiJain.jpg";
import Prateek from "./images/Prateek.jpeg";
import "./TMPFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacTMP" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedTMP" class="tilted">
        <div class="card" ><Card 
            src={Shruti}
            title="Dr. Shruti Jain"
            designation="Associate Professor"
            eMail="shruti.jain@juit.ac.in"
            Phone="( 91)01792-239262"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Prateek}
            title="Mr. Prateek Thakral"
            designation="Assistant Professor"
            eMail="prateek@juit.ac.in"
            Phone="( 91) 01792-239538"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

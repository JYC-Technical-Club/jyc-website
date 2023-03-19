import React from "react";
import Card from "./cards/Envcards";
import Card1 from "./cards/Envcards";

import Ashok from "./images/Ashok.jpeg";
import Naveen from "./images/Naveen.jpg";
import "./EnvFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacTitleEnv" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedEnv" class="tilted">
        <div class="card" ><Card 
            src={Naveen}
            title="Dr. Naveen Jaglan"
            designation="Assistant Professor "
            eMail="naveen.jaglan@juit.ac.in"
            Phone="(91)-01792-239206"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Ashok}
            title="Dr. Ashok Kumar Nadda"
            designation="Assistant Professor (SG)"
            eMail="ashok.nadda@juit.ac.in"
            Phone="( 91) 01792 239353"
          /></div>        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

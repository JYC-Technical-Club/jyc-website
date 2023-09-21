import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";

import Diksha from "./images/Diksha Hooda.jpeg";
import Munish from "./images/Munish.jpg";
import "./SportsFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div  id="FacSports" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedSports" class="tilted">
        <div class="card" ><Card 
            src={Munish}
            title="Mr. Munish Sood"
            designation="Assistant Professor"
            eMail="munish.sood@juit.ac.in"
            Phone="(91)01792 239502"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Diksha}
            title="
            Dr. Diksha Hooda"
            designation="Assistant Professor (SG)"
            eMail="diksha.hooda@juit.ac.in"
            Phone="(91) 01792 239 556"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import bgImg from "./images/Tirathraj.jpg";
import sunil from "./images/sunil.jpeg"
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

      <div class="card" ><Card1 
            src={sunil}
            title="Dr. Sunil Datt Sharma"
            designation="Associate Professor"
            eMail="sunildatt.sharma@juit.ac.in"
            Phone="(91)-01792-239513"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Papiya from "./images/Papiya.jpg";
import Gopal from "../../../Committees/Disciplinary/ClubsSeperatePage/images/dImage1.jpg";
import "./FacultyCoordinatorsTheatre.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FACTheatre" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedTheatre" class="tilted">

        <div class="card" ><Card 
            src={Gopal}
            title="Dr. Gopal Singh Bisht"
            designation="Associate Professor"
            eMail="gopal.singh@juit.ac.in"
            Phone="(91) 01792-239220"
          /></div>
        <div class="card c2"><Card 
            src={Papiya}
            title="Dr. Papiya Lahiri"
            designation="Assistant Professor (SG)"
            eMail="papiya.lahiri@juit.ac.in"
            Phone="(91)01792-239264"
          /></div>
        
    </div>
    </div>
   </div>
  );
  }

export default FacultyCoordinators;

import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import aman from "./images/aman.jpeg";
import anita from "./images/anita.jpeg";
import "./FacultyCoordinatorsTheatre.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FACTheatre" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedTheatre" class="tilted">

        <div class="card" ><Card 
            src={anita}
            title="Dr. Anita"
            designation="Associate Professor (SG)"
            eMail="anita@juitsolan.in"
            Phone="9818079405"
          /></div>
        <div class="card c2"><Card 
            src={aman}
            title="Dr. Aman Sharma"
            designation="Assistant Professor (SG)"
            eMail="aman.sharma@juit.ac.in"
            Phone="(91) 01792-239348"
          /></div>
        
    </div>
    </div>
   </div>
  );
  }

export default FacultyCoordinators;

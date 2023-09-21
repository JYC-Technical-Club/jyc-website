import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import bgImg from "./images/emjee.jpeg";
import bgImg1 from "./images/Ranjith.jpeg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacFinance" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedFinance" class="tilted">
        <div class="card" ><Card 
            src={bgImg}
            title="Dr. Emjee Puthooran"
            designation="Associate Professor"
            eMail="
            emjee.puthooran@juit.ac.in"
            Phone="(91) 01792-239243"
         /></div>

<div class="card" ><Card1
            src={bgImg1}
            title="Dr. Ranjith Kallyani"
            designation="
            Assistant Professor (Grade-II)"
            eMail="
            ranjith.kallyani@juit.ac.in"
            Phone="7506110889"
         /></div>




        
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

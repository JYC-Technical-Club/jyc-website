import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Shweta from "./images/Shweta.jpg";
import bgImg from "./images/Himanshu.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="TitleReg" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedReg" class="tilted">
        <div class="card" ><Card 
            src={bgImg}
            title="Dr. Himanshu Jindal"
            designation="Assistant Professor "
            eMail="himanshu.jindal@juit.ac.in"
            Phone="( 91) 01792 239237"
          /></div>
        <div class="card" id="Card2"><Card1
            src={Shweta}
            title="Dr. Shweta Pandit"
            designation="Assistant Professor"
            eMail="shweta.pandit@juit.ac.in"
            Phone="(91)-01792-239216"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

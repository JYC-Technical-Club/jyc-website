import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Vikas from "../../../Clubs/Theatre/ClubsSeperatePage/images/VikasBaghel.jpeg";
import ecf1 from "./images/ecf1.jpg";
import ecf2 from "./images/ecf2.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacEve" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedEve" class="tilted">
        <div class="card" ><Card 
            src={ecf1}
            title="Dr. Jitendra Vashisht"
            designation="Associate Professor"
            eMail="jitendraa.vashistt@juit.ac.in"
            Phone="( 91)01792-239284"
          /></div>
        
        {/* <div class="card" id="Card2"><Card1
            src={ecf2}
            title="Dr. Geetanjali"
            designation=""
            eMail="geetanjali@juit.ac.in"
            Phone=""
          /></div> */}
          
        <div class="card" id="Card2"><Card1
            src={Vikas}
            title="Dr. Vikas Baghel"
            designation="Assistant Professor"
            eMail="vikas.baghel@juit.ac.in"
            Phone="( 91)01792-239268"
          /></div>
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

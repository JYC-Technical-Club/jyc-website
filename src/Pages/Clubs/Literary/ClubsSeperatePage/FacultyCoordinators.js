import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";

import Bilal from "./images/BilalKhanHSS.jpg";
import TGM from "./images/TGM.jpeg";
import "./LitFacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FACTitle" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="LitTilted" class="tilted">
        <div class="card" ><Card 
            src={Bilal}
            title="
            Dr. Bilal Khan"
            designation="Assistant Professor (Grade-II)"
            eMail="bilal.khan@juit.ac.in"
            Phone="8979852584"
          /></div>
        <div class="card" id="Card2"><Card1
            src={TGM}
            title="Ms. Triambika Gautam"
            designation="Assistant Professor"
            eMail="triambica.gautam@juit.ac.in"
            Phone="(91)01792-239275"
          /></div>
        
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

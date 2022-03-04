import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Card2 from "./cards/cards";
import bgImg from "./images/icon.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div class="tilted">
        <div class="card" ><Card 
            src={bgImg}
            title="Faculty Name"
            designation="Designation"
            eMail="Email"
            Phone="Phone"
          /></div>
        <div class="card" id="Card2"><Card1
            src={bgImg}
            title="Faculty Name"
            designation="Designation"
            eMail="Email"
            Phone="Phone"
          /></div>
        <div class="card "><Card2
            src={bgImg}
            title="Faculty Name"
            designation="Designation"
            eMail="Email"
            Phone="Phone"
          /></div>
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

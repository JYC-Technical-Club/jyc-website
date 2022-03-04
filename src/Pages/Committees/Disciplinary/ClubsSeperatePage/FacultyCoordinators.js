import React from "react";
import Card from "./cards/cards";
import Card1 from "./cards/cards";
import Card2 from "./cards/cards";
import Card3 from "./cards/cards";
import dImage1 from "./images/dImage1.jpg";
import dImage2 from "./images/dImage2.jpg";
import RahulSri from "./images/RahulSri.jpg";
import Surjeet from "./images/Surjeet.jpg";
import Neena from "./images/Neena.jpg";
import "./FacultyCoordinators.css";
function FacultyCoordinators() {
  return (
    <div>
      <div id="FacDis" className='HeadingFacCoordi'> <b>Faculty Coordinators</b></div>
      <div className="containerFC"><div id="tiltedDis" class="tilted">
        <div class="card" ><Card 
            src={dImage1}
            title="Dr. Gopal Singh Bisht"
            designation="Associate Professor"
            eMail="gopal.singh@juit.ac.in"
            Phone="(91) 01792-239220"
          /></div>
        <div class="card" id="Card2"><Card1
            src={RahulSri}
            title="Rahul Shrivastava"
            designation="Associate Professor"
            eMail="rahul.shrivastava@juitsolan.in, rahul.shrivastava@juit.ac.in, juit.rahul@gmail.com"
            Phone="(91)-1792-239-355"
          /></div>
        <div class="card "><Card2
            src={Surjeet}
            title="Mr. Surjeet Singh"
            designation="Assistant Professor "
            eMail="surjeet.singh@juit.ac.in"
            Phone="( 91) 01792 239285"
          /></div>
        <div class="card "><Card3
            src={Neena}
            title="Dr. Neena Jindal"
            designation="Assistant Professor "
            eMail="neena.jindal@juit.ac.in"
            Phone="(91)01792- 239306"
          /></div>
    </div>
    </div>
   </div>
  );
}

export default FacultyCoordinators;

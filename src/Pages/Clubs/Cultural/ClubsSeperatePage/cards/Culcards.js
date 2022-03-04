import React from "react";
import "./Culturalcards.css";



function CulturalCard({ src, title, designation,eMail,Phone, width = "18vw", height = "18vw" }) {
  return (
    

    // {FACULTY 1 CARD}
    <div className="Card"  style={{ width: width, height, height }}>
      <div className="Header">
        <div><img id="RuchiVerma"
          className="img Img"
          src={src} 
        />
        </div>
        <div id="CulturalBody" className="body Body">
        <div   className="FacultyName FacName" >{title}</div>
        <div ><div  className="Details FacDetails">{designation}</div>
        <div  className="Details FacDetails">{eMail}</div>
        <div  className="Details FacDetails">{Phone}</div>
        </div>
      </div>
    </div>
      

     
    </div>
  );
}

export default CulturalCard;
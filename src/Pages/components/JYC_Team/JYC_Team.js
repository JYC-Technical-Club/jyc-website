import React from "react";
import "./JYC_Team.css";
import Shivansh from "./Card/Member_pictures/ShivanshMehrotra.jpg";
import Alisha from "./Card/Member_pictures/AlishaSiddiqui.JPG";
import Shubh from "./Card/Member_pictures/ShubhSaxena.JPG";
import Card from "./Card/Card";

export default function JYC_Team() {
  return (
    <div className="JYC-TEAM">
      <div className="JYC-TEAM-heading">
        JYC Team
        <div className="jycteam-underline"></div>
      </div>
      <div className="JYC-TEAM-Members">
        <div className="Member-1">
          <Card img={Alisha} Name="Alisha Siddiqui" Post="Secreatry" />
        </div>
        <div className="Member-2">
          <Card img={Shivansh} Name="Shivansh Mehrotra" Post="President" />
        </div>
        <div className="Member-2">
          <Card img={Shubh} Name="Shubh Saxena" Post="Treasurer" />
        </div>
      </div>
    </div>
  );
}

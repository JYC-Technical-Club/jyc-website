import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import sems from "./Assests/sems.JPG";
import semtour1 from "./Assests/semtour1.JPG";
import semtour2 from "./Assests/semtour2.JPG";
import semtour3 from "./Assests/semtour3.JPG";
import semtour4 from "./Assests/semtour4.JPG";
import semtour5 from "./Assests/semtour5.JPG";


export default function SemTournaments() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={sems}
          alt="Semester Tournament"
          title="Semester Tournament"
          date="Date: 12th March 2021"
          about="Welcome to JUIT (Jaypee University of Information Technology), where the spirit of competition and camaraderie come alive in the exhilarating Semester Tournament, our highly anticipated annual sports extravaganza. This tournament is a thrilling celebration of athleticism, teamwork, and sportsmanship, bringing together students from all disciplines to showcase their skills and passion for sports.The Semester Tournament at JUIT is not just about sports—it's a celebration of athleticism, resilience, and the indomitable spirit of our students. It reinforces the values of discipline, teamwork, and determination, which are integral to success in all aspects of life. Join us in this thrilling annual event and experience the joy of sportsmanship and the power of unity at JUIT."
         img1={semtour1}
          alt1="Semester Tournament"
           img2={semtour2}
          alt2="Semester Tournament"
          img3={semtour3}
          alt3="Semester Tournament"
          img4={semtour4}
          alt4="Semester Tournament"
          img5={semtour5}
          alt5="Semester Tournament"
        />
      </div>
      <Footer/>
    </div>
  );
}

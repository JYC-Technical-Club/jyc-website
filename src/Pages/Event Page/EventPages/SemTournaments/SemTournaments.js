import React from "react";
import Card from "../Card/Card";
import "../EventPages.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import SemT from "../../EVENTS/images/SemTournaments.jpg";
import SemTP from "./Assets/SemesterTournaments.pdf";
import Asset1 from "./Assets/SemT1.png";
import Asset2 from "./Assets/SemT2.png";

export default function SemTournaments() {
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
      <Card
        img={SemT}
        alt="Semester Sports Tournaments"
        title="Semester Sports Tournaments"
        date="Date: 25th Aug, 2023"
        about="Welcome to JUIT (Jaypee University of Information Technology), where the spirit of competition and camaraderie come alive in the exhilarating Semester Tournament, our highly anticipated annual sports extravaganza. This tournament is a thrilling celebration of athleticism, teamwork, and sportsmanship, bringing together students from all disciplines to showcase their skills and passion for sports.The Semester Tournament at JUIT is not just about sports—it's a celebration of athleticism, resilience, and the indomitable spirit of our students. It reinforces the values of discipline, teamwork, and determination, which are integral to success in all aspects of life. Join us in this thrilling annual event and experience the joy of sportsmanship and the power of unity at JUIT."
        pdf={SemTP}
        img1={Asset1}
        alt1="Semester Tournament"
        img2={Asset2}
        alt2="Semester Tournament"
      />
      <Footer />
    </div>
  );
}

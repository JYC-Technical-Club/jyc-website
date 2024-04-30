import React from "react";
import Card from "../Card/Card";
import "../EventPages.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ParakramP from "../../EVENTS/images/Parakram.jpg"
import ParakramPDF from "./Assets/Parakram.pdf"
import ParakramD1 from "./Assets/ParakramDay1.pdf"
import ParakramD2 from "./Assets/ParakramDay2.pdf"
import ParakramD3 from "./Assets/ParakramDay3.pdf"
import Asset1 from "./Assets/Parakram1.png"
import Asset2 from "./Assets/Parakram2.png"
import Asset3 from "./Assets/Parakram3.png"
import Asset4 from "./Assets/Parakram4.png"
import Asset5 from "./Assets/Parakram5.png"

export default function Parakram() {
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
      <Card
        img={ParakramP}
        alt="Parakram"
        title="Parakram"
        date="Date: 6 Oct, 2023"
        about="Parakram, a thrilling sports event, brings together universities for competitive matches in football, basketball, volleyball, tennis, and more. Our university hosts the event, attracting students from all over to cheer for their teams. With our university also participating, it creates an electric atmosphere as teams from different universities come together to showcase their skills and sportsmanship."
        pdf={ParakramPDF}
        img1={Asset1}
        alt1="Parakram"
        img2={Asset2}
        alt2="Parakram"
        img3={Asset3}
        img4={Asset4}
        img5={Asset5}
      />
      <div className="more-reports">
        <a href={ParakramD1} target="_blank">Day 1 Report</a>
        <a href={ParakramD2} target="_blank">Day 2 Report</a>
        <a href={ParakramD3} target="_blank">Day 3 Report</a>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Card from "../Card/Card";
import "../EventPages.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import DikshaP from "../../EVENTS/images/Diksha.jpg"
import Asset1 from "./Assets/Diksha1.png"
import Asset2 from "./Assets/Diksha2.png"
import DikshaPdf from "./Assets/Diksha.pdf"

export default function Diksha() {
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
      <Card
        img={DikshaP}
        alt="Movie Night"
        title="Diksha"
        date="Date: 16th September 2023"
        about="Embracing New Beginnings is an event exclusively organized for freshers at our college. It fosters a warm and welcoming environment, introducing students to academics, extracurriculars, and campus life. Through interactive sessions, ice-breakers, and workshops, freshers build connections and gain essential skills. The event culminates in a cultural showcase, celebrating their talents. Diksha ignites a sense of belonging and empowers freshers for a remarkable college journey."
        pdf={DikshaPdf}
        img1={Asset1}
        img2={Asset2}
      />
      <Footer />
    </div>
  );
}

import React from "react";
import Card from "../Card/Card";
import "../EventPages.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import MuriousP from "../../EVENTS/images/Murious.jpg";
import MuriousPDF from "./Assets/Murious.pdf";
import Asset1 from "./Assets/Murious1.png";
import Asset2 from "./Assets/Murious2.png";

export default function Murious() {
  return (
    <div>
      <Header />
      <div className="event-pages-header" />
      <Card
        img={MuriousP}
        alt="Murious"
        title="Murious"
        date="Date: 8-10 March, 2024"
        about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities. Get ready to witness the brightest minds competing in a myriad of exhilarating tech competitions that cover a wide spectrum of disciplines, ranging from coding challenges and robotics competitions to hackathons and design showcases. Immerse yourself in the world of cutting-edge technology as you explore the latest trends, attend enlightening tech talks, and engage in hands-on workshops led by industry experts. Whether you're a tech enthusiast, aspiring engineer, or simply curious about the wonders of innovation, Murious offers an immersive experience that will leave you inspired and eager to push the boundaries of what's possible. Join us and be a part of the technological revolution at Murious – where ideas converge and brilliance shines!"
        pdf={MuriousPDF}
        img1={Asset1}
        alt1="Murious"
        img2={Asset2}
        alt2="Murious"
      />
      <Footer />
    </div>
  );
}

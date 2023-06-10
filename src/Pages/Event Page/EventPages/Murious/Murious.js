import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import murious from "./Assets/murious.JPG"
import murious1 from "./Assets/murious1.JPG"
import murious2 from "./Assets/murious2.JPG"
import murious3 from "./Assets/murious3.JPG"
import murious4 from "./Assets/murious4.JPG"
import murious5 from "./Assets/murious5.JPG"

export default function Murious() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img={murious}
          alt="Murious"
          title="Muroius"
          date="Date: 24-26 February, 2023"
          about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities. Get ready to witness the brightest minds competing in a myriad of exhilarating tech competitions that cover a wide spectrum of disciplines, ranging from coding challenges and robotics competitions to hackathons and design showcases. Immerse yourself in the world of cutting-edge technology as you explore the latest trends, attend enlightening tech talks, and engage in hands-on workshops led by industry experts. Whether you're a tech enthusiast, aspiring engineer, or simply curious about the wonders of innovation, Murious offers an immersive experience that will leave you inspired and eager to push the boundaries of what's possible. Join us and be a part of the technological revolution at Murious – where ideas converge and brilliance shines!"
          img1={murious1}
          alt1="Murious"
          img2={murious2}
          alt2="Murious"
          img3={murious3}
          alt3="Murious"
           img4={murious4}
          alt4="Murious"
           img5={murious5}
          alt5="Murious"
        />
      </div>
      <Footer/>
    </div>
  );
}

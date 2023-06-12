import React from "react";
import Card from "../Card/Card";
import "../MovieNight/MovieNight.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Murious() {
  return (
    <div>
      <Header />
      <div className="mov-night">
      <span className="header-bg-for-white"/>
        <Card
          img="https://drive.google.com/uc?export=view&id=18GVJWuXhV75QskRoBYrS_t5rQaa687DI"
          alt="Murious"
          title="Muroius"
          date="Date: 24-26 February, 2023"
          about="Welcome to 'Murious' – our college's highly anticipated annual tech fest that spans three action-packed days dedicated to innovation, technology, and limitless possibilities. Get ready to witness the brightest minds competing in a myriad of exhilarating tech competitions that cover a wide spectrum of disciplines, ranging from coding challenges and robotics competitions to hackathons and design showcases. Immerse yourself in the world of cutting-edge technology as you explore the latest trends, attend enlightening tech talks, and engage in hands-on workshops led by industry experts. Whether you're a tech enthusiast, aspiring engineer, or simply curious about the wonders of innovation, Murious offers an immersive experience that will leave you inspired and eager to push the boundaries of what's possible. Join us and be a part of the technological revolution at Murious – where ideas converge and brilliance shines!"
          img1="https://drive.google.com/uc?export=view&id=1SoyMEycZ2WE2IUAlO_KbuDV3xpxEW324"
          alt1="Murious"
          img2="https://drive.google.com/uc?export=view&id=139xhRixc8SuMJcuUm5geVGD8TyM5HydW"
          alt2="Murious"
          img3="https://drive.google.com/uc?export=view&id=1eFu7adGAlkXiStmhVe6MEPiQEZ79Cj8T"
          alt3="Murious"
           img4="https://drive.google.com/uc?export=view&id=1j76YPsWKB1Vz05EYCucYcXlyoyDo1hii"
          alt4="Murious"
           img5="https://drive.google.com/uc?export=view&id=1qHYXS_5617SfE659nuq0P2uULKP9J6vz"
          alt5="Murious"
        />
      </div>
      <Footer/>
    </div>
  );
}
